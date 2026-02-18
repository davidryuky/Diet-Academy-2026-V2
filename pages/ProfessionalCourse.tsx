
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
  Stethoscope,
  Dumbbell,
  Check,
  X,
  Target,
  Layout,
  ClipboardCheck,
  Brain,
  CalendarRange,
  Building,
  Settings,
  Clock,
  Heart,
  ChevronRight
} from 'lucide-react';
// Fix: Import useNavigate from 'react-router' instead of 'react-router-dom' to avoid routing issues
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
    { id: "04", icon: Brain, title: "行動変容療法のデザイン", desc: "62項目のチェックアップによる習慣의ズレ特定。心理学的にプランを構築する技術。" },
    { id: "05", icon: CalendarRange, title: "3ヶ月サポート運用モデル", desc: "属人性を排除し、成果と継続を安定させる仕組み。90日間のルーチン管理。" },
    { id: "06", icon: Building, title: "ユニット認定と責任", desc: "技術責任者の役割と認定シールの真の意味。施設全体の信頼性を担保する管理体制。" },
    { id: "07", icon: Users, title: "チーム運営とトレーニング設計", desc: "品質を維持しながら自律的に動くチームの育て方。安全な権限委譲のプロセス。" },
    { id: "08", icon: ShieldCheck, title: "倫理と専門性", desc: "守るべき一線と、変えて良いものの定義。リスク管理とプロとしての誇り。" },
    { id: "09", icon: Settings, title: "既存サービスとの統合", desc: "サプリ、エステ、トレーニング等、既存メニューとの相乗効果。付加価値の最大化。" },
    { id: "10", icon: Clock, title: "次のステップと拡張", desc: "受講後の事業拡大と進化の選択肢。コミュニティを活用した継続的な事業成長。" }
  ];

  const faqs = [
    { q: "どのような指導内容を教えますか？", a: "単なるアドバイスではなく、行動変容療法を用いて「なぜ今の体型になっているのか」の習慣のズレを特定し、自然に体が変わるようルーチンを調整する構造的なサポートを伝授します。" },
    { q: "サプリメントや自社のサービスと組み合わせられますか？", a: "はい。ダイエットマスターはサプリやトレーニングを「サポート要素」と捉えます。システムがそれらの必要性を論理的に裏付けるため、顧客への提案力と納得感が高まります。" },
    { q: "全スタッフの資格取得が必要ですか？", a: "いいえ。本コースは「施設認定」です。運営責任者が基準を管理する体制を構築するため、全スタッフの個別取得は必須ではありませんが、基準の共有を推奨しています。" },
    { q: "オーナーが必ず受講する必要がありますか？", a: "はい。または事業の運営責任者の受講が必要です。個人の技術ではなく「経営・サービスデザイン」が焦点となるためです。" },
    { q: "費用はいくらですか？", a: "ビジネスモデルや施設の規模に合わせて最適な導入プランをご提案するため、個別相談後に詳細をお伝えしております。" }
  ];

  return (
    <div className="bg-white text-stone-800 font-sans">
      
      {/* 1. First View (FV) */}
      <section className="relative h-[800px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80" 
            alt="Professional Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="w-[92%] max-w-[1400px] mx-auto relative z-10 text-white">
          <div className="max-w-4xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <span className="inline-block text-teal-400 font-bold tracking-[0.4em] text-sm uppercase mb-6 border-l-2 border-teal-500 pl-4">
              Professional Course
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 font-serif-jp">
              ダイエットマスター<br />
              <span className="text-teal-400">認定施設への昇華。</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-10 leading-relaxed font-medium">
              個人の才能に依存しない。ダイエット指導を「個人技」ではなく<br className="hidden md:block" />
              「システム」として運用するためのプロフェッショナル向けコース。
            </p>
            <p className="text-stone-400 mb-12 max-w-2xl text-sm md:text-base leading-relaxed">
              ダイエットマスター・プロコースは、診断やサポートが「個人の経験や勘」に左右されないよう開発されました。
              誰が担当しても安全に、一定の基準で提供できる運営デザインを共有します。
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="xl" variant="teal" onClick={() => navigate('/contact')} className="shadow-2xl shadow-teal-500/40 h-16 px-12 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={20} className="animate-pulse" />
                  「成功のシステム」を導入し、収益を最大化する相談をする
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Concept Section */}
      <section className="py-32 bg-stone-50 overflow-hidden">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-teal-600 mb-8 border border-stone-100">
                  <Award size={40} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight mb-8">
                  なぜ個人ではなく、<br />
                  <span className="text-teal-600">「施設」を認定するのか？</span>
                </h2>
                <div className="space-y-6 text-stone-600 leading-loose font-medium">
                  <p>
                    本コースでは、個人の資格取得に留まらず、その「施設（事業）」自体を認定します。これは、その店舗がダイエットマスターの理念と基準に基づいた診断・サポートを提供している証となります。
                  </p>
                  <div className="bg-white p-8 rounded-3xl border border-teal-100 shadow-sm">
                    <h4 className="text-teal-700 font-bold flex items-center gap-2 mb-2">
                      <CheckCircle2 size={18} /> 顧客にとってのメリット
                    </h4>
                    <p className="text-sm">
                      「誰が担当しても、統一された安全な基準で指導を受けられる」というブランドへの信頼。これが顧客満足度を高め、施設の評判を守る最強の武器になります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-stone-100 text-center">
                <Users size={40} className="text-teal-600 mx-auto mb-4" />
                <div className="text-lg font-bold font-serif-jp">信頼の共有</div>
              </div>
              <div className="bg-teal-600 p-10 rounded-[3rem] shadow-xl text-white text-center">
                <ShieldCheck size={40} className="mx-auto mb-4" />
                <div className="text-lg font-bold font-serif-jp">基準の統一</div>
              </div>
              <div className="bg-stone-900 p-10 rounded-[3rem] shadow-xl text-white text-center col-span-2">
                <TrendingUp size={40} className="mx-auto mb-4 text-teal-400" />
                <div className="text-lg font-bold font-serif-jp">事業の資産化</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Pillars Section */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-teal-600 font-bold tracking-[0.3em] text-xs uppercase block mb-4">Core Features</span>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight">
              プロフェッショナルを支える3つの柱
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "施設認定による信頼と安全", 
                icon: Building2, 
                desc: "全スタッフが同じ理念と判断基準を共有する体制を構築. 担当が変わっても品質が変わらない保証は、顧客に圧倒的な安心感を与えます。" 
              },
              { 
                title: "即導入可能な運営モデル", 
                icon: Layers, 
                desc: "長年の実践から導き出された3ヶ月サポートの運営モデルと診断フローをそのまま提供。ゼロから考える必要はなく、仕組みとして導入できます。" 
              },
              { 
                title: "チーム力と継続性の設計", 
                icon: Users, 
                desc: "個人のスキルに頼りすぎない。判断基準を共有することで、チーム全体が同じ方向を向き、長期的に安定したサービス提供を可能にします。" 
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[3rem] border border-stone-100 hover:border-teal-200 hover:shadow-2xl transition-all duration-500 bg-stone-50/30">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-teal-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-6 font-serif-jp leading-tight">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table Section */}
      <section className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[1000px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif-jp">比較でわかる圧倒的優位性</h2>
            <p className="text-stone-500 mt-4 font-medium">「資格」の枠を超え、「事業システム」としての価値を追求。</p>
          </div>

          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-stone-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="p-8 text-sm font-bold tracking-widest uppercase">比較項目</th>
                  <th className="p-8 text-sm font-bold tracking-widest uppercase text-stone-400">一般的な資格</th>
                  <th className="p-8 text-sm font-bold tracking-widest uppercase text-teal-400">プロフェッショナル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  { label: "最終目的", common: "個人の知識習得", pro: "ダイエット事業の安定運営" },
                  { label: "認定単位", common: "個人（本人のみが対象）", pro: "施設・チーム（組織が対象）" },
                  { label: "標準化", common: "指導者によって内容がバラつく", pro: "既製の運営モデルと基準を共有" },
                  { label: "顧客価値", common: "「先生」への個人的な依存", pro: "施設への安心感とブランドの信頼" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-teal-50/30 transition-colors">
                    <td className="p-8 text-sm font-bold text-stone-800 font-serif-jp">{row.label}</td>
                    <td className="p-8 text-sm text-stone-500 font-medium">{row.common}</td>
                    <td className="p-8 text-sm text-stone-900 font-bold bg-teal-50/20">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. 10 Chapters Curriculum Section */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-teal-600 font-bold tracking-[0.3em] text-xs uppercase block mb-4">The Curriculum</span>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight">
              プロフェッショナル・マスター全10章
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-6">
            {chapters.map((chapter) => (
              <div 
                key={chapter.id}
                onClick={() => navigate(`/courses/professional/chapter/${chapter.id}`)}
                className="group flex items-start gap-6 p-6 rounded-2xl hover:bg-stone-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-stone-100"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <chapter.icon size={24} />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-black text-stone-300 tracking-widest uppercase">Chapter {chapter.id}</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 font-serif-jp group-hover:text-teal-600 transition-colors mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed font-medium">
                    {chapter.desc}
                  </p>
                </div>
                <ChevronRight size={18} className="text-stone-200 mt-8 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Introduction Flow (3 Steps) */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(20,184,166,0.1),transparent)]"></div>
        <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-serif-jp mb-4">導入までの3ステップ</h2>
            <p className="text-stone-400 font-medium">スムーズな導入と確実な運用開始をサポートします。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "プロコースの受講", desc: "経営者または技術責任者が全10章を受講し、システムの根幹を理解します。(L01, L02修了が前提となります)" },
              { step: "02", title: "確認・認定証発行", desc: "受講後の理解度確認を経て、公式な「認定施設シール」および「Professional Master」認定証を発行します。" },
              { step: "03", title: "導入・スタッフ共有", desc: "実店舗へのメニュー導入。基準をチームで共有し、公式なダイエットマスター提携施設として運営を開始します。" }
            ].map((item, i) => (
              <div key={i} className="relative p-10 bg-white/5 border border-white/10 rounded-[3rem]">
                <div className="text-6xl font-black text-teal-500/20 absolute -top-4 -left-4 pointer-events-none">{item.step}</div>
                <h4 className="text-xl font-bold mb-6 font-serif-jp text-teal-400">STEP {item.step}</h4>
                <h5 className="text-lg font-bold mb-4">{item.title}</h5>
                <p className="text-stone-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Use Cases Section */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-stone-900 font-serif-jp">導入イメージ</h2>
            <p className="text-stone-500 mt-4 font-medium">様々な業態のサービスと融合し、新しい価値を生み出します。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "エステサロン", 
                img: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&auto=format&fit=crop&q=80", 
                desc: "施術の効果を最大化する「生活習慣改善サポート」をメニュー化。内面美へのアプローチで顧客満足度を向上。" 
              },
              { 
                title: "パーソナルジム", 
                img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80", 
                desc: "トレーニングだけでなく、科学的根拠に基づいた3ヶ月の食事指導を付加。成約率と継続率の飛躍的なアップ。" 
              },
              { 
                title: "整体・治療院", 
                img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80", 
                desc: "身体の痛みや不調の根本原因に多い「食」と「体重」をアプローチ。健康的な体づくりをトータルでサポート。" 
              }
            ].map((item, i) => (
              <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-stone-100 shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-4 font-serif-jp text-stone-800">{item.title}</h4>
                  <p className="text-stone-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[800px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-stone-900 font-serif-jp">よくある質問</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                     <span className="font-black text-teal-600">Q{idx + 1}</span>
                     <span className="font-bold text-stone-800">{faq.q}</span>
                  </div>
                  {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
                     <div className="pl-10 text-stone-500 text-sm leading-relaxed font-medium">
                        {faq.a}
                     </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Authority & Supervision */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1000px] mx-auto">
          <div className="bg-stone-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Award size={200} />
             </div>
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="w-48 h-48 bg-stone-800 rounded-3xl overflow-hidden shadow-2xl flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80" alt="Supervision" className="w-full h-full object-cover" />
                </div>
                <div>
                   <span className="text-teal-400 font-bold tracking-widest text-xs uppercase mb-4 block">Scientific Supervision</span>
                   <h3 className="text-2xl md:text-3xl font-bold font-serif-jp mb-6">小野 誠 監修：安全と科学の証明</h3>
                   <p className="text-stone-400 leading-relaxed font-medium mb-8">
                     プロフェッショナルコースは、医学、栄養学、運動学の専門家による徹底した監修のもと開発されています。
                     一過性の流行ではなく、一生使い続けられる「本物」の基準をあなたの施設に。
                   </p>
                   <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-xs text-stone-500 leading-relaxed">
                     注意：本コースは短期的な売り上げを目的とした「販売テクニック」の講習ではありません。
                     長期的な信頼を築くための「運営システムの構築」を目的としています。
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="w-[92%] max-w-4xl mx-auto">
          <span className="text-teal-600 font-bold tracking-[0.4em] text-xs uppercase mb-8 block">Final Call</span>
          <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-12 font-serif-jp leading-tight">
            あなたの施設を、<br />
            <span className="text-teal-600">プロフェッショナルの信頼の場へ。</span>
          </h2>
          <Button size="xl" variant="teal" className="px-16 h-20 text-xl shadow-2xl shadow-teal-500/20 group relative overflow-hidden" onClick={() => navigate('/contact')}>
             <span className="relative z-10 flex items-center gap-3">
                <Sparkles size={24} className="animate-pulse" />
                【無料】あなたの施設を「稼げる仕組み」に変える相談をする
             </span>
             <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
          </Button>
          <p className="mt-8 text-stone-400 font-medium text-sm">
             プロフェッショナルコースは、単なる認定証の発行ではありません。<br className="hidden md:block" />
             完成されたダイエット指導の「仕組み」をインストールし、共に成長していくための始まりです。
          </p>
        </div>
      </section>

    </div>
  );
};
