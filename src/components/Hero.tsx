
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, GraduationCap, User, Briefcase } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  name: string;
}

const Hero = ({ title, subtitle, name }: HeroProps) => {
  const scrollToContent = () => {
    const element = document.getElementById('work-environment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-3"></div>
      
      {/* 更白的透明遮罩 */}
      <div className="absolute inset-0 bg-white/85"></div>
      
      {/* 装饰性背景元素 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      
      <div className="z-10 text-center text-gray-800 max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <br />
          <br />
          <br />
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-gray-900 leading-tight">
            元智大學資訊管理系
            <br />
            <span className="text-2xl md:text-3xl text-blue-600 font-medium">第三十屆專業實習報告</span>
          </h1>
          <h2 className="text-base md:text-lg font-light mb-6 text-gray-600 animate-fade-in tracking-wide">
            113-2學期
          </h2>
          
          {/* 主要內容卡片 */}
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 mb-8 animate-fade-in shadow-xl border border-white/20">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-lg md:text-xl mb-3 text-gray-800 font-semibold">
              實習單位: 財團法人資訊工業策進會
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-3 rounded-full"></div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              探索生成式 AI 與流程自動化技術
            </p>
          </div>
        </div>
        
        {/* 信息卡片網格 */}
        <div className="grid md:grid-cols-3 gap-4 mb-8 animate-fade-in">
          <div className="bg-white/85 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 group hover:-translate-y-1">
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <GraduationCap className="w-4 h-4 text-green-600" />
              </div>
            </div>
            <div className="font-bold text-gray-800 text-sm mb-1">指導老師</div>
            <div className="text-gray-600 text-xs">王仁甫 教授</div>
          </div>
          
          <div className="bg-white/85 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 group hover:-translate-y-1">
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <User className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div className="font-bold text-gray-800 text-sm mb-1">學生</div>
            <div className="text-gray-600 text-xs">邱子芸</div>
            <div className="text-gray-600 text-xs">1111707</div>
           
          </div>
          
          <div className="bg-white/85 backdrop-blur-sm rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 group hover:-translate-y-1">
            <div className="flex items-center justify-center mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <Briefcase className="w-4 h-4 text-purple-600" />
              </div>
            </div>
            <div className="font-bold text-gray-800 text-sm mb-1">公司代號</div>
            <div className="text-gray-600 text-xs">O15</div>
          </div>
        </div>
        
        {/* 行動按鈕 */}
        <div className="space-y-3 mb-16">
          <Button 
            onClick={scrollToContent}
            className="rounded-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 shadow-xl hover:shadow-2xl text-sm font-medium transform hover:scale-105"
          >
            查看報告內容
          </Button>
          <p className="text-gray-500 text-xs">向下滾動探索更多內容</p>
        </div>
        
        {/* 滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
