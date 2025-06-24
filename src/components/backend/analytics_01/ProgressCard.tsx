import React from 'react';
import { Card, CardHeader, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';

interface PricingComponentProps {
  description?: string;
  totalSales?: string;
  orderPercentage?: string;
  visitPercentage?: string;
  orderLabel?: string;
  visitLabel?: string;
  orderBarPercentage?: number;
  visitBarPercentage?: number;
}

function PricingComponent({
  description = '销售概览',
  totalSales = '¥42.5K',
  orderPercentage = '62.2%',
  visitPercentage = '25.5%',
  orderLabel = '订单',
  visitLabel = '访问',
  orderBarPercentage = 70,
  visitBarPercentage = 30,
}: PricingComponentProps) {
  return (
    <div className="w-full max-w-[534px] h-full flex flex-col">
      <Card className="bg-transparent shadow-none rounded-xl border-0 min-h-[228px] h-full flex flex-col">
        <CardHeader className="px-6 pt-6 pb-0 flex justify-between items-start space-y-0">
          <div className="space-y-1">
            <p className="text-sm font-bold text-gray-600" style={{ color: '#374151' }}>{description}</p>
            <h2 className="text-[28px] font-bold mt-1 text-gray-800" style={{ color: '#111827' }}>{totalSales}</h2>
          </div>
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
              style={{ color: '#c9a876' }}
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
              <polyline points="16 7 22 7 22 13"></polyline>
            </svg>
          </div>
        </CardHeader>
        <CardContent className="px-6 pt-8 pb-6 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="flex items-center gap-3 text-sm">
              <div 
                className="px-3 py-1 rounded-xl text-xs font-bold"
                style={{ 
                  backgroundColor: '#fdfcff',
                  boxShadow: '4px 4px 8px rgba(200, 185, 212, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.8)',
                  color: '#111827'
                }}
              >
                {orderPercentage}
              </div>
              <span className="font-light text-gray-700" style={{ color: '#374151' }}>{orderLabel}</span>
            </div>
            <div className="flex items-center justify-end gap-3 text-sm">
              <div 
                className="px-3 py-1 rounded-xl text-xs font-bold"
                style={{ 
                  backgroundColor: '#fdfcff',
                  boxShadow: '4px 4px 8px rgba(200, 185, 212, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.8)',
                  color: '#111827'
                }}
              >
                {visitPercentage}
              </div>
              <span className="font-light text-gray-700" style={{ color: '#374151' }}>{visitLabel}</span>
            </div>
          </div>
          <div 
            className="flex h-3 overflow-hidden rounded-full"
            style={{ 
              backgroundColor: '#f8f5fc',
              boxShadow: 'inset 4px 4px 8px rgba(200, 185, 212, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
            }}
          >
            <span 
              className="h-full transition-all duration-700 rounded-full" 
              style={{ 
                width: `${orderBarPercentage}%`,
                background: 'linear-gradient(90deg, #d9c7df, #c8b9d4)',
                boxShadow: '2px 2px 4px rgba(200, 185, 212, 0.3)'
              }}
            ></span>
            <span 
              className="h-full transition-all duration-700 rounded-full" 
              style={{ 
                width: `${visitBarPercentage}%`,
                background: 'linear-gradient(90deg, #c9bdd1, #b5a3c7)',
                boxShadow: '2px 2px 4px rgba(181, 163, 199, 0.3)'
              }}
            ></span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PricingComponent