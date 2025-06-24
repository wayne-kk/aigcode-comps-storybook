// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DateBarChart from '../../../components/backend/dashboard/DateBarChart';

const meta = {
  title: '组件/backend/dashboard/DateBarChart',
  component: DateBarChart,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'backend 类别的组件',
  },
} satisfies Meta<typeof DateBarChart>;

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
      <DateBarChart />
    </div>
  ),
};
