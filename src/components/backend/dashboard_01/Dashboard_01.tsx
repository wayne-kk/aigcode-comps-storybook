import React from 'react';
import TicketStats from './TicketStats';
import TicketChart from './TicketChart';
import ConversionAnalysis from './ConversionAnalysis';
import ChannelDistribution from './ChannelDistribution';
import CustomerSatisfaction from './CustomerSatisfaction';

// 导入并重新导出各个组件的类型定义
interface StatItem {
  title: string;
  value: string;
  percentage: number;
  isPositive: boolean;
}

interface ChartData {
  date: string;
  created: number;
  resolved: number;
  label: string;
}

interface ConversionData {
  name: string;
  value: number;
  color: string;
}

interface ChartDataItem {
  desktop: number;
  mobile: number;
  email: number;
  messageger: number;
  wechat: number;
  [key: string]: number;
}

interface CustomerSatisfactionData {
  positive: number;
  neutral: number;
  negative: number;
  totalResponses: number;
}

// Dashboard_01 组件的 Props 类型定义
interface Dashboard01Props {
  // 票据统计组件的 props
  ticketStats?: {
    stats?: StatItem[];
  };
  
  // 票据图表组件的 props (Bxxx 没有props，使用内部状态)
  ticketChart?: {};
  
  // 转化分析组件的 props
  conversionAnalysis?: {
    title?: string;
    salesCount?: number;
    salesLabel?: string;
    data?: ConversionData[];
  };
  
  // 渠道分布组件的 props
  channelDistribution?: {
    title?: string;
    totalTickets?: number;
  };
  
  // 客户满意度组件的 props
  customerSatisfaction?: {
    satisfactionData?: CustomerSatisfactionData;
  };
  
  className?: string;
}

// 默认数据
const defaultTicketStatsData = {
  stats: [
    {
      title: '已创建票据',
      value: '24,208',
      percentage: -5,
      isPositive: false,
    },
    {
      title: '未解决票据',
      value: '4,564',
      percentage: 2,
      isPositive: true,
    },
    {
      title: '已解决票据',
      value: '18,208',
      percentage: 8,
      isPositive: true,
    },
    {
      title: '平均首次回复时间',
      value: '12:01 分钟',
      percentage: 8,
      isPositive: true,
    },
    {
      title: '客户满意度',
      value: '4.8/5.0',
      percentage: 12,
      isPositive: true,
    },
  ] as StatItem[],
};

const defaultConversionAnalysisData = {
  title: '转化分析',
  salesCount: 17220,
  salesLabel: '销售额',
  data: [
    { name: '北京', value: 12320, color: '#1a56db' },
    { name: '上海', value: 6260, color: '#06b6d4' },
    { name: '广州', value: 8320, color: '#f97316' },
    { name: '深圳', value: 11320, color: '#10b981' },
    { name: '杭州', value: 9320, color: '#8b5cf6' },
    { name: '南京', value: 7320, color: '#f59e0b' },
  ] as ConversionData[],
};

const defaultChannelDistributionData = {
  title: '渠道分布统计',
  totalTickets: 2380,
};

const defaultCustomerSatisfactionData = {
  satisfactionData: {
    positive: 80,
    neutral: 15,
    negative: 5,
    totalResponses: 156,
  } as CustomerSatisfactionData,
};

/**
 * Dashboard_01 组件 - 客服管理面板
 * 
 * @param props - Dashboard_01 组件的配置项
 * @returns React 组件
 */
const Dashboard_01: React.FC<Dashboard01Props> = ({
  ticketStats = defaultTicketStatsData,
  ticketChart = {},
  conversionAnalysis = defaultConversionAnalysisData,
  channelDistribution = defaultChannelDistributionData,
  customerSatisfaction = defaultCustomerSatisfactionData,
  className = '',
}) => {
  return (
    <div className={`w-full space-y-6 bg-gray-50 min-h-screen ${className}`}>
      {/* 页面标题 */}
      <div className="px-6 pt-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">客服管理面板</h1>
        <p className="text-gray-600">查看您的客服工单统计、处理进度、转化分析和客户满意度</p>
      </div>

      {/* 第一行：票据统计概览（占满整行） */}
      <div className="w-full">
        <TicketStats {...ticketStats} />
      </div>

      {/* 第二行：票据图表（占满整行） */}
      <div className="w-full">
        <TicketChart {...ticketChart} />
      </div>

      {/* 第三行：分析数据区域 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 px-6">
        {/* 左侧：转化分析 */}
        <div className="xl:col-span-1">
          <ConversionAnalysis {...conversionAnalysis} />
        </div>

        {/* 中间：渠道分布 */}
        <div className="xl:col-span-1">
          <ChannelDistribution {...channelDistribution} />
        </div>

        {/* 右侧：客户满意度 */}
        <div className="xl:col-span-1">
          <CustomerSatisfaction {...customerSatisfaction} />
        </div>
      </div>

      {/* 底部留白 */}
      <div className="pb-6"></div>
    </div>
  );
};

// 导出组件和类型
export default Dashboard_01;
export type { 
  Dashboard01Props, 
  StatItem, 
  ChartData, 
  ConversionData, 
  ChartDataItem, 
  CustomerSatisfactionData 
};
