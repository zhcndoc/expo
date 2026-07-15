import { mergeClasses } from '@expo/styleguide';
import { ArrowRightIcon } from '@expo/styleguide-icons/outline/ArrowRightIcon';
import { ArrowUpRightIcon } from '@expo/styleguide-icons/outline/ArrowUpRightIcon';
import { Dataflow03Icon } from '@expo/styleguide-icons/outline/Dataflow03Icon';
import { Rocket02Icon } from '@expo/styleguide-icons/outline/Rocket02Icon';

import { GridContainer, GridCell, HomeButton } from '~/ui/components/Home/components';
import { QuickStartIcon, DevicesImage } from '~/ui/components/Home/resources';
import { Terminal } from '~/ui/components/Snippet';
import { H1, CALLOUT, A, P, RawH2 } from '~/ui/components/Text';

export function QuickStart() {
  return (
    <>
      <H1 className="mt-1 border-0 pb-0 font-extrabold!">
        打造可在任何地方运行的精彩应用
      </H1>
      <P className="mb-2 text-secondary">
        构建一个 JavaScript/TypeScript 项目，让用户的所有设备都能原生运行。
      </P>
      <GridContainer>
        <GridCell
          className={mergeClasses(
            'min-h-48 bg-element bg-cell-quickstart-pattern! bg-blend-multiply'
          )}>
          <div
            className={mergeClasses(
              'absolute inset-0 size-full rounded-lg bg-linear-to-b from-subtle from-15% to-[#21262d00]',
              'dark:from-[#181a1b]'
            )}
          />
          <div className="relative z-10 flex flex-col gap-4">
            <h2 className="heading-xl font-bold">
              <QuickStartIcon /> 快速开始
            </h2>
            <div>
              <Terminal
                cmd={['$ npx create-expo-app@latest']}
                className="rounded-md asset-shadow"
              />
              <CALLOUT theme="secondary">
                然后继续{' '}
                <A href="/get-started/set-up-your-environment">设置你的开发环境</A>。
              </CALLOUT>
            </div>
          </div>
        </GridCell>
        <GridCell
          className={mergeClasses(
            'relative z-0 min-h-48 border-palette-blue6 bg-palette-blue4 bg-cell-tutorial-pattern! bg-blend-multiply',
            'dark:bg-palette-blue3 dark:bg-blend-color-burn'
          )}>
          <div
            className={mergeClasses(
              'absolute inset-0 size-full rounded-lg bg-linear-to-b from-palette-blue3 from-15% to-[#201d5200]',
              'dark:from-palette-blue3 dark:to-transparent'
            )}
          />
          <DevicesImage />
          <h2 className="relative z-10 max-w-[24ch] heading-xl font-bold text-palette-blue12">
            创建一个适用于 Android、iOS 和 Web 的通用应用
          </h2>
          <HomeButton
            className="border-palette-blue11 bg-palette-blue11 text-palette-white dark:text-palette-blue2 hocus:bg-palette-blue10"
            href="/tutorial/introduction/"
            rightSlot={<ArrowRightIcon aria-hidden="true" className="icon-md" />}>
            Start Tutorial
          </HomeButton>
        </GridCell>
        <GridCell
          className={mergeClasses(
            'min-h-48 overflow-hidden bg-linear-to-br from-[#F3E5F5] via-[#E3F2FD] to-[#E3F2FD]',
            'border border-palette-gray7 selection:bg-palette-blue8',
            'dark:border-[#2d3748] dark:from-[#0a0a0a] dark:via-[#1a1a2e] dark:to-[#16213e]'
          )}>
          <div
            className={mergeClasses(
              'absolute inset-0 size-full rounded-lg bg-linear-to-br from-palette-blue3 via-palette-purple3 to-palette-blue3 opacity-5',
              'dark:from-palette-blue3 dark:via-palette-purple3 dark:to-palette-blue3 dark:opacity-20'
            )}
          />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-8 left-12 size-1 animate-pulse rounded-full bg-palette-blue9 dark:bg-palette-white" />
            <div className="absolute top-16 right-20 size-0.5 animate-pulse rounded-full bg-palette-purple8 delay-1000 dark:bg-palette-blue8" />
            <div className="absolute bottom-12 left-24 size-0.5 animate-pulse rounded-full bg-palette-blue9 delay-500 dark:bg-palette-white" />
            <div className="absolute top-24 right-8 size-1 animate-pulse rounded-full bg-palette-purple7 delay-75 dark:bg-palette-blue7" />
            <div className="absolute right-32 bottom-8 size-0.5 animate-pulse rounded-full bg-palette-blue9 delay-300 dark:bg-palette-white" />
          </div>
          <Rocket02Icon
            aria-hidden="true"
            className="absolute -right-12 -bottom-20 size-80! rotate-12 text-palette-blue9 opacity-[0.08] dark:opacity-[0.03]"
          />

          <div className="relative z-10 flex flex-col gap-4">
            <h2 className="flex items-center gap-3 heading-lg font-bold! text-palette-gray12! dark:text-palette-white!">
              <div className="rounded-lg bg-linear-to-br from-palette-blue9 to-palette-purple9 p-2 shadow-lg">
                <Rocket02Icon aria-hidden="true" className="icon-lg text-palette-white" />
              </div>
              发布到应用商店
            </h2>
            <div>
              <P className="mb-4 max-w-[80ch] text-sm! leading-relaxed text-palette-gray11! dark:text-palette-blue11!">
                无需配置或预先经验。Launch 会直接从 GitHub 带你完成技术细节。
              </P>
              <HomeButton
                className="relative! bottom-auto! border-2 border-palette-white bg-palette-white font-semibold text-palette-black shadow-md dark:hocus:border-palette-gray11 dark:hocus:bg-palette-gray11 dark:hocus:text-palette-black hocus:border-palette-gray1 hocus:bg-palette-gray1 hocus:text-palette-black"
                href="https://launch.expo.dev/"
                target="_blank"
                rightSlot={
                  <ArrowUpRightIcon aria-hidden="true" className="icon-md text-palette-black" />
                }>
                Try Launch
              </HomeButton>
            </div>
          </div>
        </GridCell>
        <GridCell
          className={mergeClasses(
            'relative z-0 min-h-48 bg-subtle bg-linear-to-br from-subtle from-30% to-palette-purple3',
            'selection:bg-palette-purple5'
          )}>
          <Dataflow03Icon
            aria-hidden="true"
            className={mergeClasses(
              'absolute -bottom-12 -left-20 size-87.5! rotate-12 opacity-[0.12]',
              'text-palette-purple7'
            )}
          />
          <Dataflow03Icon
            aria-hidden="true"
            className={mergeClasses(
              'absolute right-6 bottom-6 size-18! rounded-xl border-[6px] p-2',
              'border-palette-purple5 bg-palette-purple4 text-palette-purple8'
            )}
          />
          <RawH2 className="relative z-10 max-w-[22ch] text-lg! text-palette-purple11!">
            Automate builds and releases with EAS Workflows
          </RawH2>
          <HomeButton
            className="border-palette-purple10 bg-palette-purple10 dark:text-palette-purple2 hocus:bg-palette-purple9"
            href="/tutorial/cicd/introduction/"
            rightSlot={
              <ArrowRightIcon aria-hidden="true" className="icon-md dark:text-palette-purple2" />
            }>
            <span className="max-sm:hidden">Start&nbsp;</span>CI/CD Tutorial
          </HomeButton>
        </GridCell>
      </GridContainer>
    </>
  );
}
