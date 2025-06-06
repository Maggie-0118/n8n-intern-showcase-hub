
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Coffee, Clock } from 'lucide-react';

const WorkEnvironment = () => {
  const features = [
    {
      icon: <Building className="h-10 w-10 text-report-primary" />,
      title: "公司環境",
      description: "現代化辦公空間，開放式工作區域促進團隊合作與溝通。配備高效能工作設備，支持各種開發需求。"
    },
    {
      icon: <Users className="h-10 w-10 text-report-primary" />,
      title: "團隊文化",
      description: "注重創新與協作的團隊文化，定期舉行知識分享會議，鼓勵成員間互相學習與提升。"
    },
    {
      icon: <Coffee className="h-10 w-10 text-report-primary" />,
      title: "休閒設施",
      description: "提供休息區域與娛樂設施，讓員工能在工作之餘放鬆身心，維持工作與生活的平衡。"
    },
    {
      icon: <Clock className="h-10 w-10 text-report-primary" />,
      title: "工作時間",
      description: "彈性上下班時間，尊重個人工作節奏，同時配合核心工作時段確保團隊協作順暢。"
    }
  ];

  return (
    <section id="work-environment" className="section-container bg-white">
      <h2 className="section-title">工作環境介紹</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        在這個充滿活力與創意的工作環境中，我有機會接觸最新的技術並與專業團隊合作，以下是對工作環境的詳細介紹。
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default WorkEnvironment;
