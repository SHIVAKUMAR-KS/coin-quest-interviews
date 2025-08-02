
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
  ChevronRight,
  Menu,
  X
} from "lucide-react";

interface DashboardSidebarProps {
  coinBalance: number;
  onLogout: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const DashboardSidebar = ({ coinBalance, onLogout, currentPage, onPageChange }: DashboardSidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'user-coins', label: 'User Coins', icon: <Coins className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'interview-panel', label: 'Interview Panel', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'jd-resume', label: 'JD/Resume Interview', icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'resume-score', label: 'Resume and JD Score', icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { id: 'previous-results', label: 'User Previous Results', icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" /> }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-slate-900 text-white rounded-lg shadow-lg"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 text-white transition-all duration-300 z-40 ${
        collapsed ? 'w-16' : 'w-64'
      } ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 -left-10 w-32 h-32 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-0 w-24 h-24 bg-cyan-500/10 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="p-3 sm:p-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              {!collapsed && (
                <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-cyan-300">Welcome</div>
                    <div className="font-semibold text-xs sm:text-sm truncate">afreenshaikzl6@gmail.com</div>
                  </div>
                </div>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCollapsed(!collapsed)}
                className="text-white hover:bg-white/10 p-1.5 sm:p-2 hidden lg:flex"
              >
                {collapsed ? <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" /> : <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />}
              </Button>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="p-2 sm:p-4 space-y-1 sm:space-y-2 flex-1 overflow-y-auto">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg transition-all duration-200 hover:bg-white/10 text-left ${
                  currentPage === item.id ? 'bg-white/20 text-white' : 'text-gray-300'
                }`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && <span className="text-xs sm:text-sm truncate">{item.label}</span>}
              </button>
            ))}
          </nav>

          {/* Coin Balance */}
          <div className="p-2 sm:p-4 border-t border-white/10">
            {!collapsed ? (
              <div className="bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-lg p-2 sm:p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    <span className="text-yellow-100 text-xs sm:text-sm">Coins</span>
                  </div>
                  <Badge className="bg-yellow-500 text-yellow-900 font-bold text-xs">
                    {coinBalance}
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="flex justify-center">
                <Badge className="bg-yellow-500 text-yellow-900 font-bold text-xs">
                  {coinBalance}
                </Badge>
              </div>
            )}
          </div>

          {/* Logout */}
          <div className="p-2 sm:p-4 border-t border-white/10">
            <Button
              variant="ghost"
              onClick={() => {
                onLogout();
                setMobileMenuOpen(false);
              }}
              className={`w-full text-red-300 hover:bg-red-500/20 hover:text-red-200 justify-start text-xs sm:text-sm ${
                collapsed ? 'px-2' : ''
              }`}
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              {!collapsed && <span className="ml-2 sm:ml-3">Logout</span>}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
