
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Target, TrendingUp, Lightbulb } from 'lucide-react';

const SelfReflection = () => {
  const reflectionAreas = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "技術能力成長",
      content: "透過這次實習，我深入學習了 n8n 工作流自動化平台的核心概念與實際應用。從最初對自動化工具的陌生，到能夠獨立設計並實現複雜的工作流程，這個過程讓我對自動化技術有了全新的認識。特別是在整合多個 API 服務、處理數據轉換以及錯誤處理方面，我獲得了寶貴的實戰經驗。"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "問題解決能力",
      content: "在開發自動化研究報告生成系統的過程中，我遇到了許多技術挑戰，包括 API 整合問題、數據格式轉換困難以及工作流程邏輯設計複雜性。這些挑戰讓我學會了系統性地分析問題、查找解決方案，並培養了面對困難時的堅持與耐心。每一個問題的解決都是一次成長的機會。"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-600" />,
      title: "創新思維培養",
      content: "這次實習最大的收穫是學會了如何運用技術工具來解決實際問題。設計自動化報告生成系統不僅僅是技術實現，更重要的是思考如何將複雜的研究流程自動化，如何設計用戶友好的介面，以及如何確保生成內容的質量與可靠性。這培養了我的創新思維和產品設計意識。"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "團隊合作與溝通",
      content: "在實習期間，我學會了如何與不同背景的同事有效溝通，如何清楚地表達技術想法，以及如何接受並整合他人的建議。這些軟技能的提升對我的職業發展同樣重要，讓我理解到技術能力與溝通能力同等重要。"
    }
  ];

  const futureGoals = [
    "深入學習更多自動化技術和工具，成為自動化領域的專家",
    "繼續探索 AI 與自動化的結合應用，開發更智能的解決方案",
    "培養產品思維，不僅關注技術實現，更要關注用戶體驗",
    "持續關注新興技術趨勢，保持技術敏感度和學習能力",
    "希望能將所學知識應用到更大規模的項目中，創造更大的價值"
  ];

  return (
    <section id="self-reflection" className="section-container bg-white">
      <h2 className="section-title">自我評估與心得感想</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
        回顧這段實習經歷，我不僅在技術能力上獲得了顯著提升，更重要的是培養了解決問題的思維方式和持續學習的習慣
      </p>

      {/* 自我評估區域 */}
      <div className="max-w-6xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">能力成長評估</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reflectionAreas.map((area, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="mr-4">{area.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800">{area.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed flex-1">{area.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 心得感想 */}
      <div className="max-w-4xl mx-auto mb-16">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">實習心得感想</h3>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                這次實習經歷對我來說是一個重要的轉折點。從學校的理論學習轉向實際的專案開發，讓我深刻體會到理論與實踐之間的差異。在實際開發過程中，我不僅要考慮技術的可行性，還要思考用戶的需求、系統的穩定性以及未來的可維護性。
              </p>
              <p className="text-lg leading-relaxed">
                特別印象深刻的是開發自動化研究報告生成系統的過程。這個專案讓我學會了如何將複雜的需求分解為可執行的技術方案，如何整合多個不同的服務和 API，以及如何設計用戶友好的介面。每一個功能的實現都需要仔細的規劃和反覆的測試調整。
              </p>
              <p className="text-lg leading-relaxed">
                最重要的是，這次實習讓我認識到持續學習的重要性。技術發展日新月異，只有保持學習的熱忱和開放的心態，才能在這個快速變化的領域中保持競爭力。我深深感謝這次實習機會，也期待能將所學應用到未來的工作和學習中。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 未來目標 */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">未來發展目標</h3>
            <div className="space-y-4">
              {futureGoals.map((goal, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{goal}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SelfReflection;
