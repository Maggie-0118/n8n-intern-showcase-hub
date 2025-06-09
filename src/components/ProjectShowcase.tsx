
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
    overview: {
      main: "此專題以 n8n 作為主要的流程設計與自動化平台，主要打造一套能根據使用者輸入的主題，協助完成研究報告初稿並產出的自動流程。整體架構整合了語言生成模型（如 Claude 3.5）、即時資料擷取 API（Tavily），並透過工具代理（Tools Agent）完成從主題拆解、資料搜尋、段落撰寫到報告整合的各項任務。",
      purpose: "此流程可大幅簡化學生或研究人員在撰寫研究內容初期所面臨的資訊收集與結構建立之壓力，透過自動化的方式提供具有邏輯及參考依據的段落內容，提升寫作效率。",
      stages: [
        {
          title: "1.1 使用者輸入與主題規劃（Planning Stage）",
          details: [
            "使用者透過表單送出研究主題、Email 及簡要描述。",
            "系統觸發 Tools Agent：",
            "「Plan Topics」會拆解主題並產生四個子章節。",
            "「Intro」會產生標題、介紹段落與章節列表。"
          ]
        },
        {
          title: "1.2 各章節內容生成（Chapter Modules）",
          details: [
            "每章節流程使用 Tavily API 進行網路資料擷取。",
            "每個章節均有設計獨立的 Tools Agent，搭配 OpenRouter ChatModel（模型為 anthropic/claude-3.5-haiku），來根據查詢結果撰寫段落內容，確保內容根據是即時資訊生成。",
            "將生成內容整理為 HTML 並儲存於 Airtable 資料庫中。"
          ]
        },
        {
          title: "1.3 內容彙整與補強（Finalize Content）",
          details: [
            "系統合併各章節內容後，呼叫 AI 工具補齊目錄（ToC）與參考來源清單。",
            "最終內容轉為完整 HTML 結構，準備匯出。"
          ]
        },
        {
          title: "1.4 匯出與發送（PDF & 通知）",
          details: [
            "系統透過 API 將 HTML 內容轉為 PDF。",
            "自動發送報告附件至使用者 Email。"
          ]
        }
      ]
    },
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
              <div className="space-y-6">
                <p className="text-gray-600">{projectInfo.overview.main}</p>
                <p className="text-gray-600">{projectInfo.overview.purpose}</p>
                
                <div>
                  <h4 className="font-semibold mb-4 text-lg">整體架構由四大階段構成：</h4>
                  <div className="space-y-4">
                    {projectInfo.overview.stages.map((stage, index) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium text-report-primary mb-3">{stage.title}</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                          {stage.details.map((detail, detailIndex) => (
                            <li key={detailIndex}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">n8n專案圖例</h4>
                  <ImageGallery images={n8nImages} />
                </div>
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
