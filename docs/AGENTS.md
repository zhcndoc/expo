# 文档的 Agent 指令

这些指令适用于 `docs/` 中的更改。始终使用 `pnpm` 作为包管理器。

## 推送前检查 CI 会运行哪些检查

`docs-pr` 工作流（`.github/workflows/docs-pr.yml`）会在 `docs/` 目录中运行以下命令。每次更改文档后，都要在本地运行这些命令：

```sh
pnpm test                     # 文档单元测试
pnpm test:worker              # Cloudflare worker 和路由测试
NODE_ENV=production pnpm lint --max-warnings 0
pnpm lint-prose               # Vale 文本检查（与 CI 使用相同的规则）
pnpm lint                          # 运行测试
```

以上五项都必须通过。新增行中的任何 Vale 错误都会导致 CI 检查失败。

## 需要了解的 Vale 文本规则

- 配置：`docs/.vale.ini`；规则：`docs/.vale/writing-styles/expo-docs/`。
- 标题必须使用句首字母大写格式（`HeadingCase.yml`）。只有列在该文件例外项中的产品名和专有名词才可以出现在标题中。如果标题中出现新的产品名，请在同一 PR 中将 `- '.*Product Name.*'` 条目按字母顺序添加到 `HeadingCase.yml` 的例外列表中。

## 其他约定

- 新页面必须登记在 `docs/constants/navigation.js` 中，否则不会显示在侧边栏中。
- 项目使用 Oxlint 和 Oxfmt 规则及约定。请遵循所编辑文件现有的格式（JS 和 MDX 导入语句使用单引号）。
- 添加页面时，请遵循同级现有页面的结构（例如，在 `pages/agents/` 中添加页面时，应参照 `pages/agents/codex.mdx`）。
- 当快照测试文件受到影响时，运行 `pnpm test -u` 以更新快照测试。
