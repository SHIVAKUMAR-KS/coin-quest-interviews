
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardSection from "@/components/DashboardSection";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Always logged in for dashboard

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <DashboardSection />
      <Footer />
    </div>
  );
};

export default Dashboard;
