// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Feature_09 from '../../../components/home/Feature/Feature_09';

const meta = {
  title: '组件/home/Feature/Feature_09',
  component: Feature_09,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof Feature_09>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div style={{ 
      padding: '20px',
      maxWidth: '100%',
      border: '1px solid #eee',
      borderRadius: '8px',
      height: '700px'
    }}>
      <Feature_09 />
    </div>
  ),
};
