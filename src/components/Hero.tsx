
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
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white-600 white-700 to-white-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10"></div>
      
      <div className="z-10 text-center text-blue max-w-5xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            元智大學資訊管理系
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-blue-100 animate-fade-in">
            第三十屆專業實習報告113-3學期
          </h2>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 animate-fade-in">
            <p className="text-xl md:text-2xl mb-4">
              實習於資策會數位轉型研究院
            </p>
            <p className="text-lg md:text-xl text-blue-100">
              探索生成式 AI 與流程自動化
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 text-sm mb-8 animate-fade-in">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="font-semibold">指導教授</div>
            <div className="text-blue-100">王仁甫</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="font-semibold">學生</div>
            <div className="text-blue-100">邱子芸（學號：1111707）</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div className="font-semibold">工作代號</div>
            <div className="text-blue-100">O15</div>
          </div>
        </div>
        
        <Button 
          onClick={scrollToContent}
          className="rounded-full px-8 py-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 border border-white/30"
        >
          查看報告內容
        </Button>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-200" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
