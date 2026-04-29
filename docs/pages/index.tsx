import DocumentationPage from '~/components/DocumentationPage';
import { AppJSBanner } from '~/ui/components/AppJSBanner';
import { DevicesImageMasks } from '~/ui/components/Home/resources';
import {
  QuickStart,
  CommandLineTools,
  DiscoverMore,
  ExploreAPIs,
  Talks,
  JoinTheCommunity,
} from '~/ui/components/Home/sections';
import { ExploreExamples } from '~/ui/components/Home/sections/ExploreExamples';

function Home() {
  return (
    <DocumentationPage
      hideTOC
      hideFromSearch
      description="构建一个 JavaScript/TypeScript 项目，让用户的所有设备都能原生运行。">
      <div className="h-0">
        <DevicesImageMasks />
      </div>
      <AppJSBanner />
      <QuickStart />
      <CommandLineTools />
      <DiscoverMore />
      <ExploreAPIs />
      <ExploreExamples />
      <Talks />
      <JoinTheCommunity />
    </DocumentationPage>
  );
}

export default Home;
