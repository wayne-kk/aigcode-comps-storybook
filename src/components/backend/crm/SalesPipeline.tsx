import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@ui/card';

type SalesDeal = {
  stage: string;
  count: number;
  value: number;
  percentage: number;
  color: string;
};

type SalesPipelineProps = {
  title?: string;
  description?: string;
  deals?: SalesDeal[];
};

const SalesPipeline: React.FC<SalesPipelineProps> = ({
  title = 'Sales Pipeline',
  description = 'Current deals in your sales pipeline.',
  deals = [
    { stage: 'Lead', count: 235, value: 420500, percentage: 38, color: '#5B7A8C' },
    { stage: 'Qualified', count: 146, value: 267800, percentage: 24, color: '#6B8A9C' },
    { stage: 'Proposal', count: 84, value: 192400, percentage: 18, color: '#7A9BAE' },
    { stage: 'Negotiation', count: 52, value: 129600, percentage: 12, color: '#95B2C1' },
    { stage: 'Closed Won', count: 36, value: 87200, percentage: 8, color: '#B0C7D4' },
  ],
}) => {
  return (
    <Card className="w-full h-full max-w-[533px] bg-gradient-to-br from-[#F1F5F7] to-[#E1E9ED] text-black border-0 rounded-2xl py-6"
          style={{
            boxShadow: 'inset 2px 2px 8px rgba(123, 155, 174, 0.15), inset -2px -2px 8px rgba(255, 255, 255, 0.8), 2px 2px 12px rgba(123, 155, 174, 0.1)'
          }}>
      <CardHeader className="px-6 pb-0 space-y-1">
        <CardTitle className="text-lg font-bold leading-tight text-black">{title}</CardTitle>
        <CardDescription className="text-sm text-[#5B7A8C] font-medium">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col px-6 pt-6 h-full">
        <div className="mb-6 flex h-5 w-full overflow-hidden rounded-full bg-gradient-to-br from-[#F7F9FA] to-[#EAEEF2]"
             style={{
               boxShadow: 'inset 1px 1px 3px rgba(123, 155, 174, 0.25), inset -1px -1px 3px rgba(255, 255, 255, 0.8)'
             }}>
          {deals.map((deal, index) => (
            <div
              key={index}
              className="h-full relative"
              style={{ 
                width: `${deal.percentage}%`, 
                backgroundColor: deal.color,
                boxShadow: index === 0 ? 'none' : 'inset 1px 0 0 rgba(255, 255, 255, 0.3)'
              }}
              aria-label={`${deal.stage}: ${deal.percentage}%`}
            />
          ))}
        </div>
        <div className="space-y-4">
          {deals.map((deal, index) => (
            <div key={index} className="flex items-center gap-4">
              <div 
                className="h-4 w-4 rounded-full flex-shrink-0" 
                style={{ 
                  backgroundColor: deal.color,
                  boxShadow: `inset 1px 1px 2px rgba(0, 0, 0, 0.1), 1px 1px 2px rgba(255, 255, 255, 0.8), 0 0 3px ${deal.color}40`
                }}
              ></div>
              <div className="flex flex-1 items-center justify-between">
                <div>
                  <p className="text-sm font-bold leading-tight text-black">{deal.stage}</p>
                  <p className="text-xs text-[#5B7A8C] font-medium mt-0.5">
                    <span className="text-black font-bold">{deal.count}</span> deals · <span className="text-emerald-600 font-bold">${deal.value.toLocaleString()}</span>
                  </p>
                </div>
                <div className="flex w-24 items-center gap-2">
                  <div className="bg-gradient-to-br from-[#F7F9FA] to-[#EAEEF2] relative w-full overflow-hidden rounded-full h-2"
                       style={{
                         boxShadow: 'inset 1px 1px 2px rgba(123, 155, 174, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.9)'
                       }}>
                    <div
                      className="h-full absolute left-0 top-0 rounded-full"
                      style={{
                        width: `${deal.percentage}%`,
                        backgroundColor: deal.color,
                        boxShadow: `inset 1px 1px 1px rgba(0, 0, 0, 0.1), 0 0 2px ${deal.color}30`
                      }}
                      role="progressbar"
                      aria-valuenow={deal.percentage}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                  <span className="w-10 text-right text-xs font-bold text-black">{deal.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesPipeline;
