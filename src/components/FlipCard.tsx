
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

const FlipCard = ({ frontContent, backContent, className = '' }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: '1000px', height: '300px' }}
    >
      <div 
        className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}
      >
        {/* 正面 */}
        <Card 
          className="flip-card-face flip-card-front bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 border border-cyber-blue/50"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden'
          }}
        >
          <CardContent className="p-6 h-full flex items-center justify-center">
            {frontContent}
          </CardContent>
        </Card>

        {/* 背面 */}
        <Card 
          className="flip-card-face flip-card-back bg-gradient-to-br from-cyber-purple/20 to-cyber-pink/20 border border-cyber-purple/50"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <CardContent className="p-6 h-full flex items-center justify-center">
            {backContent}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlipCard;
