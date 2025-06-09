
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

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
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-5"></div>
      
      <div className="z-10 text-center text-gray-800 max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-gray-900">
            元智大學資訊管理系
            <br />
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-700 animate-fade-in">
            第三十屆專業實習報告113-3學期
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 animate-fade-in shadow-lg">
            <p className="text-xl md:text-2xl mb-4 text-gray-800">
              實習於資策會數位轉型研究院
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              探索生成式 AI 與流程自動化
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 text-sm mb-9 animate-fade-in">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <div className="font-semibold text-gray-800">指導教授</div>
            <div className="text-gray-600">王仁甫</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <div className="font-semibold text-gray-800">學生</div>
            <div className="text-gray-600">邱子芸（學號：1111707）</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <div className="font-semibold text-gray-800">工作代號</div>
            <div className="text-gray-600">O15</div>
          </div>
        </div>
        
        <Button 
          onClick={scrollToContent}
          className="rounded-full px-8 py-6 bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 shadow-lg"
        >
          查看報告內容
        </Button>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
