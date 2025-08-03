
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHome from "@/components/dashboard/DashboardHome";
import UserCoins from "@/components/dashboard/UserCoins";
import InterviewPanel from "@/components/dashboard/InterviewPanel";
import JDResumeInterview from "@/components/dashboard/JDResumeInterview";
import ResumeJDScore from "@/components/dashboard/ResumeJDScore";
import UserPreviousResults from "@/components/dashboard/UserPreviousResults";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

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
    <BackgroundBeamsWithCollision className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="min-h-screen relative overflow-hidden">
        {/* Additional Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-500/8 to-blue-500/8 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-pink-500/8 to-rose-500/8 rounded-full animate-pulse delay-700"></div>
        </div>

        <DashboardSidebar 
          coinBalance={coinBalance}
          onLogout={handleLogout}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        
        {/* Main Content */}
        <div className="lg:ml-64 transition-all duration-300 relative z-10">
          <div className="p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
            {renderCurrentPage()}
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default Dashboard;
