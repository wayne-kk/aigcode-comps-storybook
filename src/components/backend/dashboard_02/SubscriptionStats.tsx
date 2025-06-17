import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { BarChart, Bar, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface PricingComponentProps {
  title?: string;
  value?: string;
  percentChange?: string;
  isPositive?: boolean;
  chartData?: Array<{
    value: number;
    name: string;
  }>;
}

function PricingComponent({
  title = 'Subscriptions',
  value = '+4850',
  percentChange = '+180.1%',
  isPositive = true,
  chartData = [
    { value: 240, name: 'Jan' },
    { value: 300, name: 'Feb' },
    { value: 200, name: 'Mar' },
    { value: 278, name: 'Apr' },
    { value: 189, name: 'May' },
    { value: 239, name: 'Jun' },
    { value: 278, name: 'Jul' },
    { value: 189, name: 'Aug' },
  ],
}: PricingComponentProps) {
  return (
    <Card className="h-full border-0 bg-transparent shadow-none">
      <CardHeader className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <CardTitle className="text-xl font-semibold text-slate-800">{title}</CardTitle>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            isPositive 
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {percentChange}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="mb-6">
          <div className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            {value}
          </div>
          <p className="text-sm text-slate-500 mt-1">
            <span className={isPositive ? 'text-emerald-600' : 'text-red-600'}>
              {isPositive ? '↗' : '↘'} {percentChange}
            </span>{' '}
            与上月相比
          </p>
        </div>
        
        <div className="h-[120px] w-full bg-gradient-to-t from-slate-50/50 to-transparent rounded-xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }} barGap={6}>
              <Bar 
                dataKey="value" 
                fill="url(#blueGradient)" 
                radius={[4, 4, 0, 0]} 
                barSize={24}
              >
                <LabelList
                  dataKey="value"
                  position="top"
                  fill="#64748b"
                  fontSize={11}
                  offset={8}
                  formatter={(value: number) => `${value}`}
                />
              </Bar>
              <Tooltip
                cursor={{ fill: 'rgba(59, 130, 246, 0.05)' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                }}
                labelStyle={{ color: '#475569', fontWeight: 'medium' }}
                itemStyle={{ color: '#3b82f6', fontWeight: 'bold' }}
              />
              <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default PricingComponent