import React from 'react';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router';
import { 
  CheckCircle2, 
  Dna, 
  HeartPulse, 
  Target, 
  LineChart, 
  AlertCircle, 
  ArrowRight, 
  Brain, 
  Users,
  ShieldAlert,
  Stethoscope,
  BookOpenCheck,
  CalendarDays,
  Smartphone,
  // Fix: Added missing Info icon import
  Info
} from 'lucide-react';

export const RegularCourse: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* 1. Hero Section (Topo) */}
      <section className="relative pt-24 pb-36 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#3b82f6_0%,_transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_#10b981_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-emerald-400 font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-8 border-l-2 border-emerald-500 pl-4">
              Regular Course Curriculum
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-serif-jp">
              プロフェッショナルな資格と個人の成果：<br />
              <span className="text-blue-400">3ヶ月でダイエットの科学をマスターする。</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium max-w-3xl">
              アカデミックな理論と3ヶ月の実践サポートを融合したハイブリッドプログラム。意志の力に頼るのをやめ、体の仕組みを正しく理解することから始めましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate('/calculator')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-emerald-900/40 transition-all flex items-center justify-center gap-3 group"
              >
                無料診断を予約して開始する
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="mt-10 text-sm text-slate-400 font-bold tracking-widest flex items-center gap-2">
              <BookOpenCheck size={18} className="text-emerald-500" />
              認定：ダイエットマスター（ダイエット基礎実践認定）
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Problem (A Dor do Público) */}
      <section className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-serif-jp leading-tight">
              なぜ、あなたは体重計と戦い続けているのでしょうか？
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              体重の増減は「運」や単なる「意志の力」だけの問題ではありません。<br className="hidden md:block" />
              体の変化の裏には、生物学的、栄養学的、そして行動学的なメカニズムが存在します。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "流行のダイエットに手を出しては、リバウンドに苦しんでいませんか？",
              "一生懸命努力しているのに、結果が長続きしないと感じていませんか？",
              "インターネット上の矛盾する情報に混乱していませんか？"
            ].map((text, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-200 transition-colors">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={32} />
                </div>
                <p className="font-bold text-slate-800 leading-loose text-lg font-serif-jp">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-blue-900 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <p className="text-blue-50 font-bold text-xl md:text-2xl leading-relaxed relative z-10 font-serif-jp">
              レギュラーコースは、この悪循環から抜け出すために設計されました。<br className="hidden md:block" />
              自分自身や大切な人の健康を管理するための、堅実で安全な理論的基盤を提供します。
            </p>
          </div>
        </div>
      </section>

      {/* 3. The Solution (A Solução) */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-[0.4em] text-xs uppercase mb-6 block">Foundation & Science</span>
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-10 leading-tight font-serif-jp">
                単なるダイエットではありません。<br /><span className="text-emerald-600">それは「教育」です。</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-12 font-medium">
                レギュラーコースはすべての基礎です。ここでは、ダイエットを魔法や奇跡ではなく、科学として体系的に扱います。
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "理論的理解", desc: "栄養学的恐怖（フードテロリズム）を煽ることなく、代謝、エネルギー、栄養の論理を学びます。" },
                  { title: "トータルな安全", desc: "流行の危険な手法と、長期的な健康戦略を明確に見極める力を養います。" },
                  { title: "専門家による実践", desc: "プロのサポートを受けながら、学んだ知識を自分自身に適用し成果を出します。" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xl mb-2 font-serif-jp">{i+1}. {item.title}</h4>
                      <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="relative">
                <div className="absolute -inset-6 bg-slate-50 rounded-[4rem] -z-10 transform -rotate-1"></div>
                <div className="bg-slate-100 rounded-[3.5rem] aspect-square flex flex-col items-center justify-center overflow-hidden border border-slate-200 shadow-inner">
                  <Dna size={120} className="text-blue-900 mb-8 opacity-20" />
                  <div className="text-center px-12">
                     <p className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs">Japan Diet Academy</p>
                     <p className="text-slate-300 font-serif-jp text-sm mt-4 italic">Academic Visual Standard 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curriculum (Conteúdo Programático) */}
      <section className="py-32 bg-slate-50">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif-jp">学習カリキュラム</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-8 text-stone-500 font-medium">段階的に理解を深める3つの学習フェーズ</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Módulo 1 */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900 font-serif-jp">フェーズ1：体の科学</h3>
              <div className="space-y-8 flex-grow">
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-blue-600"></span> Chapter 1 & 2
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">ダイエットの歴史と増減量のメカニズム。なぜ現代のダイエットは失敗するのか？</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-blue-600"></span> Chapter 3 - 5
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">代謝とエネルギー。基礎代謝量（BMR）の正体と真の消費エネルギー計算。カロリーと栄養素の数学的真実。</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-blue-600"></span> Chapter 6
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">代謝の変化。減量中に体内で何が起きているのか。生体信号の読み解き方。</p>
                </div>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-rose-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Stethoscope size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900 font-serif-jp">フェーズ2：健康とリスク</h3>
              <div className="space-y-8 flex-grow">
                <div>
                  <div className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-rose-600"></span> Chapter 7
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">短期的な罠。急激な減量が代謝を破壊する理由と、その防御策。</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-rose-600"></span> Chapter 8 & 9
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">肥満と生活習慣病。BMIの本質、内臓脂肪 vs 皮下脂肪、そして健康への真のリスク。</p>
                </div>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900 font-serif-jp">フェーズ3：戦略と実践</h3>
              <div className="space-y-4">
                {[
                  { num: "10", title: "自己認識とモニタリング", desc: "データ（体重・計測）を戦略に変える方法。" },
                  { num: "11&12", title: "肥満治療の原則", desc: "安全な減量プランの設計図。" },
                  { num: "13", title: "行動修正療法", desc: "習慣の心理学：モチベーションに頼らず変化する。" },
                  { num: "14", title: "実践的栄養学", desc: "現実のルーティンに合わせたリアルな食事構成。" }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-slate-900 transition-colors">
                    <div className="text-[10px] font-bold text-slate-400 group-hover:text-blue-400 uppercase mb-1">Chapter {item.num}</div>
                    <div className="font-bold text-slate-800 group-hover:text-white text-sm mb-1">{item.title}</div>
                    <p className="text-[11px] text-slate-500 group-hover:text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Support Program (O Diferencial) */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1100px] mx-auto">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-serif-jp">
                    理論だけで終わらせません。
                  </h2>
                  <h3 className="text-emerald-400 text-2xl md:text-3xl font-bold mb-10 font-serif-jp">
                    3ヶ月の実践サポートプログラム（受講料に含む）
                  </h3>
                  
                  <div className="grid sm:grid-cols-2 gap-8 text-left">
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/30">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                         <span className="block font-bold text-lg mb-1">初回個別診断</span>
                         <p className="text-sm text-slate-400 leading-relaxed">開始前にライフスタイルと履歴を徹底分析。</p>
                      </div>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/30">
                        <CalendarDays size={20} />
                      </div>
                      <div>
                         <span className="block font-bold text-lg mb-1">毎週の専任サポート</span>
                         <p className="text-sm text-slate-400 leading-relaxed">専門家が毎週の進捗を確認し調整します。</p>
                      </div>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/30">
                        <Smartphone size={20} />
                      </div>
                      <div>
                         <span className="block font-bold text-lg mb-1">100%オンライン形式</span>
                         <p className="text-sm text-slate-400 leading-relaxed">LINEやメッセージで完結。通学は不要。</p>
                      </div>
                    </div>
                    <div className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/30">
                        <Target size={20} />
                      </div>
                      <div>
                         <span className="block font-bold text-lg mb-1">安全な成果目標</span>
                         <p className="text-sm text-slate-400 leading-relaxed">理論を実践し安全に-5kgを目指します。</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="w-64 h-64 rounded-[3rem] bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8 border border-white/10 shadow-2xl shrink-0">
                  <LineChart size={64} className="text-emerald-400 mb-4" strokeWidth={1} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">Support Period</span>
                  <span className="text-4xl font-black text-white">90 DAYS</span>
                  <div className="mt-4 w-12 h-1 bg-emerald-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Target Audience (Para Quem é Este Curso?) */}
      <section className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif-jp">このコースはどのような人向けですか？</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "根本から痩せたい方", text: "一時的ではなく、痩せる「理由」を科学的に理解したい方。" },
              { icon: Brain, title: "ダイエットの連鎖を断つ", text: "制限だらけの苦しいダイエットから卒業したい方。" },
              { icon: BookOpenCheck, title: "キャリアの第一歩", text: "資格を取得し、健康・美容業界でのキャリアを始めたい方。" },
              { icon: Users, title: "大切な人のために", text: "家族や友人の健康管理を、自信を持ってサポートしたい方。" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 text-center hover:-translate-y-2 transition-all duration-500 shadow-sm">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-8 shadow-sm">
                  <item.icon size={32} />
                </div>
                <h4 className="font-bold text-slate-900 mb-4 text-xl font-serif-jp">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Safety & Ethics (Segurança e Ética) */}
      <section className="py-32 bg-white border-y border-slate-100">
        <div className="w-[92%] max-w-[850px] mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-amber-50 text-amber-700 font-bold px-6 py-3 rounded-2xl text-xs md:text-sm uppercase mb-10 border border-amber-100">
              <ShieldAlert size={20} />
              重要事項：安全と倫理について
            </div>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 font-serif-jp">
              本プログラムは、見た目の結果よりも<br />「受講生の安全」を最優先します。
            </p>
          </div>
          
          <div className="space-y-8 text-slate-600 leading-[2] text-lg bg-slate-50 p-12 rounded-[3.5rem] border border-slate-200 shadow-inner">
            <div className="flex gap-6">
               <span className="font-bold text-slate-900 shrink-0 flex items-center justify-center w-24 h-8 bg-white border border-slate-200 rounded-full text-xs">スクリーニング</span>
               <p className="font-medium">すべての受講希望者は、入学前に「無料ダイエット診断」を受けていただきます。</p>
            </div>
            <div className="flex gap-6">
               <span className="font-bold text-slate-900 shrink-0 flex items-center justify-center w-24 h-8 bg-white border border-slate-200 rounded-full text-xs">制限事項</span>
               <p className="font-medium">医学的リスクや臨床的介入が必要な疾患が確認された場合、医師への相談を推奨し、現時点での入会をお断りすることがあります。私たちは、安全にサポートできないケースに対して販売を行うことはありません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA (Rodapé e CTA Final) */}
      <section className="py-40 bg-slate-900 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1e293b_0%,_transparent_100%)] opacity-50"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight font-serif-jp">
            あなたのダイエット習得への旅は、<br /><span className="text-emerald-400">ここから始まります。</span>
          </h2>
          <button 
            onClick={() => navigate('/calculator')}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-16 py-6 rounded-2xl font-bold text-2xl shadow-2xl shadow-emerald-500/30 transition-all mb-8 hover:-translate-y-1"
          >
            無料診断と評価をリクエストする
          </button>
          <p className="text-slate-400 text-sm font-medium tracking-widest flex items-center justify-center gap-2">
            <Info size={16} />
            ※即座の金銭的負担はありません。この評価は、コースがあなたに適しているかを確認するためのものです。
          </p>
        </div>
      </section>

    </div>
  );
};
