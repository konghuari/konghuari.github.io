---
title: "用 Astro 搭个人站的完整流程"
description: "从 npm init 到 GitHub Pages 自动部署。"
date: 2026-06-01
tags: ["Astro", "GitHub Pages", "Web"]
---

## 为啥选 Astro

- 静态站，build 出纯 HTML，GitHub Pages 零配置
- 支持 MDX，博客可以嵌入 React/Vue 组件
- 默认零 JS，性能好
- 跟 Markdown 博客场景契合度最高

## 步骤

1. `npm init -y` 建项目
2. `npm install astro @astrojs/mdx`
3. 写 `astro.config.mjs`、`src/pages/`、`src/content/`
4. `npm run build` 生成 `dist/`
5. 推到 GitHub，开启 Pages 选 `dist/`

## Content Collections

Astro 的 content collections 是核心 —— 你在 `src/content/config.ts` 里定义 schema，Astro 自动校验 frontmatter。
