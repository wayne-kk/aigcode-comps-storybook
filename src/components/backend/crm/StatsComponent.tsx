import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { RadialBarChart, RadialBar, PolarGrid, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Users, Briefcase, Wallet } from 'lucide-react';

type StatCard = {
    label: string;
    value: string | number;
    growth: string;
    isGrowthPositive: boolean;
    icon: React.ReactNode;
};

type PricingComponentProps = {
    targetPercentage?: number;
    statCards?: StatCard[];
};

const defaultStatCards: StatCard[] = [
    {
        label: 'Total Customers',
        value: 1890,
        growth: '+10.4%',
        isGrowthPositive: true,
        icon: <Users className="size-5 text-[#7A9BAE]" />,
    },
    {
        label: 'Total Deals',
        value: '1,02,890',
        growth: '-0.8%',
        isGrowthPositive: false,
        icon: <Briefcase className="size-5 text-[#7A9BAE]" />,
    },
    {
        label: 'Total Revenue',
        value: '$435,578',
        growth: '+20.1%',
        isGrowthPositive: true,
        icon: <Wallet className="size-5 text-[#7A9BAE]" />,
    },
];

const PricingComponent: React.FC<PricingComponentProps> = ({
    targetPercentage = 48,
    statCards = defaultStatCards,
}) => {
    const data = [
        {
            name: 'Target',
            value: targetPercentage,
            fill: '#C7476B', // 紫红色 - 优先级色
        },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 w-full">
            {/* 目标卡片 - 使用紫红色优先级系统 */}
            <Card className="flex flex-col rounded-2xl border-2 bg-gradient-to-br from-[#FDF7F9] via-[#FCF1F5] to-[#FBEEF3] relative overflow-hidden"
                  style={{
                    borderColor: '#C7476B',
                    boxShadow: '0 8px 25px rgba(199, 71, 107, 0.15), inset 1px 1px 0 rgba(255, 255, 255, 0.9), inset -1px -1px 0 rgba(199, 71, 107, 0.1)'
                  }}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#C7476B] to-[#A8325A] opacity-10 rounded-full blur-xl"></div>
                
                <CardHeader className="px-6 py-5 pb-2 relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#C7476B] to-[#A8325A] rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-[#C7476B] uppercase tracking-wide">Priority Task</span>
                    </div>
                    <CardTitle className="font-bold text-xl text-black">
                        Your target is incomplete
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 py-4 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 relative bg-gradient-to-br from-[#FDF7F9] to-[#FBEEF3] rounded-full"
                                 style={{
                                   boxShadow: 'inset 1px 1px 3px rgba(199, 71, 107, 0.2), inset -1px -1px 3px rgba(255, 255, 255, 0.9)'
                                 }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadialBarChart
                                        cx="50%"
                                        cy="50%"
                                        innerRadius="75%"
                                        outerRadius="95%"
                                        data={data}
                                        startAngle={0}
                                        endAngle={360}
                                    >
                                        <PolarGrid />
                                        <PolarRadiusAxis tick={false} axisLine={false} />
                                        <RadialBar background dataKey="value" cornerRadius={30} fill="#C7476B" />
                                        <text
                                            x="50%"
                                            y="50%"
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                            className="font-bold text-xs"
                                            style={{ fill: '#C7476B' }}
                                        >
                                            {targetPercentage}%
                                        </text>
                                    </RadialBarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <p className="text-[#6B5B7D] text-sm font-medium">
                            You have completed <span className="text-[#C7476B] font-bold text-lg">{targetPercentage}%</span> of the given
                            target, you can also check your status
                        </p>
                    </div>
                </CardContent>
            </Card>
            
            {/* 统计卡片循环渲染 */}
            {statCards.map((card, idx) => (
                <Card
                    key={card.label}
                    className="flex flex-col rounded-2xl border-0 bg-gradient-to-br from-[#F1F5F7] to-[#E1E9ED]"
                    style={{
                      boxShadow: 'inset 2px 2px 8px rgba(123, 155, 174, 0.15), inset -2px -2px 8px rgba(255, 255, 255, 0.8), 2px 2px 12px rgba(123, 155, 174, 0.1)'
                    }}
                >
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-2">
                                <p className="text-[#5B7A8C] text-sm font-medium mb-1">{card.label}</p>
                                <h4 className="text-3xl font-bold text-black mb-1">
                                    {card.value}
                                </h4>
                                <div className="text-[#5B7A8C] text-sm font-medium">
                                    <span className={`font-bold ${
                                        card.isGrowthPositive 
                                            ? 'text-emerald-600' 
                                            : 'text-red-600'
                                    }`}>
                                        {card.growth}
                                    </span>{' '}
                                    from last month
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="bg-gradient-to-br from-[#F7F9FA] to-[#EAEEF2] flex size-12 items-center justify-center rounded-full"
                                     style={{
                                       boxShadow: 'inset 1px 1px 3px rgba(123, 155, 174, 0.2), inset -1px -1px 3px rgba(255, 255, 255, 0.9)'
                                     }}>
                                    {card.icon}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default PricingComponent;