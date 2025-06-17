import React from 'react';
import MetricsCard from './MetricsCard';
import AreaChartCard from './AreaChartCard';
import ProgressCard from './ProgressCard';
import RevenueChart from './RevenueChart';
import DonutChart from './DonutChart';
import StackedBarChart from './StackedBarChart';
import StatsList from './StatsList';

// 统一颜色主题配置
const THEME_COLORS = {
  // 主要品牌色 - 蓝色系
  primary: {
    50: '#eff6ff',
    100: '#dbeafe', 
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // 主色
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  // 辅助色 - 紫色系
  secondary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe', 
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6', // 辅助色
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
  },
  // 成功色 - 绿色系
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac', 
    400: '#4ade80',
    500: '#22c55e', // 成功色
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  // 警告色 - 橙色系
  warning: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316', // 警告色
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  // 错误色 - 红色系
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // 错误色
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b', 
    900: '#7f1d1d',
  },
  // 灰色系
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

// 子组件 props 类型定义
export type MetricsCardProps = {
  title?: string;
  description?: string;
  analyticsItems?: {
    value: string;
    label: string;
  }[];
};

export type AreaChartCardProps = {
  averageDailySales?: string;
  salesAmount?: string;
  isTrendingDown?: boolean;
  chartData?: Array<{
    name: string;
    mobile: number;
  }>;
};

export type ProgressCardProps = {
  description?: string;
  totalSales?: string;
  orderPercentage?: string;
  visitPercentage?: string;
  orderLabel?: string;
  visitLabel?: string;
  orderBarPercentage?: number;
  visitBarPercentage?: number;
};

export type RevenueChartProps = {
  title?: string;
  description?: string;
  amount?: string;
  percentage?: string;
  isPositive?: boolean;
  chartData?: Array<{
    name: string;
    value: number;
  }>;
  earningsData?: {
    amount: string;
    percentage: number;
  };
  profitData?: {
    amount: string;
    percentage: number;
  };
  expenseData?: {
    amount: string;
    percentage: number;
  };
};

export type DonutChartProps = {
  completionPercentage?: number;
  newTickets?: number;
  openTickets?: number;
  responseTime?: string;
};

export type StackedBarChartProps = {
  totalEarning?: string;
  percentage?: string;
  percentageValue?: string;
  chartData?: Array<{
    name: string;
    desktop: number;
    mobile: number;
  }>;
  totalRevenue?: string;
  totalRevenueSubtitle?: string;
  totalRevenueAmount?: string;
  totalSales?: string;
  totalSalesSubtitle?: string;
  totalSalesAmount?: string;
};

export type StatsListProps = {
  title?: string;
  description?: string;
  stats?: Array<{
    icon: React.ReactNode;
    label: string;
    value: string;
    percentage: string;
    isPositive: boolean;
  }>;
};

// Analytics 组件 props 类型
export type AnalyticsProps = {
  metricsCardProps?: MetricsCardProps;
  areaChartCardProps?: AreaChartCardProps;
  progressCardProps?: ProgressCardProps;
  revenueChartProps?: RevenueChartProps;
  donutChartProps?: DonutChartProps;
  stackedBarChartProps?: StackedBarChartProps;
  statsListProps?: StatsListProps;
};

// MetricsCard 默认 props
const defaultMetricsCardProps: MetricsCardProps = {
  title: '网站分析',
  description: '总转化率 28.5%',
  analyticsItems: [
    { value: '432', label: '直接访问' },
    { value: '216', label: '自然搜索' },
    { value: '29%', label: '会话数' },
    { value: '2.3K', label: '页面浏览量' },
    { value: '1.6K', label: '潜在客户' },
    { value: '8%', label: '转化率' },
  ],
};

// AreaChartCard 默认 props
const defaultAreaChartCardProps: AreaChartCardProps = {
  averageDailySales: '平均日销售额',
  salesAmount: '¥28,450',
  isTrendingDown: false,
  chartData: [
    { name: '1月', mobile: 68.333 },
    { name: '2月', mobile: 20.833 },
    { name: '3月', mobile: 52.5 },
    { name: '4月', mobile: 24.792 },
    { name: '5月', mobile: 48.542 },
    { name: '6月', mobile: 65 },
  ],
};

// ProgressCard 默认 props
const defaultProgressCardProps: ProgressCardProps = {
  description: '销售概览',
  totalSales: '¥42.5K',
  orderPercentage: '62.2%',
  visitPercentage: '25.5%',
  orderLabel: '订单',
  visitLabel: '访问',
  orderBarPercentage: 70,
  visitBarPercentage: 30,
};

// RevenueChart 默认 props
const defaultRevenueChartProps: RevenueChartProps = {
  title: '收入报告',
  description: '最近 28 天',
  amount: '¥14,680',
  percentage: '+12.5%',
  isPositive: true,
  chartData: [
    { name: '周一', value: 80 },
    { name: '周二', value: 65 },
    { name: '周三', value: 85 },
    { name: '周四', value: 40 },
    { name: '周五', value: 55 },
    { name: '周六', value: 70 },
    { name: '周日', value: 90 },
  ],
  earningsData: {
    amount: '¥5,456',
    percentage: 85,
  },
  profitData: {
    amount: '¥2,563',
    percentage: 60,
  },
  expenseData: {
    amount: '¥741',
    percentage: 95,
  },
};

// DonutChart 默认 props
const defaultDonutChartProps: DonutChartProps = {
  completionPercentage: 88,
  newTickets: 40,
  openTickets: 25,
  responseTime: '1 天',
};

// StackedBarChart 默认 props
const defaultStackedBarChartProps: StackedBarChartProps = {
  totalEarning: '总收入',
  percentage: '83%',
  percentageValue: '24.2%',
  chartData: [
    { name: '1月', desktop: 54.87, mobile: 23.6 },
    { name: '2月', desktop: 89.98, mobile: 59 },
    { name: '3月', desktop: 69.92, mobile: 35.4 },
    { name: '4月', desktop: 21.53, mobile: 56.05 },
    { name: '5月', desktop: 61.66, mobile: 38.35 },
    { name: '6月', desktop: 63.13, mobile: 41.3 },
  ],
  totalRevenue: '总收入',
  totalRevenueSubtitle: '客户付款',
  totalRevenueAmount: '+¥1,260',
  totalSales: '总销售额',
  totalSalesSubtitle: '退款',
  totalSalesAmount: '-¥980',
};

// StatsList 默认 props
const defaultStatsListProps: StatsListProps = {
  title: '月度活动状态',
  description: '8.5K 社交访客',
  stats: [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      label: '邮件',
      value: '1.503',
      percentage: '-0.3%',
      isPositive: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      label: '已打开',
      value: '6.043',
      percentage: '2.1%',
      isPositive: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M12.586 12.586 19 19"></path>
          <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path>
        </svg>
      ),
      label: '已点击',
      value: '600',
      percentage: '-2.1%',
      isPositive: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="19" x2="19" y1="8" y2="14"></line>
          <line x1="22" x2="16" y1="11" y2="11"></line>
        </svg>
      ),
      label: '订阅',
      value: '490',
      percentage: '8.5%',
      isPositive: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" x2="12" y1="8" y2="12"></line>
          <line x1="12" x2="12.01" y1="16" y2="16"></line>
        </svg>
      ),
      label: '投诉',
      value: '490',
      percentage: '4.5%',
      isPositive: true,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-4"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="22" x2="16" y1="11" y2="11"></line>
        </svg>
      ),
      label: '取消订阅',
      value: '1.2',
      percentage: '-0.5%',
      isPositive: false,
    },
  ],
};

function Analytics({
  metricsCardProps = defaultMetricsCardProps,
  areaChartCardProps = defaultAreaChartCardProps,
  progressCardProps = defaultProgressCardProps,
  revenueChartProps = defaultRevenueChartProps,
  donutChartProps = defaultDonutChartProps,
  stackedBarChartProps = defaultStackedBarChartProps,
  statsListProps = defaultStatsListProps,
}: AnalyticsProps) {
  return (
    <div className="w-full min-h-screen bg-[#f8fafc] p-4 flex flex-col gap-4">
      {/* 上半部分 - 收入报告大图表 */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        {/* 左侧大图表 - 收入报告 */}
        <div className="flex-1 min-w-0 flex flex-col">
          <RevenueChart {...revenueChartProps} />
        </div>
        {/* 右侧小卡片 */}
        <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[420px] min-w-[300px] flex-shrink-0">
          <StackedBarChart {...stackedBarChartProps} />
        </div>
      </div>

      {/* 中间部分 - 销售和支持数据 */}
      <div className="flex flex-col lg:flex-row gap-4 items-stretch">
        {/* 左侧卡片组 */}
        <div className="flex flex-col gap-4 w-full max-w-[540px] flex-shrink-0">
          <MetricsCard {...metricsCardProps} />
          <div className="flex flex-col sm:flex-row gap-4 min-h-[320px]">
            <div className="flex-1 flex">
              <AreaChartCard {...areaChartCardProps} />
            </div>
            <div className="flex-1 flex">
              <ProgressCard {...progressCardProps} />
            </div>
          </div>
        </div>
        {/* 右侧大卡片组 */}
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <div className="flex flex-col xl:flex-row gap-4 min-h-[320px]">
            <div className="flex-1 flex">
              <DonutChart {...donutChartProps} />
            </div>
            <div className="flex-1 flex">
              <StatsList {...statsListProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
