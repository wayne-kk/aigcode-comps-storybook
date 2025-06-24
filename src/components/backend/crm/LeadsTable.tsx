import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@ui/card';
import { Button } from '@ui/button';
import { Badge } from '@ui/badge';
import { Checkbox } from '@ui/checkbox';

type Lead = {
  status: string;
  email: string;
  amount: string;
};

type LeadsTableProps = {
  title?: string;
  leads?: Lead[];
};

function LeadsTable({
  title = 'Leads',
  leads = [
    { status: 'Success', email: 'ken99@yahoo.com', amount: '$316.00' },
    { status: 'Success', email: 'abe45@gmail.com', amount: '$242.00' },
    { status: 'Processing', email: 'monserrat44@gmail.com', amount: '$837.00' },
    { status: 'Success', email: 'silas22@gmail.com', amount: '$874.00' },
    { status: 'Failed', email: 'carmella@hotmail.com', amount: '$721.00' },
  ]
}: LeadsTableProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Success':
        return {
          className: 'bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0] text-emerald-700 border-0',
          style: { boxShadow: 'inset 1px 1px 2px rgba(34, 197, 94, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.8)' }
        };
      case 'Processing':
        return {
          className: 'bg-gradient-to-br from-[#E1E9ED] to-[#D1DCE2] text-[#5B7A8C] border-0',
          style: { boxShadow: 'inset 1px 1px 2px rgba(123, 155, 174, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.8)' }
        };
      case 'Failed':
        return {
          className: 'bg-gradient-to-br from-[#FEE2E2] to-[#FECACA] text-red-700 border-0',
          style: { boxShadow: 'inset 1px 1px 2px rgba(220, 38, 38, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.8)' }
        };
      default:
        return {
          className: 'bg-gradient-to-br from-[#E1E9ED] to-[#D1DCE2] text-[#5B7A8C] border-0',
          style: { boxShadow: 'inset 1px 1px 2px rgba(123, 155, 174, 0.2), inset -1px -1px 2px rgba(255, 255, 255, 0.8)' }
        };
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-[#F1F5F7] to-[#E1E9ED] rounded-2xl border-0"
          style={{
            boxShadow: 'inset 2px 2px 8px rgba(123, 155, 174, 0.15), inset -2px -2px 8px rgba(255, 255, 255, 0.8), 2px 2px 12px rgba(123, 155, 174, 0.1)'
          }}>
      <CardHeader className="px-6 py-5">
        <CardTitle className="text-lg font-bold text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E1E9ED]">
                <th className="text-left py-3 pr-4 text-xs font-bold text-[#5B7A8C] uppercase">
                  <Checkbox 
                    className="h-4 w-4 rounded border-0 bg-gradient-to-br from-[#F7F9FA] to-[#EAEEF2] data-[state=checked]:bg-[#7A9BAE] data-[state=checked]:text-white"
                    style={{
                      boxShadow: 'inset 1px 1px 3px rgba(123, 155, 174, 0.2), inset -1px -1px 3px rgba(255, 255, 255, 0.9)'
                    }}
                  />
                </th>
                <th className="text-left py-3 px-4 text-xs font-bold text-[#5B7A8C] uppercase">Status</th>
                <th className="text-left py-3 px-4 text-xs font-bold text-[#5B7A8C] uppercase">Email</th>
                <th className="text-right py-3 px-4 text-xs font-bold text-[#5B7A8C] uppercase">Amount</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr 
                  key={index} 
                  className="border-b border-[#E1E9ED] hover:bg-gradient-to-r hover:from-[#EAEEF2] hover:to-[#DDE4E8] transition-all duration-200"
                >
                  <td className="py-4 pr-4">
                    <Checkbox 
                      className="h-4 w-4 rounded border-0 bg-gradient-to-br from-[#F7F9FA] to-[#EAEEF2] data-[state=checked]:bg-[#7A9BAE] data-[state=checked]:text-white"
                      style={{
                        boxShadow: 'inset 1px 1px 3px rgba(123, 155, 174, 0.2), inset -1px -1px 3px rgba(255, 255, 255, 0.9)'
                      }}
                    />
                  </td>
                  <td className="py-4 px-4">
                    <Badge 
                      variant="secondary" 
                      className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusConfig(lead.status).className}`}
                      style={getStatusConfig(lead.status).style}
                    >
                      {lead.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium text-black">{lead.email}</td>
                  <td className="py-4 px-4 text-right text-sm font-bold text-emerald-600">{lead.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* 分页控件 */}
        <div className="flex items-center justify-between pt-6 border-t border-[#E1E9ED] mt-6">
          <div className="text-sm text-[#5B7A8C] font-medium">
            Showing <span className="text-[#7A9BAE] font-bold">1</span> to <span className="text-[#7A9BAE] font-bold">5</span> of <span className="text-[#7A9BAE] font-bold">15</span> results
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              className="h-9 px-4 rounded-xl border-0 bg-gradient-to-br from-[#F1F5F7] to-[#E1E9ED] text-sm font-medium text-[#5B7A8C] hover:from-[#EAEEF2] hover:to-[#DDE4E8]"
              style={{
                boxShadow: 'inset 1px 1px 3px rgba(123, 155, 174, 0.2), inset -1px -1px 3px rgba(255, 255, 255, 0.9), 1px 1px 3px rgba(123, 155, 174, 0.1)'
              }}
            >
              Previous
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="h-9 px-4 rounded-xl border-0 bg-gradient-to-br from-[#F1F5F7] to-[#E1E9ED] text-sm font-medium text-[#5B7A8C] hover:from-[#EAEEF2] hover:to-[#DDE4E8]"
              style={{
                boxShadow: 'inset 1px 1px 3px rgba(123, 155, 174, 0.2), inset -1px -1px 3px rgba(255, 255, 255, 0.9), 1px 1px 3px rgba(123, 155, 174, 0.1)'
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default LeadsTable;