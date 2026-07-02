import { mergeClasses } from '@expo/styleguide';
import { AppleAppStoreIcon } from '@expo/styleguide-icons/custom/AppleAppStoreIcon';
import { Cloud01DuotoneIcon } from '@expo/styleguide-icons/duotone/Cloud01DuotoneIcon';

import { GridContainer, GridCell, Header } from '~/ui/components/Home/components';
import { Terminal } from '~/ui/components/Snippet';
import { CALLOUT, A } from '~/ui/components/Text';

export function CommandLineTools() {
  return (
    <>
      <Header
        title="通过命令行发布"
        description="使用命令行工具为 iOS 和 Web 平台发布你的应用。"
      />
      <GridContainer>
        <GridCell
          className={mergeClasses(
            'min-h-48 bg-subtle bg-linear-to-br from-subtle from-15% to-palette-purple3',
            'selection:bg-palette-purple5'
          )}>
          <AppleAppStoreIcon
            aria-hidden="true"
            className="absolute -right-10 -bottom-16 size-72! text-palette-purple10 opacity-10"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <h2 className="flex items-center gap-2 heading-lg font-bold! text-palette-purple10!">
              <AppleAppStoreIcon aria-hidden="true" className="icon-lg text-palette-purple10" />{' '}
              Deploy to TestFlight
            </h2>
            <div>
              <Terminal cmd={['$ npx testflight']} className="rounded-md asset-shadow" />
              <CALLOUT theme="secondary">
                这是一个仅限 iOS 的命令，会将你的应用上传到 TestFlight。
              </CALLOUT>
            </div>
          </div>
        </GridCell>
        <GridCell
          className={mergeClasses(
            'min-h-48 bg-subtle bg-linear-to-br from-subtle from-15% to-palette-green3',
            'selection:bg-palette-green4'
          )}>
          <Cloud01DuotoneIcon
            aria-hidden="true"
            className="absolute -right-8 -bottom-20 size-80! text-[#1e8a5f] opacity-10 dark:text-[#4eca8c]"
          />
          <div className="relative z-10 flex flex-col gap-4">
            <h2 className="flex items-center gap-2 heading-lg text-[#1e8a5f]! font-bold! dark:text-[#4eca8c]!">
              <Cloud01DuotoneIcon
                aria-hidden="true"
                className="icon-lg text-[#1e8a5f] dark:text-[#4eca8c]"
              />{' '}
              Deploy your web app
            </h2>
            <div>
              <Terminal cmd={['$ npx eas-cli deploy']} className="rounded-md asset-shadow" />
              <CALLOUT theme="secondary">
                有关前置条件和完整说明，请查看{' '}
                <A href="/deploy/web/#export-your-web-project/">指南</A>。
              </CALLOUT>
            </div>
          </div>
        </GridCell>
      </GridContainer>
    </>
  );
}
