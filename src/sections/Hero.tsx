import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-end overflow-hidden"
    >
      {/* 배경 이미지 (왼쪽 50%) */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full">
          <img
            src="/background.jpeg"
            alt="Background"
            className="w-full h-full object-cover object-left"
          />
        </div>
      </div>

      {/* 섹션 전체를 살짝 어둡게 하는 오버레이 */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 콘텐츠(오른쪽 50%) */}
      <div className="relative z-10 w-1/2 text-white px-6">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          소통과 탐구를 좋아하는
        </h1>

        <h2
          className="text-3xl md:text-4xl font-bold mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          조현상입니다.
        </h2>

        <div
          className="max-w-2xl space-y-4 text-lg opacity-0 animate-fade-in"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          <p>AI SW Engineer를 희망하고 있습니다.</p>
          <p>팀원과의 소통과 공유하는 것을 좋아합니다.</p>
          <p>최신 AI 기술 트렌드를 꾸준히 학습하고, 실제 프로젝트에 적극 반영하기 위해 노력합니다.</p>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
