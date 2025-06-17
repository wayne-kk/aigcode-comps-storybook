import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials" // 可选，包含多种常用功能
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  staticDirs: ["../public"], // 定义静态文件目录
};
export default config;
