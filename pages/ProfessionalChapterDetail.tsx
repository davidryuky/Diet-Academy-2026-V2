
import React from 'react';
// Fix: Use useNavigate and useParams from 'react-router'
import { useParams, useNavigate } from 'react-router';
import { professionalChapters } from '../data/professionalChaptersData';
import { Button } from '../components/common/Button';
import { ChevronLeft, Lightbulb, ShieldCheck, Target } from 'lucide-react';

export const ProfessionalChapterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Safe lookup for the chapter data
  const chapter = id ? professionalChapters[id] : null;

  // Handle case where chapter is missing or marked as draft
  if (!chapter || chapter.isDraft) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-bold text-stone-800 font-serif-jp mb-4">コンテンツ準備中</h2>
          <p className="text-stone-500 mb-8">この章の内容は現在作成中です。公開まで今しばらくお待ちください。</p>
          <Button onClick={() => navigate('/courses/professional')}>プロフェッショナルコースに戻る</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Sticky Sub-Header for navigation context */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-stone-100 py-4">
        <div className="w-[92%] max-w-[1200px] mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/courses/professional')}
            className="flex items-center text-sm font-bold text-stone-400 hover:text-teal-600 transition-colors group"
          >
            <ChevronLeft size={18} className="mr-1 group-hover:-translate-x-1 transition-transform" />
            戻る
          </button>
          <div className="text-[10px] font-black text-stone-200 uppercase tracking-widest">
            Chapter {chapter.num}
          </div>
        </div>
      </div>

      {/* Hero Section for the specific Chapter */}
      <section className="py-20 bg-stone-50">
        <div className="w-[92%] max-w-[900px] mx-auto text-center">
          <span className="inline-block text-teal-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-6 bg-teal-50 px-4 py-1 rounded-full border border-teal-100">
            Professional Curriculum
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight mb-6">
            {chapter.title}
          </h1>
          <p className="text-xl text-stone-500 font-medium font-serif-jp italic">
            {chapter.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Sections: Rendering dynamic array from data */}
      <section className="py-24">
        <div className="w-[92%] max-w-[800px] mx-auto space-y-24">
          {chapter.sections.map((section, sIdx) => (
            <div key={sIdx} className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationDelay: `${sIdx * 150}ms` }}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                    {/* Alternate icons based on section index */}
                    {sIdx === 0 ? <Lightbulb size={20} /> : sIdx === 1 ? <Target size={20} /> : <ShieldCheck size={20} />}
                 </div>
                 <h2 className="text-2xl font-bold text-stone-900 font-serif-jp">
                   {section.title}
                 </h2>
              </div>
              <div className="space-y-6">
                {section.content.map((p, pIdx) => (
                  <p key={pIdx} className="text-stone-600 leading-[2.2] text-lg font-medium">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation / CTA */}
      <section className="py-24 border-t border-stone-100 bg-stone-50">
        <div className="w-[92%] max-w-[800px] mx-auto">
          <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-stone-200 text-center">
             <h3 className="text-2xl font-bold text-stone-900 font-serif-jp mb-6">
               この学びをあなたの施設にインストールする
             </h3>
             <p className="text-stone-500 mb-10 leading-relaxed font-medium">
               プロフェッショナルコースでは、これらの理論を即座に実践するための<br className="hidden md:block" />
               運用マニュアルと診断ツール一式を提供しています。
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="xl" variant="teal" onClick={() => navigate('/pricing')}>
                  導入相談（無料）を予約
                </Button>
                <Button size="xl" variant="outline" onClick={() => navigate('/courses/professional')}>
                  カリキュラム一覧へ
                </Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
