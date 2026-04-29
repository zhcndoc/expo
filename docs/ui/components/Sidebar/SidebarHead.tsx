import { DocsLogo, LinkBase, mergeClasses } from '@expo/styleguide';
import { PlanEnterpriseIcon } from '@expo/styleguide-icons/custom/PlanEnterpriseIcon';
import { BookOpen02DuotoneIcon } from '@expo/styleguide-icons/duotone/BookOpen02DuotoneIcon';
import { GraduationHat02DuotoneIcon } from '@expo/styleguide-icons/duotone/GraduationHat02DuotoneIcon';
import { Home02DuotoneIcon } from '@expo/styleguide-icons/duotone/Home02DuotoneIcon';
import { Stars02DuotoneIcon } from '@expo/styleguide-icons/duotone/Stars02DuotoneIcon';
import { ArrowLeftIcon } from '@expo/styleguide-icons/outline/ArrowLeftIcon';

import { shouldShowFeaturePreviewLink } from '~/constants/FeatureFlags.cjs';
import { Search } from '~/ui/components/Search';
import { SidebarSingleEntry } from '~/ui/components/Sidebar/SidebarSingleEntry';

import { ApiVersionSelect } from './ApiVersionSelect';

type SidebarHeadProps = {
  sidebarActiveGroup: string;
};

export const SidebarHead = ({ sidebarActiveGroup }: SidebarHeadProps) => {
  const isPreviewVisible = shouldShowFeaturePreviewLink();
  const mainSectionMap: Record<string, string> = {
    home: '首页',
    general: '指南',
    eas: 'Expo 应用服务',
    reference: '参考',
    learn: '学习',
  };
  const mainSection = mainSectionMap[sidebarActiveGroup];

  if (sidebarActiveGroup === 'archive') {
    return (
      <div className="border-default bg-default flex flex-col gap-0.5 border-b p-1.5">
        <LinkBase
          href="/"
          className="text-secondary hocus:bg-element flex items-center gap-3 rounded-md p-2.5">
          <ArrowLeftIcon className="text-icon-secondary" />
          返回
        </LinkBase>
      </div>
    );
  }

  return (
    <>
      <div className="border-default bg-default compact-height:pb-3 flex flex-col gap-0.5 border-b p-4">
        <Search mainSection={mainSection} />
        <div
          className={mergeClasses(
            'contents',
            'compact-height:grid compact-height:grid-cols-5 compact-height:gap-1',
            isPreviewVisible && 'compact-height:grid-cols-6'
          )}>
          <SidebarSingleEntry
            href="/"
            title="首页"
            Icon={Home02DuotoneIcon}
            isActive={sidebarActiveGroup === 'home'}
            allowCompactDisplay
            mainSection="首页"
          />
          <SidebarSingleEntry
            href="/guides/overview/"
            title="指南"
            Icon={BookOpen02DuotoneIcon}
            isActive={sidebarActiveGroup === 'general'}
            allowCompactDisplay
            mainSection="指南"
          />
          <SidebarSingleEntry
            href="/eas/"
            title="EAS"
            Icon={PlanEnterpriseIcon}
            isActive={sidebarActiveGroup === 'eas'}
            allowCompactDisplay
            mainSection="EAS"
          />
          <SidebarSingleEntry
            href="/versions/latest/"
            title="参考"
            Icon={DocsLogo}
            isActive={sidebarActiveGroup === 'reference'}
            allowCompactDisplay
            mainSection="参考"
          />
          <SidebarSingleEntry
            href="/tutorial/overview/"
            title="学习"
            Icon={GraduationHat02DuotoneIcon}
            isActive={sidebarActiveGroup === 'learn'}
            allowCompactDisplay
            mainSection="学习"
          />
          {isPreviewVisible && (
            <SidebarSingleEntry
              href="/feature-preview/"
              title="功能预览"
              Icon={Stars02DuotoneIcon}
              isActive={sidebarActiveGroup === 'featurePreview' || sidebarActiveGroup === 'preview'}
              allowCompactDisplay
            />
          )}
        </div>
      </div>
      <ApiVersionSelect />
    </>
  );
};
