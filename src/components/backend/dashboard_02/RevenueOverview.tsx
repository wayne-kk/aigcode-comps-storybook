import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { LineChart, Line, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { DollarSign } from 'lucide-react';

interface PricingComponentProps {
  title?: string;
  amount?: string;
  percentChange?: string;
  isPositive?: boolean;
  comparisonText?: string;
  chartData?: Array<{ name: string; visitors: number }>;
}

function PricingComponent({
  title = 'Total Revenue',
  amount = '$15,231.89',
  percentChange = '+20.1%',
  isPositive = true,
  comparisonText = 'from last month',
  chartData = [
    { name: 'Jan', visitors: 35 },
    { name: 'Feb', visitors: 70 },
    { name: 'Mar', visitors: 53 },
    { name: 'Apr', visitors: 88 },
    { name: 'May', visitors: 39 },
  ],
}: PricingComponentProps) {
  return (
    <Card className="h-full border-0 bg-transparent shadow-none">
      <CardHeader className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
              <DollarSign className="w-5 h-5 text-white" />
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
            {amount}
          </div>
          <p className="text-sm text-slate-500 mt-1">
            <span className={isPositive ? 'text-emerald-600' : 'text-red-600'}>
              {isPositive ? '↗' : '↘'} {percentChange}
            </span>{' '}
            {comparisonText}
          </p>
        </div>
        
        <div className="h-[120px] w-full bg-gradient-to-t from-slate-50/50 to-transparent rounded-xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.05}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#6366f1"
                strokeWidth={3}
                fill="url(#colorGradient)"
              />
              <Line
                type="monotone"
                dataKey="visitors"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ r: 5, fill: 'white', stroke: '#6366f1', strokeWidth: 2 }}
                activeDot={{ r: 6, fill: '#6366f1', stroke: 'white', strokeWidth: 2 }}
              />
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  padding: '12px',
                }}
                labelStyle={{ color: '#475569', marginBottom: '4px', fontWeight: 'medium' }}
                itemStyle={{ color: '#6366f1', padding: '0', fontWeight: 'bold' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default PricingComponent;
