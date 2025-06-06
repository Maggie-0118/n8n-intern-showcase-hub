
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
