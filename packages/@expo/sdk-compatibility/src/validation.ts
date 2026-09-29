import type { SdkCompatibilityData } from './types.ts';

type SemverApi = {
  validRange: (range: string) => string | null;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isNonNegativeInteger(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= 0;
}

function validateRow(
  row: unknown,
  index: number,
  semver: SemverApi,
  seenVersions: Set<string>
): string[] {
  const errors: string[] = [];
  const prefix = `sdkVersions[${index}]`;

  if (!isRecord(row)) {
    return [`${prefix} must be an object.`];
  }

  if (typeof row.sdk !== 'string' || !semver.validRange(row.sdk)) {
    errors.push(`${prefix}.sdk must be a valid version.`);
  } else if (seenVersions.has(row.sdk)) {
    errors.push(`${prefix}.sdk is duplicated.`);
  } else {
    seenVersions.add(row.sdk);
  }

  if (!isRecord(row.android)) {
    errors.push(`${prefix}.android must be an object.`);
  } else {
    for (const field of ['minimumVersion', 'compileSdkVersion', 'targetSdkVersion']) {
      if (row.android[field] !== undefined && !isNonNegativeInteger(row.android[field])) {
        errors.push(`${prefix}.android.${field} must be a non-negative integer.`);
      }
    }
    if (
      row.android.buildToolsVersion !== undefined &&
      (typeof row.android.buildToolsVersion !== 'string' ||
        !semver.validRange(row.android.buildToolsVersion))
    ) {
      errors.push(`${prefix}.android.buildToolsVersion must be a valid version.`);
    }
  }

  if (!isRecord(row.ios)) {
    errors.push(`${prefix}.ios must be an object.`);
  } else {
    if (
      typeof row.ios.minimumVersion !== 'string' ||
      !/^\d+(?:\.\d+){1,2}$/.test(row.ios.minimumVersion)
    ) {
      errors.push(`${prefix}.ios.minimumVersion must be a numeric version.`);
    }
    if (
      typeof row.ios.xcodeVersionRange !== 'string' ||
      !semver.validRange(row.ios.xcodeVersionRange)
    ) {
      errors.push(`${prefix}.ios.xcodeVersionRange must be a valid version range.`);
    }
    if (
      row.ios.xcodeVersionCheckRange !== undefined &&
      (typeof row.ios.xcodeVersionCheckRange !== 'string' ||
        !semver.validRange(row.ios.xcodeVersionCheckRange))
    ) {
      errors.push(`${prefix}.ios.xcodeVersionCheckRange must be a valid version range.`);
    }
  }

  if (!isRecord(row.runtime)) {
    errors.push(`${prefix}.runtime must be an object.`);
  } else {
    for (const field of ['reactNative', 'reactNativeWeb', 'reactNativeTvos', 'react']) {
      if (row.runtime[field] !== undefined && typeof row.runtime[field] !== 'string') {
        errors.push(`${prefix}.runtime.${field} must be a string.`);
      }
    }
  }

  if (
    row.node !== undefined &&
    (!isRecord(row.node) || typeof row.node.minimumVersion !== 'string')
  ) {
    errors.push(`${prefix}.node.minimumVersion must be a string.`);
  }

  return errors;
}

export function createSdkCompatibilityDataValidator(semver: SemverApi) {
  return (data: unknown): string[] => {
    if (!isRecord(data) || !Array.isArray(data.sdkVersions)) {
      return ['sdkVersions must be an array.'];
    }

    const seenVersions = new Set<string>();
    return data.sdkVersions.flatMap((row, index) => validateRow(row, index, semver, seenVersions));
  };
}

export function assertSdkCompatibilityData(
  data: unknown,
  semver: SemverApi
): asserts data is SdkCompatibilityData {
  const errors = createSdkCompatibilityDataValidator(semver)(data);
  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }
}
