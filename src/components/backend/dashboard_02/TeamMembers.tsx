import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { Avatar, AvatarImage } from '@ui/avatar';
import { ChevronDown, Users } from 'lucide-react';

interface TeamMember {
    name: string;
    email: string;
    avatar: string;
    role: string;
}

interface PricingComponentProps {
    title?: string;
    description?: string;
    teamMembers?: TeamMember[];
}

function PricingComponent({
    title = 'Team Members',
    description = 'Invite your team members to collaborate.',
    teamMembers = [
        {
            name: 'Toby Belhome',
            email: 'contact@bundui.io',
            avatar: 'https://bundui-images.netlify.app/avatars/01.png',
            role: 'Viewer',
        },
        {
            name: 'Jackson Lee',
            email: 'pre@example.com',
            avatar: 'https://bundui-images.netlify.app/avatars/02.png',
            role: 'Developer',
        },
        {
            name: 'Hally Gray',
            email: 'hally@site.com',
            avatar: 'https://bundui-images.netlify.app/avatars/03.png',
            role: 'Viewer',
        },
    ],
}: PricingComponentProps) {
    return (
        <Card className="h-full border-0 bg-transparent shadow-none">
            <CardHeader className="px-6 pt-6 pb-4 space-y-2">
                <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                        <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <CardTitle className="text-xl font-semibold text-slate-800">{title}</CardTitle>
                        <CardDescription className="text-sm text-slate-500 mt-1">{description}</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="group p-4 rounded-xl bg-slate-50/50 border border-slate-100/80 hover:bg-white hover:border-slate-200 hover:shadow-lg transition-all duration-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <Avatar className="h-10 w-10 ring-2 ring-white shadow-lg">
                                        <AvatarImage src={member.avatar} alt={member.name} className="object-cover" />
                                    </Avatar>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-800 group-hover:text-slate-900">{member.name}</p>
                                    <p className="text-xs text-slate-500 mt-0.5">{member.email}</p>
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 px-3 py-0 text-xs font-medium bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-800 hover:border-slate-300 shadow-sm transition-all duration-200"
                            >
                                {member.role}
                                <ChevronDown className="ml-1.5 h-3 w-3 text-slate-400" />
                            </Button>
                        </div>
                    </div>
                ))}
                
                {/* 添加成员按钮 */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                    <Button className="w-full h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                        + 邀请团队成员
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default PricingComponent;