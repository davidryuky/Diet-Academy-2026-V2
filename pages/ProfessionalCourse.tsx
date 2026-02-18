
import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { 
  ShieldCheck, 
  ArrowRight, 
  Award, 
  Layers, 
  Users, 
  Sparkles,
  ChevronDown,
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
  Target,
  Stethoscope,
  Dumbbell,
  Sparkle,
  TrendingUp,
  Briefcase,
  Zap,
  CheckCircle2,
  XCircle,
  BarChart3,
  SearchCheck
} from 'lucide-react';
import { useNavigate } from 'react-router';

export const ProfessionalCourse: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const chapters = [
    { id: "01", icon: Layout, title: "ビジネスモデル構築", desc: "才能依存からの脱却と持続可能なビジョンの構築。" },
    { id: "02", icon: Settings2, title: "システムデザイン", desc: "集客からサポート開始までの全体構造の設計。" },
    { id: "03", icon: ClipboardCheck, title: "標準化カウンセリング", desc: "誰が担当しても同じ結論に達するマニュアル化。" },
    { id: "04", icon: Brain, title: "行動変容プログラム", desc: "62項目のチェックアップによる習慣のズレ特定。" },
    { id: "05", icon: CalendarRange, title: "90日間運用モデル", desc: "属人性を排除し、成果と継続を安定させる仕組み。" },
    { id: "06", icon: Building, title: "施設認定マネジメント", desc: "技術責任者の役割と認定シールの真の意味。" },
    { id: "07", icon: Users, title: "チームビルディング", desc: "品質を維持しながら自律的に動くチームの育て方。" },
    { id: "08", icon: ShieldCheck, title: "プロ倫理とリスク管理", desc: "守るべき一線と、変えて良いものの定義。" },
    { id: "09", icon: Settings, title: "既存サービスとの統合", desc: "サプリ、エステ等、既存メニューとの相乗効果。" },
    { id: "10", icon: Clock, title: "事業拡張ロードマップ", desc: "受講後の事業拡大と資産化された事業への未来。" }
  ];

  const firstHalf = chapters.slice(0, 5);
  const secondHalf = chapters.slice(5, 10);

  const targetProfiles = [
    {
      title: "独立・開業を目指すプロフェッショナル",
      context: "現在サロンやジムに勤務しており、将来は自分の店を持ちたい。確かな「食事指導メニュー」を主軸に、高単価で選ばれるサービスを確立したい方。",
      benefit: "「個人技」ではなく「再現性のあるシステム」を持つことで、開業初日からプロのクオリティと信頼を提供できます。",
      icon: Briefcase,
      color: "bg-teal-50",
      iconColor: "text-teal-600"
    },
    {
      title: "売上を最大化したい既存店のオーナー",
      context: "既にメニューはあるが、担当スタッフによって結果にバラつきがある。成約率を向上させ、リピート率を安定させたい経営者の方。",
      benefit: "「診断システム」を導入することで、提案の説得力が劇的に向上。属人性を排除し、組織全体で売上を底上げします。",
      icon: TrendingUp,
      color: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <div className="bg-white text-stone-800 font-sans selection:bg-teal-100 selection:text-teal-900 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-stone-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80" 
            alt="Modern Professional Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent"></div>
        </div>
        
        <div className="w-[92%] max-w-[1400px] mx-auto relative z-10 py-20">
          <div className="max-w-4xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 text-teal-400 font-bold tracking-[0.4em] text-[10px] uppercase py-2 px-4 bg-teal-500/10 rounded-full border border-teal-500/20">
                <ShieldCheck size={14} />
                Exclusive Business Program
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-10 font-serif-jp text-white">
              指導を「事業」へ。<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
                認定施設への昇華。
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed font-medium max-w-2xl">
              プロフェッショナルコースは、ダイエット指導を「個人の技術」から「安定したビジネスモデル」へ転換するためのプログラムです。才能に依存せず、組織全体のブランド価値を極限まで高めます。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <Button size="xl" variant="teal" onClick={() => navigate('/contact')} className="h-20 px-12 group text-xl shadow-2xl shadow-teal-500/20">
                <span className="flex items-center gap-3">
                  無料導入相談を予約する
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction - The Core Concept */}
      <section className="py-40 relative overflow-hidden bg-white">
        <div className="w-[90%] max-w-[1000px] mx-auto text-center">
          <span className="text-teal-600 font-bold tracking-[0.3em] text-xs uppercase block mb-6">The System</span>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight mb-12">
            これは「資格」ではなく、<br />
            <span className="text-teal-600">「売れる仕組み」の導入</span>です。
          </h2>
          <div className="text-stone-600 text-lg md:text-xl leading-[2.2] font-medium space-y-8">
            <p>
              本コースは、ダイエット指導を収益の柱として確立したい経営者のための特別プログラムです。
              特定の担当者に頼らず、サービスの質が一切落ちない「判断基準」と「運営デザイン」を貴施設に構築します。
            </p>
            <p className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100">
              顧客が「この施設なら安心だ」と感じる、属人性を排除した強固な信頼構造こそが、
              高単価でも選ばれ続ける理由となります。
            </p>
          </div>
        </div>
      </section>

      {/* 3. Comparison Section - Nós vs Outros (DECISIVE COMPARISON) */}
      <section className="py-40 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <BarChart3 className="absolute -bottom-20 -right-20 w-[600px] h-[600px]" />
        </div>
        <div className="w-[90%] max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-teal-400 font-bold tracking-[0.4em] text-xs uppercase mb-6 block">Comparison</span>
            <h2 className="text-3xl md:text-5xl font-bold font-serif-jp leading-tight">
              なぜ「ダイエットマスター」なのか？
            </h2>
            <p className="text-stone-500 mt-6 font-medium">従来の属人的な指導と、当協会のシステムを比較してください。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-stone-800 rounded-[3.5rem] overflow-hidden border border-stone-800 shadow-2xl">
            {/* Others */}
            <div className="bg-stone-900 p-12 md:p-16">
              <div className="flex items-center gap-4 mb-10 opacity-50">
                 <XCircle className="text-stone-500" size={32} />
                 <h3 className="text-2xl font-bold font-serif-jp">一般的なダイエット指導</h3>
              </div>
              <ul className="space-y-8">
                {[
                  "担当者の「勘」や「才能」に依存し、成果にバラつきが出る。",
                  "「頑張りましょう」という精神論が中心で、顧客が挫折しやすい。",
                  "指導がマニュアル化されておらず、スタッフの教育に時間がかかる。",
                  "サプリや施術の販売が「押し売り」になり、信頼を損なうリスクがある。",
                  "一過性の減量に留まり、長期的なLTV（顧客生涯価値）が低い。"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-stone-500 text-sm leading-relaxed">
                    <span className="mt-1 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Diet Master System */}
            <div className="bg-stone-900 p-12 md:p-16 relative">
              <div className="absolute inset-0 bg-teal-500/5 pointer-events-none"></div>
              <div className="flex items-center gap-4 mb-10">
                 <CheckCircle2 className="text-teal-400" size={32} />
                 <h3 className="text-2xl font-bold font-serif-jp text-teal-400">ダイエットマスター・システム</h3>
              </div>
              <ul className="space-y-8">
                {[
                  "62項目の科学的チェックにより、誰が担当しても同じ高精度な診断が可能。",
                  "行動変容療法を導入し、顧客が「自然に」習慣を変えられる仕組みを提供。",
                  "全ての工程が標準化されており、新人スタッフでも即戦力として機能する。",
                  "論理的な裏付けにより、既存メニューの納得感が高まり、成約率が向上する。",
                  "90日間の伴走モデルにより、顧客との深い信頼関係と安定収益を構築。"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 text-stone-200 text-base leading-relaxed font-bold">
                    <CheckCircle2 size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Target Profiles */}
      <section className="py-40 bg-stone-50 relative overflow-hidden">
        <div className="w-[90%] max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp">このようなプロフェッショナルに最適です</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {targetProfiles.map((profile, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-stone-200 shadow-sm flex flex-col hover:shadow-xl transition-all duration-500">
                <div className={`w-14 h-14 ${profile.color} ${profile.iconColor} rounded-2xl flex items-center justify-center mb-8`}>
                  <profile.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 font-serif-jp mb-6">{profile.title}</h3>
                <div className="space-y-6 flex-grow">
                   <div className="p-6 bg-stone-50 rounded-2xl border-l-4 border-teal-500">
                      <p className="text-sm font-bold text-stone-400 uppercase mb-2">Target Situation</p>
                      <p className="text-stone-600 text-sm leading-relaxed font-medium">{profile.context}</p>
                   </div>
                   <div className="p-6">
                      <p className="text-sm font-bold text-teal-600 uppercase mb-2">The Solution</p>
                      <p className="text-stone-700 text-sm leading-relaxed font-bold">{profile.benefit}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Professional Curriculum - COMPACT 5x2 LAYOUT */}
      <section className="py-40 bg-white">
        <div className="w-[90%] max-w-[1100px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-teal-600 font-bold tracking-[0.4em] text-xs uppercase block mb-6">Learning Roadmap</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight">
              プロフェッショナル・マスター全10章
            </h2>
            <p className="text-stone-400 mt-6 font-medium">個人の技術を「事業システム」へ昇華させるための10ステップ。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-4">
              {firstHalf.map((chapter) => (
                <div 
                  key={chapter.id}
                  onClick={() => navigate('/contact')}
                  className="group flex items-center gap-6 p-6 bg-stone-50 rounded-[2rem] border border-stone-100 hover:bg-stone-900 hover:border-stone-800 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-sm">
                    <chapter.icon size={22} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-black text-teal-600 group-hover:text-teal-400 tracking-widest uppercase">Chapter {chapter.id}</span>
                      <ChevronRight size={14} className="text-stone-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-white font-serif-jp transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-[11px] text-stone-400 leading-relaxed group-hover:text-stone-500 transition-colors">
                      {chapter.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {secondHalf.map((chapter) => (
                <div 
                  key={chapter.id}
                  onClick={() => navigate('/contact')}
                  className="group flex items-center gap-6 p-6 bg-stone-50 rounded-[2rem] border border-stone-100 hover:bg-stone-900 hover:border-stone-800 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-sm">
                    <chapter.icon size={22} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-black text-teal-600 group-hover:text-teal-400 tracking-widest uppercase">Chapter {chapter.id}</span>
                      <ChevronRight size={14} className="text-stone-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-base font-bold text-stone-900 group-hover:text-white font-serif-jp transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-[11px] text-stone-400 leading-relaxed group-hover:text-stone-500 transition-colors">
                      {chapter.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Case Studies / Segments */}
      <section className="py-40 bg-stone-50">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp">導入による変化</h2>
            <p className="text-stone-500 mt-6 font-medium text-lg">あらゆる健康・美容ビジネスに「確信」という軸を導入します。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "エステサロン", icon: Sparkle, desc: "施術の効果を最大化する「食事サポート」をメニュー化。内面からのアプローチを論理的に提供し、顧客単価と満足度を劇的に向上。" },
              { title: "パーソナルジム", icon: Dumbbell, desc: "トレーニングに加え、科学的根拠に基づいたシステム的な食事指導を付加。成約率を飛躍的に高め、リバウンド防止を強みに。" },
              { title: "治療院・クリニック", icon: Stethoscope, desc: "不調の根本原因である「食」と「体重」をシステム的に管理。健康的な体づくりをトータルで支援し、地域で唯一無二の専門院へ。" }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-[3rem] p-12 border border-stone-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 shadow-sm">
                  <item.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-6 font-serif-jp text-stone-800">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ - Fiel ao solicitado */}
      <section className="py-40 bg-white">
        <div className="w-[90%] max-w-[800px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-stone-900 font-serif-jp">よくあるご質問</h2>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "指導内容はどのようなものですか？", 
                a: "単なる個別のアドバイスではありません。行動変容療法を用いた構造的なサポートです。日常のルーティンのどこを調整すれば体が自然に変わるかを特定するための仕組みを構築します。" 
              },
              { 
                q: "サプリメントや既存のサービスと組み合わせることはできますか？", 
                a: "はい. ダイエットマスターでは、サプリメントやトレーニングを主役ではなく「サポート要素」として捉えています。このシステムは、それらを使用するための論理的な根拠を作り出し、顧客の納得感（コンプライアンス）を高めます。" 
              },
              { 
                q: "スタッフ全員が資格を取得する必要がありますか？", 
                a: "いいえ。認定は施設（ユニット）に対して行われます。ただし、運営の責任者が明確な判断基準を持っていることを強く推奨します。" 
              },
              { 
                q: "オーナーは必ず受講しなければなりませんか？", 
                a: "はい、または事業の運営を担当する責任者の方です。本コースの焦点は、サービスの管理とビジネスデザインの設計にあります。" 
              },
              { 
                q: "費用はいくらですか？", 
                a: "費用に関する詳細は、プログラム内容のご説明の後に提供されます。これは、当協会のモデルがお客様のビジネス形態に真に適しているかを確認するためです。" 
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-3xl border border-stone-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-stone-100 transition-colors"
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
                  <div className="px-10 pb-10 pt-0 bg-white border-t border-stone-100 animate-in fade-in slide-in-from-top-2 duration-300">
                     <div className="p-8 text-stone-600 text-base leading-relaxed font-medium">{faq.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="w-[90%] max-w-4xl mx-auto">
          <span className="text-teal-600 font-bold tracking-[0.4em] text-xs uppercase mb-12 block">Get in Touch</span>
          <h2 className="text-5xl md:text-7xl font-bold text-stone-800 mb-16 font-serif-jp leading-tight">
            あなたの施設を、<br /><span className="text-teal-600">プロの舞台へ。</span>
          </h2>
          <div className="flex flex-col items-center gap-8">
            <Button size="xl" variant="teal" className="h-24 px-20 text-2xl shadow-3xl shadow-teal-500/30 group relative overflow-hidden" onClick={() => navigate('/contact')}>
               <span className="relative z-10 flex items-center gap-4">
                  <Sparkles size={28} className="animate-pulse" />
                  導入について相談する
               </span>
               <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
            </Button>
            <p className="text-stone-400 text-sm font-bold">※24時間以内に担当者より折り返しご連絡いたします</p>
          </div>
        </div>
      </section>

    </div>
  );
};
