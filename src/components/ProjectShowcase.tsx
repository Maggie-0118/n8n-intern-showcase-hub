import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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

  // 實作流程圖片集合
  const workflowImages = [
    {
      src: "/lovable-uploads/e14e9466-d975-43b0-acc3-83ec17503b9a.png",
      alt: "系統整體流程",
      title: "系統整體流程架構",
      description: "完整的 n8n 自動化報告生成系統流程，包含 Planning Stage、各章節處理模組、Finalize Content 以及最終輸出的完整架構圖。"
    },
    {
      src: "/lovable-uploads/8a243376-3b00-4220-a17a-d8538c10ea4d.png",
      alt: "Planning Stage 主題輸入與結構規劃",
      title: "Planning Stage（主題輸入與結構規劃）",
      description: `系統流程的第一階段為 Planning Stage，主要負責將使用者輸入的研究主題轉換為具體的報告結構。

具體流程包含：

1. 接收使用者輸入資料：使用者透過表單提交研究主題、Email 與補充說明內容，系統立即觸發流程。

2. 主題拆解與章節規劃：Agent (Plan Topics) 對輸入主題進行語意解析，自動拆解為 4 個主章節標題，並為各章節產出子章節。

3. 產生標題與引言段落：透過另一個 Intro Agent 將主題與章節整合，生成報告標題與簡短引言，帶出整份報告的主題定位。

4. 資料儲存與流程控制：將所有結果儲存至 Airtable 作為資料庫，並透過 Merge 與 Switch 節點控制後續章節流程的觸發順序與執行條件。`
    },
    {
      src: "/lovable-uploads/1551233a-285b-48c7-b5fe-8734521ea6e3.png",
      alt: "Chapter 1 內容生成流程",
      title: "Generate Content（內容生成流程）",
      description: `第二階段為撰寫報告的核心區塊，系統會針對每個被拆解的章節標題，自動擷取相關資料並生成對應段落內容。每一章節都擁有獨立且相同邏輯的架構流程。以下以 Chapter 1 為例：

1. 關鍵詞查詢與資料擷取：系統根據前一階段拆解出的章節標題與內容提示，透過 Tavily API 執行即時網路資料查詢，擷取相關內容與連結。

2. 段落內容生成：將查詢結果交由 Agent(Writer) ，接著根據搜尋內容撰寫結構化段落文字。

3. 格式整合與輸出：前將段所生成的文字透過 HTML 格式整理後，與來源段落在Combine 節點進行合併，確保每章內容的結構與格式統一。

4. 儲存與資料追蹤：最終生成結果存回 Airtable，方便後續彙整階段進行使用。(資料包含原始查詢內容、生成段落、來源連結)`
    },
    {
      src: "/lovable-uploads/5369a294-d681-49aa-a355-d09a55219852.png",
      alt: "Finalize Content 內容與資料來源合併",
      title: "Finalize Content（內容與資料來源合併）",
      description: `在內容生成完成後，系統會在第三階段將所有章節段落統一彙整，並補齊來源說明及目錄結構。

1. 內容彙整：透過 Merge 節點，將 Chapter 1～4 所產生之段落內容整合成一筆資料

2. 來源補齊：從 Airtable 抓取每章節所對應的引用資料來源，再由 Agent (Sources) 統整並格式化產出參考來源段落

3. 產生章節目錄：Agent（Table of Contents）自動根據章節標題產生完整的目錄格式

4. 內容合併：將章節內容、目錄、來源合併整理後，統一輸出為 HTML 結構，方便後續匯出為 PDF`
    },
    {
      src: "/lovable-uploads/ba194794-2b46-4824-8c4b-c6203bb5d453.png",
      alt: "Output 報告產出與通知",
      title: "Output（報告產出與通知）",
      description: `第四階段為報告匯出，系統會將內容輸出為容易閱讀的格式，並自動寄發給使用者。

1. PDF 轉換：透過 Generate PDF 節點，將整合後的 HTML 格式內容提交至第三方轉換平台（APITemplate.io）進行排版及格式轉換，產出符合閱讀習慣的 PDF 報告。

2. 檔案取得與下載：系統會自動下載剛生成的 PDF 檔案並暫存於工作流程中，方便後續進行作業傳送。

3. Email 自動發送：透過 Gmail 節點（Send Report），系統將報告以附件形式發送至使用者填寫的 Email 地址，完成整個研究報告的交付流程。`
    }
  ];

  const projectInfo = {
    overview: {
      main: "此專題以 n8n 作為主要的流程設計與自動化平台，主要打造一套能根據使用者輸入的主題，協助完成研究報告初稿並產出的自動流程。整體架構整合了語言生成模型（如 Claude 3.5）、即時資料擷取 API（Tavily），並透過工具代理（Tools Agent）完成從主題拆解、資料搜尋、段落撰寫到報告整合的各項任務。",
      purpose: "此流程可大幅簡化學生或研究人員在撰寫研究內容初期所面臨的資訊收集與結構建立之壓力，透過自動化的方式提供具有邏輯及參考依據的段落內容，提升寫作效率。",
      stages: [
        {
          title: "1 使用者輸入與主題規劃（Planning Stage）",
          details: [
            "接收使用者輸入資料：使用者透過表單提交研究主題、Email 與補充說明內容，系統立即觸發流程。",
            "主題拆解與章節規劃：Agent (Plan Topics) 對輸入主題進行語意解析，自動拆解為 4 個主章節標題，並為各章節產出子章節。",
            "產生標題與引言段落：透過另一個 Intro Agent 將主題與章節整合，生成報告標題與簡短引言，帶出整份報告的主題定位。",
            "資料儲存與流程控制：將所有結果儲存至 Airtable 作為資料庫，並透過 Merge 與 Switch 節點控制後續章節流程的觸發順序與執行條件。"
          ]
        },
        {
          title: "1 各章節內容生成（Chapter Modules）",
          details: [
            "每章節流程使用 Tavily API 進行網路資料擷取。",
            "每個章節均有設計獨立的 Tools Agent，搭配 OpenRouter ChatModel（模型為 anthropic/claude-3.5-haiku），來根據查詢結果撰寫段落內容，確保內容根據是即時資訊生成。",
            "將生成內容整理為 HTML 並儲存於 Airtable 資料庫中。"
          ]
        },
        {
          title: "1 內容彙整與補強（Finalize Content）",
          details: [
            "系統合併各章節內容後，呼叫 AI 工具補齊目錄（ToC）與參考來源清單。",
            "最終內容轉為完整 HTML 結構，準備匯出。"
          ]
        },
        {
          title: "1 匯出與發送（PDF & 通知）",
          details: [
            "系統透過 API 將 HTML 內容轉為 PDF。",
            "自動發送報告附件至使用者 Email。"
          ]
        }
      ]
    },
    technologies: {
      methods: [
        {
          category: "資料擷取",
          description: "Tavily API 進行即時網頁搜尋",
          details: "整合 Tavily API 來獲取最新的網路資訊，確保研究報告內容的時效性與準確性。"
        },
        {
          category: "語意生成",
          description: "OpenRouter ChatModel 與 Tools Agent 撰寫各段落內容",
          details: "利用 anthropic/claude-3.5-haiku 模型進行智能文本生成，通過 Tools Agent 架構實現結構化的內容創作。"
        },
        {
          category: "流程控制與格式整理",
          description: "使用 JavaScript 節點、Merge、Switch、HTML Formatter 等模組",
          details: "透過 n8n 的內建節點實現複雜的邏輯控制，包括條件判斷、資料合併、格式轉換等功能。"
        },
        {
          category: "資料儲存與整合",
          description: "使用 Airtable 作為所有資料的集中管理平台",
          details: "採用 Airtable 作為中央資料庫，統一管理使用者輸入、生成內容與最終報告的所有資訊。"
        },
        {
          category: "輸出與傳送",
          description: "透過 PDF API 將內容轉為 PDF 並以 Gmail 節點寄送",
          details: "整合 PDF 轉換服務與 Gmail API，實現自動化的報告生成與郵件發送功能。"
        }
      ],
      coreTools: [
        "n8n 工作流自動化平台",
        "OpenRouter ChatModel (anthropic/claude-3.5-haiku)",
        "Tavily API (即時資料擷取)",
        "Tools Agent (智能代理架構)",
        "Airtable (資料管理)",
        "PDF 轉換 API",
        "Gmail API (郵件發送)"
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
          <TabsTrigger value="objectives">技術</TabsTrigger>
          <TabsTrigger value="achievements">設計與規劃</TabsTrigger>
          <TabsTrigger value="challenges">實作流程</TabsTrigger>
          <TabsTrigger value="tech">成果</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">專題概述</h3>
              <div className="space-y-6">
                <p className="text-gray-600">{projectInfo.overview.main}</p>
                <p className="text-gray-600">{projectInfo.overview.purpose}</p>
                
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
              <h3 className="text-xl font-semibold mb-6">技術與方法</h3>
              
              {/* 技術方法詳細說明 */}
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">核心技術架構</h4>
                <div className="space-y-4">
                  {projectInfo.technologies.methods.map((method, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-blue-800 mb-1">{method.category}</h5>
                          <p className="text-blue-700 text-sm font-medium mb-2">{method.description}</p>
                          <p className="text-gray-600 text-sm">{method.details}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 核心工具清單 */}
              <div>
                <h4 className="text-lg font-medium mb-4">使用技術工具</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projectInfo.technologies.coreTools.map((tool, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded border-l-4 border-blue-500">
                      <span className="text-gray-700 font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="achievements">
          <Card>
            <CardContent className="p-6">
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
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="challenges">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">實作流程展示</h3>
              <p className="text-gray-600 mb-6">
                以下是完整的 n8n 工作流程實作步驟，您可以透過左右切換查看各個階段的詳細流程圖。
              </p>
              
              <Carousel className="w-full max-w-4xl mx-auto">
                <CarouselContent>
                  {workflowImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col items-center p-6">
                            <div className="w-full mb-4">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto rounded-lg shadow-lg"
                              />
                            </div>
                            <div className="text-left w-full">
                              <h4 className="text-lg font-semibold mb-3 text-report-primary">
                                {image.title}
                              </h4>
                              <div className="text-gray-600 text-sm whitespace-pre-line">
                                {image.description}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tech">
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
      </Tabs>
    </section>
  );
};

export default ProjectShowcase;
