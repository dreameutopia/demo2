import React, { useState, useCallback } from 'react';
import { Mail, Lock, User, Send, Home } from 'lucide-react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import useConfetti from './hooks/useConfetti';
import PackagesPage from './components/PackagesPage';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPackages, setShowPackages] = useState(false);
  const triggerConfetti = useConfetti();

  const handleLogoClick = useCallback(() => {
    triggerConfetti();
  }, [triggerConfetti]);

  const handleHomeClick = useCallback(() => {
    setShowPackages(true);
    triggerConfetti();
  }, [triggerConfetti]);

  if (showPackages) {
    return <PackagesPage onBack={() => setShowPackages(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-white text-[20rem] font-bold opacity-10 select-none">
        Welcome
      </div>
      <button
        onClick={handleHomeClick}
        className="absolute top-4 right-4 bg-white text-indigo-600 p-2 rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300 z-10"
      >
        <Home size={24} />
      </button>
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative z-10 border-4 border-indigo-300 backdrop-filter backdrop-blur-sm bg-opacity-80">
        <div className="flex justify-center mb-6">
          <h1 
            className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={handleLogoClick}
          >
            DreamEutopia
          </h1>
        </div>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? '欢迎回来' : '创建账户'}
        </h2>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
          >
            {isLogin ? '还没有账户？注册' : '已有账户？登录'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;