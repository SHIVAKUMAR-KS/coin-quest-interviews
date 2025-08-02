
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Coins, 
  Users, 
  FileText, 
  BarChart3, 
  LogOut,
  User,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface DashboardSidebarProps {
  coinBalance: number;
  onLogout: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const DashboardSidebar = ({ coinBalance, onLogout, currentPage, onPageChange }: DashboardSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'user-coins', label: 'User Coins', icon: <Coins className="w-5 h-5" /> },
    { id: 'interview-panel', label: 'Interview Panel', icon: <Users className="w-5 h-5" /> },
    { id: 'jd-resume', label: 'JD/Resume Interview', icon: <FileText className="w-5 h-5" /> },
    { id: 'resume-score', label: 'Resume and JD Score', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'previous-results', label: 'User Previous Results', icon: <BarChart3 className="w-5 h-5" /> }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 text-white transition-all duration-300 z-40 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm text-cyan-300">Welcome</div>
                <div className="font-semibold">afreenshaikzl6@gmail.com</div>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:bg-white/10 p-2"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2 flex-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 hover:bg-white/10 ${
              currentPage === item.id ? 'bg-white/20 text-white' : 'text-gray-300'
            }`}
          >
            <span className="flex-shrink-0">{item.icon}</span>
            {!collapsed && <span className="text-left">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Coin Balance */}
      <div className="p-4 border-t border-white/10">
        {!collapsed ? (
          <div className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-100">Coins</span>
              </div>
              <Badge className="bg-yellow-500 text-yellow-900 font-bold">
                {coinBalance}
              </Badge>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <Badge className="bg-yellow-500 text-yellow-900 font-bold">
              {coinBalance}
            </Badge>
          </div>
        )}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-white/10">
        <Button
          variant="ghost"
          onClick={onLogout}
          className={`w-full text-red-300 hover:bg-red-500/20 hover:text-red-200 justify-start ${
            collapsed ? 'px-2' : ''
          }`}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
