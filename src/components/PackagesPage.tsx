import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check } from 'lucide-react';

const packages = [
  {
    name: '基础套餐',
    price: '¥99/月',
    features: ['基本功能访问', '每月5GB存储空间', '标准客户支持'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: '高级套餐',
    price: '¥199/月',
    features: ['所有基础功能', '每月20GB存储空间', '优先客户支持', '高级分析工具'],
    color: 'from-purple-400 to-purple-600'
  },
  {
    name: '企业套餐',
    price: '¥399/月',
    features: ['所有高级功能', '无限存储空间', '24/7专属支持', '自定义解决方案', '团队协作工具'],
    color: 'from-pink-400 to-pink-600'
  }
];

const PackagesPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [showRibbon, setShowRibbon] = useState(false);

  useEffect(() => {
    setShowRibbon(true);
    const timer = setTimeout(() => setShowRibbon(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8 relative overflow-hidden">
      {showRibbon && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-full h-full flex justify-around">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="w-8 bg-gradient-to-b from-yellow-300 via-red-500 to-pink-500 animate-fall"
                style={{animationDelay: `${i * 0.1}s`}}
              />
            ))}
          </div>
        </div>
      )}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 bg-white text-indigo-600 p-2 rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300 z-10"
      >
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-4xl font-bold text-center text-white mb-12">选择您的套餐</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="w-full max-w-sm">
            <div className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105`}>
              <div className={`bg-gradient-to-r ${pkg.color} p-6`}>
                <h2 className="text-2xl font-bold text-white">{pkg.name}</h2>
                <p className="text-white text-opacity-80 mt-2">{pkg.price}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check size={20} className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                  选择套餐
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-white rounded-lg shadow-xl p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">为什么选择我们？</h2>
        <p className="text-gray-600 mb-4">
          我们提供业界领先的解决方案，帮助您的业务蓬勃发展。无论您是个人创业者还是大型企业，我们都有适合您需求的套餐。
        </p>
        <p className="text-gray-600">
          选择DreamEutopia，您将获得：
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>顶级的客户支持</li>
          <li>持续的功能更新</li>
          <li>安全可靠的基础设施</li>
          <li>灵活的扩展选项</li>
        </ul>
      </div>
    </div>
  );
};

export default PackagesPage;