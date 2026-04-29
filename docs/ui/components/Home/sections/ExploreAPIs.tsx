import { mergeClasses, DocsLogo } from '@expo/styleguide';
import { CameraPlusDuotoneIcon } from '@expo/styleguide-icons/duotone/CameraPlusDuotoneIcon';
import { Image03DuotoneIcon } from '@expo/styleguide-icons/duotone/Image03DuotoneIcon';
import { NotificationMessageDuotoneIcon } from '@expo/styleguide-icons/duotone/NotificationMessageDuotoneIcon';
import { ArrowRightIcon } from '@expo/styleguide-icons/outline/ArrowRightIcon';
import { type ReactNode } from 'react';

import { Header } from '~/ui/components/Home/components';
import { A, LABEL } from '~/ui/components/Text';

export function ExploreAPIs() {
  return (
    <>
      <Header
        title="探索 API"
        description="Expo 提供了大量 SDK 模块，你也可以创建自己的模块。"
      />
      <div
        className={mergeClasses(
          'my-4 inline-grid w-full grid-cols-4 gap-8',
          'max-xl-gutters:grid-cols-2',
          'max-lg-gutters:grid-cols-4',
          'max-md-gutters:grid-cols-2',
          'max-sm-gutters:grid-cols-1'
        )}>
        <APIGridCell
          title="图片"
          link="/versions/latest/sdk/image/"
          icon={<Image03DuotoneIcon className="size-16!" />}
        />
        <APIGridCell
          title="相机"
          link="/versions/latest/sdk/camera"
          icon={<CameraPlusDuotoneIcon className="size-16!" />}
        />
        <APIGridCell
          title="通知"
          link="/versions/latest/sdk/notifications"
          icon={<NotificationMessageDuotoneIcon className="size-16!" />}
        />
        <APIGridCell
          title="查看全部 API"
          link="/versions/latest/"
          icon={<DocsLogo className="size-16!" />}
        />
      </div>
    </>
  );
}

type APIGridCellProps = {
  icon?: ReactNode;
  title?: string;
  link?: string;
  className?: string;
};

function APIGridCell({ icon, title, link, className }: APIGridCellProps) {
  return (
    <A
      href={link}
      className={mergeClasses(
        'group border-default bg-subtle relative block min-h-[200px] overflow-hidden rounded-lg border shadow-xs transition',
        '[&_h2]:my-0! [&_h3]:mt-0!',
        'hocus:shadow-sm',
        className
      )}
      isStyled>
      <div className="flex min-h-[142px] items-center justify-center transition-transform group-hover:scale-105">
        {icon}
      </div>
      <LABEL className="bg-default flex min-h-[30px] items-center justify-between p-4">
        {title}
        <ArrowRightIcon className="text-icon-secondary" />
      </LABEL>
    </A>
  );
}
