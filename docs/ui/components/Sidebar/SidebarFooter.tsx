import { SnackLogo } from '@expo/styleguide';
import { ChangelogIcon } from '@expo/styleguide-icons/custom/ChangelogIcon';
import { DiscordIcon } from '@expo/styleguide-icons/custom/DiscordIcon';
import { Mail01Icon } from '@expo/styleguide-icons/outline/Mail01Icon';
import { useRouter } from 'next/compat/router';

import { getPageSection } from '~/common/routes';

import { SidebarSingleEntry } from './SidebarSingleEntry';
import { ArchiveIcon } from './icons/Archive';

type SideBarFooterProps = {
  isMobileMenuVisible?: boolean;
};

export const SidebarFooter = ({ isMobileMenuVisible }: SideBarFooterProps) => {
  const router = useRouter();
  const isArchive = router?.pathname ? getPageSection(router.pathname) === 'archive' : false;
  return (
    <div className="flex flex-col gap-0.5 border-t border-t-default bg-default p-4">
      <SidebarSingleEntry
        secondary
        href="/archive"
        title="存档"
        Icon={ArchiveIcon}
        isActive={isArchive}
      />
      <SidebarSingleEntry
        secondary
        href="https://snack.expo.dev"
        title="Expo Snack"
        Icon={SnackLogo}
        isExternal
      />
      <SidebarSingleEntry
        secondary
        href="https://chat.expo.dev"
        title="Discord and forums"
        Icon={DiscordIcon}
        isExternal
        shouldLeakReferrer
      />
      <SidebarSingleEntry
        secondary
        href="https://expo.dev/mailing-list/signup"
        title="新闻邮件"
        Icon={Mail01Icon}
        isExternal
      />
      {isMobileMenuVisible && (
        <SidebarSingleEntry
          secondary
          href="https://expo.dev/changelog"
          title="更新日志"
          Icon={ChangelogIcon}
          isExternal
        />
      )}
    </div>
  );
};
