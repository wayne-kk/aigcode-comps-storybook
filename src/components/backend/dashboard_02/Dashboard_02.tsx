import React from 'react';
import TeamMembers from './TeamMembers';
import SubscriptionStats from './SubscriptionStats';
import RevenueOverview from './RevenueOverview';
import PaymentHistory from './PaymentHistory';

// 导入并重新导出各个组件的类型定义
interface TeamMember {
  name: string;
  email: string;
  avatar: string;
  role: string;
}

interface ChartDataItem {
  value: number;
  name: string;
}

interface RevenueChartData {
  name: string;
  visitors: number;
}

interface Payment {
  id: string;
  customer: {
    firstName: string;
    lastName: string;
  };
  email: string;
  amount: number;
  status: 'success' | 'processing' | 'failed';
}

// Dashboard_02 组件的 Props 类型定义
interface Dashboard02Props {
  // 团队成员组件的 props
  teamMembers?: {
    title?: string;
    description?: string;
    teamMembers?: TeamMember[];
  };
  
  // 订阅统计组件的 props
  subscriptionStats?: {
    title?: string;
    value?: string;
    percentChange?: string;
    isPositive?: boolean;
    chartData?: ChartDataItem[];
  };
  
  // 收入概览组件的 props
  revenueOverview?: {
    title?: string;
    amount?: string;
    percentChange?: string;
    isPositive?: boolean;
    comparisonText?: string;
    chartData?: RevenueChartData[];
  };
  
  // 支付历史组件的 props
  paymentHistory?: {
    payments?: Payment[];
    selectedRows?: string[];
    onRowSelect?: (id: string) => void;
    onSelectAll?: () => void;
    onFilter?: (value: string) => void;
    onNextPage?: () => void;
    onPrevPage?: () => void;
    totalRows?: number;
  };
  
  className?: string;
}

// 默认数据
const defaultTeamMembersData = {
  title: '团队成员',
  description: '邀请您的团队成员进行协作。',
  teamMembers: [
    {
      name: '张小明',
      email: 'zhangxm@company.com',
      avatar: 'https://bundui-images.netlify.app/avatars/01.png',
      role: '查看者',
    },
    {
      name: '李小红',
      email: 'lixh@company.com',
      avatar: 'https://bundui-images.netlify.app/avatars/02.png',
      role: '开发者',
    },
    {
      name: '王小强',
      email: 'wangxq@company.com',
      avatar: 'https://bundui-images.netlify.app/avatars/03.png',
      role: '管理员',
    },
    {
      name: '刘小华',
      email: 'liuxh@company.com',
      avatar: 'https://bundui-images.netlify.app/avatars/01.png',
      role: '编辑者',
    },
  ] as TeamMember[],
};

const defaultSubscriptionStatsData = {
  title: '订阅统计',
  value: '+4,850',
  percentChange: '+180.1%',
  isPositive: true,
  chartData: [
    { value: 240, name: '1月' },
    { value: 300, name: '2月' },
    { value: 200, name: '3月' },
    { value: 278, name: '4月' },
    { value: 189, name: '5月' },
    { value: 239, name: '6月' },
    { value: 278, name: '7月' },
    { value: 189, name: '8月' },
  ] as ChartDataItem[],
};

const defaultRevenueOverviewData = {
  title: '总收入',
  amount: '¥152,318.90',
  percentChange: '+20.1%',
  isPositive: true,
  comparisonText: '与上月相比',
  chartData: [
    { name: '1月', visitors: 35 },
    { name: '2月', visitors: 70 },
    { name: '3月', visitors: 53 },
    { name: '4月', visitors: 88 },
    { name: '5月', visitors: 39 },
    { name: '6月', visitors: 65 },
  ] as RevenueChartData[],
};

const defaultPaymentHistoryData = {
  payments: [
    {
      id: '1',
      customer: { firstName: '张', lastName: '三' },
      email: 'zhangsan@email.com',
      amount: 3160,
      status: 'success' as const,
    },
    {
      id: '2',
      customer: { firstName: '李', lastName: '四' },
      email: 'lisi@email.com',
      amount: 2420,
      status: 'success' as const,
    },
    {
      id: '3',
      customer: { firstName: '王', lastName: '五' },
      email: 'wangwu@email.com',
      amount: 8370,
      status: 'processing' as const,
    },
    {
      id: '4',
      customer: { firstName: '赵', lastName: '六' },
      email: 'zhaoliu@email.com',
      amount: 8740,
      status: 'success' as const,
    },
    {
      id: '5',
      customer: { firstName: '刘', lastName: '七' },
      email: 'liuqi@email.com',
      amount: 7210,
      status: 'failed' as const,
    },
    {
      id: '6',
      customer: { firstName: '陈', lastName: '八' },
      email: 'chenba@email.com',
      amount: 5290,
      status: 'success' as const,
    },
  ] as Payment[],
  selectedRows: [] as string[],
  onRowSelect: (id: string) => {
    console.log('选择行:', id);
  },
  onSelectAll: () => {
    console.log('全选');
  },
  onFilter: (value: string) => {
    console.log('筛选:', value);
  },
  onNextPage: () => {
    console.log('下一页');
  },
  onPrevPage: () => {
    console.log('上一页');
  },
  totalRows: 16,
};

/**
 * Dashboard_02 组件 - 企业管理面板
 * 
 * @param props - Dashboard_02 组件的配置项
 * @returns React 组件
 */
const Dashboard_02: React.FC<Dashboard02Props> = ({
  teamMembers = defaultTeamMembersData,
  subscriptionStats = defaultSubscriptionStatsData,
  revenueOverview = defaultRevenueOverviewData,
  paymentHistory = defaultPaymentHistoryData,
  className = '',
}) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 ${className}`}>
      {/* 顶部渐变背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题区域 */}
        <div className="mb-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">
              企业管理面板
            </h1>
          </div>
          <p className="text-lg text-slate-600 ml-5">
            全面掌控您的团队、订阅数据、收入状况和支付记录
          </p>
        </div>

        {/* 主要内容区域 */}
        <div className="space-y-8">
          {/* 顶部数据卡片区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* 订阅统计卡片 */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <SubscriptionStats {...subscriptionStats} />
              </div>
            </div>
            
            {/* 收入概览卡片 */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
                <RevenueOverview {...revenueOverview} />
              </div>
            </div>
            
            {/* 团队成员卡片 */}
            <div className="lg:col-span-2 xl:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 h-full">
                <TeamMembers {...teamMembers} />
              </div>
            </div>
          </div>

          {/* 支付历史记录区域 */}
          <div className="w-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-xl shadow-slate-500/5 hover:shadow-slate-500/10 transition-all duration-300">
              <PaymentHistory {...paymentHistory} />
            </div>
          </div>
        </div>

        {/* 底部装饰性元素 */}
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-75" />
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150" />
          </div>
        </div>
      </div>
    </div>
  );
};

// 导出组件和类型
export default Dashboard_02;
export type { 
  Dashboard02Props, 
  TeamMember, 
  ChartDataItem, 
  RevenueChartData, 
  Payment 
};
