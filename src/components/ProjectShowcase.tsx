
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ImageGallery from './ImageGallery';

const ProjectShowcase = () => {
  // n8n相關圖片集合
  const n8nImages = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "n8n工作流介面",
      title: "n8n工作流編輯器介面",
      description: "n8n提供直觀的工作流編輯器，允許用戶通過拖放方式創建複雜的自動化工作流。"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "API整合示例",
      title: "API連接與數據轉換",
      description: "透過n8n連接不同的API服務，實現數據的無縫傳輸與轉換。"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "自定義節點開發",
      title: "自定義功能節點開發",
      description: "為特定業務需求開發的自定義n8n節點，擴展平台的功能範圍。"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "數據處理流程",
      title: "複雜數據處理流程",
      description: "使用n8n實現的多階段數據處理與轉換流程，提高數據處理效率。"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: "自動化報告生成",
      title: "自動化報告生成工作流",
      description: "設計的自動收集數據並生成定期報告的工作流，減少手動操作。"
    }
  ];

  const projectInfo = {
    overview: "在實習期間，我負責研究並實施基於n8n的工作流自動化解決方案。n8n是一個強大的開源工作流自動化平台，允許用戶通過視覺化界面創建複雜的自動化流程，連接各種服務和API，實現數據處理、系統集成和業務流程自動化。",
    objectives: [
      "研究n8n平台的核心功能與API",
      "設計並實現多個自動化工作流以提高團隊效率",
      "開發自定義節點擴展n8n功能",
      "建立最佳實踐文檔，培訓團隊成員使用n8n"
    ],
    achievements: [
      "成功實現了跨部門數據同步工作流，每日節省約3小時的手動操作時間",
      "開發了5個自定義功能節點，解決了特定業務場景需求",
      "建立了完整的n8n開發與部署流程文檔",
      "設計了模塊化工作流模板，提高了團隊工作流創建效率",
      "通過工作流優化，將某些業務流程的處理時間減少了60%"
    ],
    challenges: [
      "API限流與錯誤處理：設計了重試機制和錯誤通知系統",
      "複雜數據格式轉換：開發了專用的數據轉換函數",
      "權限管理：建立了基於角色的訪問控制系統",
      "系統穩定性：實現了工作流監控和自動恢復機制"
    ],
    technologies: [
      "n8n核心平台",
      "JavaScript/TypeScript (用於自定義函數與節點開發)",
      "RESTful API與GraphQL",
      "OAuth 2.0 認證",
      "PostgreSQL/MongoDB (用於數據存儲)",
      "Docker (容器化部署)"
    ]
  };

  return (
    <section id="project-showcase" className="section-container bg-gray-50">
      <h2 className="section-title">專題介紹 - n8n工作流自動化</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        本專題聚焦於使用n8n平台實現企業流程自動化，提高工作效率並減少人工操作錯誤。
      </p>

      <Tabs defaultValue="overview" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="overview">概述</TabsTrigger>
          <TabsTrigger value="objectives">目標</TabsTrigger>
          <TabsTrigger value="achievements">成果</TabsTrigger>
          <TabsTrigger value="challenges">挑戰</TabsTrigger>
          <TabsTrigger value="tech">技術</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">專題概述</h3>
              <p className="text-gray-600 mb-6">{projectInfo.overview}</p>
              <div className="mt-6">
                <h4 className="font-semibold mb-3">n8n專案圖例</h4>
                <ImageGallery images={n8nImages} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="objectives">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">專題目標</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {projectInfo.objectives.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achievements">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">專題成果</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {projectInfo.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="challenges">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">面臨挑戰與解決方案</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {projectInfo.challenges.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tech">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">使用技術</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {projectInfo.technologies.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProjectShowcase;
