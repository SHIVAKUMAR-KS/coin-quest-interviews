
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Coins, Star, TrendingUp, Award, CreditCard, Zap } from "lucide-react";

const UserCoins = () => {
  const [coinBalance, setCoinBalance] = useState(200);
  const [purchaseProgress, setPurchaseProgress] = useState(0);
  const [isPurchasing, setIsPurchasing] = useState(false);

  const coinPackages = [
    { 
      coins: 100, 
      price: "$9.99", 
      popular: false,
      bonus: 0,
      description: "Perfect for getting started"
    },
    { 
      coins: 500, 
      price: "$39.99", 
      popular: true,
      bonus: 50,
      description: "Most popular choice"
    },
    { 
      coins: 1000, 
      price: "$69.99", 
      popular: false,
      bonus: 150,
      description: "Best value for power users"
    }
  ];

  const coinUsageHistory = [
    { id: 1, action: "Technical Interview", coins: -10, date: "2024-01-15", type: "expense" },
    { id: 2, action: "Resume Analysis", coins: -5, date: "2024-01-14", type: "expense" },
    { id: 3, action: "Coin Package Purchase", coins: +500, date: "2024-01-10", type: "income" },
    { id: 4, action: "Behavioral Interview", coins: -10, date: "2024-01-09", type: "expense" },
    { id: 5, action: "JD Matching Score", coins: -8, date: "2024-01-08", type: "expense" }
  ];

  const handlePurchase = (packageCoins: number) => {
    setIsPurchasing(true);
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      setPurchaseProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setCoinBalance(prev => prev + packageCoins);
        setIsPurchasing(false);
        setPurchaseProgress(0);
      }
    }, 300);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Coin Management</h1>
          <p className="text-cyan-200">Fuel Your Adventure—Load Up on Coins Today!</p>
        </div>
        
        {/* Current Balance */}
        <Card className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-amber-400/50">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                <Coins className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-100">{coinBalance}</div>
                <div className="text-amber-200">Current Balance</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Purchase Progress */}
      {isPurchasing && (
        <Card className="bg-white/10 border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-2">
              <CreditCard className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">Processing Purchase...</span>
            </div>
            <Progress value={purchaseProgress} className="w-full" />
            <p className="text-sm text-gray-300 mt-2">Processing payment... {purchaseProgress}%</p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coin Packages */}
        <div className="lg:col-span-2">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span>Buy Coin Packages</span>
              </CardTitle>
              <CardDescription className="text-gray-300">
                Choose the perfect coin package for your interview practice needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {coinPackages.map((pkg, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 relative ${
                    pkg.popular
                      ? 'border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-400/20'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-amber-900">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="flex justify-between items-center">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold text-white">
                          {pkg.coins} Coins
                        </div>
                        {pkg.bonus > 0 && (
                          <Badge variant="outline" className="text-green-400 border-green-400">
                            +{pkg.bonus} Bonus
                          </Badge>
                        )}
                      </div>
                      <div className="text-lg font-semibold text-amber-400">{pkg.price}</div>
                      <div className="text-sm text-gray-400">{pkg.description}</div>
                    </div>
                    
                    <Button
                      onClick={() => handlePurchase(pkg.coins + pkg.bonus)}
                      disabled={isPurchasing}
                      className={`${
                        pkg.popular
                          ? 'bg-amber-500 hover:bg-amber-600'
                          : 'bg-blue-600 hover:bg-blue-700'
                      } text-white px-8 py-3`}
                    >
                      {isPurchasing ? 'Processing...' : 'Buy Now'}
                    </Button>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-400">
                      • {Math.floor((pkg.coins + pkg.bonus) / 10)} Technical Interviews
                      • {Math.floor((pkg.coins + pkg.bonus) / 5)} Resume Analyses
                      • {Math.floor((pkg.coins + pkg.bonus) / 8)} JD Matching Reports
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Usage History & Stats */}
        <div className="space-y-6">
          {/* Usage Stats */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>Usage Stats</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">This Month</span>
                <span className="font-bold text-white">45 Coins</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Interviews</span>
                <span className="font-bold text-blue-400">3 Sessions</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Avg. per Session</span>
                <span className="font-bold text-green-400">15 Coins</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Total Earned</span>
                <span className="font-bold text-yellow-400">500 Coins</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {coinUsageHistory.slice(0, 5).map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0">
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{activity.action}</div>
                    <div className="text-xs text-gray-400">{activity.date}</div>
                  </div>
                  <div className={`font-bold ${
                    activity.type === 'income' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {activity.coins > 0 ? '+' : ''}{activity.coins}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserCoins;
