import React from 'react';
import OrderTracking from './OrderTracking';
import RevenueChart from './RevenueChart';
import FinancialOverview from './FinancialOverview';
import BestSellingProducts from './BestSellingProducts';

// 导入并重新导出各个组件的类型定义
interface OrderData {
  id: string;
  customerName: string;
  qtyItems: string;
  amount: string;
  paymentMethod: string;
  status: 'new order' | 'in progress' | 'on hold' | 'completed';
}

interface RevenueData {
  date: string;
  desktop: number;
  mobile: number;
}

interface FinancialCardProps {
  title: string;
  amount: string;
  percentChange: string;
  isIncrease: boolean;
  comparisonText: string;
}

interface ProductItem {
  id: string;
  name: string;
  image: string;
  soldCount: number;
}

// Sales 组件的 Props 类型定义
interface SalesProps {
  // 订单追踪组件的 props
  trackOrder?: {
    newOrderCount?: number;
    onProgressCount?: number;
    completedCount?: number;
    returnCount?: number;
    newOrderPercentage?: number;
    onProgressPercentage?: number;
    completedPercentage?: number;
    returnPercentage?: number;
    orders?: OrderData[];
    totalRows?: number;
    selectedRows?: number;
  };
  
  // 收入图表组件的 props
  revenueChart?: {
    title?: string;
    description?: string;
    desktopRevenue?: number;
    mobileRevenue?: number;
    chartData?: RevenueData[];
  };
  
  // 财务卡片组件的 props
  financialCards?: {
    data?: FinancialCardProps[];
  };
  
  // 畅销产品组件的 props
  bestSellingProducts?: {
    title?: string;
    description?: string;
    products?: ProductItem[];
    onViewMore?: () => void;
  };
  
  className?: string;
}

// 默认数据
const defaultTrackOrderData = {
  newOrderCount: 43,
  onProgressCount: 12,
  completedCount: 40,
  returnCount: 2,
  newOrderPercentage: 0.5,
  onProgressPercentage: -0.3,
  completedPercentage: 0.5,
  returnPercentage: -0.5,
  orders: [
    {
      id: '1083',
      customerName: 'Marvin Dekidis',
      qtyItems: '2 Items',
      amount: '$34.5',
      paymentMethod: 'E-Wallet',
      status: 'new order' as const,
    },
    {
      id: '1082',
      customerName: 'Carter Lipshitz',
      qtyItems: '6 Items',
      amount: '$60.5',
      paymentMethod: 'Bank Transfer',
      status: 'in progress' as const,
    },
    {
      id: '1081',
      customerName: 'Addison Philips',
      qtyItems: '3 Items',
      amount: '$47.5',
      paymentMethod: 'E-Wallet',
      status: 'new order' as const,
    },
  ],
  totalRows: 16,
  selectedRows: 0,
};

const defaultRevenueChartData = {
  title: '销售收入图表',
  description: '过去 28 天',
  desktopRevenue: 13746,
  mobileRevenue: 13580,
  chartData: [
    { date: 'Apr 5', desktop: 57, mobile: 45 },
    { date: 'Apr 6', desktop: 32, mobile: 28 },
    { date: 'Apr 7', desktop: 45, mobile: 40 },
    { date: 'Apr 8', desktop: 65, mobile: 55 },
    { date: 'Apr 9', desktop: 48, mobile: 42 },
    { date: 'Apr 10', desktop: 25, mobile: 30 },
    { date: 'Apr 11', desktop: 38, mobile: 35 },
  ] as RevenueData[],
};

const defaultFinancialCardsData = {
  data: [
    {
      title: '总余额',
      amount: '¥103,045',
      percentChange: '3.6%',
      isIncrease: true,
      comparisonText: '与上月相比',
    },
    {
      title: '总收入',
      amount: '¥78,000',
      percentChange: '2.5%',
      isIncrease: true,
      comparisonText: '与上月相比',
    },
    {
      title: '总支出',
      amount: '¥15,010',
      percentChange: '6.0%',
      isIncrease: false,
      comparisonText: '与上月相比',
    },
    {
      title: '销售税',
      amount: '¥9,090',
      percentChange: '5.0%',
      isIncrease: true,
      comparisonText: '与上月相比',
    },
  ] as FinancialCardProps[],
};

const defaultBestSellingProductsData = {
  title: '畅销产品',
  description: '一目了然的热销产品',
  products: [
    { id: '1', name: '运动鞋', image: 'https://bundui-images.netlify.app/products/01.jpeg', soldCount: 316 },
    { id: '2', name: '黑色T恤', image: 'https://bundui-images.netlify.app/products/02.jpeg', soldCount: 274 },
    { id: '3', name: '牛仔裤', image: 'https://bundui-images.netlify.app/products/03.jpeg', soldCount: 195 },
    { id: '4', name: '红色运动鞋', image: 'https://bundui-images.netlify.app/products/04.jpeg', soldCount: 402 },
    { id: '5', name: '红色围巾', image: 'https://bundui-images.netlify.app/products/05.jpeg', soldCount: 280 },
    { id: '6', name: '厨房用品', image: 'https://bundui-images.netlify.app/products/06.jpeg', soldCount: 150 },
  ] as ProductItem[],
  onViewMore: () => {
    console.log('查看更多产品');
  },
};

/**
 * Sales 组件 - 销售数据面板
 * 
 * @param props - Sales 组件的配置项
 * @returns React 组件
 */
const Sales: React.FC<SalesProps> = ({
  trackOrder = defaultTrackOrderData,
  revenueChart = defaultRevenueChartData,
  financialCards = defaultFinancialCardsData,
  bestSellingProducts = defaultBestSellingProductsData,
  className = '',
}) => {
  return (
    <div className={`w-full space-y-6 p-6 bg-gray-50 min-h-screen ${className}`}>
      {/* 页面标题 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">销售数据面板</h1>
        <p className="text-gray-600">查看您的销售业绩、订单状态和产品分析</p>
      </div>

      {/* 主要内容区域：左侧销售数据，右侧畅销产品 */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* 左侧：销售数据和收入图表 */}
        <div className="xl:col-span-2 space-y-6">
          {/* 财务概览卡片 */}
          <div className="w-full">
            <FinancialOverview {...financialCards} />
          </div>
          
          {/* 收入图表 */}
          <div className="w-full">
            <RevenueChart {...revenueChart} />
          </div>
        </div>

        {/* 右侧：畅销产品 */}
        <div className="xl:col-span-1">
          <BestSellingProducts {...bestSellingProducts} />
        </div>
      </div>

      {/* 底部：订单追踪状态（占满整行） */}
      <div className="w-full">
        <OrderTracking {...trackOrder} />
      </div>
    </div>
  );
};

// 导出组件和类型
export default Sales;
export type { 
  SalesProps, 
  OrderData, 
  RevenueData, 
  FinancialCardProps, 
  ProductItem 
};
