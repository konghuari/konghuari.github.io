# mac 的个人站

基于 [Astro](https://astro.build) 搭建，部署在 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 生成 dist/
npm run preview  # 本地预览 build 结果
```

## 内容

- 博客：`src/content/blog/*.md`
- 项目：`src/content/projects/*.md`

新写一篇博客只要 `src/content/blog/your-post.md` 加个文件，frontmatter 写好就成。

## 部署

推到 main 分支自动触发 `.github/workflows/deploy.yml`，build 后部署到 GitHub Pages。

首次部署需要在 GitHub 仓库 Settings → Pages → Source 选 "GitHub Actions"。
