import React from 'react';
import { ChevronRight, Settings, BarChart3 } from 'lucide-react';

// 导入所有子组件
import MetricsCards from './MetricsCards';
import ChartAnalytics from './ChartAnalytics';
import TaskReminder from './TaskReminder';
import AnnualProgress from './AnnualProgress';
import EfficiencyChart from './EfficiencyChart';
import DataTable from './DataTable';

// 子组件 props 类型定义
export type MetricsCardsProps = {
  cards?: Array<{
    title: string;
    description: string;
    value: string;
    change: {
      value: string;
      isPositive: boolean;
    };
    icon: React.ReactNode;
  }>;
};

export type ChartAnalyticsProps = {
  title?: string;
  description?: string;
  timeRanges?: string[];
  selectedTimeRange?: string;
  chartData?: Array<{
    date: string;
    mobile: number;
    desktop: number;
  }>;
};

export type TaskReminderProps = {
  reminders?: Array<{
    priority: 'low' | 'medium' | 'high';
    completed: boolean;
    time: string;
    description: string;
    category: string;
  }>;
  onAddReminder?: () => void;
  onShowMore?: () => void;
  onToggleComplete?: (index: number) => void;
};

export type AnnualProgressProps = {
  title?: string;
  description?: string;
  yearData?: Array<{
    year: string;
    projects: number;
    width: number;
  }>;
};

export type EfficiencyChartProps = {
  title?: string;
  description?: string;
  visitorCount?: number;
  visitorLabel?: string;
  chartData?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  onMonthChange?: (month: string) => void;
};

export type DataTableProps = {
  projects?: Array<{
    id: string;
    name: string;
    client: {
      name: string;
      avatar: string;
    };
    startDate: string;
    deadline: string;
    status: 'active' | 'cancel' | 'completed' | 'pending';
    progress: number;
  }>;
};

// Management 组件 props 类型
export type ManagementProps = {
  metricsCardsProps?: MetricsCardsProps;
  chartAnalyticsProps?: ChartAnalyticsProps;
  taskReminderProps?: TaskReminderProps;
  annualProgressProps?: AnnualProgressProps;
  efficiencyChartProps?: EfficiencyChartProps;
  dataTableProps?: DataTableProps;
};

// MetricsCards 默认 props
const defaultMetricsCardsProps: MetricsCardsProps = {
  cards: [
    {
      title: '总收入',
      description: '较上月',
      value: '¥45,231.89',
      change: {
        value: '+20.1%',
        isPositive: true,
      },
      icon: <BarChart3 className="text-gray-400/50 size-5" />,
    },
    {
      title: '活跃项目',
      description: '较上月',
      value: '23',
      change: {
        value: '+5.02%',
        isPositive: true,
      },
      icon: <Settings className="text-gray-400/50 size-5" />,
    },
    {
      title: '新客户',
      description: '较上月',
      value: '156',
      change: {
        value: '-3.58%',
        isPositive: false,
      },
      icon: <ChevronRight className="text-gray-400/50 size-5" />,
    },
    {
      title: '时间消耗',
      description: '较上月',
      value: '168小时40分',
      change: {
        value: '-2.8%',
        isPositive: false,
      },
      icon: <BarChart3 className="text-gray-400/50 size-5" />,
    },
  ],
};

// ChartAnalytics 默认 props
const defaultChartAnalyticsProps: ChartAnalyticsProps = {
  title: '项目概览',
  description: '最近3个月的总计',
  timeRanges: ['最近3个月', '最近30天', '最近7天'],
  selectedTimeRange: '最近3个月',
  chartData: [
    { date: '3月19日', mobile: 45, desktop: 120 },
    { date: '3月24日', mobile: 76, desktop: 350 },
    { date: '3月26日', mobile: 35, desktop: 190 },
    { date: '4月1日', mobile: 60, desktop: 230 },
    { date: '4月7日', mobile: 40, desktop: 180 },
    { date: '4月13日', mobile: 50, desktop: 250 },
    { date: '4月19日', mobile: 65, desktop: 270 },
    { date: '4月26日', mobile: 30, desktop: 190 },
    { date: '5月2日', mobile: 45, desktop: 240 },
    { date: '5月8日', mobile: 70, desktop: 320 },
    { date: '5月15日', mobile: 55, desktop: 280 },
    { date: '5月22日', mobile: 60, desktop: 250 },
    { date: '5月29日', mobile: 40, desktop: 220 },
    { date: '6月4日', mobile: 50, desktop: 290 },
    { date: '6月11日', mobile: 75, desktop: 340 },
  ],
};

// TaskReminder 默认 props
const defaultTaskReminderProps: TaskReminderProps = {
  reminders: [
    {
      priority: 'low',
      completed: false,
      time: '今天，12:30',
      description: '为初学者创建设计培训。',
      category: '设计教育',
    },
    {
      priority: 'medium',
      completed: true,
      time: '今天，10:00',
      description: '与新设计团队会议。',
      category: '会议',
    },
    {
      priority: 'high',
      completed: false,
      time: '明天，16:30',
      description: '回复客户支持邮件。',
      category: '客户支持',
    },
  ],
  onAddReminder: () => {},
  onShowMore: () => {},
  onToggleComplete: () => {},
};

// AnnualProgress 默认 props
const defaultAnnualProgressProps: AnnualProgressProps = {
  title: '年度成就',
  description: '今年平均每天完成的项目数量比去年更多。',
  yearData: [
    { year: '2024', projects: 57, width: 100 },
    { year: '2023', projects: 29, width: 80 },
    { year: '2022', projects: 35, width: 70 },
  ],
};

// EfficiencyChart 默认 props
const defaultEfficiencyChartProps: EfficiencyChartProps = {
  title: '项目效率',
  description: '2026年1月 - 6月',
  visitorCount: 186,
  visitorLabel: '访客',
  chartData: [
    { name: 'january', value: 30, color: '#000000' },
    { name: 'february', value: 25, color: '#333333' },
    { name: 'march', value: 20, color: '#4D4D4D' },
    { name: 'april', value: 15, color: '#666666' },
    { name: 'may', value: 10, color: '#AAAAAA' },
  ],
  onMonthChange: () => {},
};

// DataTable 默认 props
const defaultDataTableProps: DataTableProps = {
  projects: [
    {
      id: '1',
      name: '产品开发',
      client: {
        name: '张伟',
        avatar: 'https://bundui-images.netlify.app/avatars/01.png',
      },
      startDate: '2024/03/20',
      deadline: '2024/04/05',
      status: 'active',
      progress: 30,
    },
    {
      id: '2',
      name: '新办公楼',
      client: {
        name: '李小华',
        avatar: 'https://bundui-images.netlify.app/avatars/02.png',
      },
      startDate: '2024/03/15',
      deadline: '2024/04/10',
      status: 'cancel',
      progress: 60,
    },
    {
      id: '3',
      name: '移动应用设计',
      client: {
        name: '王明',
        avatar: 'https://bundui-images.netlify.app/avatars/03.png',
      },
      startDate: '2024/03/10',
      deadline: '2024/04/01',
      status: 'completed',
      progress: 100,
    },
    {
      id: '4',
      name: '网站与博客',
      client: {
        name: '陈丽',
        avatar: 'https://bundui-images.netlify.app/avatars/04.png',
      },
      startDate: '2024/03/05',
      deadline: '2024/03/20',
      status: 'pending',
      progress: 50,
    },
    {
      id: '5',
      name: '营销活动',
      client: {
        name: '刘强',
        avatar: 'https://bundui-images.netlify.app/avatars/05.png',
      },
      startDate: '2024/03/01',
      deadline: '2024/04/15',
      status: 'active',
      progress: 45,
    },
    {
      id: '6',
      name: '电商平台',
      client: {
        name: '赵静',
        avatar: 'https://bundui-images.netlify.app/avatars/06.png',
      },
      startDate: '2024/02/25',
      deadline: '2024/05/10',
      status: 'pending',
      progress: 20,
    },
  ],
};

function Management({
  metricsCardsProps = defaultMetricsCardsProps,
  chartAnalyticsProps = defaultChartAnalyticsProps,
  taskReminderProps = defaultTaskReminderProps,
  annualProgressProps = defaultAnnualProgressProps,
  efficiencyChartProps = defaultEfficiencyChartProps,
  dataTableProps = defaultDataTableProps,
}: ManagementProps) {
  return (
    <div className="min-h-screen bg-gray-50/30 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* 页面头部 */}
        <div className="flex flex-col space-y-4">
          {/* 面包屑导航 */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Dashboard</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Management</span>
          </nav>
          
          {/* 页面标题和操作 */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                <BarChart3 className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">管理中心</h1>
                <p className="text-gray-500 mt-1">项目管理和数据分析概览</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Settings className="h-4 w-4 mr-2" />
                设置
              </button>
            </div>
          </div>
        </div>

        {/* 统计卡片区域 */}
        <div className="w-full">
          <MetricsCards {...metricsCardsProps} />
        </div>

        {/* 图表和数据分析区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 左侧区域 - 项目概览和提醒 */}
          <div className="lg:col-span-2 space-y-6">
            <ChartAnalytics {...chartAnalyticsProps} />
            <TaskReminder {...taskReminderProps} />
          </div>
          
          {/* 右侧区域 - 成就统计和效率分析 */}
          <div className="space-y-6">
            <AnnualProgress {...annualProgressProps} />
            <EfficiencyChart {...efficiencyChartProps} />
          </div>
        </div>

        {/* 项目表格区域 */}
        <div className="w-full">
          <DataTable {...dataTableProps} />
        </div>
      </div>
    </div>
  );
}

export default Management;
