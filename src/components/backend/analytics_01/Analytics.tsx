import React from 'react';
import MetricsCard from './MetricsCard';
import AreaChartCard from './AreaChartCard';
import ProgressCard from './ProgressCard';
import RevenueChart from './RevenueChart';
import DonutChart from './DonutChart';
import StackedBarChart from './StackedBarChart';
import StatsList from './StatsList';

// 莫兰迪色系浅紫色主题配置
const THEME_COLORS = {
  // 主要莫兰迪紫色系
  primary: {
    50: '#fdfcff',
    100: '#f8f5fc', 
    200: '#f0eaf5',
    300: '#e8dced',
    400: '#d9c7df',
    500: '#c8b9d4', // 主色 - 浅紫灰
    600: '#b5a3c7',
    700: '#9a8aa8',
    800: '#7d6e89',
    900: '#5f5269',
  },
  // 辅助莫兰迪色系
  secondary: {
    50: '#faf9fb',
    100: '#f4f1f6',
    200: '#ebe5ef',
    300: '#ddd4e3',
    400: '#c9bdd1',
    500: '#b5a3c7', // 辅助色
    600: '#a08fb5',
    700: '#8a7a9e',
    800: '#736585',
    900: '#5d526b',
  },
  // 成功色 - 莫兰迪绿
  success: {
    50: '#f8faf9',
    100: '#f0f4f2',
    200: '#e1e9e4',
    300: '#cddbd2',
    400: '#b3c7bb',
    500: '#9bb3a4', // 成功色
    600: '#849e8e',
    700: '#6d8577',
    800: '#596b61',
    900: '#47554c',
  },
  // 警告色 - 莫兰迪橙
  warning: {
    50: '#fdfaf8',
    100: '#f9f3ee',
    200: '#f2e6d8',
    300: '#e8d4ba',
    400: '#d9bd93',
    500: '#c9a876', // 警告色
    600: '#b89560',
    700: '#a0804c',
    800: '#846a3e',
    900: '#6a5532',
  },
  // 错误色 - 莫兰迪红
  error: {
    50: '#fdfafa',
    100: '#f9f2f2',
    200: '#f1e3e3',
    300: '#e6cece',
    400: '#d4b1b1',
    500: '#c19696', // 错误色
    600: '#ad7f7f',
    700: '#936969',
    800: '#785656',
    900: '#5f4545',
  },
  // 中性莫兰迪色系
  neutral: {
    50: '#fdfcfd',
    100: '#f8f7f8',
    200: '#f0eff1',
    300: '#e5e3e7',
    400: '#d2cfd5',
    500: '#b8b4bc', // 中性色
    600: '#9e99a3',
    700: '#837e8a',
    800: '#6a6571',
    900: '#52505a',
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
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 p-6 flex flex-col gap-6" style={{ backgroundColor: '#f8f5fc' }}>
      
      {/* 顶部标题区域 - 软UI风格 */}
      <div className="flex items-center justify-between mb-4">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg" style={{ 
          boxShadow: '12px 12px 24px rgba(200, 185, 212, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.7)',
          backgroundColor: '#fdfcff'
        }}>
          <h1 className="text-3xl font-bold text-gray-800 mb-2" style={{ color: '#1f2937' }}>
            数据分析中心
          </h1>
          <p className="text-gray-600 text-sm font-light" style={{ color: '#4b5563' }}>实时监控 · 智能分析 · 精准决策</p>
        </div>
        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-2" style={{ 
          boxShadow: '8px 8px 16px rgba(200, 185, 212, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.6)',
          backgroundColor: '#fdfcff'
        }}>
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" style={{ backgroundColor: '#22c55e' }}></div>
          <span className="text-gray-700 text-sm font-bold" style={{ color: '#22c55e' }}>系统运行正常</span>
        </div>
      </div>

      {/* 上半部分 - 收入报告大图表 */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* 左侧大图表 - 收入报告 */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-1" style={{ 
            boxShadow: '16px 16px 32px rgba(200, 185, 212, 0.2), -16px -16px 32px rgba(255, 255, 255, 0.8)',
            backgroundColor: '#fdfcff'
          }}>
            <div className="bg-white/80 rounded-2xl" style={{ 
              boxShadow: 'inset 8px 8px 16px rgba(200, 185, 212, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
              backgroundColor: '#fdfcff'
            }}>
              <RevenueChart {...revenueChartProps} />
            </div>
          </div>
        </div>
        {/* 右侧小卡片 */}
        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[420px] min-w-[300px] flex-shrink-0">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-1 w-full" style={{ 
            boxShadow: '16px 16px 32px rgba(200, 185, 212, 0.2), -16px -16px 32px rgba(255, 255, 255, 0.8)',
            backgroundColor: '#fdfcff'
          }}>
            <div className="bg-white/80 rounded-2xl" style={{ 
              boxShadow: 'inset 8px 8px 16px rgba(200, 185, 212, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
              backgroundColor: '#fdfcff'
            }}>
              <StackedBarChart {...stackedBarChartProps} />
            </div>
          </div>
        </div>
      </div>

      {/* 中间部分 - 销售和支持数据 */}
      <div className="flex flex-col lg:flex-row gap-6 items-stretch">
        {/* 左侧卡片组 */}
        <div className="flex flex-col gap-6 w-full max-w-[540px] flex-shrink-0">
          {/* 指标卡片 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-1" style={{ 
            boxShadow: '16px 16px 32px rgba(200, 185, 212, 0.2), -16px -16px 32px rgba(255, 255, 255, 0.8)',
            backgroundColor: '#fdfcff'
          }}>
            <div className="bg-white/80 rounded-2xl" style={{ 
              boxShadow: 'inset 8px 8px 16px rgba(200, 185, 212, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
              backgroundColor: '#fdfcff'
            }}>
              <MetricsCard {...metricsCardProps} />
            </div>
          </div>
          {/* 图表组合 */}
          <div className="flex flex-col sm:flex-row gap-6 min-h-[320px]">
            <div className="flex-1 flex">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-1 w-full" style={{ 
                boxShadow: '16px 16px 32px rgba(200, 185, 212, 0.2), -16px -16px 32px rgba(255, 255, 255, 0.8)',
                backgroundColor: '#fdfcff'
              }}>
                <div className="bg-white/80 rounded-2xl h-full" style={{ 
                  boxShadow: 'inset 8px 8px 16px rgba(200, 185, 212, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
                  backgroundColor: '#fdfcff'
                }}>
                  <AreaChartCard {...areaChartCardProps} />
                </div>
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-1 w-full" style={{ 
                boxShadow: '16px 16px 32px rgba(200, 185, 212, 0.2), -16px -16px 32px rgba(255, 255, 255, 0.8)',
                backgroundColor: '#fdfcff'
              }}>
                <div className="bg-white/80 rounded-2xl h-full" style={{ 
                  boxShadow: 'inset 8px 8px 16px rgba(200, 185, 212, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
                  backgroundColor: '#fdfcff'
                }}>
                  <ProgressCard {...progressCardProps} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 右侧大卡片组 */}
        <div className="flex flex-col gap-6 flex-1 min-w-0">
          <div className="flex flex-col xl:flex-row gap-6 min-h-[320px]">
            <div className="flex-1 flex">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-1 w-full" style={{ 
                boxShadow: '16px 16px 32px rgba(200, 185, 212, 0.2), -16px -16px 32px rgba(255, 255, 255, 0.8)',
                backgroundColor: '#fdfcff'
              }}>
                <div className="bg-white/80 rounded-2xl h-full" style={{ 
                  boxShadow: 'inset 8px 8px 16px rgba(200, 185, 212, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
                  backgroundColor: '#fdfcff'
                }}>
                  <DonutChart {...donutChartProps} />
                </div>
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-1 w-full" style={{ 
                boxShadow: '16px 16px 32px rgba(200, 185, 212, 0.2), -16px -16px 32px rgba(255, 255, 255, 0.8)',
                backgroundColor: '#fdfcff'
              }}>
                <div className="bg-white/80 rounded-2xl h-full" style={{ 
                  boxShadow: 'inset 8px 8px 16px rgba(200, 185, 212, 0.1), inset -8px -8px 16px rgba(255, 255, 255, 0.9)',
                  backgroundColor: '#fdfcff'
                }}>
                  <StatsList {...statsListProps} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部状态栏 - 软UI风格 */}
      <div className="mt-4">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4" style={{ 
          boxShadow: '12px 12px 24px rgba(200, 185, 212, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.7)',
          backgroundColor: '#fdfcff'
        }}>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6 text-gray-600" style={{ color: '#4b5563' }}>
              <span className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#c8b9d4' }}></div>
                数据实时更新
              </span>
              <span className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#9bb3a4' }}></div>
                API连接正常
              </span>
              <span className="font-light">最后更新: {new Date().toLocaleTimeString()}</span>
            </div>
            <div className="text-xs font-bold text-gray-500" style={{ color: '#374151' }}>
              v2.1.0 | 软UI版
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
