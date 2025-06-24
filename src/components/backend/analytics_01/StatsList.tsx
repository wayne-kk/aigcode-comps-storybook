import React from 'react';
import { Card, CardHeader, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';

interface CampaignStatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  percentage: string;
  isPositive: boolean;
}

interface MonthlyCampaignStatsProps {
  title?: string;
  description?: string;
  stats?: CampaignStatItem[];
}

function PricingComponent({
  title = '月度活动状态',
  description = '8.5K 社交访客',
  stats = [
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
}: MonthlyCampaignStatsProps) {
  return (
    <div className="w-full max-w-[534px] h-full flex flex-col">
      <Card className="bg-transparent rounded-xl border-0 shadow-none h-full flex flex-col">
        <CardHeader className="px-6 pt-5 pb-2">
          <h3 className="text-lg font-bold text-gray-800" style={{ color: '#1f2937' }}>{title}</h3>
          <p className="text-sm mt-0.5 font-bold text-gray-600" style={{ color: '#374151' }}>{description}</p>
        </CardHeader>
        <CardContent className="px-6 pt-2 pb-5 flex-1 flex flex-col justify-center">
          <div className="space-y-3">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center py-2 px-3 rounded-xl transition-all duration-300 group"
                style={{ 
                  backgroundColor: '#fdfcff',
                  boxShadow: '6px 6px 12px rgba(200, 185, 212, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.8)'
                }}
              >
                <div 
                  className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: '#f8f5fc',
                    boxShadow: 'inset 4px 4px 8px rgba(200, 185, 212, 0.15), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                  }}
                >
                  <div style={{ color: '#c8b9d4' }}>
                    {stat.icon}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium group-hover:font-medium transition-all duration-300 text-gray-800" style={{ color: '#1f2937' }}>{stat.label}</p>
                </div>
                <div className="ml-auto flex items-center space-x-3">
                  <span className="text-sm font-bold group-hover:font-bold transition-all duration-300 text-gray-700" style={{ color: '#111827' }}>{stat.value}</span>
                  <div className="w-16 text-right">
                    <div
                      className="text-xs px-2 py-1 font-bold rounded-lg"
                      style={{
                        backgroundColor: '#fdfcff',
                        boxShadow: '3px 3px 6px rgba(200, 185, 212, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.8)',
                        color: stat.isPositive ? '#16a34a' : '#dc2626'
                      }}
                    >
                      {stat.percentage}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PricingComponent;
