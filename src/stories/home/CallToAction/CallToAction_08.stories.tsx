// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CallToAction_08 from '../../../components/home/CallToAction/CallToAction_08';

const meta = {
  title: '组件/home/CallToAction/CallToAction_08',
  component: CallToAction_08,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof CallToAction_08>;

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
      <CallToAction_08 />
    </div>
  ),
};
