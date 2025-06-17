import type { Preview } from '@storybook/react'
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../src/index.css'; // 导入包含 Tailwind 指令的主 CSS 文件
import { themes } from 'storybook/internal/theming';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.light, // 强制设置为 Light 模式
  },
};

export const decorators = [
  // 强制light模式装饰器
  (Story: any) => {
    React.useEffect(() => {
      // 确保document.documentElement没有dark类
      document.documentElement.classList.remove('dark');
      // 移除任何可能的系统dark模式类
      document.body.classList.remove('dark');

      // 添加light类
      document.documentElement.classList.add('light');
      document.body.classList.add('light');

      // 覆盖媒体查询，强制禁用系统dark模式检测
      const style = document.createElement('style');
      style.textContent = `
        @media (prefers-color-scheme: dark) {
          :root:not(.dark) * {
            color-scheme: light !important;
          }
        }
        /* 强制覆盖所有dark模式样式 */
        .dark * {
          color-scheme: light !important;
        }
        /* 确保根元素始终是light模式 */
        html, body {
          color-scheme: light !important;
          background-color: white !important;
        }
      `;
      style.id = 'force-light-mode';

      // 移除之前可能存在的样式
      const existingStyle = document.getElementById('force-light-mode');
      if (existingStyle) {
        existingStyle.remove();
      }

      document.head.appendChild(style);

      return () => {
        const styleToRemove = document.getElementById('force-light-mode');
        if (styleToRemove) {
          styleToRemove.remove();
        }
      };
    }, []);

    return React.createElement(Story);
  },
  // BrowserRouter 装饰器，为所有 stories 提供路由上下文
  (Story: any) => React.createElement(
    BrowserRouter,
    {},
    React.createElement(Story)
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;