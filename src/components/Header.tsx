import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coins, Menu, X, Brain } from "lucide-react";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Header = ({ isLoggedIn, setIsLoggedIn }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coinBalance, setCoinBalance] = useState(200);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 group cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <Brain className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hidden sm:inline">
              AI Interviews
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm xl:text-base"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/blog')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm xl:text-base"
            >
              Blog
            </button>
            <button 
              onClick={() => handleNavigation('/book-demo')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm xl:text-base"
            >
              Book a Demo
            </button>
            {!isLoggedIn && (
              <button 
                onClick={() => handleNavigation('/login')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm xl:text-base"
              >
                Login
              </button>
            )}
            {isLoggedIn && (
              <button 
                onClick={() => handleNavigation('/dashboard')}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm xl:text-base"
              >
                Dashboard
              </button>
            )}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
            {isLoggedIn ? (
              <>
                <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 border-amber-200 text-xs sm:text-sm">
                  <Coins className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {coinBalance} Coins
                </Badge>
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  className="hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4"
                  size="sm"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                onClick={handleLogin}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4"
                size="sm"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => handleNavigation('/')}
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-left text-sm sm:text-base"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavigation('/blog')}
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-left text-sm sm:text-base"
              >
                Blog
              </button>
              <button 
                onClick={() => handleNavigation('/book-demo')}
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-left text-sm sm:text-base"
              >
                Book a Demo
              </button>
              {!isLoggedIn && (
                <button 
                  onClick={() => handleNavigation('/login')}
                  className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-left text-sm sm:text-base"
                >
                  Login
                </button>
              )}
              {isLoggedIn && (
                <>
                  <button 
                    onClick={() => handleNavigation('/dashboard')}
                    className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-left text-sm sm:text-base"
                  >
                    Dashboard
                  </button>
                  <div className="px-4 py-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 border-amber-200 text-sm">
                      <Coins className="w-4 h-4 mr-1" />
                      {coinBalance} Coins
                    </Badge>
                  </div>
                  <div className="px-4 py-2">
                    <Button 
                      variant="outline" 
                      onClick={handleLogout}
                      className="w-full hover:bg-red-50 hover:border-red-300 hover:text-red-700 text-sm"
                      size="sm"
                    >
                      Logout
                    </Button>
                  </div>
                </>
              )}
              {!isLoggedIn && (
                <div className="px-4 py-2">
                  <Button 
                    onClick={handleLogin}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-sm"
                    size="sm"
                  >
                    Sign In
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
