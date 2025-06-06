
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Coffee, Clock, Zap } from 'lucide-react';

const WorkEnvironment = () => {
  const features = [
    {
      icon: <Building className="h-10 w-10 text-cyber-blue" />,
      title: "公司環境",
      description: "現代化辦公空間，開放式工作區域促進團隊合作與溝通。配備高效能工作設備，支持各種開發需求。"
    },
    {
      icon: <Users className="h-10 w-10 text-cyber-purple" />,
      title: "團隊文化",
      description: "注重創新與協作的團隊文化，定期舉行知識分享會議，鼓勵成員間互相學習與提升。"
    },
    {
      icon: <Coffee className="h-10 w-10 text-cyber-pink" />,
      title: "休閒設施",
      description: "提供休息區域與娛樂設施，讓員工能在工作之餘放鬆身心，維持工作與生活的平衡。"
    },
    {
      icon: <Clock className="h-10 w-10 text-cyber-green" />,
      title: "工作時間",
      description: "彈性上下班時間，尊重個人工作節奏，同時配合核心工作時段確保團隊協作順暢。"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover bg-transparent backdrop-blur-sm border border-cyber-blue/30 group animate-slide-in-left" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-6 relative overflow-hidden">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-transparent to-cyber-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start space-x-4 relative z-10">
                  <div className="mt-1 p-3 rounded-lg bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/50">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-cyber-blue font-mono">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-cyber-blue/50 transition-colors duration-300 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkEnvironment;
