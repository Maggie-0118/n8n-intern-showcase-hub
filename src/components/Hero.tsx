import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, GraduationCap, User, Briefcase } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  name: string;
}

const Hero = ({ title, subtitle, name }: HeroProps) => {
  const scrollToContent = () => {
    const element = document.getElementById("work-environment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-3"></div>

      {/* 更白的透明遮罩 */}
      <div className="absolute inset-0 bg-white/85"></div>

      {/* 装饰性背景元素 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="z-10 w-full max-w-5xl mx-auto px-4">
        <div className="text-center">
          <br />
          <br />
          <br />

          {/* 主標題 - 完全置中 */}
          <div className="flex flex-col items-center justify-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in text-gray-900 leading-tight text-center">
              <br />
              <br />
              元智大學資訊管理系
              <br />
              <span className="text-xl md:text-2xl text-blue-600 font-medium">第三十屆專業實習報告</span>
            </h1>
            <h2 className="text-sm md:text-base font-light mb-4 text-gray-600 animate-fade-in tracking-wide text-center">
              114-1學期
            </h2>
          </div>

          {/* 主要內容卡片 - 完全置中 */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-5 animate-fade-in shadow-xl border border-white/20 max-w-md w-full">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-base md:text-lg mb-3 text-gray-800 font-semibold text-center">
                實習單位: 財團法人資訊工業策進會
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-3 rounded-full"></div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-center">
                探索生成式 AI 與流程自動化技術
              </p>
            </div>
          </div>
        </div>

        {/* 信息卡片網格 - 完全置中 */}
        <div className="flex justify-center mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-2xl w-full animate-fade-in">
            <div className="bg-white/85 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 group hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2">
                <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <GraduationCap className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <div className="font-bold text-gray-800 text-xs mb-1 text-center">指導老師</div>
              <div className="text-gray-600 text-xs text-center">王仁甫 教授</div>
            </div>

            <div className="bg-white/85 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 group hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2">
                <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="font-bold text-gray-800 text-xs mb-1 text-center">學生</div>
              <div className="text-gray-600 text-xs text-center">邱子芸</div>
              <div className="text-gray-600 text-xs text-center">1111707</div>
            </div>

            <div className="bg-white/85 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 group hover:-translate-y-1">
              <div className="flex items-center justify-center mb-2">
                <div className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Briefcase className="w-4 h-4 text-purple-600" />
                </div>
              </div>
              <div className="font-bold text-gray-800 text-xs mb-1 text-center">工作代號</div>
              <div className="text-gray-600 text-xs text-center">O15</div>
            </div>
          </div>
        </div>

        {/* 行動按鈕 - 完全置中 */}
        <div className="flex flex-col items-center justify-center space-y-2 mb-12">
          <Button
            onClick={scrollToContent}
            className="rounded-full px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 shadow-xl hover:shadow-2xl text-xs font-medium transform hover:scale-105"
          >
            查看報告內容
          </Button>
          <p className="text-gray-500 text-xs text-center">向下滾動探索更多內容</p>
        </div>

        {/* 滚动指示器 - 完全置中 */}
        <div className="flex justify-center">
          <div className="animate-bounce">
            <div className="w-7 h-7 border-2 border-gray-400 rounded-full flex items-center justify-center bg-white/80 backdrop-blur-sm">
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
