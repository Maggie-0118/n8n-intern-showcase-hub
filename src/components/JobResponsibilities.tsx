
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
      title: "系統開發與維護",
      content: "參與公司核心產品的開發與維護工作，運用前端與後端技術實現新功能，修復問題，並改進現有系統性能。定期與團隊協作進行代碼審查，確保代碼品質與標準。",
    },
    {
      title: "研究與技術評估",
      content: "研究新興技術與工具，評估其在公司產品中的應用可行性。撰寫技術評估報告，並向團隊介紹創新解決方案。參與技術選型討論，提供基於研究的建議。",
    },
    {
      title: "專案協作",
      content: "與設計師、產品經理和其他開發人員緊密合作，確保功能實現符合設計規範與產品需求。參與敏捷開發流程，包括每日站會、迭代規劃和回顧會議。",
    },
    {
      title: "文檔撰寫",
      content: "編寫詳細的技術文檔、API說明和使用指南。建立開發標準和最佳實踐指導方針。維護項目知識庫，確保團隊成員能夠快速理解系統架構與功能。",
    },
    {
      title: "問題分析與解決",
      content: "分析並解決複雜的技術問題，使用日誌分析、性能監控工具進行故障排除。開發診斷工具改善問題識別與解決流程。參與事件回顧會議，提供改進建議。",
    }
  ];

  return (
    <section id="job-responsibilities" className="section-container bg-gray-50">
      <h2 className="section-title">工作內容介紹</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        在實習期間，我參與了多樣化的工作任務，從日常開發到研究創新技術，以下是我的主要工作職責。
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
