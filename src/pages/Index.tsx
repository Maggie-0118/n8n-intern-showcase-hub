
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkEnvironment from '@/components/WorkEnvironment';
import JobResponsibilities from '@/components/JobResponsibilities';
import ResearchTechnologies from '@/components/ResearchTechnologies';
import ProjectShowcase from '@/components/ProjectShowcase';
import SelfReflection from '@/components/SelfReflection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero 
        title="財團法人資訊工業策進會" 
        subtitle="n8n工作流自動化研究專題" 
        name="實習生：邱子芸"
      />
      
      <main>
        <WorkEnvironment />
        <JobResponsibilities />
        <ResearchTechnologies />
        <ProjectShowcase />
        <SelfReflection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
