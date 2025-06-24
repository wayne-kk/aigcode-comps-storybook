import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardHeader } from '@ui/card';

interface PricingComponentProps {
  averageDailySales?: string;
  salesAmount?: string;
  isTrendingDown?: boolean;
  chartData?: Array<{
    name: string;
    mobile: number;
  }>;
}

function PricingComponent({
  averageDailySales = '平均日销售额',
  salesAmount = '¥28,450',
  isTrendingDown = false,
  chartData = [
    { name: '1月', mobile: 68.333 },
    { name: '2月', mobile: 20.833 },
    { name: '3月', mobile: 52.5 },
    { name: '4月', mobile: 24.792 },
    { name: '5月', mobile: 48.542 },
    { name: '6月', mobile: 65 },
  ],
}: PricingComponentProps) {
  return (
    <div className="lg:col-span-4 w-full max-w-[533px] h-full flex flex-col">
      <Card className="flex flex-col py-6 min-h-[228px] h-full overflow-hidden pb-0 rounded-xl bg-transparent border-0 shadow-none">
        <CardHeader className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1 px-6 pb-0">
          <div className="text-sm font-bold text-gray-600" style={{ color: '#374151' }}>{averageDailySales}</div>
          <div className="font-bold mt-1 mb-6 text-3xl text-gray-800" style={{ color: '#111827' }}>{salesAmount}</div>
          <div className="col-start-2 row-span-2 row-start-1 self-start justify-self-end">
            <div 
              className="p-2 rounded-xl"
              style={{ 
                backgroundColor: '#fdfcff',
                boxShadow: '6px 6px 12px rgba(200, 185, 212, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8)'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: '#9bb3a4' }}
              >
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
          </div>
        </CardHeader>
        <div className="flex justify-center text-xs aspect-auto min-h-[120px] flex-1 w-full mt-auto">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c8b9d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#c8b9d4" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="mobile"
                stroke="#c8b9d4"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#fillMobile)"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(253, 252, 255, 0.95)',
                  border: '1px solid rgba(200, 185, 212, 0.2)',
                  borderRadius: '12px',
                  color: '#1f2937',
                  fontSize: '12px',
                  boxShadow: '8px 8px 16px rgba(200, 185, 212, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                }} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}

export default PricingComponent;
