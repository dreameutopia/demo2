import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里添加登录逻辑
    console.log('Login attempt', { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
        <input
          type="email"
          placeholder="电子邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border-2 border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
          required
        />
      </div>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border-2 border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-md hover:from-indigo-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
      >
        登录
      </button>
    </form>
  );
};

export default LoginForm;