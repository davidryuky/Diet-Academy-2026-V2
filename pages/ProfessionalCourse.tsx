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
  Stethoscope, 
  Dumbbell, 
  Sparkles,
  Zap,
  Target,
  FileCheck,
  Scale
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProfessionalCourse: React.FC = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-stone-800 font-sans">
      
      {/* 1. Hero Section (First View) */}
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
              ダイエット指導を運用するためのプロフェッショナルコース。
            </p>
            <p className="text-stone-400 text-sm md:text-base mb-12 leading-loose max-w-2xl">
              日本ダイエットアカデミー協会のProfessional Courseは、「個人の経験や勘」に頼らない診断とサポートを可能にします。安全かつ確実な指導体制（仕組み）を構築し、どのスタッフでも質の高いサービスを提供できるデザインを共有します。
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

      {/* 5. Curriculum Grid (10 Chapters) */}
      <section className="py-24 bg-white">
        <div className="w-[92%] max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif-jp">コース詳細（全10章）</h2>
            <p className="text-stone-500 mt-4">経営から実戦までを網羅したカリキュラム</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "01", title: "ビジネスとしてのダイエット", desc: "才能に依存せず、継続的な事業として指導を成立させる視点の整理。" },
              { num: "02", title: "ビジネスデザイン", desc: "集客からサポート開始までの全体構造とフローの構築。" },
              { num: "03", title: "診断・初回面談デザイン", desc: "誰でも同じ技術的判断に到達するためのマニュアル化。" },
              { num: "04", title: "行動変容療法の活用", desc: "62項目のチェックアップを用いた習慣のズレの特定と計画化。" },
              { num: "05", title: "3ヶ月運用モデル", desc: "成果と継続を安定させる、属人化しないサポート構造。" },
              { num: "06", title: "施設認定と責任", desc: "技術責任者の役割と認定シールの意味・運用方法。" },
              { num: "07", title: "チーム運営と教育", desc: "品質を維持し、判断力のある人材を育成する方法。" },
              { num: "08", title: "倫理と専門性の限界", desc: "顧客とビジネスを守るための境界線と禁止事項の定義。" },
              { num: "09", title: "既存サービスとの融合", desc: "サプリメント、エステ、トレーニング等との組み合わせ方。" },
              { num: "10", title: "今後の展開オプション", desc: "修了後の拡張と、メカニズムを進化させるための選択肢。" }
            ].map((chapter, idx) => (
              <div key={idx} className="bg-stone-50 p-6 rounded-2xl border border-stone-100 hover:shadow-md transition-all">
                <div className="text-teal-500 font-bold text-xs mb-3 font-mono">{chapter.num}</div>
                <h4 className="text-sm font-bold text-stone-900 mb-2 font-serif-jp min-h-[40px]">{chapter.title}</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                  {chapter.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Step Flow Section */}
      <section className="py-24 bg-stone-50">
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
              <div key={idx} className="flex-1 bg-white p-8 rounded-3xl shadow-sm relative">
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

      {/* 7. Case Study Section */}
      <section className="py-24 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 font-serif-jp">導入推奨施設</h2>
            <p className="text-stone-500 mt-4">専門家として、活躍の場は多岐にわたります</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "エステサロン", icon: Sparkles, desc: "外側からのアプローチに、生活習慣改善のサポートを融合させ、圧倒的な結果を提供。" },
              { title: "パーソナルジム", icon: Dumbbell, desc: "トレーニングに3ヶ月のダイエット診断・サポートを加え、食事管理の質を劇的に向上。" },
              { title: "整骨院・治療院", icon: Stethoscope, desc: "体のケアと並行して、食事や生活スタイルの見直しを提案し、根本的な健康を支援。" }
            ].map((item, idx) => (
              <div key={idx} className="group overflow-hidden rounded-3xl bg-stone-50 border border-stone-200 hover:border-teal-200 transition-all shadow-sm">
                <div className="h-48 bg-stone-200 relative">
                   <div className="absolute inset-0 bg-stone-800/40 group-hover:bg-teal-600/20 transition-colors duration-500"></div>
                   <div className="absolute inset-0 flex items-center justify-center text-white">
                      <item.icon size={48} strokeWidth={1} />
                   </div>
                </div>
                <div className="p-8">
                   <h4 className="text-xl font-bold text-stone-900 mb-3 font-serif-jp">{item.title}</h4>
                   <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 bg-stone-50">
        <div className="w-[92%] max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 font-serif-jp">よくあるご質問</h2>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "どのような指導法を学ぶのですか？", 
                a: "単なるアドバイスではなく「行動変容療法」を用いた体系的なサポートです。どこを調整すれば体が自然に変わるかを特定し、習慣を書き換える手法を学びます。" 
              },
              { 
                q: "現在のサービスやサプリメントと併用できますか？", 
                a: "はい。サプリメントやトレーニングは「サポート要素」として捉えます。本システムはそれらの必要性を論理的に裏付け、顧客の納得感を高める役割を果たします。" 
              },
              { 
                q: "全スタッフが認定を受ける必要がありますか？", 
                a: "いいえ。認定は「施設」に対して行われます。ただし、品質維持のために運用の中心となる責任者の方は基準を深く理解していることが求められます。" 
              },
              { 
                q: "オーナーが必ず受講しなければなりませんか？", 
                a: "はい、オーナーまたは事業の責任者の方が受講してください。本コースの焦点は、サービスの「管理とデザイン」にあります。" 
              },
              { 
                q: "受講料はいくらですか？", 
                a: "ビジネスモデルに最適化された提案を行うため、個別相談会にて詳細を説明しております。まずはお問い合わせください。" 
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-bold text-stone-800 pr-8">{faq.q}</span>
                  <ChevronDown size={20} className={`text-stone-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-50 pt-4 animate-in fade-in duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Authority Section */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="w-[92%] max-w-4xl mx-auto px-4">
          <div className="bg-stone-900 rounded-[3rem] p-10 md:p-16 text-white text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
             
             <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2 rounded-full border border-white/10">
                    <Target size={16} className="text-teal-400" />
                    <span className="text-xs font-bold tracking-widest uppercase">Important Notice</span>
                  </div>
                </div>
                
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

      {/* 10. Final CTA */}
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