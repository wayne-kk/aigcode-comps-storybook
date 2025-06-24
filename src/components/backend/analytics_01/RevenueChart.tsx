import React from 'react';
import { Button } from '@ui/button';
import { Card, CardHeader, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

interface EarningReportsProps {
    title?: string;
    description?: string;
    amount?: string;
    percentage?: string;
    isPositive?: boolean;
    chartData?: Array<{
        name: string;
        value: number;
    }>;
    earningsData?: {
        amount: string;
        percentage: number;
    };
    profitData?: {
        amount: string;
        percentage: number;
    };
    expenseData?: {
        amount: string;
        percentage: number;
    };
}

const PricingComponent: React.FC<EarningReportsProps> = ({
    title = '收入报告',
    description = '最近 28 天',
    amount = '¥14,680',
    percentage = '+12.5%',
    isPositive = true,
    chartData = [
        { name: '周一', value: 80 },
        { name: '周二', value: 65 },
        { name: '周三', value: 85 },
        { name: '周四', value: 40 },
        { name: '周五', value: 55 },
        { name: '周六', value: 70 },
        { name: '周日', value: 90 },
    ],
    earningsData = {
        amount: '¥5,456',
        percentage: 85,
    },
    profitData = {
        amount: '¥2,563',
        percentage: 60,
    },
    expenseData = {
        amount: '¥741',
        percentage: 95,
    },
}) => {
    return (
        <Card className="bg-transparent border-0 rounded-xl shadow-none">
            <CardHeader className="flex flex-row items-start justify-between p-6 pb-2">
                <div>
                    <h3 className="text-xl font-bold text-gray-800" style={{ color: '#111827' }}>{title}</h3>
                    <p className="text-sm mt-1 font-bold text-gray-600" style={{ color: '#374151' }}>{description}</p>
                </div>
                <div 
                    className="h-9 px-3 py-2 text-sm rounded-xl flex items-center gap-2 font-medium transition-all duration-300 hover:shadow-lg text-gray-700"
                    style={{ 
                        backgroundColor: '#fdfcff',
                        boxShadow: '6px 6px 12px rgba(200, 185, 212, 0.15), -6px -6px 12px rgba(255, 255, 255, 0.8)',
                        color: '#374151'
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
                        className="mr-2"
                        style={{ color: '#c8b9d4' }}
                    >
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        <path d="M12 10v6"></path>
                        <path d="m9 13 3-3 3 3"></path>
                    </svg>
                    导出
                </div>
            </CardHeader>
            <CardContent className="p-6 pt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <h2 className="text-4xl font-bold text-gray-800" style={{ color: '#111827' }}>{amount}</h2>
                            <div
                                className="px-3 py-1 text-xs font-bold rounded-xl"
                                style={{
                                    backgroundColor: '#fdfcff',
                                    boxShadow: '4px 4px 8px rgba(200, 185, 212, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.8)',
                                    color: isPositive ? '#16a34a' : '#dc2626'
                                }}
                            >
                                {percentage}
                            </div>
                        </div>
                        <div className="h-[180px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 5 }}>
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#4b5563', fontSize: 12 }}
                                        dy={10}
                                    />
                                    <Bar dataKey="value" fill="url(#barGradient)" radius={[4, 4, 0, 0]} barSize={30} />
                                    <defs>
                                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#c8b9d4" stopOpacity={1} />
                                            <stop offset="100%" stopColor="#b5a3c7" stopOpacity={1} />
                                        </linearGradient>
                                    </defs>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div 
                            className="rounded-xl p-4 transition-all duration-300"
                            style={{ 
                                backgroundColor: '#fdfcff',
                                boxShadow: '8px 8px 16px rgba(200, 185, 212, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                            }}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <span 
                                        className="inline-flex items-center justify-center w-6 h-6 rounded text-xs"
                                        style={{ 
                                            backgroundColor: '#f8f5fc',
                                            boxShadow: 'inset 3px 3px 6px rgba(200, 185, 212, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.8)',
                                            color: '#c8b9d4'
                                        }}
                                    >
                                        ¥
                                    </span>
                                    <span className="font-medium text-gray-800" style={{ color: '#1f2937' }}>收入</span>
                                </div>
                                <span className="font-bold text-gray-700" style={{ color: '#111827' }}>{earningsData.amount}</span>
                            </div>
                            <div 
                                className="w-full rounded-full h-2 mt-3"
                                style={{ 
                                    backgroundColor: '#f8f5fc',
                                    boxShadow: 'inset 4px 4px 8px rgba(200, 185, 212, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                                }}
                            >
                                <div
                                    className="h-2 rounded-full transition-all duration-700"
                                    style={{ 
                                        width: `${earningsData.percentage}%`,
                                        background: 'linear-gradient(90deg, #c8b9d4, #b5a3c7)',
                                        boxShadow: '2px 2px 4px rgba(200, 185, 212, 0.3)'
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div 
                            className="rounded-xl p-4 transition-all duration-300"
                            style={{ 
                                backgroundColor: '#fdfcff',
                                boxShadow: '8px 8px 16px rgba(200, 185, 212, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                            }}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <span 
                                        className="inline-flex items-center justify-center w-6 h-6 rounded"
                                        style={{ 
                                            backgroundColor: '#f8f5fc',
                                            boxShadow: 'inset 3px 3px 6px rgba(200, 185, 212, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.8)',
                                            color: '#c8b9d4'
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M3 3v18h18"></path>
                                            <path d="m19 9-5 5-4-4-3 3"></path>
                                        </svg>
                                    </span>
                                    <span className="font-medium text-gray-800" style={{ color: '#1f2937' }}>利润</span>
                                </div>
                                <span className="font-bold text-gray-700" style={{ color: '#111827' }}>{profitData.amount}</span>
                            </div>
                            <div 
                                className="w-full rounded-full h-2 mt-3"
                                style={{ 
                                    backgroundColor: '#f8f5fc',
                                    boxShadow: 'inset 4px 4px 8px rgba(200, 185, 212, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                                }}
                            >
                                <div
                                    className="h-2 rounded-full transition-all duration-700"
                                    style={{ 
                                        width: `${profitData.percentage}%`,
                                        background: 'linear-gradient(90deg, #d9c7df, #c9bdd1)',
                                        boxShadow: '2px 2px 4px rgba(217, 199, 223, 0.3)'
                                    }}
                                ></div>
                            </div>
                        </div>

                        <div 
                            className="rounded-xl p-4 transition-all duration-300"
                            style={{ 
                                backgroundColor: '#fdfcff',
                                boxShadow: '8px 8px 16px rgba(200, 185, 212, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                            }}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center gap-2">
                                    <span 
                                        className="inline-flex items-center justify-center w-6 h-6 rounded"
                                        style={{ 
                                            backgroundColor: '#f8f5fc',
                                            boxShadow: 'inset 3px 3px 6px rgba(200, 185, 212, 0.2), inset -3px -3px 6px rgba(255, 255, 255, 0.8)',
                                            color: '#c19696'
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                        </svg>
                                    </span>
                                    <span className="font-medium text-gray-800" style={{ color: '#1f2937' }}>支出</span>
                                </div>
                                <span className="font-bold text-gray-700" style={{ color: '#111827' }}>{expenseData.amount}</span>
                            </div>
                            <div 
                                className="w-full rounded-full h-2 mt-3"
                                style={{ 
                                    backgroundColor: '#f8f5fc',
                                    boxShadow: 'inset 4px 4px 8px rgba(200, 185, 212, 0.2), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
                                }}
                            >
                                <div
                                    className="h-2 rounded-full transition-all duration-700"
                                    style={{ 
                                        width: `${expenseData.percentage}%`,
                                        background: 'linear-gradient(90deg, #c19696, #ad7f7f)',
                                        boxShadow: '2px 2px 4px rgba(193, 150, 150, 0.3)'
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default PricingComponent;