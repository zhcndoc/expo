export type SdkCompatibility = {
  sdk: string;
  android: {
    minimumVersion: number;
    compileSdkVersion: number;
    targetSdkVersion?: number;
    buildToolsVersion?: string;
  };
  ios: {
    minimumVersion: string;
    xcodeVersionRange: string;
    xcodeVersionCheckRange?: string;
  };
  runtime: {
    reactNative: string;
    reactNativeWeb: string;
    reactNativeTvos?: string;
    react?: string;
  };
  node?: {
    minimumVersion: string;
  };
};

export type SdkCompatibilityData = {
  sdkVersions: SdkCompatibility[];
};
