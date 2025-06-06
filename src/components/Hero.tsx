
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Zap } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  name: string;
}

const Hero = ({ title, subtitle, name }: HeroProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = title;

  // 滑鼠追蹤效果
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 增強的打字機效果
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(prev => prev.slice(0, -1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex(0);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentIndex, fullText, isDeleting, displayText]);

  const scrollToContent = () => {
    const element = document.getElementById('work-environment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center cyber-bg overflow-hidden">
      {/* 滑鼠追蹤光暈 */}
      <div 
        className="fixed pointer-events-none z-30 w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease-out'
        }}
      />

      {/* 動態粒子背景 */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* 網格背景 */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10 animate-pulse"></div>
      
      {/* 掃描線效果 */}
      <div className="absolute inset-0 scan-lines"></div>
      
      {/* 主要內容 */}
      <div className="z-10 text-center px-4 md:px-8 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl font-black text-cyber-blue mb-4 font-mono glitch-text animate-neon-flicker" data-text={displayText}>
            {displayText}
            <span className="animate-pulse text-cyber-pink">|</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink mx-auto mb-6 animate-glow-pulse"></div>
        </div>
        
        <p className="text-xl md:text-3xl text-cyber-purple mb-6 font-semibold animate-slide-in-left">
          {subtitle}
        </p>
        
        <p className="text-lg text-report-primary font-semibold mb-8 animate-slide-in-right">
          <Zap className="inline w-5 h-5 mr-2 text-cyber-green animate-pulse" />
          {name}
        </p>
        
        <div className="relative group">
          <Button 
            onClick={scrollToContent}
            className="relative px-12 py-6 bg-transparent text-cyber-blue border-2 border-cyber-blue font-bold text-lg transition-all duration-300 hover:bg-cyber-blue hover:text-black hover:shadow-2xl hover:shadow-cyber-blue/50 neon-border animate-glow-pulse overflow-hidden group"
          >
            <span className="relative z-10">查看報告內容</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:animate-scan-line"></div>
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyber-blue animate-pulse" />
        </div>
      </div>

      {/* 角落裝飾 */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyber-blue opacity-50 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyber-blue opacity-50 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyber-blue opacity-50 animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyber-blue opacity-50 animate-pulse"></div>
    </div>
  );
};

export default Hero;
