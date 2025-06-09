
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkEnvironment from '@/components/WorkEnvironment';
import JobResponsibilities from '@/components/JobResponsibilities';
import ResearchTechnologies from '@/components/ResearchTechnologies';
import ProjectShowcase from '@/components/ProjectShowcase';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero 
        title="實習期末報告" 
        subtitle="n8n工作流自動化研究專題" 
        name="實習生：[您的姓名]" 
        
      />
      <div className="text-center text-white max-w-5xl mx-auto px-4">
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
      
      <main>
        <WorkEnvironment />
        <JobResponsibilities />
        <ResearchTechnologies />
        <ProjectShowcase />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
