
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsShowcase = () => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, color: 'from-cyber-blue to-blue-400' },
    { name: 'React.js', level: 85, color: 'from-cyber-purple to-purple-400' },
    { name: 'n8n工作流', level: 80, color: 'from-cyber-pink to-pink-400' },
    { name: 'API整合', level: 75, color: 'from-cyber-green to-green-400' },
    { name: 'Node.js', level: 70, color: 'from-yellow-400 to-orange-400' },
    { name: 'Database', level: 65, color: 'from-red-400 to-pink-400' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          let currentValue = 0;
          const interval = setInterval(() => {
            currentValue += 2;
            setAnimatedValues(prev => ({
              ...prev,
              [skill.name]: Math.min(currentValue, skill.level)
            }));
            if (currentValue >= skill.level) {
              clearInterval(interval);
            }
          }, 20);
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-container cyber-bg">
      <h2 className="section-title">技能展示</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <Card 
            key={skill.name} 
            className="bg-transparent backdrop-blur-sm border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-500 card-hover group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-cyber-blue font-mono">
                  {skill.name}
                </h3>
                <span className="text-cyber-purple font-bold">
                  {animatedValues[skill.name] || 0}%
                </span>
              </div>
              <div className="relative">
                <Progress 
                  value={animatedValues[skill.name] || 0} 
                  className="h-3 bg-gray-800"
                />
                <div 
                  className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color} opacity-80 transition-all duration-300 group-hover:opacity-100`}
                  style={{ 
                    width: `${animatedValues[skill.name] || 0}%`,
                    boxShadow: `0 0 10px ${skill.color.includes('blue') ? '#00bcd4' : skill.color.includes('purple') ? '#9c27b0' : '#e91e63'}`
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsShowcase;
