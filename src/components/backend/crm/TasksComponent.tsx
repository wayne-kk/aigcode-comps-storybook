import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { Checkbox } from '@ui/checkbox';

type Task = {
    title: string;
    description: string;
    priority: 'High' | 'Medium' | 'Low';
    dueDate: string;
    completed: boolean;
};

type TasksComponentProps = {
    title?: string;
    description?: string;
    tasks?: Task[];
    onAddTask?: () => void;
};

function TasksComponent({
    title = 'Tasks',
    description = 'Track and manage your upcoming tasks.',
    tasks = [
        {
            title: 'Follow up with Acme Inc.',
            description: 'Send proposal and schedule meeting',
            priority: 'High',
            dueDate: 'Today',
            completed: false,
        },
        {
            title: 'Prepare quarterly report',
            description: 'Compile sales data and forecasts',
            priority: 'Medium',
            dueDate: 'Tomorrow',
            completed: false,
        },
        {
            title: 'Update customer profiles',
            description: 'Verify contact information and preferences',
            priority: 'Low',
            dueDate: 'Oct 15',
            completed: true,
        },
    ],
    onAddTask = () => { },
}: TasksComponentProps) {
    return (
        <Card className="flex flex-col w-full max-w-[534px] bg-gradient-to-br from-[#F1F5F7] to-[#E1E9ED] rounded-2xl border-0"
              style={{
                boxShadow: 'inset 2px 2px 8px rgba(123, 155, 174, 0.15), inset -2px -2px 8px rgba(255, 255, 255, 0.8), 2px 2px 12px rgba(123, 155, 174, 0.1)'
              }}>
            <CardHeader className="px-6 pt-6 pb-0 flex flex-row justify-between items-start">
                <div>
                    <CardTitle className="text-lg font-bold text-black">{title}</CardTitle>
                    <CardDescription className="text-sm text-[#5B7A8C] font-medium mt-1">{description}</CardDescription>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={onAddTask}
                    className="h-9 px-4 rounded-xl border-0 bg-gradient-to-br from-[#F1F5F7] to-[#E1E9ED] text-sm font-medium text-[#5B7A8C] hover:from-[#EAEEF2] hover:to-[#DDE4E8] flex items-center gap-1.5"
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
                        className="text-[#7A9BAE]"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 12h8"></path>
                        <path d="M12 8v8"></path>
                    </svg>
                    Add Task
                </Button>
            </CardHeader>
            <CardContent className="px-6 py-6 space-y-4">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className={`flex items-start space-x-3 rounded-xl border-0 p-4 ${
                            task.completed 
                                ? 'bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7]' 
                                : 'bg-gradient-to-br from-[#F7F9FA] to-[#EAEEF2]'
                        }`}
                        style={{
                            boxShadow: task.completed 
                                ? 'inset 1px 1px 4px rgba(34, 197, 94, 0.25), inset -1px -1px 4px rgba(255, 255, 255, 0.7)'
                                : 'inset 1px 1px 3px rgba(123, 155, 174, 0.2), inset -1px -1px 3px rgba(255, 255, 255, 0.9)'
                        }}
                    >
                        <Checkbox
                            checked={task.completed}
                            className={`mt-0.5 h-5 w-5 rounded border-0 ${
                                task.completed 
                                    ? 'bg-emerald-500 data-[state=checked]:bg-emerald-500 data-[state=checked]:text-white'
                                    : 'bg-gradient-to-br from-[#F7F9FA] to-[#EAEEF2] data-[state=checked]:bg-emerald-500 data-[state=checked]:text-white'
                            }`}
                            style={{
                              boxShadow: task.completed 
                                  ? 'inset 1px 1px 2px rgba(34, 197, 94, 0.4)'
                                  : 'inset 1px 1px 3px rgba(123, 155, 174, 0.2), inset -1px -1px 3px rgba(255, 255, 255, 0.9)'
                            }}
                            aria-label={`Mark ${task.title} as ${task.completed ? 'incomplete' : 'complete'}`}
                        />
                        <div className="space-y-1">
                            <p className={`text-sm font-bold ${task.completed ? 'text-emerald-600 line-through' : 'text-black'}`}>
                                {task.title}
                            </p>
                            <p className={`text-sm font-medium ${task.completed ? 'text-emerald-500 line-through' : 'text-[#5B7A8C]'}`}>{task.description}</p>
                            <div className="flex items-center pt-1.5">
                                <div
                                    className={`mr-2 rounded-full px-2.5 py-0.5 text-xs font-bold border-0 ${
                                        task.priority === 'High'
                                            ? 'bg-gradient-to-br from-[#FEE2E2] to-[#FECACA] text-red-700'
                                            : task.priority === 'Medium'
                                                ? 'bg-gradient-to-br from-[#E1E9ED] to-[#D1DCE2] text-[#5B7A8C]'
                                                : 'bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] text-emerald-700'
                                    }`}
                                    style={{
                                      boxShadow: task.priority === 'High'
                                          ? 'inset 1px 1px 2px rgba(220, 38, 38, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.8)'
                                          : task.priority === 'Medium'
                                              ? 'inset 1px 1px 2px rgba(123, 155, 174, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.8)'
                                              : 'inset 1px 1px 2px rgba(34, 197, 94, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.8)'
                                    }}
                                >
                                    {task.priority}
                                </div>
                                <span className={`text-xs font-medium ${
                                    task.dueDate === 'Today' 
                                        ? 'text-red-600 font-bold' 
                                        : 'text-[#7A9BAE]'
                                }`}>
                                    Due {task.dueDate}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

export default TasksComponent;