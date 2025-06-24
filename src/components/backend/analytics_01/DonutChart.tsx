import React from 'react';
import { Card, CardContent, CardFooter } from '@ui/card';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

interface PricingComponentProps {
  completionPercentage?: number;
  newTickets?: number;
  openTickets?: number;
  responseTime?: string;
}

function PricingComponent({
  completionPercentage = 88,
  newTickets = 40,
  openTickets = 25,
  responseTime = '1 天',
}: PricingComponentProps) {
  const chartData = [
    { name: 'completed', value: completionPercentage, fill: '#c8b9d4' },
    { name: 'remaining', value: 100 - completionPercentage, fill: 'rgba(248, 245, 252, 0.8)' },
  ];

  return (
    <div className="w-full max-w-[534px] mx-auto rounded-xl border-0 shadow-none overflow-hidden bg-transparent h-full flex flex-col">
      <Card className="flex flex-col h-full shadow-none border-0 flex-1 bg-transparent">
        <CardContent className="p-8 pb-16 flex justify-center items-center flex-1">
          <div className="w-full max-w-[200px] aspect-square relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  dataKey="value"
                  stroke="none"
                  startAngle={90}
                  endAngle={-270}
                />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central">
                  <tspan x="50%" y="45%" className="text-3xl font-bold" fill="#111827">
                    {completionPercentage}%
                  </tspan>
                  <tspan x="50%" y="65%" className="text-sm" fill="#4b5563">
                    已完成
                  </tspan>
                </text>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
        <CardFooter className="px-6 py-5 border-t-0 flex flex-row justify-between items-center" style={{ borderTop: '1px solid rgba(200, 185, 212, 0.2)' }}>
          <div className="flex items-center gap-3">
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ 
                backgroundColor: '#fdfcff',
                boxShadow: '6px 6px 12px rgba(200, 185, 212, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8)'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: '#c8b9d4' }}
              >
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M13 5v2"></path>
                <path d="M13 17v2"></path>
                <path d="M13 11v2"></path>
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800" style={{ color: '#1f2937' }}>新工单</div>
              <div className="text-sm font-bold text-gray-600" style={{ color: '#111827' }}>{newTickets}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ 
                backgroundColor: '#fdfcff',
                boxShadow: '6px 6px 12px rgba(200, 185, 212, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8)'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: '#b5a3c7' }}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800" style={{ color: '#1f2937' }}>待处理</div>
              <div className="text-sm font-bold text-gray-600" style={{ color: '#111827' }}>{openTickets}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div 
              className="flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ 
                backgroundColor: '#fdfcff',
                boxShadow: '6px 6px 12px rgba(200, 185, 212, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8)'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: '#9bb3a4' }}
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                <path d="m10 15-3-3 3-3"></path>
                <path d="M7 12h7a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800" style={{ color: '#1f2937' }}>响应时间</div>
              <div className="text-sm font-bold text-gray-600" style={{ color: '#111827' }}>{responseTime}</div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PricingComponent;