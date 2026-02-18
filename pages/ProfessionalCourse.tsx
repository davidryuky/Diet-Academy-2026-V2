
import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  Layers, 
  Users, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  Building2,
  Settings2,
  ClipboardCheck,
  Brain,
  CalendarRange,
  Building,
  Settings,
  Clock,
  ChevronRight,
  Layout,
  BarChart3,
  Search,
  Check
} from 'lucide-react';
import { useNavigate } from 'react-router';

export const ProfessionalCourse: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const chapters = [
    { id: "01", icon: Layout, title: "ビジネスとしてのダイエット", desc: "才能依存からの脱却と持続可能なビジョンの構築。指導を「技術」から「事業」へ変える。" },
    { id: "02", icon: Settings2, title: "ビジネスデザイン", desc: "集客からサポート開始までの全体構造の設計。収益性と顧客満足を両立させるフロー。" },
    { id: "03", icon: ClipboardCheck, title: "診断・初回カウンセリング設計", desc: "誰が担当しても同じ結論に達するマニュアル化。直感を排除した客観的判断基準。" },
    { id: "04", icon: Brain, title: "行動変容療法のデザイン", desc: "62項目のチェックアップによる習慣のズレ特定。心理学的にプランを構築する技術。" },
    { id: "05", icon: CalendarRange, title: "3ヶ月サポート運用モデル", desc: "属人性を排除し、成果と継続を安定させる仕組み。90日間のルーチン管理。" },
    { id: "06", icon: Building, title: "ユニット認定と責任", desc: "技術責任者の役割と認定シールの真の意味。施設全体の信頼性を担保する管理体制。" },
    { id: "07", icon: Users, title: "チーム運営とトレーニング設計", desc: "品質を維持しながら自律的に動くチームの育て方。安全な権限委譲のプロセス。" },
    { id: "08", icon: ShieldCheck, title: "倫理と専門的限界", desc: "守るべき一線と、変えて良いものの定義。リスク管理とプロとしての誇り。" },
    { id: "09", icon: Settings, title: "既存サービスとの統合", desc: "サプリ、エステ、トレーニング等、既存メニューとの相乗効果。付加価値の最大化。" },
    { id: "10", icon: Clock, title: "次のステップと拡張", desc: "受講後の事業拡大と進化の選択肢。コミュニティを活用した継続的な事業成長。" }
  ];

  const faqs = [
    { 
      q: "どのような指導内容を教えますか？", 
      a: "単なるアドバイスではなく、行動変容療法を用いて「なぜ今の体型になっているのか」の習慣のズレを特定し、自然に体が変わるようルーチンを調整する構造的なサポートを伝授します。" 
    },
    { 
      q: "サプリメントや自社のサービスと組み合わせられますか？", 
      a: "はい。ダイエットマスターはサプリやトレーニングを「サポート要素」と捉えます。システムがそれらの必要性を論理的に裏付けるため、顧客への提案力と納得感が高まります。" 
    },
    { 
      q: "全スタッフの資格取得が必要ですか？", 
      a: "いいえ。本コースは「施設認定」です。運営責任者が基準を管理する体制を構築するため、全スタッフの個別取得は必須ではありません。" 
    },
    { 
      q: "費用はいくらですか？", 
      a: "ビジネスモデルや施設の規模に合わせて最適な導入プランをご提案するため、個別相談後に詳細をお伝えしております。" 
    }
  ];

  return (
    <div className="bg-white text-stone-800 font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      
      {/* 1. Hero Section - Premium B2B Dark Theme */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&auto=format&fit=crop&q=80" 
            alt="Modern Professional Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-[2px]"></div>
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-950 to-transparent"></div>
        </div>
        
        <div className="w-[90%] max-w-[1400px] mx-auto relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-10 duration-1000">
              <div className="inline-flex items-center gap-2 text-teal-400 font-bold tracking-[0.4em] text-xs uppercase mb-8 py-2 px-4 bg-teal-500/10 rounded-full border border-teal-500/20">
                <ShieldCheck size={14} />
                Diet Management System 2026
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-10 font-serif-jp text-white">
                個人の技術を、<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                  組織の資産へ。
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed font-medium max-w-2xl">
                ダイエット指導を「個人技」から「システム」へ。属人性を排除し、誰が担当しても結果の出る「運営デザイン」を導入するための最高峰コース。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 items-center">
                <Button size="xl" variant="teal" onClick={() => navigate('/contact')} className="h-20 px-12 group text-xl shadow-2xl shadow-teal-500/20">
                  <span className="flex items-center gap-3">
                    無料導入相談を予約する
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </span>
                </Button>
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-stone-900 bg-stone-800 flex items-center justify-center overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                    </div>
                  ))}
                  <div className="flex flex-col justify-center ml-4 text-stone-400 text-xs font-bold uppercase tracking-widest">
                    <span>Trusted by</span>
                    <span className="text-white">450+ Facilities</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-in fade-in slide-in-from-right-10 duration-1000 delay-300">
              <div className="relative">
                <div className="absolute -inset-10 bg-teal-500/10 blur-[100px] rounded-full"></div>
                <div className="relative bg-stone-900/50 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl">
                   <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <div className="text-teal-400 font-bold text-3xl font-serif-jp">92%</div>
                        <div className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">Staff Consistency</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-teal-400 font-bold text-3xl font-serif-jp">140%</div>
                        <div className="text-stone-400 text-[10px] font-bold uppercase tracking-widest">Revenue Growth</div>
                      </div>
                      <div className="col-span-2 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                              <BarChart3 size={20} />
                           </div>
                           <div className="text-sm font-bold text-white">Systemized Operational Flow</div>
                        </div>
                        <div className="space-y-2">
                           <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-teal-500 rounded-full"></div>
                           </div>
                           <div className="flex justify-between text-[10px] text-stone-500 font-bold uppercase tracking-widest">
                              <span>Asset Conversion</span>
                              <span>Completed</span>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Philosophy - Why Facilities Matter */}
      <section className="py-40 relative overflow-hidden">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-[45%]">
              <span className="text-teal-600 font-bold tracking-[0.3em] text-xs uppercase block mb-6">The Concept</span>
              <h2 className="text-4xl md:text-6xl font-bold text-stone-900 font-serif-jp leading-tight mb-10">
                「個人資格」を<br />
                <span className="text-teal-600 underline decoration-teal-100 underline-offset-8">超える価値を。</span>
              </h2>
              <div className="space-y-8 text-stone-600 leading-relaxed font-medium">
                <p>
                  資格は個人のものですが、事業はチームのものです。ダイエットマスター・プロコースは、その店舗が「統一された高い基準」でサービスを提供していることを公的に認める、日本唯一の施設認定型プログラムです。
                </p>
                <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 shadow-sm">
                   <h4 className="flex items-center gap-3 text-stone-900 font-bold mb-4">
                      <Search className="text-teal-500" size={20} />
                      「属人性」という最大のリスクを排除
                   </h4>
                   <p className="text-sm">
                      一人のエースに依存した経営は、その人の退職と共に崩壊します。私たちは指導をマニュアル化し、誰が担当しても同じ成果、同じ満足を顧客に届ける「仕組み」を提供します。
                   </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-[55%] grid grid-cols-2 gap-6">
               <div className="aspect-square bg-white rounded-[3rem] p-8 border border-stone-100 shadow-xl shadow-stone-200/50 flex flex-col justify-between group hover:border-teal-500 transition-colors">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                     <Users size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 font-serif-jp mb-2">Team Sync</h4>
                    <p className="text-xs text-stone-400 font-medium leading-relaxed">全スタッフが同じ理念と診断基準を共有する体制の構築。</p>
                  </div>
               </div>
               <div className="aspect-square bg-stone-900 rounded-[3rem] p-8 shadow-2xl flex flex-col justify-between mt-12">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-teal-400">
                     <Building2 size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white font-serif-jp mb-2 text-teal-400">Brand Power</h4>
                    <p className="text-xs text-stone-500 font-medium leading-relaxed">施設そのものが「ダイエットマスター認定」というブランドへ。</p>
                  </div>
               </div>
               <div className="aspect-square bg-teal-600 rounded-[3rem] p-8 shadow-2xl flex flex-col justify-between -mt-12 text-white">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                     <TrendingUp size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-serif-jp mb-2">ROI Impact</h4>
                    <p className="text-xs text-teal-100 font-medium leading-relaxed">成約率の向上と、管理コストの大幅な削減による利益率の改善。</p>
                  </div>
               </div>
               <div className="aspect-square bg-white rounded-[3rem] p-8 border border-stone-100 shadow-xl shadow-stone-200/50 flex flex-col justify-between group hover:border-teal-500 transition-colors">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
                     <Award size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 font-serif-jp mb-2">Official Seal</h4>
                    <p className="text-xs text-stone-400 font-medium leading-relaxed">公式な認定シールとProfessional Master証明書の発行。</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Comparison Table - Redefined */}
      <section className="py-40 bg-stone-50">
        <div className="w-[90%] max-w-[1000px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight">比較でわかる圧倒的優位性</h2>
            <p className="text-stone-500 mt-6 font-medium text-lg">「個人の学び」を「事業の成功」へ繋げる唯一の選択肢。</p>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-stone-200">
            <div className="grid grid-cols-12 bg-stone-900 text-white p-8 md:p-10 items-center">
               <div className="col-span-4 text-xs font-black uppercase tracking-[0.2em] opacity-40">Feature</div>
               <div className="col-span-4 text-center text-xs font-black uppercase tracking-[0.2em] opacity-40">Common License</div>
               <div className="col-span-4 text-center text-xs font-black uppercase tracking-[0.2em] text-teal-400">Diet Master Pro</div>
            </div>
            
            {[
              { label: "認定の単位", common: "個人", pro: "施設・ユニット単位" },
              { label: "目的", common: "知識の習得", pro: "事業の標準化・運営改善" },
              { label: "継続性", common: "人によって質が変わる", pro: "誰でも同じ結果が出るシステム" },
              { label: "資産価値", common: "個人のスキルとして蓄積", pro: "店舗の無形資産として定着" }
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-12 p-8 md:p-10 border-b border-stone-100 last:border-0 hover:bg-teal-50/20 transition-colors">
                 <div className="col-span-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                    <span className="text-sm font-bold text-stone-800 font-serif-jp">{row.label}</span>
                 </div>
                 <div className="col-span-4 text-center text-sm text-stone-400 font-medium">{row.common}</div>
                 <div className="col-span-4 text-center text-sm text-teal-700 font-black">{row.pro}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Curriculum - Interactive Journey */}
      <section className="py-40 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-32">
            <span className="text-teal-600 font-bold tracking-[0.4em] text-xs uppercase block mb-6">Master Curriculum</span>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 font-serif-jp leading-tight">
              プロフェッショナル・マスター全10章
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {chapters.map((chapter) => (
              <div 
                key={chapter.id}
                onClick={() => navigate(`/courses/professional/chapter/${chapter.id}`)}
                className="group relative h-[360px] bg-white rounded-[2.5rem] border border-stone-100 p-8 flex flex-col justify-between hover:bg-stone-900 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl"
              >
                {/* Background Number */}
                <div className="absolute top-4 right-6 text-7xl font-black text-stone-50 group-hover:text-white/5 transition-colors duration-500">
                  {chapter.id}
                </div>
                
                <div className="relative z-10 w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
                  <chapter.icon size={24} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-stone-900 font-serif-jp mb-4 leading-tight group-hover:text-white transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-xs text-stone-400 leading-relaxed font-medium group-hover:text-stone-500 transition-colors">
                    {chapter.desc}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                   <span className="text-[10px] font-black tracking-widest uppercase text-stone-300 group-hover:text-teal-500">Learn More</span>
                   <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-300 group-hover:bg-teal-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                      <ChevronRight size={14} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Implementation Roadmap - Process focused */}
      <section className="py-40 bg-stone-950 text-white relative overflow-hidden">
        {/* Subtle background circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>

        <div className="w-[90%] max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-32">
             <div className="flex-1">
                <h2 className="text-4xl md:text-6xl font-bold font-serif-jp mb-8">導入までのロードマップ</h2>
                <p className="text-stone-400 font-medium text-lg leading-relaxed max-w-xl">
                  認定施設のステータス獲得から、スタッフへの浸透、実運用開始まで。最短ルートでのプロフェッショナル化をサポートします。
                </p>
             </div>
             <div className="flex-shrink-0">
                <div className="flex items-center gap-6">
                   <div className="text-right">
                      <div className="text-[10px] font-bold text-teal-500 uppercase tracking-widest mb-1">Estimated Time</div>
                      <div className="text-3xl font-bold font-serif-jp">2-3 Months</div>
                   </div>
                   <div className="w-px h-12 bg-white/10"></div>
                   <div className="text-left">
                      <div className="text-[10px] font-bold text-teal-500 uppercase tracking-widest mb-1">Impact</div>
                      <div className="text-3xl font-bold font-serif-jp">Immediate</div>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="relative p-10 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-white/10 transition-all duration-500">
               <div className="text-sm font-black text-teal-500 mb-6 uppercase tracking-widest">Step 01</div>
               <h4 className="text-2xl font-bold font-serif-jp mb-6">プロコースの受講</h4>
               <p className="text-stone-400 text-sm leading-relaxed font-medium">
                  経営者または技術責任者が全10章を受講し、システムの根幹を理解します。L01, L02修了が前提となります。
               </p>
            </div>
            {/* Step 2 */}
            <div className="relative p-10 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-white/10 transition-all duration-500">
               <div className="text-sm font-black text-teal-500 mb-6 uppercase tracking-widest">Step 02</div>
               <h4 className="text-2xl font-bold font-serif-jp mb-6">認定証の発行</h4>
               <p className="text-stone-400 text-sm leading-relaxed font-medium">
                  受講後の理解度確認を経て、公式な「認定施設シール」および「Professional Master」認定証を発行します。
               </p>
            </div>
            {/* Step 3 */}
            <div className="relative p-10 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-white/10 transition-all duration-500">
               <div className="text-sm font-black text-teal-500 mb-6 uppercase tracking-widest">Step 03</div>
               <h4 className="text-2xl font-bold font-serif-jp mb-6">導入・運用開始</h4>
               <p className="text-stone-400 text-sm leading-relaxed font-medium">
                  実店舗へのメニュー導入。基準をチームで共有し、公式なダイエットマスター提携施設として運営を開始します。
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section - Clean Accordion */}
      <section className="py-40 bg-stone-50">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-stone-900 font-serif-jp">よくあるご質問</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-stone-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                     <span className="text-teal-600 font-black text-sm">Q{idx + 1}</span>
                     <span className="font-bold text-stone-800 text-lg font-serif-jp">{faq.q}</span>
                  </div>
                  <div className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-teal-500' : 'text-stone-300'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-8 pb-8 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
                     <div className="pl-14 text-stone-500 text-base leading-relaxed font-medium">
                        {faq.a}
                     </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Authority/Trust Area */}
      <section className="py-40 bg-white">
        <div className="w-[90%] max-w-[1100px] mx-auto">
           <div className="bg-stone-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Award size={300} />
              </div>
              
              <div className="w-64 h-80 rounded-[3rem] overflow-hidden flex-shrink-0 shadow-2xl ring-8 ring-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?w=600&auto=format&fit=crop&q=80" 
                  alt="Scientist" 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="relative z-10 space-y-8 flex-1">
                 <div className="inline-block px-4 py-1.5 bg-teal-500 text-stone-900 text-[10px] font-black uppercase tracking-widest rounded-full">
                    Expert Supervision
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold font-serif-jp leading-tight">
                    医学と科学が認める、<br />
                    不変のダイエット・オペレーション。
                 </h3>
                 <p className="text-stone-400 text-lg leading-relaxed font-medium">
                    ダイエットマスター・プロコースは、単なる知識の寄せ集めではありません。数千件の成功事例と、行動変容療法の最新知見を統合した「事業としての正解」です。一過性の流行に左右されない本物の基準を。
                 </p>
                 <div className="flex items-center gap-4 pt-6">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-teal-400">
                       <Check size={24} />
                    </div>
                    <div className="text-sm font-bold text-stone-300">一般社団法人 日本ダイエットアカデミー協会 監修</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 8. Final CTA - The Conversion Point */}
      <section className="py-40 bg-white text-center">
        <div className="w-[90%] max-w-4xl mx-auto">
          <span className="text-teal-600 font-bold tracking-[0.4em] text-xs uppercase mb-12 block">Ready for the Next Step?</span>
          <h2 className="text-5xl md:text-7xl font-bold text-stone-900 mb-16 font-serif-jp leading-tight tracking-tighter">
            あなたの施設を、<br />
            <span className="text-teal-600">プロの舞台へ。</span>
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <Button size="xl" variant="teal" className="h-24 px-20 text-2xl shadow-3xl shadow-teal-500/30 group relative overflow-hidden" onClick={() => navigate('/contact')}>
               <span className="relative z-10 flex items-center gap-4">
                  <Sparkles size={28} className="animate-pulse" />
                  無料個別相談（法人・経営者様向け）
               </span>
               <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
            </Button>
            
            <p className="text-stone-400 font-bold text-sm tracking-widest uppercase flex items-center gap-3">
              <Clock size={16} /> 24時間以内に担当よりご連絡いたします
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
