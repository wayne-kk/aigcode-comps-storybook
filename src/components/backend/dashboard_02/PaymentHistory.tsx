import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@ui/card';
import { Input } from '@ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@ui/table';
import { Checkbox } from '@ui/checkbox';
import { Badge } from '@ui/badge';
import { Button } from '@ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '@ui/dropdown-menu';
import { EllipsisIcon, ChevronLeftIcon, ChevronRightIcon, Receipt, Search } from 'lucide-react';

interface Payment {
  id: string;
  customer: {
    firstName: string;
    lastName: string;
  };
  email: string;
  amount: number;
  status: 'success' | 'processing' | 'failed';
}

interface PricingComponentProps {
  payments?: Payment[];
  selectedRows?: string[];
  onRowSelect?: (id: string) => void;
  onSelectAll?: () => void;
  onFilter?: (value: string) => void;
  onNextPage?: () => void;
  onPrevPage?: () => void;
  totalRows?: number;
}

function PricingComponent({
  payments = [
    {
      id: '1',
      customer: { firstName: 'Kenneth', lastName: 'Thompson' },
      email: 'ken99@yahoo.com',
      amount: 316,
      status: 'success',
    },
    {
      id: '2',
      customer: { firstName: 'Abraham', lastName: 'Lincoln' },
      email: 'abe45@gmail.com',
      amount: 242,
      status: 'success',
    },
    {
      id: '3',
      customer: { firstName: 'Monserrat', lastName: 'Rodriguez' },
      email: 'monserrat44@gmail.com',
      amount: 837,
      status: 'processing',
    },
    {
      id: '4',
      customer: { firstName: 'Silas', lastName: 'Johnson' },
      email: 'silas22@gmail.com',
      amount: 874,
      status: 'success',
    },
    {
      id: '5',
      customer: { firstName: 'Carmella', lastName: 'DeVito' },
      email: 'carmella@hotmail.com',
      amount: 721,
      status: 'failed',
    },
    {
      id: '6',
      customer: { firstName: 'Maria', lastName: 'Garcia' },
      email: 'maria@gmail.com',
      amount: 529,
      status: 'success',
    },
    {
      id: '7',
      customer: { firstName: 'James', lastName: 'Wilson' },
      email: 'james34@outlook.com',
      amount: 438,
      status: 'processing',
    },
    {
      id: '8',
      customer: { firstName: 'Sarah', lastName: 'Jones' },
      email: 'sarah.j@yahoo.com',
      amount: 692,
      status: 'success',
    },
  ],
  selectedRows = [],
  onRowSelect = () => {},
  onSelectAll = () => {},
  onFilter = () => {},
  onNextPage = () => {},
  onPrevPage = () => {},
  totalRows = 16,
}: PricingComponentProps) {
  const [filterValue, setFilterValue] = React.useState('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <Card className="border-0 bg-transparent shadow-none">
      <CardHeader className="px-6 pt-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl">
              <Receipt className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-xl font-semibold text-slate-800">最新支付记录</CardTitle>
              <p className="text-sm text-slate-500 mt-1">管理和跟踪所有支付交易</p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        {/* 搜索区域 */}
        <div className="mb-6">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="搜索支付记录..."
              value={filterValue}
              onChange={handleFilterChange}
              className="pl-10 h-11 bg-slate-50/50 border-slate-200 rounded-xl focus:bg-white focus:border-slate-300 transition-all duration-200"
            />
          </div>
        </div>

        {/* 表格区域 */}
        <div className="rounded-xl border border-slate-200/60 overflow-hidden bg-white/50 backdrop-blur-sm">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-slate-50/80 border-b border-slate-200/60 hover:bg-slate-50">
                <TableHead className="w-12 py-4 px-4">
                  <Checkbox
                    aria-label="全选"
                    onCheckedChange={onSelectAll}
                    className="h-4 w-4 rounded border-slate-300 data-[state=checked]:bg-slate-700 data-[state=checked]:border-slate-700"
                  />
                </TableHead>
                <TableHead className="py-4 px-4 text-sm font-semibold text-slate-700">客户</TableHead>
                <TableHead className="py-4 px-4 text-sm font-semibold text-slate-700">邮箱</TableHead>
                <TableHead className="py-4 px-4 text-sm font-semibold text-slate-700 text-right">金额</TableHead>
                <TableHead className="py-4 px-4 text-sm font-semibold text-slate-700">状态</TableHead>
                <TableHead className="w-12 py-4 px-4"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment, index) => (
                <TableRow 
                  key={payment.id} 
                  className="border-b border-slate-100/60 hover:bg-slate-50/30 transition-all duration-150"
                >
                  <TableCell className="w-12 py-4 px-4">
                    <Checkbox
                      aria-label="选择行"
                      checked={selectedRows.includes(payment.id)}
                      onCheckedChange={() => onRowSelect(payment.id)}
                      className="h-4 w-4 rounded border-slate-300 data-[state=checked]:bg-slate-700 data-[state=checked]:border-slate-700"
                    />
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-white text-xs font-medium">
                        {payment.customer.firstName[0]}{payment.customer.lastName[0]}
                      </div>
                      <span className="text-sm font-medium text-slate-800">
                        {payment.customer.firstName} {payment.customer.lastName}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-sm text-slate-600">{payment.email}</TableCell>
                  <TableCell className="py-4 px-4 text-sm text-slate-800 text-right font-semibold">
                    ${payment.amount.toFixed(2)}
                  </TableCell>
                  <TableCell className="py-4 px-4">
                    {payment.status === 'success' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        成功
                      </span>
                    )}
                    {payment.status === 'processing' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                        处理中
                      </span>
                    )}
                    {payment.status === 'failed' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
                        失败
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="w-12 py-4 px-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-slate-100 rounded-lg">
                      <EllipsisIcon className="h-4 w-4 text-slate-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* 分页区域 */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
          <p className="text-sm text-slate-500">
            已选择 <span className="font-medium text-slate-700">{selectedRows.length}</span> / {totalRows} 条记录
          </p>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={onPrevPage}
              disabled={true}
              className="h-9 w-9 p-0 border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 rounded-lg disabled:opacity-50"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={onNextPage}
              className="h-9 w-9 p-0 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-700 rounded-lg"
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default PricingComponent;