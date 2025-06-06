
import React from 'react';
import { Building, Users, Coffee, Clock, Zap } from 'lucide-react';
import FlipCard from './FlipCard';

const WorkEnvironment = () => {
  const features = [
    {
      icon: <Building className="h-16 w-16 text-cyber-blue" />,
      title: "公司環境",
      description: "現代化辦公空間，開放式工作區域促進團隊合作與溝通。配備高效能工作設備，支持各種開發需求。",
      details: "配備最新的開發設備、高速網絡、舒適的工作空間，以及專業的會議室設施。"
    },
    {
      icon: <Users className="h-16 w-16 text-cyber-purple" />,
      title: "團隊文化",
      description: "注重創新與協作的團隊文化，定期舉行知識分享會議，鼓勵成員間互相學習與提升。",
      details: "每週技術分享會、code review文化、mentorship計畫，以及開放式的溝通環境。"
    },
    {
      icon: <Coffee className="h-16 w-16 text-cyber-pink" />,
      title: "休閒設施",
      description: "提供休息區域與娛樂設施，讓員工能在工作之餘放鬆身心，維持工作與生活的平衡。",
      details: "咖啡吧、遊戲區、健身房、閱讀角落，以及定期的團隊建設活動。"
    },
    {
      icon: <Clock className="h-16 w-16 text-cyber-green" />,
      title: "工作時間",
      description: "彈性上下班時間，尊重個人工作節奏，同時配合核心工作時段確保團隊協作順暢。",
      details: "彈性工作時間、遠程工作選項、核心時段協作，以及充足的年假制度。"
    }
  ];

  return (
    <section id="work-environment" className="section-container cyber-bg relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-blue rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-purple rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        <h2 className="section-title animate-fade-in">
          <Zap className="inline w-8 h-8 mr-3 animate-pulse" />
          工作環境介紹
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in delay-200">
          在這個充滿活力與創意的工作環境中，我有機會接觸最新的技術並與專業團隊合作，以下是對工作環境的詳細介紹。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FlipCard
              key={index}
              className="animate-slide-in-left"
              style={{ animationDelay: `${index * 200}ms` }}
              frontContent={
                <div className="text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-cyber-blue font-mono mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              }
              backContent={
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-cyber-purple font-mono mb-4">
                    {feature.title} 詳情
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{feature.details}</p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
