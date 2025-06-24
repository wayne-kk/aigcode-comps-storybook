import React from 'react';
import { Card, CardHeader, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';

interface AnalyticsItem {
    value: string;
    label: string;
}

interface WebsiteAnalyticsProps {
    title?: string;
    description?: string;
    analyticsItems?: AnalyticsItem[];
}

const WebsiteAnalytics: React.FC<WebsiteAnalyticsProps> = ({
    title = '网站分析',
    description = '总转化率 28.5%',
    analyticsItems = [
        { value: '432', label: '直接访问' },
        { value: '216', label: '自然搜索' },
        { value: '29%', label: '会话数' },
        { value: '2.3K', label: '页面浏览量' },
        { value: '1.6K', label: '潜在客户' },
        { value: '8%', label: '转化率' },
    ],
}) => {
    return (
        <div className="lg:col-span-4 w-full max-w-[533px]">
            <Card className="flex flex-col gap-4 py-6 h-full rounded-xl border-0 bg-transparent shadow-none">
                <CardHeader className="px-6 pb-0 space-y-1">
                    <h3 className="font-bold text-lg text-gray-800" style={{ color: '#1f2937' }}>{title}</h3>
                    <p className="text-sm font-bold text-gray-600" style={{ color: '#374151' }}>{description}</p>
                </CardHeader>
                <CardContent className="px-6 pt-2">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                        {analyticsItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 group">
                                <div 
                                    className="min-w-[48px] h-7 flex items-center justify-center rounded-xl text-xs font-bold"
                                    style={{ 
                                        backgroundColor: '#fdfcff',
                                        boxShadow: '4px 4px 8px rgba(200, 185, 212, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.8)',
                                        color: '#111827'
                                    }}
                                >
                                    {item.value}
                                </div>
                                <span className="text-sm font-light group-hover:font-normal transition-all duration-300 text-gray-700" style={{ color: '#374151' }}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default WebsiteAnalytics