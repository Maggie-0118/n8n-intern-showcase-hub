
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const JobResponsibilities = () => {
  const responsibilities = [
    {
      title: "協助執行生成式 AI 相關資料與應用的爬蒐",
      content: "參與生成式 AI 的研究與實作，探索其在不同應用場景中的可能性，並定期評估最新工具與技術，如 ChatGPT、Claude、Stable Diffusion、Runway ML 等，記錄使用經驗並分享於團隊會議中。
",
    },
    {
      title: "協助開發生成式 AI 應用",
      content: "實際參與文本生成、圖像生成、語音合成等應用的原型設計與功能實作，涵蓋 LLM 開發（如 Llama2、OpenAI API）、圖片生成（如 Stable Diffusion）、TTS/Speech 合成服務等。",
    },
    {
      title: "進行系統整合與 API 開發",
      content: "將模型包裝為 RESTful API，並使用 FastAPI、Docker 進行服務部署，提升服務的穩定性與擴展性，支援跨團隊的功能整合與共享。
",
    },
    {
      title: "撰寫技術文件與測試案例",
      content: "負責專案文件、技術筆記與測試案例設計，協助團隊建立可維運的技術基礎與知識庫，確保專案開發過程的品質控制。",
    },
    {
      title: "跨部門協作與技術提案",
      content: "透過每週例會與技術簡報，與不同部門同仁交流專案成果與學習心得，協助理解業務需求並提出適合的生成式 AI 應用解決方案。
",
    }
  ];

  return (
    <section id="job-responsibilities" className="section-container bg-gray-50">
      <h2 className="section-title">工作內容介紹</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        此次實習於資策會通訊應用中心整合加值組，該組專注於探索生成式 AI 技術，從模型評估到應用場景驗證，推動前沿技術落地。
      </p>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <Accordion type="single" collapsible className="w-full">
          {responsibilities.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-medium">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <h3 className="text-xl font-semibold mb-4">實習收穫</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>深入理解企業級應用開發流程與最佳實踐</li>
            <li>增強團隊協作能力，學習有效溝通技巧</li>
            <li>提升問題解決能力與技術分析思維</li>
            <li>熟悉敏捷開發方法與工具使用</li>
            <li>培養專業文檔撰寫與知識分享能力</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default JobResponsibilities;
