
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const ResearchTechnologies = () => {
  const technologies = [
    {
      name: "n8n",
      description: "n8n是一個強大的工作流自動化工具，允許用戶通過視覺化介面連接不同的應用程序和服務。在研究中，我深入研究了n8n的API連接功能、自定義節點開發和複雜工作流設計模式。",
      proficiency: 85,
    },
    {
      name: "前端框架",
      description: "研究了現代前端框架如React、Vue等的最佳實踐，包括狀態管理、性能優化、組件設計模式等。探索了框架間的差異與各自適用場景。",
      proficiency: 80,
    },
    {
      name: "API開發與整合",
      description: "研究RESTful API與GraphQL的設計原則，API版本控制策略，以及不同服務間的API整合方案。實現了高效、安全的API架構。",
      proficiency: 75,
    },
    {
      name: "自動化測試",
      description: "探索自動化測試策略，包括單元測試、集成測試和端到端測試。研究測試驅動開發(TDD)在實際項目中的應用效果。",
      proficiency: 70,
    },
    {
      name: "雲服務與部署",
      description: "研究各種雲服務平台的特點與最佳實踐，包括容器化部署、無服務器架構、CI/CD流程優化等。提升了應用部署的效率與可靠性。",
      proficiency: 65,
    },
  ];

  return (
    <section id="research-technologies" className="section-container bg-white">
      <h2 className="section-title">研究技術介紹</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        在實習期間，我有機會深入研究多項前沿技術，並將它們應用到實際項目中。以下是我主要研究的技術領域及成果。
      </p>

      <div className="space-y-8 max-w-4xl mx-auto">
        {technologies.map((tech, index) => (
          <Card key={index} className="overflow-hidden card-hover">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{tech.name}</h3>
                <span className="text-report-primary font-medium">{tech.proficiency}%</span>
              </div>
              <Progress value={tech.proficiency} className="h-2 mb-4" />
              <p className="text-gray-600">{tech.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">研究方法論</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium text-report-primary mb-2">文獻研究</p>
            <p className="text-gray-600 text-sm">通過閱讀技術文檔、學術論文和專業書籍，建立理論基礎</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium text-report-primary mb-2">實踐驗證</p>
            <p className="text-gray-600 text-sm">通過開發原型和概念驗證，測試技術的可行性和性能</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="font-medium text-report-primary mb-2">對比分析</p>
            <p className="text-gray-600 text-sm">對不同技術方案進行全面比較，找出最適合特定場景的解決方案</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchTechnologies;
