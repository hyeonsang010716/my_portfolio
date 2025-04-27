import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/background.jpeg"
          alt="Background"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          기록과 공유를 좋아하는
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          조현상입니다.
        </h2>
        
        <div className="max-w-2xl mx-auto space-y-4 text-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <p>프론트엔드 개발자를 희망하고 있습니다.</p>
          <p>배운 모든 것을 기록하고 공유하는 것을 좋아합니다.</p>
          <p>공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;