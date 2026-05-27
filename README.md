# Vicverse

Vicverse 是 Vic 的个人网站。

它以水下探索为主线，用来长期记录技术学习、游戏体验、音乐分析、网站重构和个人阶段性思考。

正式地址：

```text
https://www.vicverse.me
```

## 当前版本

当前主版本是：

```text
v5-orange-current
```

v5 的核心变化：

- 将 `/` 改为真正首页，`/home` 重定向到 `/`
- 重做橙色主视觉与海洋背景首页
- 建立“水下机器人 / 游戏思考 / 音乐分析 / 换血记录”四条主线
- 清理 starter template 残留项目内容
- 统一专题页结构，新增 `app/projects/TopicPage.tsx`
- 修复 Git hook 的格式化命令，统一走 npm 本地依赖
- 同步部署到 Vercel production

## 版本规则

Vicverse 使用分支和 tag 保存重要版本。

当前已归档版本：

```text
archive/v4-structure
v4-structure
```

命名建议：

```text
archive/v{number}-{theme}
v{number}-{theme}
v{number}-{theme}-current
```

例子：

```text
archive/v4-structure
v4-structure
v5-orange-current
```

## 内容结构

主要内容放在：

```text
data/blog/nested-route
```

文章使用 MDX。基础 frontmatter 示例：

```mdx
---
title: 文章标题
date: 2026-05-27
tags: ['vicverse']
draft: false
summary: 文章摘要。
---
```

当前主要标签：

- `vicverse`：网站建设、部署、版本更新
- `game`：游戏体验与竞技思考
- `music`：音乐与歌词分析
- `underwater`：水下机器人与水下探索

## 页面结构

核心页面：

```text
app/page.tsx
app/Main.tsx
app/about/page.tsx
app/projects/page.tsx
app/projects/TopicPage.tsx
```

专题页面：

```text
app/projects/underwater/page.tsx
app/projects/game/page.tsx
app/projects/music/page.tsx
app/projects/bloodchange/page.tsx
```

站点配置：

```text
data/siteMetadata.js
data/headerNavLinks.ts
data/projectsData.ts
css/tailwind.css
```

## 本地开发

项目使用 Next.js、Tailwind CSS、Contentlayer 和 Pliny。

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

打开：

```text
http://localhost:3000
```

构建生产版本：

```bash
npm run build
```

运行 lint：

```bash
npm run lint
```

## 包管理说明

项目以 npm 工作流为主，依赖锁文件是：

```text
package-lock.json
```

Git hook 中的 lint-staged 命令使用：

```text
npm exec -- eslint --fix
npm exec -- prettier --write
```

这样可以直接使用 `node_modules` 中的本地依赖，不依赖全局 `yarn` 命令。

仓库仍保留 Yarn 3.6.1 release 文件，以兼容 `.yarnrc.yml`：

```text
.yarn/releases/yarn-3.6.1.cjs
```

## 部署

当前 Vercel 项目：

```text
vicverse-live
```

正式域名：

```text
https://www.vicverse.me
```

常规发布流程：

```bash
git status
git add .
git commit -m "更新说明"
git push origin main
```

如需手动触发 Vercel production 部署：

```bash
npx vercel@latest --prod --yes
```

部署完成后应确认：

```text
READY
Aliased https://www.vicverse.me
```

## 发布检查

每次重要更新前建议执行：

```bash
npm run lint
npm run build
```

发布后检查正式首页是否包含最新版本文案或新增文章标题。

## 维护原则

- 重要结构变化必须写更新日志
- 大版本改动前先创建归档分支和 tag
- `main` 保持可部署状态
- 不再保留无关 starter template 内容
- 橙色是 Vicverse 的核心视觉信号

From chaos to structure.
