import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// 部署到 username.github.io（用户页）时：site 改成 https://username.github.io，base 留空
// 部署到 username.github.io/personal-site（项目页）时：保留 base: '/personal-site'
// 自定义域名：site 改成 https://yourdomain.com
const SITE = 'https://www.aibotworld.cn';
const BASE = '';  // 项目页改成 '/personal-site'，用户页留空

export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
