import React from 'react';
import { Button } from '../components/common/Button';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { useNavigate } from 'react-router';
import { BookOpen, Activity, Star, ChevronRight, CheckCircle2, Layers, Briefcase, Users, Monitor, Building } from 'lucide-react';
import { courses } from '../data/coursesData';

export const Courses: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      <div className="bg-white py-16 mb-16 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <span className="text-[#FF8C6B] font-bold tracking-[0.3em] uppercase text-xs block mb-4">Curriculum</span>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-800 font-serif-jp">全3レベルの認定資格</h1>
            <p className="mt-6 text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
                初心者からプロフェッショナルまで。一貫した理論に基づき、着実にステップアップできる学習環境を提供します。
            </p>
        </div>
      </div>

      {/* Double License Special Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="bg-gradient-to-br from-[#FFF5F0] to-white rounded-[2.5rem] p-10 md:p-16 border border-[#FFD1C1] relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Layers size={200} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-orange-500 text-white text-[10px] font-bold rounded-full mb-6 tracking-widest uppercase">
                Special System
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-stone-800 font-serif-jp leading-tight">
                Double License<br />
                <span className="text-[#FF8C6B]">2つの資格</span>を同時に取得
              </h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed font-medium">
                当アカデミーでは、一回のコース受講で、役割の異なる 2 つの認定資格を取得できる「ダブルライセンス制度」を採用しています。これにより、知識の幅を広げ、市場での信頼性を圧倒的に高めることが可能です。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-5 rounded-xl border border-stone-100 flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#FF8C6B]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-bold uppercase">Role A</div>
                    <div className="text-sm font-bold text-stone-800">ダイエットアドバイザー</div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-100 flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-[#5D9B9B]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-stone-400 font-bold uppercase">Role B</div>
                    <div className="text-sm font-bold text-stone-800">シェイプアップ講師</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <PlaceholderImage height="350px" className="rounded-[2rem] shadow-xl" color="bg-stone-100" text="CERTIFICATE PREVIEW" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {courses.map((course, idx) => (
          <div 
            key={course.id}
            className={`flex flex-col lg:flex-row bg-white rounded-[2rem] overflow-hidden shadow-sm border border-stone-200 hover:shadow-xl transition-all duration-500 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Visual Part */}
            <div className={`lg:w-1/2 relative min-h-[350px] ${course.color} flex items-center justify-center cursor-pointer group`} onClick={() => navigate(course.path)}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_100%)]"></div>
                <div className="text-white text-center p-12 relative z-10">
                    <course.icon size={120} strokeWidth={1} className="mx-auto mb-8 opacity-90 group-hover:scale-110 transition-transform duration-500" />
                    <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                      LEVEL 0{idx + 1}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2 font-serif-jp">{course.name}</h2>
                    <p className="text-white/80 font-bold tracking-widest">{course.subtitle}</p>
                </div>
            </div>

            {/* Content Part */}
            <div className="lg:w-1/2 p-8 md:p-14">
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center">
                        <span className={`w-8 h-8 rounded-lg ${course.color} flex items-center justify-center text-white mr-3`}>
                            <Star size={16} fill="currentColor" />
                        </span>
                        このコースの概要
                    </h3>
                    <p className="text-stone-600 leading-relaxed text-base font-medium">
                        {course.description}
                    </p>
                </div>

                <div className="mb-10">
                    <h4 className="text-sm font-bold text-stone-400 tracking-widest uppercase mb-6 border-b border-stone-100 pb-2">主な学習カリキュラム</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-stone-700 font-bold">
                                <CheckCircle2 className={`${course.accent}`} size={18} />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-stone-100">
                    <div className="flex-1">
                        <div className="text-xs text-stone-400 font-bold mb-1">受講料 (税込)</div>
                        <div className={`text-3xl font-bold ${course.accent} font-serif-jp`}>
                            {course.price}{course.id !== 'professional' && <span className="text-sm font-normal text-stone-500 ml-1">円</span>}
                        </div>
                    </div>
                    <Button 
                      variant={course.id === 'regular' ? 'orange' : course.id === 'senior' ? 'teal' : 'primary'} 
                      size="lg" 
                      className="w-full sm:w-auto" 
                      onClick={() => navigate(course.path)}
                    >
                        詳細・{course.id === 'professional' ? '導入相談' : 'カリキュラム'} <ChevronRight className="ml-2" size={18} />
                    </Button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};