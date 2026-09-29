# Expo 文档

这是 **Expo**、其 SDK、客户端和服务（**EAS**）的公开文档。本文档使用 Next.js 构建，可在线访问：https://docs.expo.dev/。

> [!NOTE]
> 贡献者请注意：如果希望更改同时应用于下一个 SDK 版本，请确保在 **pages/versions/unversioned** 中编辑 SDK 参考文档！

> [!TIP]
> 如果你正在查找 Expo 文档写作风格指南，请参阅 [Expo Documentation Style Guide](/guides/Expo%20Documentation%20Writing%20Style%20Guide.md)。

## 在开发模式下本地运行

1. 下载此代码库的副本。

```sh
git clone https://github.com/expo/expo.git
```

2. 然后进入 `docs` 目录并安装依赖：

```sh
pnpm install
```

3. 然后运行应用（请确保端口 `3002` 上没有运行任何服务器）：

```sh
pnpm dev
```

4. 现在文档已在 `http://localhost:3002` 运行，你对 Markdown 或 JavaScript 文件所做的任何更改都会自动触发重新加载。

### 在生产模式下本地运行

```sh
pnpm export
pnpm export-server
```

## 编辑文档内容

所有与文档相关的内容都位于 **pages** 目录中。我们使用 Markdown 编写文档，并借助自定义 React 组件提供额外功能，例如嵌入 Snack 示例、在终端组件中展示命令等。

文档分为四个主要部分：

- **Home**：提供从零开始创建项目到将其发布到应用商店的引导流程。
- **Guides**：通用且基础的指南，帮助你了解 Expo 的工作原理以及如何使用它。
- **EAS**：EAS 所有服务的详细文档。
- **Reference**：Expo 所有 API 和模块的详细参考文档。所有 Expo SDK API 文档均位于 **pages/versions** 目录下。我们会为 Expo Go 当前支持的每个 SDK 版本分别维护文档版本。详情请参阅[更新最新版 API 参考文档](#update-latest-version-of-api-reference-docs)。
- **Learn**：帮助你学习如何使用 Expo 和 React Native 的教程和指南。

> [!NOTE]
> 我们目前正在使用 `expotools` 的 `GenerateDocsAPIData` 命令，将部分 Expo 库的 API 文档迁移为自动生成。

### 页面元数据

每个 Markdown 页面都可以在标题区域中提供元数据，格式如下：

```
---
metadata: goes here
---
```

元数据项包括：

- `title`：页面标题，会显示为标题并出现在搜索结果中。
- `description`：页面描述，会显示在搜索结果中；页面在社交媒体网站上分享时，也会作为 Open Graph 描述显示。
- `hideFromSearch`：是否在 Algolia 搜索结果中隐藏该页面。默认为 `false`。
- `hidden`：是否在侧边栏中隐藏该页面。默认为 `false`。
- `hideTOC`：是否隐藏目录（显示在右侧边栏中）。默认为 `false`。
- `sidebar_title`：侧边栏中显示的页面标题。默认为页面标题。
- `sidebar_order`：用于确定页面在侧边栏分组中的顺序权重的数字。默认为 `0`。负值会将页面排在字母顺序列表之前，正值则排在其后。
- `inExpoGo`：是否在侧边栏的 Third-party libraries 下列出 SDK 参考页面，而不是列在 Expo SDK 下。默认为 `false`。
- `maxHeadingDepth`：右侧目录中显示的标题最大层级。默认为 `3`。
- `isNew`：是否为页面显示“新”徽标。通常用于 Reference 下的 API 页面。默认为 `false`。
- `isDeprecated`：是否为页面显示“已弃用”徽标。通常用于 Reference 下的 API 页面。默认为 `false`。
- `isAlpha`：是否为页面显示 Alpha 徽标。默认为 `false`。
- `isBeta`：是否为页面显示 Beta 徽标。默认为 `false`。
- `isPreview`：是否为页面显示预览徽标。默认为 `false`。
- `searchRank`：介于 0 和 100 之间的数字，用于表示页面的相关性。此值会映射到 Algolia 的 `record.weight.pageRank` 属性。值越大，优先级越高。默认情况下，我们将此值设为 `5`，除非在 frontmatter 中另有指定。
- `searchPosition`：页面在搜索结果中的位置。此值会映射到 Algolia 的 `record.weight.position` 属性。Algolia 默认将此值设为 `0`。值越小，页面在结果中的位置越靠前。默认情况下，我们将此值设为 `50`，除非在 frontmatter 中另有指定。
- `hasVideoLink`：对于包含视频教程链接的页面，是否在侧边栏中显示视频链接图标。默认为 `false`。
- `cliVersion`：对于包含 CLI 徽标的页面，要显示的 CLI 版本。目前，此字段用于 EAS CLI 参考页面，并由 `pnpm eas-cli-sync` 自动填充。

### 编辑代码

文档使用 Next.js 和 TypeScript 编写。如果需要更改代码，请按照[在开发模式下本地运行](#to-run-locally-in-development-mode)部分中的步骤操作，然后打开另一个终端并以监听模式运行 TypeScript 编译器，它会监视代码更改并通知你错误。

```sh
pnpm watch
```

提交更改前，别忘了运行测试和代码检查工具。

```sh
pnpm test
pnpm lint
```

### 文案检查工具

完成文档编写或编辑后，运行以下脚本，根据 [Expo 写作风格指南](/guides/Expo%20Documentation%20Writing%20Style%20Guide.md)检查文档的风格和语法：

```sh
pnpm lint-prose
```

我们使用 [Vale](https://vale.sh/) 检查文档。Vale 二进制文件会在 `pnpm install` 期间通过 `postinstall` 脚本自动安装。若要手动安装或更新，请运行 `pnpm install-vale`。

#### 关闭文案检查工具

对于特殊情况，可以通过添加[注释分隔符](https://vale.sh/docs/keys/commentdelimiters)来关闭特定行或文本块的文案检查：

```mdx
{/* vale off */}

This is some text that will be ignored by Vale.

{/* vale on */}
```

> [!NOTE]
> 理想情况下，如果有相应模式，Vale 检查规则应随新增服务或功能一同更新。若要更新规则，请参阅 [**.vale**](/docs/.vale/writing-styles/expo-docs) 目录中已建立的规则。

<details>

<summary>替代方案：在 VS Code 中使用 Vale</summary>

你也可以在 VS Code 中使用 Vale。你需要：

- [在系统上安装 Vale](https://vale.sh/docs/vale-cli/installation/)
- [安装 Vale 的 VS Code 扩展](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode)

打开你正在处理的文档文件（`*.mdx`），你可能会在 VS Code 编辑器中看到建议标记（黄色波浪线）。

</details>

## 重定向

我们使用两层重定向：

- **服务器端重定向**：在 `public/_redirects` 中定义，采用 Cloudflare Pages 重定向格式（`source_path destination_path status_code`，每行一条规则）。这些是针对简单一对一路径映射的 301 永久重定向，并且有利于 SEO。
- **客户端重定向**：位于 `common/client-redirects.ts`，会在 404 页面上运行，用于处理更复杂的规则（例如，移除 `.html`、版本回退），并捕获服务器端重定向不适用的情况（本地/开发/预览环境或遗漏的映射）。

目前，我们使用 meta 标签和 `http-equiv="refresh"` 实现了两个客户端重定向：

- `/` -> `/versions/latest/`
- `/versions` -> `/versions/latest`

这种方式会先加载页面，然后立即跳转，可能会使辅助技术产生困惑（已播报的内容消失，焦点重置），也会让开发者更难控制。请将其视为备用方案，并尽可能优先使用服务器端重定向或基于 404 的客户端规则。

## 为 AI 智能体提供 Markdown

每个已发布页面都会以两种格式提供：供浏览器使用的 HTML，以及供 AI 智能体和命令行工具使用的 Markdown。其实现分为四层：

### 1. 构建时生成

- `pnpm export` 会在 `next build` 之后运行 `scripts/generate-markdown-pages.ts`。该脚本会遍历 `out/` 中的每个页面，使用 cheerio + turndown 将渲染后的 HTML 转换为 Markdown（通过 worker 线程并行处理），并将结果写入 HTML 同目录下的 `out/<slug>/index.md`。自定义 MDX 组件（`APISection`、`Terminal`、`Tabs` 等）已由 Next.js 渲染为 HTML，因此转换器无需了解这些组件。

- 接着，`scripts/check-markdown-pages.ts` 会作为 CI 检查关卡运行。如果任何 Markdown 文件为空、缺少标题、包含泄漏的 HTML 或 CSS 类名、代码围栏未配对，或者 Markdown 文件数量与 HTML 文件数量不一致，该脚本就会使构建失败。

### 2. 内容协商

`public/_worker.js` 会检查每个请求的 `Accept` 标头。如果其中包含 `text/markdown`，worker 会将路径重写为 `<pathname>/index.md`，并以 `Content-Type: text/markdown; charset=utf-8` 返回该资源。其他所有请求都会交由常规资源处理流程处理。

```sh
curl -H "Accept: text/markdown" https://docs.expo.dev/get-started/set-up-your-environment/
```

### 3. 通过 `_redirects` 提供同级 `.md` URL

有些智能体更喜欢在 URL 后添加 `.md`，而不是通过标头进行内容协商。`public/_redirects` 底部的三条规则可处理这种情况：

```
/index.md /index.md 200
/*/index.md /:splat/index.md 200
/*.md /:splat/index.md 200
```

前两条规则会保留每个页面的规范 `index.md` 路径。第三条规则会将 `/<slug>.md` 重写为构建时实际写入的文件 `/<slug>/index.md`。这样，智能体就能通过 `.md` 后缀获取 Markdown 内容，这是 Markdown 文件的常见惯例。

### 4. HTML 中的发现提示

每个页面都会在 `<head>` 中呈现一个发现链接：

```html
<link rel="alternate" type="text/markdown" href="/get-started/set-up-your-environment.md" />
```

`common/routes.ts` 中的 `getMarkdownPath` 会构建此 href，`DocumentationHead.tsx` 则会呈现它。已经获取 HTML 的爬虫可以通过该链接获取 Markdown 版本。

### 总结

单个页面（例如，`/get-started/set-up-your-environment/`）可通过以下四种方式以 Markdown 格式访问：

| 请求                                             | 提供方                         |
| ------------------------------------------------ | ------------------------------ |
| 在规范 URL 上使用 `Accept: text/markdown`        | `_worker.js`                   |
| `/get-started/set-up-your-environment.md`        | `_redirects` 同级规则          |
| `/get-started/set-up-your-environment/index.md`  | 静态资源（规范路径）           |
| 从 HTML 中跟随 `<link rel="alternate">`         | 发现提示                       |

## 搜索

我们使用 Algolia 作为文档的主要搜索结果提供方。此功能由 `@expo/styleguide` 库配置，该库提供通用搜索组件，供文档、expo.dev 和 EAS 仪表板使用。

除了搜索查询之外，结果还会根据 `version` 标签进行筛选。此标签代表用户当前所在的位置，并在 `components/DocumentationPage.tsx` 的 head 中设置。

在 `@expo/styleguide` 库中，可以在 `packages/search-ui/src/components/CommandMenu.tsx` 中看到 `facetFilters` 被设为 `[['version:none', 'version:{version}']]`。换言之，这表示搜索所有 `version` 为 `none` 的页面，或当前选定版本的页面。

- 所有无版本页面都使用版本标签 `none`
- 所有有版本的页面都使用 SDK 版本（例如 `v51.0.0` 或 `v50.0.0`）
- 所有 frontmatter 中包含 `hideFromSearch: true` 的页面都没有版本标签

目前，Expo 文档的基础搜索结果会与来自多个来源的其他结果合并，例如：

- EAS 仪表板的手动定义路径，位于 `ui/components/Search/expoEntries.ts`
- React Native 网站的公开 Algolia 索引
- React Native Directory 公共 API，详情请参阅该目录的 [README.md](https://github.com/react-native-community/directory#i-dont-like-your-website-can-i-hit-an-api-instead-and-build-my-own-better-stuff)
- Expo Blog 公共 API

## 特殊情况

花括号不能单独出现，必须加引号：\`{}\` -> `{}`。

## 部署

每次包含文档更改的 PR 合并到 `main` 后，都会通过 GitHub Action 自动部署文档。

## 操作指南

### 内部链接

如果需要从一个 MDX 文件链接到另一个文件，请使用该文件的静态/完整路径（避免使用相对链接）：

- 来源：**tutorial/button.mdx**，目标：**introduction/expo.mdx** -> `/introduction/expo`
- 来源：**index.mdx**，目标：**guides/errors.mdx#tracking-js-errors** -> `/guides/errors/#tracking-javascript-errors`

构建后运行 `pnpm check-internal-links` 脚本，验证所有当前链接（该脚本会扫描 **out** 中导出的站点）。

### 更新最新版 API 参考文档

发布新的 SDK 时，我们会复制 `unversioned` 目录，并将其重命名为新版本。文档的最新版本从 **package.json** 中读取，因此请确保也更新其中的 `version` 键。

还要从版本发布说明的博客文章中获取升级说明，并将其放入 **upgrading-expo-sdk-walkthrough.mdx**。

服务器启动时会列出 `versions` 目录，以查找所有可用版本。路由和导航栏内容会根据 `versions` 中的目录结构自动推断。

由于导航栏是根据目录结构自动生成的，每个部分下链接的默认顺序为字母顺序。不过，对于许多部分而言，这并非理想的用户体验。因此，如果希望覆盖字母顺序，请在 **constants/navigation.js** 中调整页面标题。

### 更新 API 参考文档

API 参考文档由 TypeScript 源代码生成。

本节介绍如何更新 Expo 包的文档。以下内容将以更新 `expo-constants` 中属性的 TypeDoc 定义为例。

> 如需详细了解 TypeDoc/JSDoc 如何解析注释，请参阅 [**Doc comments in TypeDoc documentation**](https://typedoc.org/documents/Doc_Comments.html)。

#### 先决条件

继续之前，请确保你：

- 已在本机克隆 [**expo/**](https://github.com/expo/expo) 仓库
- 已[安装 `direnv`](https://direnv.net/docs/installation.html)，并在 **expo/** 仓库根目录运行 `direnv allow`。
- 已完成[**贡献指南中的“下载与设置”**](https://github.com/expo/expo/blob/main/CONTRIBUTING.md#-download-and-setup)所述步骤。
- 可以在本地运行 **expo/docs** 应用（**[本地运行](https://github.com/expo/expo/tree/main/docs#to-run-locally-in-development-mode)**）。
- 可以在本地运行 [`et`（Expotools）](https://github.com/expo/expo/blob/main/tools/README.md) 命令。

确认开发环境已准备就绪后，继续下一节：

#### 步骤 1：更新包的 TypeDoc

- 确定要更新哪个包的文档后，打开终端窗口并导航至该包的目录。例如：

```shell
# Navigate to expo-constants package directory inside expo/ repo
cd expo/packages/expo-constants
```

- 然后，在代码编辑器/IDE 中打开要进行更改/更新的 **.ts** 文件。
- 在终端窗口中使用 `pnpm build`，以监听模式启动 TypeScript 构建编译。
- 进行更新。例如，我们要更新 [`expoConfig` 属性](https://docs.expo.dev/versions/latest/sdk/constants/#nativeconstants)的 TypeDoc 描述
  - 在 **src/** 目录中打开 **Constants.types.ts** 文件。
  - 搜索 `expoConfig` 属性。其当前描述如下：

  ```ts
  /**
   * The standard Expo config object defined in `app.json` and `app.config.js` files. For both
   * classic and modern manifests, whether they are embedded or remote.
   */
  expoConfig: ExpoConfig | null;
  ```

- 在上面的示例中，我们将 `confg` 更正为 `config`，以修复拼写错误：

```ts
/**
 * The standard app config object defined in `app.json` and `app.config.js` files. For both
 * classic and modern manifests, whether they are embedded or remote.
 */
expoConfig: ExpoConfig | null;
```

- 进入下一步之前，请按下 `Ctrl + C` 退出“监听模式”。

#### 步骤 2：将 TypeDoc 更新应用到 expo/docs 仓库

> [!IMPORTANT]
>
> 如果你要修复包的参考文档问题，或 SDK 版本已发布，请确保只更新该包的 `unversioned` 参考文档。这样，更改会反映在 `main` 分支的下一个 SDK 版本中。更新特定 SDK 版本的参考文档，需要更新该 SDK 的分支（见下方可折叠部分）；SDK 团队会决定是否将更改拣选到特定 SDK 分支（在 SDK 版本发布之后）。

在终端窗口中运行以下命令，为该包生成 JSON 数据文件（存储在 `expo/docs/public/static/data/[SDK-VERSION]` 位置）

- 请阅读以下代码片段中的 **NOTE**，了解如何更新 `unversioned` 的文档：

```shell
et generate-docs-api-data --packageName expo-constants

#### NOTE ####
# To update a specific SDK reference, run the command by mentioning the SDK version
et gdad -p expo-constants --sdk 54

# For more information about et command, run: et gdad --help
```

**为什么要更新 `unversioned` 文档？** 如果这些是新增更改/更新，请将其应用到 `unversioned`，以确保这些更改包含在下一个 SDK 版本中。

#### 步骤 3：查看 docs 仓库中的更改

现在，在终端窗口中导航至 **expo/docs** 仓库，并运行命令 `pnpm dev`，查看已应用的更改

- 在浏览器中打开 [http://localhost:3002/](http://localhost:3002/)，然后前往 API 文档查看你所做的更改。请确保在左侧边栏中选择正确的 SDK 版本，以查看相应更改。

<details>
<summary>在 SDK 生命周期已进入最新阶段或 SDK 已发布后更新有版本文档数据</summary>

如果需要在 SDK 生命周期后期更新有版本文档数据，请按照以下步骤操作：

1. 确保相关代码更改已存在于 `main` 分支和 `sdk *` 分支上。

2. 修改分支：

- 切换到 `sdk *` 分支并进行更改
- 运行命令：`et gdad -p expo-library --sdk 52`，其中 `expo-library` 是你要更新的库，`52` 是 SDK 版本。
- 在本地保存/暂存更改（可以使用 `git stash`）

3. 更新 `main` 分支：

- 切换回 `main` 分支
- 运行命令：`et gdad -p expo-library`

4. 完成更改：

- 将之前保存的有版本 `expo-library.json` 添加到 main changeset
- 创建 Pull Request

</details>

#### 提示

##### 禁用更新日志检查

进行更改后，在创建 PR 时，如果所做更改与文档相关（例如更新字段描述、修复拼写错误等），可以考虑在 PR 描述中添加 `<!-- disable:changelog-checks -->`。

这样可以确保 GitHub 上的 ExpoBot 不会提示你更新包的更新日志（如上所述，部分更改不值得在更新日志中提及）。

##### 使用正确的包名称

有些包的文档分散在多个页面中。例如，`expo-sensors` 包在 Expo Sensors 参考文档中有单独的概览页面，其余信息则分散在 `Accelerometer`、`Gyroscope`、`Magnetometer` 等组件的页面中。对于此类包，请务必检查 `et` 命令所使用的[包名称](https://github.com/expo/expo/blob/main/tools/src/commands/GenerateDocsAPIData.ts#L24)。

### 将应用配置与 schema 同步

为了呈现 [app config](https://docs.expo.dev/versions/latest/config/app/) 属性表格，我们目前会存储一份适当版本的 schema 本地副本。

如果 schema 已更新，要同步并重写本地副本，请运行 `pnpm schema-sync <SDK version integer>` 或 `pnpm schema-sync unversioned`。

### 添加图像和资源

你可以将图像和资源添加到 **public/static** 目录中。生产和暂存服务器会通过 **static** 提供这些文件。

### 添加视频

- 使用 QuickTime 录制视频
- 安装 `ffmpeg`（`brew install ffmpeg`）
- 运行 `ffmpeg -i your-video-name.mov -vcodec h264 -acodec mp2 your-video-name.mp4` 将视频转换为 mp4。
- 如果视频宽度大于约 1200px，则运行以下命令缩小视频：`ffmpeg -i your-video.mp4 -filter:v scale="1280:trunc(ow/a/2)*2" your-video-smaller.mp4`
- 将视频放入 `public/static/videos` 中的相应位置，并在文档页面的 MDX 中按如下方式使用：

```tsx
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

// Change the path to point to the relative path to your video from within the `static/videos` directory
<ContentSpotlight file="guides/color-schemes.mp4" />;
```

### 添加 Expo UI 组件预览

要为 `@expo/ui` 组件（Jetpack Compose 和 SwiftUI）编写文档，并使用固定尺寸、适配主题的预览框架，请使用 `ContentSpotlight` 的 `component` 变体。它会呈现带边框的点阵卡片，并根据当前主题在浅色和深色资源之间切换。

```tsx
import { ContentSpotlight } from '~/ui/components/ContentSpotlight';

<ContentSpotlight
  variant="component"
  aspect="landscape"
  src="/static/images/expo-ui/badgedbox/android-light.webp"
  darkSrc="/static/images/expo-ui/badgedbox/android-dark.webp"
  alt="带有数字徽标 5 的邮件图标，以及带有小圆点徽标的 wifi 图标"
/>;
```

| 参数      | 描述                                                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `variant` | 设置为 `"component"` 以渲染 SDK UI 预览框架。默认值为 `"screenshot"`，会保留其他位置使用的原始点击后打开灯箱的行为。                                   |
| `aspect`  | 当 `variant="component"` 时为**必填**。宽屏预览使用 `"landscape"`（3:2，宽 540px），手机形状的模拟图使用 `"portrait"`（9:16，宽 220px）。                 |
| `src`     | **必填**。浅色主题图片的路径。将资源放在 `/public/static/images/expo-ui/<component>/` 下，并通过 `/static/images/...` 引用。                              |
| `darkSrc` | 可选。深色主题图片的路径。通过 `<picture>` 渲染，并在用户启用深色主题时显示。                                                                              |
| `alt`     | **必填**。为屏幕阅读器描述组件预览的替代文本。                                                                                                            |

### 添加来自 Expo YouTube 频道的视频链接

要引用来自 Expo YouTube 频道的视频，请使用 `VideoBoxLink` 组件。该组件从 `~/ui/components/VideoBoxLink` 导入。

```tsx
import { VideoBoxLink } from '~/ui/components/VideoBoxLink';

<VideoBoxLink videoId="Gk7RHDWsLsQ" title="Required title" description="Optional" />;
```

| 参数        | 描述                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `videoId`   | **必填**。YouTube 视频的 ID。可在视频 URL 中找到。例如，在 `https://www.youtube.com/watch?v=Gk7RHDWsLsQ` 中，ID 是 `Gk7RHDWsLsQ`。 |
| title       | **必填**。视频标题。                                                                                                                                                                  |
| description | **可选**。视频描述。                                                                                                                                                                  |

### 添加代码块

代码块是向文档中添加代码片段的好方法。我们使用常规的代码块 Markdown 语法，并扩展支持代码块标题和其他参数。

<!-- prettier-ignore -->
```mdx
    {/* For plain code block the syntax is unchanged (but we recommend to always add a title to the snippet): */}
    ```js
    // Your code goes in here
    ```

    {/* To add a title, enter it right after the language, in the code block starting line: */}
    ```js myFile.js
    // Your code goes in here
    ```
    ```js Title for a code block
    // Your code goes in here
    ```

    {/* Title and params can be separated by pipe ("|") characters, but they also work for block without a title: */}
    ```js myFile.js|collapseHeight=600
    // Your code goes in here
    ```
    ```js collapseHeight=200
    // Your code goes in here
    ```
```

#### 支持的附加参数

| 参数             | 类型   | 描述                                                                                                                                                                          |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `collapseHeight` | number | 代码块自动折叠时使用的自定义高度。默认值为 `408`，除非指定了 `collapseHeight` 参数，否则将应用此默认值。                                                                       |

### 代码块变量

围栏代码块支持使用 `{{variableName}}` 语法进行动态变量替换。在语法高亮运行之前，变量会在渲染时替换为共享 SDK 兼容性注册表中的值。这样可以确保代码示例中的版本号准确无误，无需在每次 SDK 发布时手动更新。

**可用变量：**

| 变量                      | 示例值    | 描述                 |
| ------------------------- | --------- | -------------------- |
| `{{iosDeploymentTarget}}` | `15.1`    | 最低 iOS 部署目标     |
| `{{androidVersion}}`      | `7`       | 最低 Android 版本     |
| `{{compileSdkVersion}}`   | `36`      | Android compileSdkVersion |
| `{{targetSdkVersion}}`    | `36`      | Android targetSdkVersion  |
| `{{reactNativeVersion}}`  | `0.83`    | React Native 版本     |
| `{{reactVersion}}`        | `19.2.0`  | React 版本            |
| `{{xcodeVersion}}`        | `26.2`    | 最低 Xcode 版本       |
| `{{nodeVersion}}`         | `20.19.x` | 最低 Node.js 版本     |
| `{{expoSdkVersion}}`      | `55.0.0`  | Expo SDK 版本         |
| `{{expoSdkMajorVersion}}` | `55`      | Expo SDK 主版本号     |

**在围栏代码块中使用：**

<!-- prettier-ignore -->
```mdx
    ```json package.json
    {
      "dependencies": {
        "expo": "~{{expoSdkVersion}}",
        "react-native": "{{reactNativeVersion}}"
      }
    }
    ```
```

渲染后的输出将显示解析后的值（例如，`"expo": "~55.0.0"`）。复制按钮也会复制解析后的值。

所有变量都定义在 `common/code-utilities.ts` 中，来源于 `ui/components/SDKTables/utils.ts` 中的 `sdkVersionValues`，后者读取 `@expo/sdk-compatibility/data`。若要添加新变量，请在 `common/code-utilities.ts` 中 `buildVariablesForSdk` 返回的对象中添加一个新键。

> [!NOTE]
> 这些变量仅适用于围栏代码块。若要在正文文本中使用动态值，请从 `~/ui/components/SDKTables` 导入 `latestSdkVersionValues`，并直接使用 JSX 表达式。

### 添加内嵌 Snack 示例

Snack 是向文档中添加可立即运行示例的好方法。可以将 [`SnackInline`](/docs/ui/components/Snippet/blocks/SnackInline.tsx) 组件导入任意 Markdown 文件，并像这样使用：

<!-- prettier-ignore -->
```mdx
import SnackInline from '~/components/plugins/SnackInline';

<SnackInline label='My Example Label' dependencies={['array of', 'packages', 'this Snack relies on']}>
    ```js
    // All your code goes in here

    // You can use:
    /* @info Some text goes here */
    const myVariable = SomeCodeThatDoesStuff();
    /* @end */
    // to create hoverable-text, which reveals the text inside of `@info` onHover.

    // You can use:
    /* @hide Content that is still shown, like a preview. */
    Everything in here is hidden in the example Snack until
    you open it in snack.expo.dev
    /* @end */
    // to shorten the length of code block shown in our docs.
    // Hidden code will still be present when opening in Snack or using "Copy" action.
    ```
</SnackInline>
```

### 添加多个代码变体

有时展示同一操作的多种实现方式很有用，例如同时展示使用 React 类组件和函数组件的示例。Tabs 插件适用于这种情况，在 Markdown 文件中的用法如下：

<!-- prettier-ignore -->
```mdx
import { Tabs, Tab } from '~/ui/components/Tabs';

<Tabs>
<Tab label="Add 1 One Way">
    ```js
    addOne = async x => {
      /* @info This text will be shown onHover */
      return x + 1;
      /* @end */
    };
    ```
</Tab>
<Tab label="Add 1 Another Way">
    ```js
    addOne = async x => {
      /* @info This text will be shown onHover */
      return x++;
      /* @end */
    };
    ```
</Tab>
</Tabs>
```

> [!NOTE]
> 组件不能缩进，否则无法正确解析。

### 从 DocSearch 中排除页面

若要从搜索结果中忽略某个页面，请在该页面上使用 `hideFromSearch: true`。这会从该页面移除 `<meta name="docsearch:version">` 标签，并将其从基于 facet 的搜索中筛除。

请注意，`hideFromSearch` 只能阻止页面出现在内部文档搜索（Algolia）中。页面仍会出现在 Google 等搜索引擎的结果中。若要从搜索引擎结果中隐藏页面，需要编辑通过 Next.js 配置（**next.config.js**）生成的站点地图。

### 从侧边栏中排除目录

某些目录会从侧边栏中排除，以避免侧边栏过长、难以浏览。你可以在 **constants/navigation.js** 的 `hiddenSections` 中查看这些目录，并添加新目录。

如果只想从侧边栏中隐藏单个页面，请在页面元数据中设置 `hideInSidebar: true`。

### 使用 `Terminal` 组件展示 shell 命令片段

每当使用或提及 shell 命令时，请使用 `Terminal` 组件，以便代码片段可以复制和粘贴。该组件可导入到任意 Markdown 文件中。

#### 支持的属性

| 选项            | 类型                              | 描述                                                                                                                                                                         |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cmd`           | `string[]`                        | **必填**。要渲染的行。使用 `$` 标记命令，使用 `#` 标记注释，使用空字符串分隔内容。                                                                                          |
| `cmdCopy`       | `string`                          | **可选**。覆盖自动生成的复制文本。适用于需要链接多个命令（例如使用 `&&`）或需要控制复制内容的情况。                                                                          |
| `title`         | `string`                          | **可选**。覆盖默认标题“Terminal”。                                                                                                                                           |
| `browserAction` | `{ href: string; label: string }` | **可选**。在标题栏中添加启动按钮，在新标签页中打开链接，适用于需要在 Web UI 中继续操作的流程。                                                                                |
| `hideOverflow`  | `boolean`                         | **可选**。在希望裁剪内容而非滚动时，阻止出现水平滚动条。                                                                                                                      |
| `className`     | `string`                          | **可选**。用于调整代码片段周围布局或间距的附加 utility 类。                                                                                                                 |

```mdx
import { Terminal } from '~/ui/components/Snippet';

{/* For single command and one prop */}

<Terminal cmd={['$ npx expo install package']} />

{/* For multiple commands */}

<Terminal
  cmd={['# Create a new Expo project', '$ npx create-expo-app --template bare-minimum', '']}
  cmdCopy="npx create-expo-app --template bare-minimum"
/>

{/* Clamp long outputs and tweak spacing */}

<Terminal
  className="mt-6"
  hideOverflow
  cmd={[
    '$ npx expo config --json',
    '# Output is trimmed visually because hideOverflow is enabled.',
  ]}
/>

{/* Surface a button that opens related browser flows */}

<Terminal
  title="Deploy website with EAS"
  cmd={['$ npx eas-cli deploy']}
  browserAction={{ href: 'https://expo.dev/eas', label: 'Open in expo.dev' }}
/>
```

### 使用 `Prerequisites` 编写设置检查清单

如果指南要求读者预先准备特定环境或完成前置步骤，请使用 `Prerequisites` 组件包裹相关要求。该组件会将其渲染为可折叠区块，并将每项要求的标题传递给页面标题管理器，以便生成链接。

```mdx
import { Prerequisites, Requirement } from '~/ui/components/Prerequisites';

<Prerequisites>
  <Requirement title="Set up your development environment">
    Make sure your computer is [set up for running an Expo app](/get-started/create-a-project/).
  </Requirement>
  <Requirement title="Install EAS CLI">Run `npm install -g eas-cli` and log in.</Requirement>
</Prerequisites>
```

传入 `open` 可使区块默认展开：

```mdx
<Prerequisites open>...</Prerequisites>
```

### 使用提示框

可以使用 Markdown 的 `> ...` 引用语法创建四种不同类型的提示框，每种提示框都有不同用途。

```md
> 普通提示框，不需要太多关注，但适合添加说明。

> **info** 信息提示框，用于添加说明或提示，需要引起读者注意。

> **warning** 警告提示框，用于警告和弃用消息。

> **error** 错误提示框，用于错误、重大变更或归档内容中的弃用变更。

> **important** 重要提示框，用于呈现有关软件包、服务或工具状态的重要信息。
```

### 手动添加最后更新时间

所有文档页面都会根据文件的 Git 提交历史自动更新最后更新时间。该信息会显示在文档页面页脚中的 **最后更新于……**。

如果需要手动添加日期，请将 `modificationDate` 添加到 **.mdx** 文件的 frontmatter 中。例如：

```mdx
---
modificationDate: April 8th, 2024
{/* Other frontmatter fields */}
---
```

某些页面会使用这种模式手动更新修改日期，例如 [Build server infrastructure](/docs/pages/build-reference/infrastructure.mdx)。更新该页面上的构建镜像详细信息时，请在同一项更改中更新其 `modificationDate`。

> SDK API 参考和 Learn 下的 Tutorials 部分属于不包含或不显示更新时间的文档区域。

### Lint 流程

Lint 流程通过 **scripts/lint.js**（`pnpm lint`）脚本运行四个工具：

- `oxfmt` 用于代码格式化
- `oxlint` 用于代码 lint
- `tsc` 用于类型检查
- `eslint` 仅用于 Tailwind CSS 类、MDX lint 和 ES Lint 规则

#### 通过 oxfmt 格式化

如果代码块使用了 `/* @info Some text goes here */` 或 `/* @hide ... */` 这类内联注释，请务必在代码块前添加 `/* prettier-ignore */` 和 `/* oxfmt-ignore */` 注释，以防止 `oxfmt` 重新格式化代码块并破坏这些注释。

### 在流程指南中使用 Step

对于流程指南，请使用 [`Step`](/docs/ui/components/Step/Step.tsx) 组件：

```mdx
import { Step } from '~/ui/components/Step';

<Step label="1">

This is some text.

</Step>
```
