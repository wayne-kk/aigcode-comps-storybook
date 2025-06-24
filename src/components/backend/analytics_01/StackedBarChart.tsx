import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader } from '@ui/card';
import { Badge } from '@ui/badge';

interface PricingComponentProps {
    totalEarning?: string;
    percentage?: string;
    percentageValue?: string;
    chartData?: Array<{
        name: string;
        desktop: number;
        mobile: number;
    }>;
    totalRevenue?: string;
    totalRevenueSubtitle?: string;
    totalRevenueAmount?: string;
    totalSales?: string;
    totalSalesSubtitle?: string;
    totalSalesAmount?: string;
}

function PricingComponent({
    totalEarning = '总收入',
    percentage = '83%',
    percentageValue = '24.2%',
    chartData = [
        { name: '1月', desktop: 54.87, mobile: 23.6 },
        { name: '2月', desktop: 89.98, mobile: 59 },
        { name: '3月', desktop: 69.92, mobile: 35.4 },
        { name: '4月', desktop: 21.53, mobile: 56.05 },
        { name: '5月', desktop: 61.66, mobile: 38.35 },
        { name: '6月', desktop: 63.13, mobile: 41.3 },
    ],
    totalRevenue = '总收入',
    totalRevenueSubtitle = '客户付款',
    totalRevenueAmount = '+¥1,260',
    totalSales = '总销售额',
    totalSalesSubtitle = '退款',
    totalSalesAmount = '-¥980',
}: PricingComponentProps) {
    return (
        <div className='w-[400px]'>
            <Card className="flex flex-col gap-6 py-6 h-full bg-transparent shadow-none rounded-xl border-0">
                <CardHeader className="grid grid-cols-[1fr_auto] items-start gap-1.5 px-6 pb-0">
                    <div className="text-sm font-bold text-gray-600" style={{ color: '#374151' }}>{totalEarning}</div>
                    <div className="self-start justify-self-end">
                        <div
                            className="flex items-center gap-1 px-3 py-1 text-xs rounded-xl font-bold"
                            style={{ 
                                backgroundColor: '#fdfcff',
                                boxShadow: '4px 4px 8px rgba(200, 185, 212, 0.15), -4px -4px 8px rgba(255, 255, 255, 0.8)',
                                color: '#111827'
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: '#9bb3a4' }}
                            >
                                <path d="m18 15-6-6-6 6"></path>
                            </svg>
                            {percentageValue}
                        </div>
                    </div>
                    <div className="flex items-center mt-0.5">
                        <div className="text-4xl font-bold text-gray-800" style={{ color: '#111827' }}>{percentage}</div>
                    </div>
                </CardHeader>
                <CardContent className="px-6 pt-4">
                    <div className="w-full aspect-[21/9] mb-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 5 }}>
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#4b5563', fontSize: 12 }}
                                    dy={8}
                                />
                                <Tooltip
                                    cursor={{ fill: 'rgba(200, 185, 212, 0.1)' }}
                                    contentStyle={{
                                        backgroundColor: 'rgba(253, 252, 255, 0.95)',
                                        border: '1px solid rgba(200, 185, 212, 0.2)',
                                        borderRadius: '12px',
                                        color: '#1f2937',
                                        fontSize: '12px',
                                        boxShadow: '8px 8px 16px rgba(200, 185, 212, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                                    }}
                                />
                                <Bar dataKey="desktop" fill="url(#desktopGradient)" radius={[0, 0, 4, 4]} stackId="stack" barSize={50} />
                                <Bar dataKey="mobile" fill="url(#mobileGradient)" radius={[4, 4, 0, 0]} stackId="stack" barSize={50} />
                                <defs>
                                    <linearGradient id="desktopGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#c8b9d4" stopOpacity={1} />
                                        <stop offset="100%" stopColor="#b5a3c7" stopOpacity={1} />
                                    </linearGradient>
                                    <linearGradient id="mobileGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#d9c7df" stopOpacity={1} />
                                        <stop offset="100%" stopColor="#c9bdd1" stopOpacity={1} />
                                    </linearGradient>
                                </defs>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-6 space-y-3">
                        <div 
                            className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                            style={{ 
                                backgroundColor: '#fdfcff',
                                boxShadow: '8px 8px 16px rgba(200, 185, 212, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                            }}
                        >
                            <div 
                                className="flex size-10 items-center justify-center rounded-xl"
                                style={{ 
                                    backgroundColor: '#f8f5fc',
                                    boxShadow: 'inset 4px 4px 8px rgba(200, 185, 212, 0.15), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
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
                                    style={{ color: '#c8b9d4' }}
                                >
                                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
                                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
                                    <path d="m2 16 6 6"></path>
                                    <circle cx="16" cy="9" r="2.9"></circle>
                                    <circle cx="6" cy="5" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-800" style={{ color: '#1f2937' }}>{totalRevenue}</div>
                                <div className="text-xs font-light text-gray-600" style={{ color: '#4b5563' }}>{totalRevenueSubtitle}</div>
                            </div>
                            <div className="ms-auto text-sm font-bold" style={{ color: '#16a34a' }}>{totalRevenueAmount}</div>
                        </div>
                        <div 
                            className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                            style={{ 
                                backgroundColor: '#fdfcff',
                                boxShadow: '8px 8px 16px rgba(200, 185, 212, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.8)'
                            }}
                        >
                            <div 
                                className="flex size-10 items-center justify-center rounded-xl"
                                style={{ 
                                    backgroundColor: '#f8f5fc',
                                    boxShadow: 'inset 4px 4px 8px rgba(200, 185, 212, 0.15), inset -4px -4px 8px rgba(255, 255, 255, 0.8)'
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
                                    style={{ color: '#c19696' }}
                                >
                                    <line x1="12" x2="12" y1="2" y2="22"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="font-bold text-gray-800" style={{ color: '#1f2937' }}>{totalSales}</div>
                                <div className="text-xs font-light text-gray-600" style={{ color: '#4b5563' }}>{totalSalesSubtitle}</div>
                            </div>
                            <div className="ms-auto text-sm font-bold" style={{ color: '#dc2626' }}>{totalSalesAmount}</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default PricingComponent;