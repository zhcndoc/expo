import { Button } from '@expo/styleguide';
import { GithubIcon } from '@expo/styleguide-icons/custom/GithubIcon';
import { NpmIcon } from '@expo/styleguide-icons/custom/NpmIcon';
import { ClockRefreshIcon } from '@expo/styleguide-icons/outline/ClockRefreshIcon';
import { Edit05Icon } from '@expo/styleguide-icons/outline/Edit05Icon';
import { useRouter } from 'next/compat/router';

import { githubUrl } from '~/ui/components/Footer/utils';
import { FOOTNOTE } from '~/ui/components/Text';

import { SdkPackageButton } from './SdkPackageButton';

type Props = {
  packageName?: string;
  sourceCodeUrl?: string;
};

export function PageTitleButtons({ packageName, sourceCodeUrl }: Props) {
  const router = useRouter();
  const showEditButton = !sourceCodeUrl && !packageName && router?.pathname;

  return (
    <>
      {showEditButton && (
        <Button
          theme="quaternary"
          className="justify-center pr-2 pl-2.5"
          openInNewTab
          href={githubUrl(router.pathname)}
          aria-label="在 GitHub 上编辑此页内容">
          <div className="flex flex-row items-center gap-2">
            <Edit05Icon className="icon-sm text-icon-secondary" />
            <FOOTNOTE crawlable={false} theme="secondary">
              编辑页面
            </FOOTNOTE>
          </div>
        </Button>
      )}
      {(sourceCodeUrl ||
        sourceCodeUrl?.startsWith('https://github.com/expo/expo') ||
        packageName) && (
        <span className="flex items-center gap-1">
          {sourceCodeUrl && (
            <>
              <SdkPackageButton
                label="GitHub"
                Icon={GithubIcon}
                href={sourceCodeUrl}
                tooltip="在 GitHub 上查看源代码"
              />
            </>
          )}
          {packageName && (
            <>
              <SdkPackageButton
                label="npm"
                Icon={NpmIcon}
                href={`https://www.npmjs.com/package/${packageName}`}
                tooltip="在 npm 仓库中查看此库"
              />
            </>
          )}
          {sourceCodeUrl?.startsWith('https://github.com/expo/expo') && (
            <SdkPackageButton
              label="更新日志"
              Icon={ClockRefreshIcon}
              href={`${sourceCodeUrl}/CHANGELOG.md`}
              tooltip="在 GitHub 上查看库的更新日志"
            />
          )}
        </span>
      )}
    </>
  );
}
