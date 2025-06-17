import React from 'react';
import { Users, Briefcase, Wallet } from 'lucide-react';
import StatsComponent from './StatsComponent';
import LeadsTable from './LeadsTable';
import TasksComponent from './TasksComponent';
import LeadSourceChart from './LeadSourceChart';
import SalesPipeline from './SalesPipeline';

// 类型定义
interface StatCard {
  label: string;
  value: string | number;
  growth: string;
  isGrowthPositive: boolean;
  icon: React.ReactNode;
}

interface Lead {
  status: string;
  email: string;
  amount: string;
}

interface Task {
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  completed: boolean;
}

interface LeadSource {
  name: string;
  value: number;
  color: string;
}

interface SalesDeal {
  stage: string;
  count: number;
  value: number;
  percentage: number;
  color: string;
}

// CRM组件props类型定义
interface CrmProps {
  className?: string;
  // 统计卡片相关
  targetPercentage?: number;
  statCards?: StatCard[];
  
  // 客户线索表格相关
  leadsTitle?: string;
  leads?: Lead[];
  
  // 任务管理相关
  tasksTitle?: string;
  tasksDescription?: string;
  tasks?: Task[];
  onAddTask?: () => void;
  
  // 客户来源饼图相关
  leadSourceTitle?: string;
  totalLeads?: number;
  leadSources?: LeadSource[];
  
  // 销售管道相关
  pipelineTitle?: string;
  pipelineDescription?: string;
  deals?: SalesDeal[];
}

// 默认数据
const defaultStatCards: StatCard[] = [
  {
    label: 'Total Customers',
    value: 1890,
    growth: '+10.4%',
    isGrowthPositive: true,
    icon: <Users className="size-5 text-gray-500 dark:text-gray-400" />,
  },
  {
    label: 'Total Deals',
    value: '1,02,890',
    growth: '-0.8%',
    isGrowthPositive: false,
    icon: <Briefcase className="size-5 text-gray-500 dark:text-gray-400" />,
  },
  {
    label: 'Total Revenue',
    value: '$435,578',
    growth: '+20.1%',
    isGrowthPositive: true,
    icon: <Wallet className="size-5 text-gray-500 dark:text-gray-400" />,
  },
];

const defaultLeads: Lead[] = [
  { status: 'Success', email: 'ken99@yahoo.com', amount: '$316.00' },
  { status: 'Success', email: 'abe45@gmail.com', amount: '$242.00' },
  { status: 'Processing', email: 'monserrat44@gmail.com', amount: '$837.00' },
  { status: 'Success', email: 'silas22@gmail.com', amount: '$874.00' },
  { status: 'Failed', email: 'carmella@hotmail.com', amount: '$721.00' },
];

const defaultTasks: Task[] = [
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
];

const defaultLeadSources: LeadSource[] = [
  { name: 'SOCIAL', value: 275, color: '#000000' },
  { name: 'EMAIL', value: 200, color: '#4B4B4B' },
  { name: 'CALL', value: 287, color: '#2D2D2D' },
  { name: 'OTHERS', value: 173, color: '#ADADAD' },
];

const defaultDeals: SalesDeal[] = [
  { stage: 'Lead', count: 235, value: 420500, percentage: 38, color: '#000000' },
  { stage: 'Qualified', count: 146, value: 267800, percentage: 24, color: '#4B4B4B' },
  { stage: 'Proposal', count: 84, value: 192400, percentage: 18, color: '#222222' },
  { stage: 'Negotiation', count: 52, value: 129600, percentage: 12, color: '#ADADAD' },
  { stage: 'Closed Won', count: 36, value: 87200, percentage: 8, color: '#E5E5E5' },
];

const Crm: React.FC<CrmProps> = ({ 
  className = '',
  // 统计卡片相关
  targetPercentage = 48,
  statCards = defaultStatCards,
  
  // 客户线索表格相关
  leadsTitle = 'Leads',
  leads = defaultLeads,
  
  // 任务管理相关
  tasksTitle = 'Tasks',
  tasksDescription = 'Track and manage your upcoming tasks.',
  tasks = defaultTasks,
  onAddTask,
  
  // 客户来源饼图相关
  leadSourceTitle = 'Leads by Source',
  totalLeads = 935,
  leadSources = defaultLeadSources,
  
  // 销售管道相关
  pipelineTitle = 'Sales Pipeline',
  pipelineDescription = 'Current deals in your sales pipeline.',
  deals = defaultDeals,
}) => {
  const handleAddTask = () => {
    if (onAddTask) {
      onAddTask();
    } else {
      console.log('Add new task');
      // 默认添加任务逻辑
    }
  };

  return (
    <div className={`w-full p-6 space-y-8 bg-gray-50 min-h-screen ${className}`}>
      {/* 页面标题 */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">CRM Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your customer relationships and sales pipeline</p>
      </div>

      {/* 统计卡片区域 */}
      <div className="w-full mb-8">
        <StatsComponent 
          targetPercentage={targetPercentage}
          statCards={statCards}
        />
      </div>

      {/* 图表和任务区域 */}
      <div className="grid gap-6 lg:grid-cols-3 mb-8 lg:items-stretch">
        {/* 任务管理 */}
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <TasksComponent 
              title={tasksTitle}
              description={tasksDescription}
              tasks={tasks}
              onAddTask={handleAddTask}
            />
          </div>
        </div>

        {/* 客户来源饼图 */}
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <LeadSourceChart 
              title={leadSourceTitle}
              totalLeads={totalLeads}
              leadSources={leadSources}
            />
          </div>
        </div>

        {/* 销售管道 */}
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <SalesPipeline 
              title={pipelineTitle}
              description={pipelineDescription}
              deals={deals}
            />
          </div>
        </div>
      </div>

      {/* 客户线索表格区域 - 放在最后 */}
      <div className="w-full">
        <LeadsTable 
          title={leadsTitle}
          leads={leads}
        />
      </div>
    </div>
  );
};

export default Crm;
