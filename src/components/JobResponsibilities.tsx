
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

      <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">實習收穫</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-600">深入理解企業級應用開發流程與最佳實踐</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-600">增強團隊協作能力，學習有效溝通技巧</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-600">提升問題解決能力與技術分析思維</span>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-600">熟悉敏捷開發方法與工具使用</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-600">培養專業文檔撰寫與知識分享能力</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default JobResponsibilities;
