
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
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-10"></div>
      
      <div className="z-10 text-center px-4 md:px-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">{subtitle}</p>
        <p className="text-lg text-report-primary font-semibold mb-8">{name}</p>
        
        <Button 
          onClick={scrollToContent}
          className="rounded-full px-8 py-6 bg-report-primary hover:bg-blue-600 transition-all duration-300"
        >
          查看報告內容
        </Button>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
