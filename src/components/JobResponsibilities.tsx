
import React from 'react';

const JobResponsibilities = () => {
  const responsibilities = [
    {
      title: "研究開源軟體與技術趨勢",
      content: "分析並測試各類 AI 相關的開源軟體，評估各應用潛力與技術優勢。",
    },
    {
      title: "協助開發生成式 AI 應用",
      content: "實際參與文本生成、圖像生成、語音合成等應用的原型設計與功能實作，涵蓋 LLM 開發（如 Llama2、OpenAI API）、圖片生成（如 Stable Diffusion）、TTS/Speech 合成服務等。",
    },
    {
      title: "LangChain框架應用研究",
      content: "學習LangChain如何整合大型語言模型（LLM），探索在對話管理、資料檢索、文本處理等領域的應用，並透過實作驗證框架效能。",
    },
    {
      title: "開發與測試生成式 AI 應用",
      content: "基於LangChain或其他AI框架，嘗試開發AI生成應用，例如智慧客服、文本摘要、知識檢索等，並進行效能測試與調整。",
    },
    {
      title: "技術報告撰寫與分享",
      content: "整理研究過程與測試結果，撰寫報告、開發筆記，並參與內部技術交流。",
    }
  ];

  const progressMilestones = [
    {
      period: "初期階段",
      title: "技術基礎建立",
      description:  [
      "熟悉資策會通訊應用中心整合加值組的開發流程與團隊協作方式",
      "完成開發環境搭建：Python、Node.js、n8n、Docker、Git 版本控制",
      "研讀生成式 AI 技術文檔（LangChain、Whisper、Diffusion），並評估所需依賴與資源"
    ].join("；"),
    status: "completed",
    },
    {
      period: "中期階段",
      title: "聲紋辨識研究與LLM研究",
      description: "深入研究資料識技術，語資相關原理，探索各種應用領域",
      status: "completed"
    },
    {
      period: "後期階段",
      title: "n8n 自動化流程",
      description: "設計並實作自動化工作流程，整合各項技術，提升整體效率",
      status: "completed"
    }
  ];

  return (
    <section id="job-responsibilities" className="section-container bg-gray-50">
      <h2 className="section-title">工作內容介紹</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
        在實習期間，我參與了多樣化的工作任務，從日常開發到研究創新技術，以下是我的主要工作職責
      </p>

      <div className="max-w-6xl mx-auto space-y-12">
        {responsibilities.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* 編號圓圈 */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                {index + 1}
              </div>
            </div>

            {/* 內容卡片 */}
            <div className="flex-1 bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-purple-600 text-white p-6 rounded-t-xl">
          <h3 className="text-2xl font-bold text-center">實習期間完成進度</h3>
        </div>
        
        <div className="bg-white rounded-b-xl shadow-md p-8">
          <div className="space-y-8">
            {progressMilestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* 時間軸線和圓點 */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                  {index < progressMilestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-blue-200 mt-2"></div>
                  )}
                </div>
                
                {/* 內容 */}
                <div className="flex-1 pb-8">
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {milestone.period}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobResponsibilities;
