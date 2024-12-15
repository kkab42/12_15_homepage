import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Star, Clock } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: '교육 경력', value: '15년+' },
  { icon: Star, label: '합격률', value: '99%' },
  { icon: Users, label: '누적 수강생', value: '1,000+' },
  { icon: Clock, label: '학습 관리', value: '24/7' }
];

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[480px] sm:min-h-[600px] lg:min-h-[800px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/50 via-indigo-900/70 to-indigo-900/90"></div>
      </div>

      <div className="relative h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6">
              바라던 합격의 시작
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-indigo-100 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
              체계적인 학습 관리와 전문 강사진의 1:1 맞춤 지도로 여러분의 합격을 함께 만들어갑니다
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg p-3 sm:p-4 lg:p-6 rounded-xl border border-white/20">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-white mx-auto mb-2 sm:mb-3" />
                  <h3 className="font-semibold text-white text-lg sm:text-xl lg:text-2xl mb-1">{stat.value}</h3>
                  <p className="text-indigo-200 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
              <button 
                onClick={() => navigate('/studies')}
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold text-sm sm:text-base hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                스터디 찾기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}