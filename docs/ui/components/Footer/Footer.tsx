import { LinkBase, mergeClasses } from '@expo/styleguide';
import { PrivacyChoicesButton } from '@expo/styleguide-cookie-consent';
import { ArrowLeftIcon } from '@expo/styleguide-icons/outline/ArrowLeftIcon';
import { ArrowRightIcon } from '@expo/styleguide-icons/outline/ArrowRightIcon';
import { useRouter } from 'next/compat/router';

import { isEasPath } from '~/common/routes';
import { usePageApiVersion } from '~/providers/page-api-version';
import { NavigationRouteWithSection } from '~/types/common';
import { NewsletterSignUp } from '~/ui/components/Footer/NewsletterSignUp';
import { P, FOOTNOTE, UL, LI } from '~/ui/components/Text';

import { ForumsLink, EditPageLink, IssuesLink, LlmsTxtLink, ShareFeedbackLink } from './Links';
import { PageVote } from './PageVote';

type Props = {
  title?: string;
  sourceCodeUrl?: string;
  packageName?: string;
  previousPage?: NavigationRouteWithSection;
  nextPage?: NavigationRouteWithSection;
  modificationDate?: string;
};

const isDev = process.env.NODE_ENV === 'development';
const LLMS_SDK_VERSIONS = ['v53.0.0'];
const LLMS_SDK_LATEST_VERSION = LLMS_SDK_VERSIONS[0];

export const Footer = ({
  title,
  sourceCodeUrl,
  packageName,
  previousPage,
  nextPage,
  modificationDate,
}: Props) => {
  const { hasVersion, version } = usePageApiVersion();
  const router = useRouter();
  const isAPIPage = router?.pathname.includes('/sdk/') ?? false;
  const isTutorial = router?.pathname.includes('/tutorial/') ?? false;
  const isExpoPackage = packageName ? packageName.startsWith('expo-') : isAPIPage;
  const llmsSdkVersion = version === 'latest' ? LLMS_SDK_LATEST_VERSION : version;
  const shouldUseLlmsSdkFile = hasVersion && LLMS_SDK_VERSIONS.includes(llmsSdkVersion);
  const isEasPage = router?.pathname ? isEasPath(router.pathname) : false;
  const llmsFullFilename = isEasPage
    ? 'llms-eas.txt'
    : shouldUseLlmsSdkFile
      ? `llms-sdk-${llmsSdkVersion}.txt`
      : 'llms-full.txt';
  const llmsFullHref = `/${llmsFullFilename}`;
  const llmsFullLabel = 'llms-full.txt';

  const shouldShowModifiedDate = !isExpoPackage && !isTutorial && title;

  return (
    <footer
      className={mergeClasses(
        'flex flex-col gap-10 px-14 pb-10',
        title ? 'pt-10' : 'pt-6',
        'max-lg-gutters:px-4 max-lg-gutters:pb-12'
      )}>
      {title && (previousPage || nextPage) && (
        <div
          className={mergeClasses(
            'flex gap-4',
            'max-xl-gutters:flex-col-reverse',
            'max-lg-gutters:flex-row',
            'max-md-gutters:flex-col-reverse'
          )}
          data-nosnippet>
          {previousPage ? (
            <LinkBase
              href={previousPage.href}
              className={mergeClasses(
                'border-default flex w-full items-center gap-3 rounded-md border border-solid px-4 py-3 transition',
                'hocus:bg-subtle hocus:shadow-xs'
              )}>
              <ArrowLeftIcon className="text-icon-secondary shrink-0" />
              <div>
                <FOOTNOTE theme="secondary">
                  上一篇{previousPage.section ? `（${previousPage.section}）` : ''}
                </FOOTNOTE>
                <P weight="medium">{previousPage.sidebarTitle ?? previousPage.name}</P>
              </div>
            </LinkBase>
          ) : (
            <div className="w-full" />
          )}
          {nextPage ? (
            <LinkBase
              href={nextPage.href}
              className={mergeClasses(
                'border-default flex w-full items-center justify-between gap-3 rounded-md border border-solid px-4 py-3 transition',
                'hocus:bg-subtle hocus:shadow-xs'
              )}>
              <div>
                <FOOTNOTE theme="secondary">
                  下一篇{nextPage?.section ? `（${nextPage.section}）` : ''}
                </FOOTNOTE>
                <P weight="medium">{nextPage.sidebarTitle ?? nextPage.name}</P>
              </div>
              <ArrowRightIcon className="text-icon-secondary shrink-0" />
            </LinkBase>
          ) : (
            <div className="w-full" />
          )}
        </div>
      )}
      <div
        className={mergeClasses('flex flex-row justify-between gap-4', 'max-md-gutters:flex-col')}>
        <div>
          <PageVote />
          <UL className="mt-0! ml-0! flex-1 list-none!">
            <ShareFeedbackLink pathname={router?.pathname} />
            {title && <ForumsLink isAPIPage={isAPIPage} title={title} />}
            {title && isAPIPage && (
              <IssuesLink title={title} repositoryUrl={isExpoPackage ? undefined : sourceCodeUrl} />
            )}
            {title && router?.pathname && <EditPageLink pathname={router.pathname} />}
            <LlmsTxtLink fullVersionHref={llmsFullHref} fullVersionLabel={llmsFullLabel} />
            {!isDev && shouldShowModifiedDate && modificationDate && (
              <LI className="text-quaternary! mt-4! text-xs!">
                最后更新于 <time dateTime={modificationDate}>{modificationDate}</time>
              </LI>
            )}
            {isDev && shouldShowModifiedDate && (
              <LI className="text-quaternary! mt-4! text-xs!">
                开发模式下不提供最后更新时间
              </LI>
            )}
          </UL>
        </div>
        <NewsletterSignUp />
      </div>
      <PrivacyChoicesButton />
      <div className="text-quaternary flex flex-col gap-1 text-xs">
        <a target="_blank" href="https://www.zhcndoc.com">
          简中文档
        </a>
        <a target="_blank" href="https://beian.miit.gov.cn" rel="nofollow">
          沪ICP备2024070610号-3
        </a>
      </div>
    </footer>
  );
};
