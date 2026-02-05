import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { 
  ShieldCheck, 
  BarChart3, 
  Users2, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Building2, 
  LineChart,
  Layout,
  ClipboardCheck,
  Brain,
  CalendarRange,
  Users,
  Scale,
  Layers,
  Rocket,
  Sparkles,
  Zap
} from 'lucide-react';
import { useNavigate } from 'react-router';

export const ProfessionalCourse: React.FC = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    { 
      q: "Q1. 結局、どんな指導法なんですか?", 
      a: (
        <div className="space-y-3">
          <p>ダイエットマスターの指導は、「〇〇を食べてください」「△△をやりましょう」といった単発のアドバイス型指導ではありません。</p>
          <p>初回のダイエット診断とカウンセリングで、体の状態・生活習慣・行動のクセを整理し、行動修正療法を軸にした設計型のダイエットサポートを行います。</p>
          <p>何をどれだけ頑張らせるかではなく、<br /><strong>「どこをどう整えれば、自然に体が変わるか」</strong>を見極める指導法です。</p>
        </div>
      )
    },
    { 
      q: "Q2. 他に導入している施設では、どんなメニューを作っていますか?", 
      a: (
        <div className="space-y-3">
          <p>プロフェッショナルコースでは、メニューの作り方を固定していません。多くの施設では、以下の2点を軸にしながら、自分たちの業態に合わせてメニューを組み立てています。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>初回の「ダイエット診断」</li>
            <li>3 か月間のダイエットサポート</li>
          </ul>
          <p>たとえば、カウンセリング重視型、食事・生活改善サポート中心、既存サービスと組み合わせたコースなど、同じ考え方・同じ判断基準で、見せ方だけを変える形が多いです。</p>
        </div>
      )
    },
    { 
      q: "Q3. サプリ・エステ・パーソナルトレーニングなどと組み合わせられますか?", 
      a: (
        <div className="space-y-3">
          <p>はい、組み合わせ可能です。むしろ、多くの施設が既存メニューと併用しています。</p>
          <p>ダイエットマスターの考え方では、サプリ・エステ・トレーニング等は「主役」ではなく<strong>「サポート要素」</strong>。ダイエット診断とサポート設計で必要性があると判断した場合に、無理なく組み合わせる、という位置づけです。</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>無理な売り込みにならない</li>
            <li>顧客に納得感がある</li>
            <li>継続しやすい</li>
          </ul>
          <p>プロフェッショナルコースは、特定の商品やサービスを売るための仕組みではありません。どんなサービスを組み合わせてもブレない「判断の軸」を施設に持つことを目的としています。</p>
        </div>
      )
    },
    { 
      q: "Q4. スタッフ全員が資格を取る必要はありますか?", 
      a: (
        <div className="space-y-3">
          <p>いいえ。施設認定のため、全員必須ではありません。</p>
          <p>ただし、スタッフが複数名いる場合は、施設内に判断できる担当者がいることを推奨しています。</p>
        </div>
      )
    },
    { 
      q: "Q5. オーナー本人が受講しないといけませんか?", 
      a: (
        <div className="space-y-3">
          <p>原則として、事業の運営責任を担う方の受講を想定しています。</p>
          <p>現場責任者を別に置く場合は、その方の受講でも可能です。</p>
        </div>
      )
    },
    { 
      q: "Q6. 費用はどれくらいかかりますか?", 
      a: (
        <div className="space-y-3">
          <p>費用は内容説明後にご案内しています。</p>
          <p>まずは、導入の考え方や相性を確認したうえでご検討ください。</p>
        </div>
      )
    }
  ];

  const chapters = [
    { icon: LineChart, num: "01", title: "ビジネスとしてのダイエット", desc: "才能に依存せず、継続的な事業として指導を成立させる視点の整理。", accent: "from-teal-400 to-teal-600" },
    { icon: Layout, num: "02", title: "ビジネスデザイン", desc: "集客からサポート開始までの全体構造とフローの構築。", accent: "from-blue-400 to-blue-600" },
    { icon: ClipboardCheck, num: "03", title: "診断・初回面談デザイン", desc: "誰でも同じ技術的判断に到達するためのマニュアル化。", accent: "from-cyan-400 to-cyan-600" },
    { icon: Brain, num: "04", title: "行動変容療法の活用", desc: "62項目のチェックアップを用いた習慣のズレの特定と計画化。", accent: "from-indigo-400 to-indigo-600" },
    { icon: CalendarRange, num: "05", title: "3ヶ月運用モデル", desc: "成果と継続を安定させる、属人化しないサポート構造。", accent: "from-purple-400 to-purple-600" },
    { icon: ShieldCheck, num: "06", title: "施設認定と責任", desc: "技術責任者の役割と認定シールの意味・運用方法。", accent: "from-emerald-400 to-emerald-600" },
    { icon: Users, num: "07", title: "チーム運営と教育", desc: "品質を維持し、判断力のある人材を育成する方法。", accent: "from-orange-400 to-orange-600" },
    { icon: Scale, num: "08", title: "倫理と専門性の限界", desc: "顧客とビジネスを守るための境界線と禁止事項の定義。", accent: "from-rose-400 to-rose-600" },
    { icon: Layers, num: "09", title: "既存サービスとの融合", desc: "サプリメント、エステ、トレーニング等との組み合わせ方。", accent: "from-amber-400 to-amber-600" },
    { icon: Rocket, num: "10", title: "今後の展開オプション", desc: "修了後の拡張と、メカニズムを進化させるための選択肢。", accent: "from-teal-500 to-teal-700" }
  ];

  return (
    <div className="bg-white text-stone-800 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80" 
            alt="Professional Environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="w-[92%] max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <span className="inline-block text-teal-400 font-bold tracking-[0.4em] text-xs uppercase mb-6 border-l-2 border-teal-500 pl-4">
              Professional Master Program
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-serif-jp">
              認定ダイエットマスター<br />
              <span className="text-teal-400">加盟店・施設</span>への昇華。
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-10 leading-relaxed font-medium">
              個人の才能に依存しない。技術ではなく「システム」として<br className="hidden md:block" />
              ダイエット指導を運用するためのプロフェッショナルコース.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="xl" variant="teal" onClick={() => navigate('/pricing')}>
                無料個別導入相談会を予約する
              </Button>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                プログラム資料をダウンロード
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Concept Section */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full scale-150"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-double border-teal-500/30 flex flex-col items-center justify-center bg-white shadow-2xl">
                  <Award size={80} className="text-teal-600 mb-4" strokeWidth={1} />
                  <div className="text-center px-8">
                    <div className="text-xs font-bold text-stone-400 tracking-widest uppercase mb-1">CERTIFIED</div>
                    <div className="text-xl font-bold text-stone-800 font-serif-jp">施設認定制度</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 font-serif-jp leading-tight">
                なぜ、個人ではなく<br />「施設」を認定するのか？
              </h2>
              <div className="space-y-6 text-stone-600 leading-loose">
                <p className="font-medium">
                  本コースでは、個人ではなく「施設（事業所）」を認定します。これは、その施設がダイエットマスターの理念と基準に基づいた診断・サポートを提供している証となります。
                </p>
                <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm">
                  <h4 className="font-bold text-stone-800 mb-2 flex items-center">
                    <CheckCircle2 size={18} className="text-teal-600 mr-2" />
                    消費者にとっての信頼の証
                  </h4>
                  <p className="text-sm">
                    「誰が担当しても、統一された安全な基準に基づいた指導を受けられる」という安心感。これが顧客満足度を高め、ブランドの評価を守る直結の鍵となります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Features Section */}
      <section className="py-24 bg-white">
        <div className="w-[92%] max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-4 block">Core Resources</span>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp">3つの大きな差別化</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "施設認定による安全性の確立",
                icon: ShieldCheck,
                desc: "全スタッフが同じ理念と判断基準を共有する体制を構築。「担当者が変わってもサポートの質が落ちない」という価値を顧客に提供します。"
              },
              {
                title: "即導入可能な運用モデル",
                icon: BarChart3,
                desc: "長年の実践から磨き上げられた「3ヶ月間のサポートモデル」と「行動変容療法に基づく診断」をそのまま導入可能。ゼロから考える必要はありません。"
              },
              {
                title: "チーム体制と継続性のデザイン",
                icon: Users2,
                desc: "個人のスキルに依存しない、組織としての指導。話し方や地域に合わせたアレンジは自由。揺らがないのは「考え方の型」です。"
              }
            ].map((feature, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-stone-50 border border-stone-100 hover:border-teal-200 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 font-serif-jp">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table Section */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif-jp">決定的な比較</h2>
            <p className="text-stone-400 mt-4">一般的な資格とProfessional Courseの違い</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="border-b border-stone-800">
                  <th className="py-6 px-8 text-left text-sm font-bold text-stone-500 uppercase tracking-widest">比較項目</th>
                  <th className="py-6 px-8 text-left text-sm font-bold text-stone-500 uppercase tracking-widest">一般的な認定資格</th>
                  <th className="py-6 px-8 text-left text-sm font-bold text-teal-400 bg-teal-500/5 rounded-t-2xl">Diet Master Professional</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                {[
                  { label: "最終目的", common: "個人の理論学習がゴール", dm: "指導を安定した「事業」として運用する" },
                  { label: "認定単位", common: "「個人」に紐付く（離職で消失）", dm: "「施設」と「チーム」に紐付く" },
                  { label: "標準化", common: "指導内容は講師の裁量に依存", dm: "既製の運用モデルと基準を共有" },
                  { label: "顧客価値", common: "資格保有者の数で差別化", dm: "「誰でも安全」という環境への信頼" }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-stone-800 hover:bg-white/5 transition-colors">
                    <td className="py-8 px-8 font-bold text-stone-400">{row.label}</td>
                    <td className="py-8 px-8 text-stone-500">{row.common}</td>
                    <td className="py-8 px-8 font-bold text-white bg-teal-500/5">{row.dm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Curriculum Grid - SALES OPTIMIZED */}
      <section className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[1600px] mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 font-bold px-6 py-2 rounded-full text-xs tracking-[0.2em] uppercase mb-6 border border-teal-200 animate-pulse">
              <Zap size={14} fill="currentColor" />
              Comprehensive Curriculum
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 font-serif-jp leading-tight mb-6">
              プロフェッショナル・マスター<br className="md:hidden" />
              <span className="text-teal-600">全10章の体系</span>
            </h2>
            <p className="text-stone-500 text-lg md:text-xl max-w-3xl mx-auto font-medium">
              経営・集客・指導・教育。一流の施設として必要な<br className="hidden md:block" />
              全てのノウハウを、10のステップで完全にインストール。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {chapters.map((chapter, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white rounded-[2.5rem] p-10 border border-stone-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Visual Accent Layer */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${chapter.accent} opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-[5rem] -mr-8 -mt-8`}></div>
                
                {/* Chapter Badge */}
                <div className="absolute top-8 right-8 text-4xl font-black text-stone-100 group-hover:text-stone-200 transition-colors pointer-events-none select-none font-sans">
                  {chapter.num}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with Dynamic Gradient Background on Hover */}
                  <div className={`w-18 h-18 bg-stone-50 rounded-3xl flex items-center justify-center text-stone-400 group-hover:text-white group-hover:bg-gradient-to-br ${chapter.accent} mb-10 transition-all duration-500 shadow-inner group-hover:shadow-lg group-hover:rotate-12`}>
                    <chapter.icon size={36} strokeWidth={1.5} />
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                       <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${chapter.accent}`}></span>
                       <span className="text-stone-400 font-bold text-[11px] tracking-widest uppercase font-sans">Chapter {chapter.num}</span>
                    </div>
                    <h4 className="text-xl font-bold text-stone-900 mb-5 font-serif-jp leading-snug group-hover:text-teal-700 transition-colors">
                      {chapter.title}
                    </h4>
                    <p className="text-sm text-stone-500 leading-relaxed font-medium">
                      {chapter.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <div className="inline-flex items-center gap-4 p-2 bg-white border border-stone-200 rounded-3xl shadow-sm pr-8">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-2xl flex items-center justify-center animate-bounce">
                   <Sparkles size={20} />
                </div>
                <div className="text-left">
                   <p className="text-xs font-bold text-stone-800">全章オンライン受講・課題提出に対応</p>
                   <p className="text-[10px] text-stone-400 font-medium">あなたのペースで、場所を選ばず最高峰の学びを。</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Step Flow Section */}
      <section className="py-24 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 font-serif-jp">導入までの3ステップ</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {[
              { step: "01", title: "プロフェッショナルコース受講", desc: "経営者または技術責任者が受講（レギュラー・シニア修了が必須）。" },
              { step: "02", title: "確認・認定証の発行", desc: "修了および理解度の確認後、「認定施設シール」と称号を発行。" },
              { step: "03", title: "現場導入と共有", desc: "施設へのメニュー導入、スタッフへの基準共有、正式運用開始。" }
            ].map((item, idx) => (
              <div key={idx} className="flex-1 bg-stone-50 p-8 rounded-3xl shadow-sm relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-4 mt-4 font-serif-jp">{item.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-stone-200">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-24 bg-stone-50">
        <div className="w-[92%] max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 font-serif-jp">よくあるご質問</h2>
            <p className="text-stone-500 mt-2 font-medium">プロフェッショナルコースに関する疑問にお答えします</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-bold text-stone-800 pr-8">{faq.q}</span>
                  <ChevronDown size={20} className={`text-stone-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-50 pt-6 animate-in fade-in duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Authority Section */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="w-[92%] max-w-4xl mx-auto px-4">
          <div className="bg-stone-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
             
             <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 font-serif-jp">お申込み前の注意事項</h3>
                <p className="text-stone-400 leading-loose text-base mb-12">
                  本コースは「短期間で稼ぐテクニック」を教えるものではありません。<br className="hidden md:block" />
                  自身のやり方に固執せず、長期的な事業として指導体制を「仕組み化」したい方のためのプログラムです。
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10 border-t border-white/10">
                   <div className="flex items-center gap-4">
                      <div className="text-right">
                         <div className="text-xs text-teal-400 font-bold tracking-wider">Supervision</div>
                         <div className="text-lg font-bold font-serif-jp">小野 誠 監修</div>
                      </div>
                      <div className="w-px h-10 bg-white/20"></div>
                      <div className="text-left">
                         <p className="text-[10px] text-stone-500 font-medium">医学・栄養学・運動の<br />専門家による学術的裏付け</p>
                      </div>
                   </div>
                </div>

                <p className="mt-12 text-sm text-stone-500 italic">
                  Professional Courseは資格を取ることが目的ではありません。<br />
                  あなたの施設に完成された指導メカニズムを導入し、育てることが真の目的です。
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="w-[92%] max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 font-serif-jp">
            あなたの施設に、<br className="md:hidden" />プロフェッショナルの信頼を。
          </h2>
          <p className="text-stone-500 mb-12 font-medium">導入に関するご相談、シミュレーションは無料で承っております。</p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Button size="xl" variant="teal" className="px-16" onClick={() => navigate('/pricing')}>
              導入相談（無料）を予約する
            </Button>
            <Button size="xl" variant="outline" onClick={() => navigate('/courses')}>
              コース一覧に戻る
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};