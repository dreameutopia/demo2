import React, { useState } from 'react';
import { Mail, Lock, User, Send } from 'lucide-react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里添加注册逻辑
    console.log('Register attempt', { name, email, password, verificationCode });
  };

  const sendVerificationCode = () => {
    // 这里添加发送验证码的逻辑
    console.log('Sending verification code to', email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500" />
        <input
          type="text"
          placeholder="姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full pl-10 pr-3 py-2 border-2 border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
          required
        />
      </div>
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
      <div className="flex space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="验证码"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full pl-3 pr-3 py-2 border-2 border-indigo-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>
        <button
          type="button"
          onClick={sendVerificationCode}
          className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md hover:from-indigo-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
        >
          <Send className="w-4 h-4 mr-2" />
          发送
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-md hover:from-indigo-600 hover:to-purple-700 transition duration-300 transform hover:scale-105"
      >
        注册
      </button>
    </form>
  );
};

export default RegisterForm;