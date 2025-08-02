
import { useState } from 'react';
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

  const handleLogin = () => {
    setIsLoggedIn(true);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              CoinQuest Interviews
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Blog</a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Book a Demo</a>
            {isLoggedIn && (
              <a href="#dashboard" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Dashboard</a>
            )}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 border-amber-200">
                  <Coins className="w-4 h-4 mr-1" />
                  {coinBalance} Coins
                </Badge>
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  className="hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-all duration-200"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                onClick={handleLogin}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">Home</a>
              <a href="#blog" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">Blog</a>
              <a href="#demo" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">Book a Demo</a>
              {isLoggedIn && (
                <>
                  <a href="#dashboard" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200">Dashboard</a>
                  <div className="px-4 py-2">
                    <Badge variant="secondary" className="bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 border-amber-200">
                      <Coins className="w-4 h-4 mr-1" />
                      {coinBalance} Coins
                    </Badge>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={handleLogout}
                    className="mx-4 hover:bg-red-50 hover:border-red-300 hover:text-red-700"
                  >
                    Logout
                  </Button>
                </>
              )}
              {!isLoggedIn && (
                <div className="px-4 py-2">
                  <Button 
                    onClick={handleLogin}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
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
