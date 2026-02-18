
import React from 'react';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router';
import { 
  CheckCircle2, 
  Dna, 
  HeartPulse, 
  Target, 
  LineChart, 
  ArrowRight, 
  Brain, 
  Smartphone,
  Info,
  Check,
  X,
  Sparkles,
  GraduationCap,
  Scale,
  MessageCircle
} from 'lucide-react';

export const RegularCourse: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-36 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#3b82f6_0%,_transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_#10b981_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="w-[92%] max-w-[1400px] mx-auto relative z-10 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <span className="inline-block text-emerald-400 font-bold tracking-[0.4em] text-xs uppercase mb-8 border-l-2 border-emerald-500 pl-4">
              L01: Basic Foundation
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-serif-jp">
              自分を整える、<br />
              <span className="text-blue-400">最高の知識と伴走を。</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium">
              レギュラーコースは、一生モノの「正しい栄養学」を学ぶ場所。
              カリキュラムと認定証は共通。あなたの目標に合わせて「自習」か「プロの伴走」かを選べます。
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="xl" variant="teal" onClick={() => {
                const element = document.getElementById('offer-comparison');
                element?.scrollIntoView({ behavior: 'smooth' });
              }} className="shadow-2xl shadow-emerald-500/20">
                自分に合ったプランを選ぶ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Differences - Unified Content Notice */}
      <section id="offer-comparison" className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif-jp">選べる2つの受講スタイル</h2>
            <p className="text-stone-500 text-lg font-medium">取得できる知識と資格は同じ。違いは「3ヶ月の徹底サポート」の有無のみです。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Option 1: Study Edition */}
            <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-stone-200 shadow-sm flex flex-col hover:border-emerald-100 transition-colors">
               <div className="mb-10">
                  <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-400 mb-6">
                     <GraduationCap size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 font-serif-jp mb-2">学習版</h3>
                  <p className="text-stone-500 font-bold tracking-widest text-xs uppercase">Self-Study Edition</p>
               </div>
               
               <p className="text-slate-600 leading-loose mb-10 font-medium">
                  自分のペースで知識を深めたい方へ。全14章の講義を通じて、科学的なダイエット理論をマスターし、認定資格の取得を目指します。
               </p>

               <div className="space-y-4 mb-12 flex-grow">
                  {[
                    { text: "全14章のデジタル講義", included: true },
                    { text: "ダイエットマスター認定証", included: true },
                    { text: "1年間の質問サポート", included: true },
                    { text: "3ヶ月の減量実践サポート", included: false, highlight: true }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 text-sm font-bold ${item.included ? 'text-slate-700' : 'text-slate-300'}`}>
                       {item.included ? <Check className="text-emerald-500" size={18} /> : <X size={18} />}
                       <span className={item.highlight && !item.included ? "opacity-50" : ""}>{item.text}</span>
                    </div>
                  ))}
               </div>

               <div className="pt-8 border-t border-stone-50">
                  <div className="text-[10px] text-stone-400 font-bold mb-1 uppercase tracking-widest">Price</div>
                  <div className="text-3xl font-bold text-slate-900 mb-6 font-serif-jp">¥59,800 <span className="text-sm font-normal text-stone-400">円(税込)</span></div>
                  <Button fullWidth size="lg" variant="outline" onClick={() => navigate('/checkout?courseId=regular-study')}>このプランで学習を開始</Button>
               </div>
            </div>

            {/* Option 2: Practical Support Edition */}
            <div className="relative group overflow-hidden bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl flex flex-col border border-emerald-500/30 scale-105 z-10">
               <div className="absolute top-0 right-0 p-8 text-emerald-500/10 pointer-events-none">
                  <Sparkles size={160} />
               </div>
               
               <div className="mb-10 relative z-10">
                  <div className="inline-block bg-emerald-500 text-slate-900 text-[10px] font-black px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
                     Most Popular
                  </div>
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 border border-emerald-500/20">
                     <MessageCircle size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-serif-jp mb-2">実践サポート版</h3>
                  <p className="text-emerald-400/60 font-bold tracking-widest text-xs uppercase">With 3-Month Support</p>
               </div>
               
               <p className="text-slate-400 leading-loose mb-10 font-medium relative z-10">
                  学習版の全内容に加え、プロの講師が3ヶ月間あなたのダイエットを直接指導。学んだ知識を即実践し、確実に結果を出したい方のための特別プランです。
               </p>

               <div className="space-y-4 mb-12 flex-grow relative z-10">
                  {[
                    { text: "全14章のデジタル講義", included: true },
                    { text: "ダイエットマスター認定証", included: true },
                    { text: "1年間の質問サポート", included: true },
                    { text: "3ヶ月の減量実践サポート", included: true, highlight: true }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 text-sm font-bold ${item.highlight ? 'text-emerald-400' : 'text-emerald-100/90'}`}>
                       <CheckCircle2 className="text-emerald-500" size={18} />
                       {item.text}
                    </div>
                  ))}
               </div>

               <div className="pt-8 border-t border-white/10 relative z-10">
                  <div className="text-[10px] text-stone-500 font-bold mb-1 uppercase tracking-widest">Price</div>
                  <div className="text-3xl font-bold text-white mb-6 font-serif-jp">¥79,800 <span className="text-sm font-normal text-slate-500">円(税込)</span></div>
                  <Button fullWidth size="lg" variant="orange" className="bg-emerald-500 text-slate-900 hover:bg-emerald-400 border-none h-14" onClick={() => navigate('/checkout?courseId=regular-master')}>サポート付きで申し込む</Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Common Curriculum Details */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
               <span className="text-blue-600 font-bold tracking-[0.4em] text-xs uppercase mb-6 block">Common Curriculum</span>
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight font-serif-jp">
                 共通の理論と、<br />
                 <span className="text-emerald-600">一生モノの資格。</span>
               </h2>
               <p className="text-slate-600 text-lg leading-loose font-medium mb-8">
                 どちらのプランを選んでも、学習する14章の内容に差はありません。
                 「なぜ太るのか」「どう食べれば痩せるのか」という生理学から、リバウンドを防ぐ心理学まで、一生使える知識の土台を構築します。
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <div className="text-emerald-600 font-bold text-xl mb-1">14 Chapters</div>
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Academic Lectures</div>
                  </div>
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <div className="text-emerald-600 font-bold text-xl mb-1">Certificate</div>
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Official Master ID</div>
                  </div>
               </div>
            </div>
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-12">
                  <div className="bg-white p-8 rounded-3xl border border-stone-200 text-center shadow-sm">
                     <Dna size={40} className="text-blue-500 mx-auto mb-4" />
                     <h4 className="font-bold text-slate-800 mb-2">生理学</h4>
                  </div>
                  <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 text-center">
                     <Target size={40} className="text-emerald-500 mx-auto mb-4" />
                     <h4 className="font-bold text-slate-800 mb-2">心理学</h4>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 text-center">
                     <HeartPulse size={40} className="text-[#FF8C6B] mx-auto mb-4" />
                     <h4 className="font-bold text-slate-800 mb-2">栄養学</h4>
                  </div>
                  <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 text-center">
                     <LineChart size={40} className="text-indigo-500 mx-auto mb-4" />
                     <h4 className="font-bold text-slate-800 mb-2">評価学</h4>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="py-40 bg-stone-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Sparkles size={400} className="text-emerald-500 absolute -top-20 -left-20" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight font-serif-jp">
            知識で終わらせるか、<br /><span className="text-emerald-400">プロの伴走で確実な変化を掴むか。</span>
          </h2>
          <Button 
            onClick={() => navigate('/pricing')}
            size="xl"
            variant="orange"
            className="px-20 h-18 text-xl shadow-2xl bg-emerald-500 text-slate-900 hover:bg-emerald-400 border-none"
          >
            受講プランの選択へ進む
          </Button>
          <p className="mt-8 text-stone-500 text-xs font-bold uppercase tracking-widest">
            どちらを選んでも「ダイエットマスター」の資格取得が可能です
          </p>
        </div>
      </section>

    </div>
  );
};
