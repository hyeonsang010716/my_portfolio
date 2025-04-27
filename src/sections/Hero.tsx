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
          <span className="text-indigo-400">소통</span>과{' '}
          <span className="text-indigo-400">도전</span>을 좋아하는
        </h1>

        <h2
          className="text-3xl md:text-4xl font-bold mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <span className="text-indigo-400">조현상</span>입니다.
        </h2>

        <div
          className="max-w-2xl space-y-4 text-lg opacity-0 animate-fade-in"
          style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
        >
          <p>
            <span className="font-semibold text-indigo-400">AI SW Engineer</span>를 희망하고 있습니다.
          </p>
          <p>
            팀원과의 <span className="text-indigo-400 font-semibold">소통</span>과{' '}
            <span className="text-indigo-400 font-semibold">공유</span>를 좋아합니다.
          </p>
          <p>
            최신 AI 기술 트렌드를 꾸준히{' '}
            <span className="text-indigo-400 font-semibold">학습</span>하고, 실제 프로젝트에
            적극 반영하기 위해 <span className="text-indigo-400 font-semibold">도전</span>합니다.
          </p>
          <p>
            <span className="text-indigo-400 font-semibold">책임감</span> 있게 목표를 끝까지 완수하는 개발자가 되겠습니다.
          </p>
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