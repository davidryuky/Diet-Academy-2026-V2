import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { 
  Check, 
  ShieldCheck, 
  ArrowDown, 
  Star, 
  ChevronRight, 
  Zap, 
  CreditCard, 
  Info,
  Clock,
  CheckCircle2,
  TrendingDown,
  Target,
  GraduationCap
} from 'lucide-react';
import { courses } from '../data/coursesData';
import { useNavigate } from 'react-router';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [l01Option, setL01Option] = useState<'study' | 'master'>('master');

  const regularStudy = courses.find(c => c.id === 'regular-study')!;
  const regularMaster = courses.find(c => c.id === 'regular-master')!;
  const seniorCourse = courses.find(c => c.id === 'senior')!;
  const proCourse = courses.find(c => c.id === 'professional')!;

  return (
    <div className="min-h-screen bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF8C6B] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-orange-100 animate-bounce">
            <Clock size={14} /> 2026年 春の受講応援キャンペーン実施中
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 font-serif-jp tracking-tight">
            目標に合わせた3つのステップ
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-stone-500 font-medium">
            基礎から応用、そして経営へ。段階的に学べるステップアップ方式を採用しています。<br />
            各コースは上位コースへの受講条件となっています。
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24 items-stretch">
          
          {/* L01: Regular Course with Toggle */}
          <div className="relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden border-2 border-[#FF8C6B] shadow-2xl lg:-translate-y-4">
            <div className="bg-[#FF8C6B] text-white text-[10px] font-bold text-center py-2.5 tracking-[0.2em] uppercase">
              Most Popular - 選べる2つのプラン
            </div>
            
            <div className="p-8 md:p-10 flex-grow">
              {/* Option Switcher */}
              <div className="flex bg-stone-100 p-1.5 rounded-2xl mb-8">
                <button 
                  onClick={() => setL01Option('master')}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 ${l01Option === 'master' ? 'bg-white text-[#FF8C6B] shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                >
                  <Target size={16} />
                  実践マスター版
                </button>
                <button 
                  onClick={() => setL01Option('study')}
                  className={`flex-1 py-3 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 ${l01Option === 'study' ? 'bg-white text-stone-700 shadow-sm' : 'text-stone-400 hover:text-stone-600'}`}
                >
                  <GraduationCap size={16} />
                  学習のみ
                </button>
              </div>

              <div className={`w-14 h-14 rounded-2xl ${l01Option === 'master' ? 'bg-emerald-600' : 'bg-orange-500'} flex items-center justify-center text-white mb-6 transition-colors shadow-lg`}>
                  {l01Option === 'master' ? <Target size={28} /> : <GraduationCap size={28} />}
              </div>
              
              <h3 className="text-2xl font-bold text-stone-800 font-serif-jp">
                {l01Option === 'master' ? 'ダイエットマスター' : 'レギュラーコース'}
                <span className="block text-xs font-normal mt-1 text-stone-400">
                  {l01Option === 'master' ? '(実践サポート版)' : '(学習のみ版)'}
                </span>
              </h3>
              
              <div className="my-8 flex items-baseline">
                <span className="text-5xl font-black text-stone-800 font-serif-jp">
                  {l01Option === 'master' ? regularMaster.price : regularStudy.price}
                </span>
                <span className="ml-2 text-sm text-stone-400 font-bold">円 (税込)</span>
              </div>
              
              <ul className="space-y-4 text-sm font-medium text-stone-600 mb-10">
                {(l01Option === 'master' ? regularMaster.features : regularStudy.features).map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className={`h-5 w-5 ${l01Option === 'master' ? 'text-emerald-500' : 'text-orange-500'} mr-3 flex-shrink-0 mt-0.5`} /> 
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-stone-50/50 border-t border-stone-100">
              <Button 
                fullWidth 
                variant="orange" 
                size="lg"
                className={`rounded-2xl h-14 ${l01Option === 'master' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-orange-500'}`}
                onClick={() => {
                  const id = l01Option === 'master' ? 'regular-master' : 'regular-study';
                  if (l01Option === 'master') navigate('/calculator');
                  else navigate(`/checkout?courseId=${id}`);
                }}
              >
                {l01Option === 'master' ? '診断を受けて開始する' : '今すぐ学習を始める'}
              </Button>
            </div>
          </div>

          {/* L02: Senior Course */}
          <div className="relative flex flex-col bg-white rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500">
            <div className="p-8 md:p-10 flex-grow">
              <div className="w-14 h-14 rounded-2xl bg-teal-600 flex items-center justify-center text-white mb-6 shadow-lg">
                  <seniorCourse.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 font-serif-jp">{seniorCourse.name}</h3>
              <p className="text-[10px] text-stone-400 font-bold tracking-widest mt-1 mb-8 uppercase">{seniorCourse.level}</p>
              
              <div className="mb-10 flex items-baseline">
                <span className="text-5xl font-black text-stone-800 font-serif-jp">{seniorCourse.price}</span>
                <span className="ml-2 text-sm text-stone-400 font-bold">円 (税込)</span>
              </div>
              
              <ul className="space-y-4 text-sm font-medium text-stone-600 mb-10">
                {seniorCourse.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" /> 
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-amber-50 text-amber-700 p-4 rounded-xl text-[10px] font-bold">
                ※L01修了または同時申し込みが必要です。
              </div>
            </div>

            <div className="p-8 bg-stone-50/50 border-t border-stone-100 mt-auto">
              <Button 
                fullWidth 
                variant="outline" 
                size="lg"
                className="rounded-2xl h-14"
                onClick={() => navigate(`/checkout?courseId=senior`)}
              >
                指導者資格を取得する
              </Button>
            </div>
          </div>

          {/* L03: Professional Course */}
          <div className="relative flex flex-col bg-stone-900 rounded-[2.5rem] border border-stone-800 shadow-sm hover:shadow-2xl transition-all duration-500 text-white">
            <div className="p-8 md:p-10 flex-grow">
              <div className="w-14 h-14 rounded-2xl bg-indigo-700 flex items-center justify-center text-white mb-6 shadow-lg">
                  <proCourse.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold font-serif-jp">{proCourse.name}</h3>
              <p className="text-[10px] text-stone-500 font-bold tracking-widest mt-1 mb-8 uppercase">{proCourse.level}</p>
              
              <div className="mb-10">
                <span className="text-3xl font-black font-serif-jp">要お問合せ</span>
              </div>
              
              <ul className="space-y-4 text-sm font-medium text-stone-400 mb-10">
                {proCourse.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start">
                    <Check className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" /> 
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-white/5 border-t border-white/10 mt-auto">
              <Button 
                fullWidth 
                variant="teal" 
                size="lg"
                className="rounded-2xl h-14 bg-indigo-600 hover:bg-indigo-700"
                onClick={() => navigate('/courses/professional')}
              >
                導入相談を予約
              </Button>
            </div>
          </div>

        </div>

        {/* The Bundle Pack */}
        <div className="max-w-5xl mx-auto mb-20 relative">
           <div className="absolute -top-6 -right-6 z-20 bg-red-600 text-white p-6 rounded-full shadow-2xl rotate-12 flex flex-col items-center justify-center border-4 border-white animate-pulse">
              <span className="text-[10px] font-black uppercase">Savings</span>
              <span className="text-2xl font-black">¥16,600</span>
           </div>

           <div className="bg-stone-900 rounded-[3.5rem] p-1 shadow-2xl">
              <div className="bg-stone-900 rounded-[3.4rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-white/5">
                 <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-6">
                       <span className="bg-amber-500 text-stone-900 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-[0.2em]">Bundle Offer</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif-jp leading-tight">Professional Career Pack</h2>
                    <p className="text-stone-400 text-lg mb-8 leading-relaxed font-medium">全3段階を一括受講。L01は「実践マスター版」が適用されます。最短で指導者、経営者への道へ。</p>
                 </div>
                 <div className="lg:w-1/3 w-full bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 text-center">
                    <div className="text-5xl font-black text-amber-500 font-serif-jp mb-8">¥128,000</div>
                    <Button fullWidth variant="orange" size="xl" className="bg-amber-500 text-stone-900 h-16" onClick={() => navigate('/checkout?courseId=full-career-pack')}>パックで受講する</Button>
                 </div>
              </div>
           </div>
        </div>

        {/* Support Guarantee */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-stone-200 rounded-[2.5rem] p-10 shadow-sm flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-[#FF8C6B] flex-shrink-0">
                <ShieldCheck size={56} strokeWidth={1} />
            </div>
            <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif-jp">100% 取得サポート保証</h3>
                <p className="text-stone-600 leading-relaxed font-medium">スペシャル講座なら課題提出で100%資格取得。取得後も、最新の学術データの提供や質問サポートを生涯継続します。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};