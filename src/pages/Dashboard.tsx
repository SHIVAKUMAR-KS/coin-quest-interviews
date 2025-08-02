
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHome from "@/components/dashboard/DashboardHome";
import DashboardSection from "@/components/DashboardSection";

const Dashboard = () => {
  const [coinBalance, setCoinBalance] = useState(200);
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <DashboardHome />;
      case 'user-coins':
        return <div className="text-white">User Coins Page - Coming Soon</div>;
      case 'interview-panel':
        return <div className="text-white">Interview Panel Page - Coming Soon</div>;
      case 'jd-resume':
        return <div className="text-white">JD/Resume Interview Page - Coming Soon</div>;
      case 'resume-score':
        return <div className="text-white">Resume and JD Score Page - Coming Soon</div>;
      case 'previous-results':
        return <div className="text-white">Previous Results Page - Coming Soon</div>;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <DashboardSidebar 
        coinBalance={coinBalance}
        onLogout={handleLogout}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      
      {/* Main Content */}
      <div className="ml-64 transition-all duration-300">
        <div className="p-8">
          {renderCurrentPage()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
