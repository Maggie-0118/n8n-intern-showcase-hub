
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const ResearchTechnologies = () => {
  const langchainModules = [
    {
      name: "Models（模型）",
      description: "使用 ChatModel 處理多輪對話，能正確辨別角色（System、User、AI）"
    },
    {
      name: "PromptTemplate（提示語模板）",
      description: "學習如何撰寫具一致性與重用性的提示語格式。"
    },
    {
      name: "Chains（鏈式流程）",
      description: "了解如何將多個處理步驟串接為可維護的流程，例如「接收問題 → 檢索資料 → 生成回答」"
    },
    {
      name: "Memory（記憶模組）",
      description: "提供短期與長期記憶能力，持久化對話上下文或任務狀態，提升對話連貫性與用戶體驗"
    },
    {
      name: "Agents（智能代理）",
      description: "學習如何讓 AI 根據需求自動決定使用哪些工具解決問題"
    },
    {
      name: "Tools（工具擴充）",
      description: "定義外部資源接口（如 REST API、資料庫、檔案系統、Shell 指令等），賦予 LLM 額外能力"
    },
    {
      name: "Retrieval（資訊檢索）",
      description: "整合向量資料庫（如 FAISS、Pinecone）或傳統搜尋引擎，快速定位相關文件，提升回答的準確度與專業性"
    },
    {
      name: "Cache（快取）",
      description: "對重複查詢結果進行快取，避免多次呼叫 LLM 或檢索資源，顯著降低延遲並節省計算成本"
    }
  ];

  const n8nConcepts = [
    {
      name: "節點（Node）",
      description: "n8n 中的每個步驟都是一個功能節點，支援 HTTP 請求、讀寫 Google Sheets、執行 JavaScript 等"
    },
    {
      name: "觸發器（Trigger）",
      description: "如 Webhook、時間排程等，可設定流程啟動條件"
    },
    {
      name: "流程邏輯（Workflow）",
      description: "透過拖拉方式設計資料流與條件判斷，具備高度彈性與可視化優勢"
    },
    {
      name: "環境變數與資料傳遞",
      description: "了解如何在節點間傳遞 JSON 格式資料，及如何存取前一個節點的輸出"
    }
  ];

  return (
    <section id="research-technologies" className="section-container bg-white">
      <h2 className="section-title">技術研究</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        在實習期間，我深入研究了兩大核心技術：LangChain 和 n8n，並將它們應用到實際項目中
      </p>

      {/* 詳細技術研究 - 使用 Tabs 切換 */}
      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="langchain" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="langchain" className="text-lg font-medium">LangChain</TabsTrigger>
            <TabsTrigger value="n8n" className="text-lg font-medium">n8n</TabsTrigger>
          </TabsList>

          {/* LangChain Tab Content */}
          <TabsContent value="langchain">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-report-primary">LangChain 深度研究</h3>
                
                {/* 核心概念 */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">1. 核心概念與模組結構理解</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {langchainModules.map((module, index) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium text-report-primary mb-2">{module.name}</h5>
                        <p className="text-gray-600 text-sm">{module.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 工具模組 */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">2. 工具 Tool 模組運用補充</h4>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-medium mb-3 text-gray-800">使用內建工具：</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li><strong>get_current_time：</strong>提供時間查詢功能</li>
                        <li><strong>get_weather：</strong>整合即時天氣查詢 API</li>
                        <li><strong>currency_converter：</strong>將匯率查詢納入對話中，實現動態資訊查詢</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-3 text-gray-800">開發自訂工具：</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                        <li><strong>PDF 知識問答助手：</strong>透過將 PDF 轉為向量並整合 FAISS，再設計工具供 LLM 查詢回應</li>
                        <li><strong>Google Search API 查詢器：</strong>實作一個工具讓 LLM 可動態搜尋網頁資料作為回答依據</li>
                        <li><strong>資料庫查詢工具：</strong>讓 AI 可針對公司內部的產品資料庫查詢條目，回傳條件篩選結果</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 實作案例 */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">3. LangChain 技術應用實作：客服知識問答流程</h4>
                  <p className="text-gray-600 mb-4">
                    在掌握 LangChain 各模組後，實作了一套整合了 Retrieval、Tool 與 Agent 等技術的智慧客服問答系統，
                    此研究主要是模擬企業內部常見的客服應答情境，目的是將原本分散在 FAQ 表格中的知識轉換為結構化、可查詢的知識庫。
                  </p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="implementation-flow">
                      <AccordionTrigger className="text-lg font-medium">
                        實作流程詳細說明
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <div className="bg-report-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">1</div>
                            <div>
                              <h6 className="font-medium">資料處理</h6>
                              <p className="text-gray-600 text-sm">將常見客服問答表彙整至 Excel，作為知識來源</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="bg-report-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">2</div>
                            <div>
                              <h6 className="font-medium">向量化儲存</h6>
                              <p className="text-gray-600 text-sm">將問題欄位向量化，並用 FAISS 建立檢索系統</p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="bg-report-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">3</div>
                            <div>
                              <h6 className="font-medium">LangChain 結構設計</h6>
                              <ul className="text-gray-600 text-sm space-y-1 ml-4 list-disc list-inside">
                                <li>使用 Retrieval 模組建立向量查詢邏輯</li>
                                <li>用 Tool 包裝查詢功能，供 Agent 呼叫</li>
                                <li>Agent 分析提問語意，自動判斷是否需要查詢知識庫</li>
                              </ul>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="bg-report-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">4</div>
                            <div>
                              <h6 className="font-medium">AI 回應設計</h6>
                              <ul className="text-gray-600 text-sm space-y-1 ml-4 list-disc list-inside">
                                <li>使用 OutputParser 將查詢結果轉為簡潔口語化回答</li>
                                <li>模型能進行類似「客服互動」的回應模式</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* 成果特色 */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">4. 成果特色</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-2">支援自然語言提問</h5>
                      <p className="text-gray-600 text-sm">使用者可直接以口語化方式提出問題，例如「公開標案日期是什麼時候？」或「如何申請廠商名稱變更？」</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-2">提升查詢準確度</h5>
                      <p className="text-gray-600 text-sm">系統能從知識庫中找出語意最接近的內容，有效降低關鍵字誤判的情況</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-2">模擬真實客服互動</h5>
                      <p className="text-gray-600 text-sm">AI 回覆內容條理清晰、語氣自然，具備實用性與親和感</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-medium text-green-800 mb-2">強化作業效率</h5>
                      <p className="text-gray-600 text-sm">大幅降低人工查閱 FAQ 或內部文件的時間</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* n8n Tab Content */}
          <TabsContent value="n8n">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-report-primary">n8n 深度研究</h3>
                
                {/* 核心概念 */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">1. 核心概念與模組理解</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {n8nConcepts.map((concept, index) => (
                      <div key={index} className="bg-purple-50 p-4 rounded-lg">
                        <h5 className="font-medium text-purple-800 mb-2">{concept.name}</h5>
                        <p className="text-gray-600 text-sm">{concept.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 實作案例 */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">2. n8n 技術應用實作: 智慧問答 with Line</h4>
                  <p className="text-gray-600 mb-6">
                    在熟悉 n8n 的流程設計與資料傳遞邏輯後，嘗試實作了一個文字查詢流程，
                    讓使用者可以透過 LINE Bot 提問，系統會回到向量資料庫進行語意比對，並傳回最相關的資料作為回應。
                  </p>

                  {/* 直接顯示圖片 */}
                  <div className="mb-6">
                    <h5 className="font-medium mb-3 text-gray-800">n8n後台流程：</h5>
                    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <img
                        src="/lovable-uploads/71f6daeb-c4c1-4038-a25a-68ead8017288.png"
                        alt="n8n後台流程"
                        className="max-w-full h-auto rounded-lg mx-auto shadow-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">1</div>
                      <div>
                        <h6 className="font-medium">接收提問文字</h6>
                        <p className="text-gray-600 text-sm">使用者透過 Line 介面輸入問題，透過 webhook 傳入 n8n 系統</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">2</div>
                      <div>
                        <h6 className="font-medium">轉換向量嵌入</h6>
                        <p className="text-gray-600 text-sm">使用 Google Gemini Embeddings 模組將輸入文字轉為向量表示</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">3</div>
                      <div>
                        <h6 className="font-medium">語意比對與資料檢索</h6>
                        <p className="text-gray-600 text-sm">在 Pinecone Vector Store 中進行相似語意查詢，找出最接近的段落作為回應依據</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">4</div>
                      <div>
                        <h6 className="font-medium">整合回答與回傳</h6>
                        <p className="text-gray-600 text-sm">啟用 OpenRouter ChatModel 模型，將檢索結果組合並生成自然語言回答，再回傳給使用者。記憶模組（Simple Memory）可記錄上下文資訊，支援後續多輪提問</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">+</div>
                      <div>
                        <h6 className="font-medium">輔助查詢擴充（例: SerpAPI）</h6>
                        <p className="text-gray-600 text-sm">若向量庫查詢未命中，系統亦可自動觸發 SerpAPI 進行外部網路搜尋作為補充來源</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      
    </section>
  );
};

export default ResearchTechnologies;
