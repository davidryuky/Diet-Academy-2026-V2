import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { 
  Check, 
  ShieldCheck, 
  Star, 
  ChevronRight, 
  Zap, 
  Info,
  Clock,
  Target,
  GraduationCap,
  Rocket,
  Lock,
  Award,
  Crown
} from 'lucide-react';
import { courses, bundles } from '../data/coursesData';
import { useNavigate } from 'react-router';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [l01Option, setL01Option] = useState<'study' | 'master'>('master');

  const regularStudy = courses.find(c => c.id === 'regular-study')!;
  const regularMaster = courses.find(c => c.id === 'regular-master')!;
  const seniorCourse = courses.find(c => c.id === 'senior')!;
  const proCourse = courses.find(c => c.id === 'professional')!;
  const bundlePack = bundles[0];

  return (
    <div className="min-h-screen bg-stone-50 py-24">
      <div className="max-w-[1600px] mx-auto px-6">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF8C6B] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-orange-100">
            <Clock size={14} /> 2026年度 受講生募集中
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 font-serif-jp tracking-tight mb-8">
            選べる4つのキャリアパス
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-stone-500 font-medium">
            自分自身の体質改善から、プロの指導者、そして経営者へ。<br />
            あなたの目的に合わせて、最適なスタート地点をお選びください。
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-20">
          
          {/* Card 1: Regular (L01) */}
          <div className="flex flex-col bg-white rounded-[2.5rem] border-2 border-[#FF8C6B] shadow-xl relative overflow-hidden group">
            <div className="bg-[#FF8C6B] text-white text-[10px] font-bold text-center py-2 tracking-widest uppercase">
              Step 01: Foundation
            </div>
            
            <div className="p-8 flex-grow">
              <div className="flex bg-stone-100 p-1 rounded-xl mb-6">
                <button 
                  onClick={() => setL01Option('master')}
                  className={`flex-1 py-2 rounded-lg text-[10px] font-bold transition-all ${l01Option === 'master' ? 'bg-white text-[#FF8C6B] shadow-sm' : 'text-stone-400'}`}
                >
                  実践マスター
                </button>
                <button 
                  onClick={() => setL01Option('study')}
                  className={`flex-1 py-2 rounded-lg text-[10px] font-bold transition-all ${l01Option === 'study' ? 'bg-white text-stone-600 shadow-sm' : 'text-stone-400'}`}
                >
                  学習のみ
                </button>
              </div>

              <div className={`w-12 h-12 rounded-xl ${l01Option === 'master' ? 'bg-emerald-600' : 'bg-orange-500'} flex items-center justify-center text-white mb-6 shadow-md`}>
                {l01Option === 'master' ? <Target size={24} /> : <GraduationCap size={24} />}
              </div>
              
              <h3 className="text-xl font-bold text-stone-800 font-serif-jp mb-1">
                {l01Option === 'master' ? 'ダイエットマスター' : 'レギュラーコース'}
              </h3>
              <p className="text-[10px] text-stone-400 font-bold mb-6 tracking-widest">L01: BASIC LEVEL</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black text-stone-800 font-serif-jp">
                  {l01Option === 'master' ? regularMaster.price : regularStudy.price}
                </span>
                <span className="text-xs text-stone-400 font-bold">円</span>
              </div>
              
              <ul className="space-y-3 text-xs font-medium text-stone-600 mb-8">
                {(l01Option === 'master' ? regularMaster.features : regularStudy.features).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 ${l01Option === 'master' ? 'text-emerald-500' : 'text-orange-500'} flex-shrink-0 mt-0.5`} /> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <Button 
                fullWidth 
                variant="orange" 
                className={`rounded-xl h-12 ${l01Option === 'master' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-orange-500'}`}
                onClick={() => navigate(`/checkout?courseId=${l01Option === 'master' ? 'regular-master' : 'regular-study'}`)}
              >
                申し込む
              </Button>
            </div>
          </div>

          {/* Card 2: Senior (L02) */}
          <div className="flex flex-col bg-white rounded-[2.5rem] border border-stone-200 shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
            <div className="bg-teal-600 text-white text-[10px] font-bold text-center py-2 tracking-widest uppercase">
              Step 02: Leadership
            </div>
            
            <div className="p-8 flex-grow">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[9px] font-bold flex items-center gap-1">
                  <Lock size={12} /> L01修了者限定
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-white mb-6 shadow-md">
                <Award size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-stone-800 font-serif-jp mb-1">{seniorCourse.name}</h3>
              <p className="text-[10px] text-stone-400 font-bold mb-6 tracking-widest">L02: SENIOR LEVEL</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black text-stone-800 font-serif-jp">{seniorCourse.price}</span>
                <span className="text-xs text-stone-400 font-bold">円</span>
              </div>
              
              <ul className="space-y-3 text-xs font-medium text-stone-600 mb-8">
                {seniorCourse.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" /> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <Button 
                fullWidth 
                variant="outline" 
                className="rounded-xl h-12 border-teal-600 text-teal-600 hover:bg-teal-50"
                onClick={() => navigate(`/checkout?courseId=senior`)}
              >
                詳細を見る
              </Button>
            </div>
          </div>

          {/* Card 3: Professional (L03) */}
          <div className="flex flex-col bg-stone-900 rounded-[2.5rem] shadow-sm hover:shadow-lg transition-all relative overflow-hidden text-white">
            <div className="bg-indigo-700 text-white text-[10px] font-bold text-center py-2 tracking-widest uppercase">
              Step 03: Business
            </div>
            
            <div className="p-8 flex-grow">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white/10 text-stone-300 px-3 py-1 rounded-full text-[9px] font-bold flex items-center gap-1">
                  <Lock size={12} /> L01 & L02修了必須
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-indigo-700 flex items-center justify-center text-white mb-6 shadow-md">
                <Crown size={24} />
              </div>
              
              <h3 className="text-xl font-bold font-serif-jp mb-1">{proCourse.name}</h3>
              <p className="text-[10px] text-stone-500 font-bold mb-6 tracking-widest">L03: MASTER LICENSE</p>
              
              <div className="mb-8">
                <span className="text-2xl font-black font-serif-jp">要お問合せ</span>
              </div>
              
              <ul className="space-y-3 text-xs font-medium text-stone-400 mb-8">
                {proCourse.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" /> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <Button 
                fullWidth 
                variant="teal" 
                className="rounded-xl h-12 bg-indigo-600 hover:bg-indigo-700 border-none"
                onClick={() => navigate('/courses/professional')}
              >
                導入相談を予約
              </Button>
            </div>
          </div>

          {/* Card 4: Career Pack (Bundle) */}
          <div className="flex flex-col bg-gradient-to-br from-stone-800 to-black rounded-[2.5rem] shadow-2xl relative overflow-hidden text-white scale-105 z-10 border border-amber-500/30">
            <div className="bg-amber-500 text-stone-900 text-[10px] font-black text-center py-2 tracking-widest uppercase">
              Best Value - 一括パック
            </div>
            
            <div className="p-8 flex-grow">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-[9px] font-black flex items-center gap-1 animate-pulse">
                  <Zap size={12} fill="currentColor" /> ¥16,600 お得
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-stone-900 mb-6 shadow-md">
                <Rocket size={24} />
              </div>
              
              <h3 className="text-xl font-bold font-serif-jp mb-1">{bundlePack.name}</h3>
              <p className="text-[10px] text-amber-500/60 font-bold mb-6 tracking-widest uppercase">Complete Success Path</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black text-amber-500 font-serif-jp">{bundlePack.price}</span>
                <span className="text-xs text-amber-500 font-bold">円</span>
                <span className="text-xs text-stone-500 line-through ml-2 font-bold">¥144,600</span>
              </div>
              
              <ul className="space-y-3 text-xs font-medium text-stone-300 mb-8">
                {bundlePack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" /> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <Button 
                fullWidth 
                variant="orange" 
                className="rounded-xl h-14 bg-amber-500 text-stone-900 hover:bg-amber-400 border-none text-base"
                onClick={() => navigate(`/checkout?courseId=${bundlePack.id}`)}
              >
                パックで申し込む
              </Button>
            </div>
          </div>

        </div>

        {/* Support & Guarantee */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-[#FF8C6B] flex-shrink-0">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-stone-800 mb-2 font-serif-jp">100% 資格取得・活動サポート</h4>
              <p className="text-sm text-stone-500 leading-relaxed font-medium">
                当アカデミーは資格を取得して終わりではありません。実際の活動における疑問や、最新の栄養学データのアップデートなど、あなたのキャリアを生涯にわたってバックアップします。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};