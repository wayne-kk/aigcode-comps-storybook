// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Txxx from '../../../components/backend/dashboard/Txxx';

const meta = {
  title: '组件/backend/dashboard/Txxx',
  component: Txxx,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'backend 类别的组件',
  },
} satisfies Meta<typeof Txxx>;

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
      <Txxx />
    </div>
  ),
};
