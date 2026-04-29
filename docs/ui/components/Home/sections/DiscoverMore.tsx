import { mergeClasses, RouterLogo } from '@expo/styleguide';
import { DiscordIcon } from '@expo/styleguide-icons/custom/DiscordIcon';
import { PlanEnterpriseIcon } from '@expo/styleguide-icons/custom/PlanEnterpriseIcon';
import { ArrowRightIcon } from '@expo/styleguide-icons/outline/ArrowRightIcon';
import { ArrowUpRightIcon } from '@expo/styleguide-icons/outline/ArrowUpRightIcon';

import { GridContainer, GridCell, Header, HomeButton } from '~/ui/components/Home/components';
import { SnackImage } from '~/ui/components/Home/resources';
import { P, RawH2, RawH3 } from '~/ui/components/Text';

export function DiscoverMore() {
  return (
    <>
      <Header
        title="了解更多"
        description="几分钟内体验 Expo，并学习如何充分利用它。"
      />
      <GridContainer>
        <GridCell
          className={mergeClasses(
            'bg-subtle from-subtle to-palette-green3 selection:bg-palette-green5 relative z-0 min-h-[158px] bg-linear-to-br from-30%',
            'selection:bg-palette-green5',
            'max-md-gutters:min-h-[200px]'
          )}>
          <PlanEnterpriseIcon
            className={mergeClasses(
              'absolute -bottom-12 -left-20 size-[350px]! rotate-[40deg] opacity-[0.12]',
              'text-palette-green7'
            )}
          />
          <PlanEnterpriseIcon
            className={mergeClasses(
              'absolute right-6 bottom-6 size-[72px]! rounded-xl border-[6px] p-2',
              'border-palette-green5 bg-palette-green4 text-palette-green8'
            )}
          />
          <RawH2 className="text-palette-green11! relative z-10 max-w-[22ch] text-lg!">
            使用 Expo 应用服务加速开发
          </RawH2>
          <HomeButton
            className="border-palette-green10 bg-palette-green10 hocus:bg-palette-green9 dark:text-palette-green2"
            href="/tutorial/eas/introduction/"
            size="sm"
            rightSlot={<ArrowRightIcon className="icon-md dark:text-palette-green2" />}>
            <span className="max-sm-gutters:hidden">开始&nbsp;</span>EAS 教程
          </HomeButton>
        </GridCell>
        <GridCell
          className={mergeClasses(
            'bg-subtle from-subtle to-palette-pink3 relative z-0 min-h-[158px] bg-linear-to-br from-30%',
            'selection:bg-palette-pink5',
            'max-md-gutters:min-h-[200px]'
          )}>
          <RouterLogo
            className={mergeClasses(
              'absolute -bottom-20 -left-24 size-[340px]! rotate-[20deg] opacity-[0.12]',
              'stroke-palette-pink7 text-palette-pink7 stroke-[0.01rem]'
            )}
          />
          <RouterLogo
            className={mergeClasses(
              'absolute right-6 bottom-6 size-[72px]! rounded-xl border-[6px] p-3',
              'border-palette-pink5 bg-palette-pink4 stroke-palette-pink8 text-palette-pink8 stroke-[0.01rem]'
            )}
          />
          <RawH2 className="text-palette-pink11! relative z-10 max-w-[32ch] text-lg!">
            了解 Expo Router 基于文件的路由优势
          </RawH2>
          <HomeButton
            className="border-palette-pink10 bg-palette-pink10 hocus:bg-palette-pink9 dark:text-palette-pink2"
            href="/router/introduction/"
            size="sm"
            rightSlot={<ArrowRightIcon className="icon-md dark:text-palette-pink2" />}>
            了解更多
          </HomeButton>
        </GridCell>
        <GridCell className="from-subtle to-palette-orange3 selection:bg-palette-orange4 dark:selection:bg-palette-orange6 bg-linear-to-br from-30%">
          <SnackImage />
          <RawH3 className="text-palette-orange11! font-bold!">在浏览器中体验 Expo</RawH3>
          <P className="text-palette-orange11! max-w-[24ch] text-sm!">
            Expo 的 Snack 让你无需本地环境即可体验 Expo。
          </P>
          <HomeButton
            className={mergeClasses(
              'border-palette-orange11 bg-palette-orange11 text-palette-orange3 hocus:bg-palette-orange11',
              'dark:border-palette-orange10 dark:bg-palette-orange10'
            )}
            href="https://snack.expo.dev/"
            target="_blank"
            rightSlot={<ArrowUpRightIcon className="icon-md text-palette-orange3" />}>
            创建 Snack
          </HomeButton>
        </GridCell>
        <GridCell className="from-subtle to-palette-blue3 selection:bg-palette-blue5 bg-linear-to-br from-30%">
          <div className="bg-palette-blue5 absolute right-6 bottom-6 rounded-full p-4">
            <DiscordIcon className="text-palette-blue9 dark:text-palette-blue9 size-12!" />
          </div>
          <RawH3 className="text-palette-blue11! font-bold!">与社区交流</RawH3>
          <P className="text-palette-blue11! max-w-[32ch] text-sm!">
            加入超过 60,000 名其他开发者
            <br />
            到 Expo 社区 Discord。
          </P>
          <HomeButton
            className="border-palette-blue10 bg-palette-blue10 text-palette-blue1 hocus:bg-palette-blue9 dark:border-palette-blue9 dark:bg-palette-blue9 dark:text-palette-blue2"
            href="https://chat.expo.dev"
            rightSlot={
              <ArrowUpRightIcon className="icon-md text-palette-blue1 dark:text-palette-blue2" />
            }>
            前往 Discord
          </HomeButton>
        </GridCell>
      </GridContainer>
    </>
  );
}
