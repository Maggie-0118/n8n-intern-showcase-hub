
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Zap } from 'lucide-react';

const ResearchTechnologies = () => {
  const technologies = [
    {
      name: "n8n",
      description: "n8n是一個強大的工作流自動化工具，允許用戶通過視覺化介面連接不同的應用程序和服務。在研究中，我深入研究了n8n的API連接功能、自定義節點開發和複雜工作流設計模式。",
      proficiency: 85,
      color: "cyber-blue"
    },
    {
      name: "前端框架",
      description: "研究了現代前端框架如React、Vue等的最佳實踐，包括狀態管理、性能優化、組件設計模式等。探索了框架間的差異與各自適用場景。",
      proficiency: 80,
      color: "cyber-purple"
    },
    {
      name: "API開發與整合",
      description: "研究RESTful API與GraphQL的設計原則，API版本控制策略，以及不同服務間的API整合方案。實現了高效、安全的API架構。",
      proficiency: 75,
      color: "cyber-pink"
    },
    {
      name: "自動化測試",
      description: "探索自動化測試策略，包括單元測試、集成測試和端到端測試。研究測試驅動開發(TDD)在實際項目中的應用效果。",
      proficiency: 70,
      color: "cyber-green"
    },
    {
      name: "雲服務與部署",
      description: "研究各種雲服務平台的特點與最佳實踐，包括容器化部署、無服務器架構、CI/CD流程優化等。提升了應用部署的效率與可靠性。",
      proficiency: 65,
      color: "cyber-orange"
    },
  ];

  return (
    <section id="research-technologies" className="section-container cyber-bg relative">
      {/* Background matrix effect */}
      <div className="absolute inset-0 matrix-bg opacity-20"></div>
      
      <div className="relative z-10">
        <h2 className="section-title animate-fade-in">
          <Zap className="inline w-8 h-8 mr-3 animate-pulse" />
          研究技術介紹
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in delay-200">
          在實習期間，我有機會深入研究多項前沿技術，並將它們應用到實際項目中。以下是我主要研究的技術領域及成果。
        </p>

        <div className="space-y-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Card key={index} className="card-hover bg-transparent backdrop-blur-sm border border-cyber-blue/30 group animate-slide-in-right overflow-hidden" style={{ animationDelay: `${index * 200}ms` }}>
              <CardContent className="p-6 relative">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/5 to-transparent transform -skew-x-12 group-hover:animate-scan-line"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-cyber-blue font-mono">{tech.name}</h3>
                    <span className="text-cyber-green font-bold text-lg font-mono">
                      {tech.proficiency}%
                    </span>
                  </div>
                  
                  {/* Custom neon progress bar */}
                  <div className="relative mb-4 h-3 bg-gray-800 rounded-full overflow-hidden border border-cyber-blue/30">
                    <div 
                      className="h-full bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink relative overflow-hidden transition-all duration-1000 ease-out"
                      style={{ width: `${tech.proficiency}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-scan-line"></div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-transparent animate-pulse"></div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{tech.description}</p>
                </div>

                {/* Side glow effect */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-pink opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 relative">
          <div className="bg-gradient-to-br from-cyber-blue/10 via-cyber-purple/10 to-cyber-pink/10 rounded-lg p-8 border border-cyber-blue/30 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-center text-cyber-blue font-mono">
              研究方法論
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-gradient-to-br from-cyber-blue/20 to-transparent p-6 rounded-lg border border-cyber-blue/50 card-hover group">
                <p className="font-medium text-cyber-blue mb-3 text-lg font-mono">文獻研究</p>
                <p className="text-gray-300 text-sm">通過閱讀技術文檔、學術論文和專業書籍，建立理論基礎</p>
                <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent group-hover:via-cyber-purple transition-colors duration-300"></div>
              </div>
              <div className="bg-gradient-to-br from-cyber-purple/20 to-transparent p-6 rounded-lg border border-cyber-purple/50 card-hover group">
                <p className="font-medium text-cyber-purple mb-3 text-lg font-mono">實踐驗證</p>
                <p className="text-gray-300 text-sm">通過開發原型和概念驗證，測試技術的可行性和性能</p>
                <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-cyber-purple to-transparent group-hover:via-cyber-pink transition-colors duration-300"></div>
              </div>
              <div className="bg-gradient-to-br from-cyber-pink/20 to-transparent p-6 rounded-lg border border-cyber-pink/50 card-hover group">
                <p className="font-medium text-cyber-pink mb-3 text-lg font-mono">對比分析</p>
                <p className="text-gray-300 text-sm">對不同技術方案進行全面比較，找出最適合特定場景的解決方案</p>
                <div className="mt-3 h-0.5 bg-gradient-to-r from-transparent via-cyber-pink to-transparent group-hover:via-cyber-green transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchTechnologies;
