import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

type LeadSource = {
  name: string;
  value: number;
  color: string;
};

type LeadSourceChartProps = {
  title?: string;
  totalLeads?: number;
  leadSources?: LeadSource[];
};

function LeadSourceChart({
  title = 'Leads by Source',
  totalLeads = 935,
  leadSources = [
    { name: 'SOCIAL', value: 275, color: '#5B7A8C' }, // 深蓝灰色
    { name: 'EMAIL', value: 200, color: '#7A9BAE' }, // 中蓝灰色
    { name: 'CALL', value: 287, color: '#95B2C1' }, // 浅蓝灰色
    { name: 'OTHERS', value: 173, color: '#B0C7D4' }, // 最浅蓝灰色
  ],
}: LeadSourceChartProps) {
  return (
    <Card className="w-full h-full max-w-[533px] bg-gradient-to-br from-[#F1F5F7] to-[#E1E9ED] rounded-2xl border-0 p-0"
          style={{
            boxShadow: 'inset 2px 2px 8px rgba(123, 155, 174, 0.15), inset -2px -2px 8px rgba(255, 255, 255, 0.8), 2px 2px 12px rgba(123, 155, 174, 0.1)'
          }}>
      <CardHeader className="flex flex-row items-center justify-between px-6 py-5 border-b-0">
        <CardTitle className="text-lg font-bold text-black">{title}</CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          className="h-9 px-4 py-2 text-sm font-medium bg-gradient-to-br from-[#F1F5F7] to-[#E1E9ED] text-[#5B7A8C] border-0 rounded-xl hover:from-[#EAEEF2] hover:to-[#DDE4E8]"
          style={{
            boxShadow: 'inset 1px 1px 3px rgba(123, 155, 174, 0.2), inset -1px -1px 3px rgba(255, 255, 255, 0.9), 1px 1px 3px rgba(123, 155, 174, 0.1)'
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
            className="mr-2 text-[#7A9BAE]"
          >
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
            <path d="M2 10h20"></path>
          </svg>
          Export
        </Button>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        {/* 饼图 */}
        <div className="flex justify-center mb-8">
          <div className="w-60 h-60 relative">
            <div className="absolute inset-2 bg-gradient-to-br from-[#F7F9FA] to-[#EAEEF2] rounded-full"
                 style={{
                   boxShadow: 'inset 2px 2px 6px rgba(123, 155, 174, 0.2), inset -2px -2px 6px rgba(255, 255, 255, 0.9)'
                 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={leadSources}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={2}
                >
                  {leadSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-black">{totalLeads}</span>
              <span className="text-sm text-[#5B7A8C] font-medium mt-[-2px]">Leads</span>
            </div>
          </div>
        </div>

        {/* 图例 */}
        <div className="grid grid-cols-2 gap-6">
          {leadSources.map((source) => (
            <div key={source.name} className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1">
                <span 
                  className="block w-3 h-3 rounded-full" 
                  style={{ 
                    backgroundColor: source.color,
                    boxShadow: `inset 1px 1px 2px rgba(0, 0, 0, 0.1), 1px 1px 2px rgba(255, 255, 255, 0.8), 0 0 4px ${source.color}30`
                  }}
                ></span>
                <span className="text-xs font-bold text-[#5B7A8C] uppercase">{source.name}</span>
              </div>
              <span 
                className="text-lg font-bold ml-5 text-black"
              >
                {source.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default LeadSourceChart;
