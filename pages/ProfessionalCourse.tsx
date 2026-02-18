
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
  Check,
  Stethoscope,
  Dumbbell,
  Sparkle
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
      q: "オーナーが必ず受講する必要がありますか？", 
      a: "はい。または事業の運営責任者の受講が必要です。個人の技術ではなく「経営・サービスデザイン」が焦点となるためです。" 
    }
  ];

  return (
    <div className="bg-white text-stone-800 font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      
      {/* 1. Hero Section - Strategic B2B Filtering */}
      <section className="relative min-h-screen flex items-center pt-20 bg-stone-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80" 
            alt="Modern Professional Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
        </div>
        
        <div className="w-[90%] max-w-[1400px] mx-auto relative z-10 py-20">
          <div className="max-w-4xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-flex items-center gap-2 text-teal-400 font-bold tracking-[0.4em] text-xs uppercase mb-8 py-2 px-4 bg-teal-500/10 rounded-full border border-teal-500/20">
              <ShieldCheck size={14} />
              Elite Management Program
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-10 font-serif-jp text-white">
              ダイエットマスター<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                認定施設への昇華。
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed font-medium max-w-2xl">
              個人の才能に依存しない。ダイエット指導を「個人技」ではなく<br className="hidden md:block" />
              「システム」として運用するためのプロフェッショナル向けコース。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <Button size="xl" variant="teal" onClick={() => navigate('/contact')} className="h-20 px-12 group text-xl shadow-2xl shadow-teal-500/20">
                <span className="flex items-center gap-3">
                  無料個別相談を予約する
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction - Concept of Business vs Individual */}
      <section className="py-40 relative overflow-hidden bg-white">
        <div className="w-[90%] max-w-[1000px] mx-auto text-center">
          <span className="text-teal-600 font-bold tracking-[0.3em] text-xs uppercase block mb-6">The Definition</span>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight mb-12">
            これは単なる「資格」ではありません。<br />
            <span className="text-teal-600">事業の安定</span>を設計するプログラムです。
          </h2>
          <div className="text-stone-600 text-lg md:text-xl leading-[2.2] font-medium space-y-8">
            <p>
              本コースは、個人の知識習得に留まらず、その施設（ビジネス）自体を認定することを目指します。
              これは、特定の「エース」に頼ることなく、チーム全体が統一された高い基準でサービスを提供するためのデザインを共有する場です。
            </p>
            <p>
              誰が担当しても安全に、一定の基準で提供できる運営フローを導入することで、
              顧客に「この施設なら誰が担当しても安心だ」という圧倒的な信頼を約束します。
            </p>
          </div>
        </div>
      </section>

      {/* 3. The 3 Differentials */}
      <section className="py-40 bg-stone-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "施設認定による圧倒的信頼", 
                icon: Award, 
                desc: "個人ではなく施設を認定。担当者が変わっても品質が変わらない保証は、顧客にとって最強の安心材料となり、ブランド価値を定着させます。" 
              },
              { 
                title: "即戦力の運用モデル提供", 
                icon: Layers, 
                desc: "行動変容療法に基づく62項目の診断から3ヶ月のサポートフローまで、実証済みのシステムをそのまま自社の新メニューとして導入可能です。" 
              },
              { 
                title: "揺るぎないチームデザイン", 
                icon: Users, 
                desc: "スタッフ間の「思考の軸」を統一。個人の感性に頼りすぎない判断基準を共有することで、組織全体のサービス品質を劇的に安定させます。" 
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white p-12 rounded-[3rem] border border-stone-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 shadow-inner group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-6 font-serif-jp leading-tight">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table - Why We Are Different */}
      <section className="py-40 bg-white">
        <div className="w-[90%] max-w-[1000px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight">比較でわかる圧倒的優位性</h2>
            <p className="text-stone-500 mt-6 font-medium text-lg">「資格」の枠を超え、「事業システム」としての価値を追求します。</p>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-stone-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-8 text-xs font-bold tracking-widest uppercase opacity-60">比較項目</th>
                  <th className="p-8 text-xs font-bold tracking-widest uppercase opacity-60">一般的な認定資格</th>
                  <th className="p-8 text-xs font-bold tracking-widest uppercase text-teal-400">Diet Master Professional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  { label: "最終目的", common: "個人の知識習得・修了がゴール", pro: "ダイエット事業の安定した運営" },
                  { label: "受講後の活用", common: "知識をどう活かすかは個人次第", pro: "完成された運用モデルをそのまま提供" },
                  { label: "品質の安定性", common: "指導者によって内容がバラつく", pro: "チームで判断基準を共有・統一" },
                  { label: "事業の継続性", common: "有資格者が辞めるとサービス停止", pro: "施設にシステムが残るため継続可能" },
                  { label: "顧客への価値", common: "「資格保持者」の一人でしかない", pro: "「誰でも安心な施設」というブランド" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-teal-50/20 transition-colors">
                    <td className="p-8 text-sm font-bold text-stone-800 font-serif-jp">{row.label}</td>
                    <td className="p-8 text-sm text-stone-400 font-medium">{row.common}</td>
                    <td className="p-8 text-sm text-stone-900 font-bold bg-teal-50/30">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Curriculum - 10 Chapters */}
      <section className="py-40 bg-stone-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-teal-600 font-bold tracking-[0.4em] text-xs uppercase block mb-6">The Curriculum</span>
            <h2 className="text-3xl md:text-6xl font-bold text-stone-900 font-serif-jp leading-tight">
              プロフェッショナル・マスター全10章
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {chapters.map((chapter) => (
              <div 
                key={chapter.id}
                onClick={() => navigate(`/courses/professional/chapter/${chapter.id}`)}
                className="group relative h-[380px] bg-white rounded-[2.5rem] border border-stone-100 p-8 flex flex-col justify-between hover:bg-stone-900 transition-all duration-500 cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl"
              >
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
                   <span className="text-[10px] font-black tracking-widest uppercase text-stone-300 group-hover:text-teal-500">Explore</span>
                   <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-300 group-hover:bg-teal-500 group-hover:text-white group-hover:translate-x-1 transition-all">
                      <ChevronRight size={14} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Implementation Flow */}
      <section className="py-40 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.1),transparent)]"></div>
        <div className="w-[90%] max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold font-serif-jp mb-6">導入までの3ステップ</h2>
            <p className="text-stone-400 font-medium text-lg">確実な運用開始までを徹底サポートします。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "プロコースの受講", desc: "経営者または技術責任者が全10章を受講。システムの根幹と運営デザインを深く理解します。" },
              { step: "02", title: "認定証・シールの発行", desc: "理解度確認を経て、公式な「認定施設シール」および「Professional Master」認定証を発行します。" },
              { step: "03", title: "導入・チーム共有", desc: "実店舗へのメニュー導入。基準をチームで共有し、認定施設としての運営をスタートします。" }
            ].map((item, i) => (
              <div key={i} className="relative p-12 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-white/10 transition-all duration-500">
                <div className="text-8xl font-black text-teal-500/10 absolute -top-4 -left-4 pointer-events-none group-hover:text-teal-500/20 transition-colors">{item.step}</div>
                <h4 className="text-2xl font-bold mb-8 font-serif-jp text-teal-400">STEP {item.step}</h4>
                <h5 className="text-xl font-bold mb-6">{item.title}</h5>
                <p className="text-stone-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Success Examples */}
      <section className="py-40 bg-white">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp">導入イメージ</h2>
            <p className="text-stone-500 mt-6 font-medium text-lg">様々な業態のサービスと融合し、新しい価値を創造します。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "エステサロン", 
                icon: Sparkle,
                desc: "施術の効果を最大化する「生活習慣改善サポート」をメニュー化。内面からの美しさを提供。" 
              },
              { 
                title: "パーソナルジム", 
                icon: Dumbbell,
                desc: "トレーニングだけでなく、科学的根拠に基づいた3ヶ月の食事指導を付加。成約率を飛躍的に向上。" 
              },
              { 
                title: "整体・治療院", 
                icon: Stethoscope,
                desc: "身体の不調の根本原因に多い「食」と「体重」をアプローチ。健康的な体づくりをトータルで支援。" 
              }
            ].map((item, i) => (
              <div key={i} className="group bg-stone-50 rounded-[3rem] p-12 border border-stone-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-8 shadow-sm">
                  <item.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-6 font-serif-jp text-stone-800">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-40 bg-stone-50">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-bold text-stone-900 font-serif-jp">よくあるご質問</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
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
                  <div className="px-10 pb-10 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
                     <div className="pl-12 text-stone-500 text-base leading-relaxed font-medium">
                        {faq.a}
                     </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Authority and Alert */}
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
                    Scientific Supervision
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold font-serif-jp leading-tight">
                    医学と科学が認める、<br />
                    不変のダイエット・オペレーション。
                 </h3>
                 <p className="text-stone-400 text-lg leading-relaxed font-medium">
                    ダイエットマスター・プロコースは、単なる知識の寄せ集めではありません。数千件の成功事例と、行動変容療法の最新知見を統合した「事業としての正解」です。小野誠氏の監修による本物の基準を。
                 </p>
                 <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-xs text-stone-500 leading-relaxed">
                   注意：本コースは短期的な売上を目的とした「販売テクニック」の講習ではありません。
                   長期的な信頼を築くための「運営システムの構築」を目的としています。
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 10. Final Call */}
      <section className="py-40 bg-white text-center">
        <div className="w-[90%] max-w-4xl mx-auto">
          <span className="text-teal-600 font-bold tracking-[0.4em] text-xs uppercase mb-12 block">Final Call</span>
          <h2 className="text-5xl md:text-7xl font-bold text-stone-900 mb-16 font-serif-jp leading-tight">
            あなたの施設を、<br />
            <span className="text-teal-600">プロの舞台へ。</span>
          </h2>
          
          <div className="flex flex-col items-center gap-8">
            <Button size="xl" variant="teal" className="h-24 px-20 text-2xl shadow-3xl shadow-teal-500/30 group relative overflow-hidden" onClick={() => navigate('/contact')}>
               <span className="relative z-10 flex items-center gap-4">
                  <Sparkles size={28} className="animate-pulse" />
                  施設のプロフェッショナル化を相談する
               </span>
               <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
