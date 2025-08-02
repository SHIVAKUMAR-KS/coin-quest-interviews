
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHome from "@/components/dashboard/DashboardHome";
import UserCoins from "@/components/dashboard/UserCoins";
import InterviewPanel from "@/components/dashboard/InterviewPanel";
import JDResumeInterview from "@/components/dashboard/JDResumeInterview";
import ResumeJDScore from "@/components/dashboard/ResumeJDScore";
import UserPreviousResults from "@/components/dashboard/UserPreviousResults";

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
        return <UserCoins />;
      case 'interview-panel':
        return <InterviewPanel />;
      case 'jd-resume':
        return <JDResumeInterview />;
      case 'resume-score':
        return <ResumeJDScore />;
      case 'previous-results':
        return <UserPreviousResults />;
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
