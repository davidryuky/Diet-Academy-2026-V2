
import React from 'react';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  Dna,
  HeartPulse,
  Target,
  ArrowRight,
  Brain,
  ShieldCheck,
  Award,
  X,
  Sparkles
} from 'lucide-react';

export const RegularCourse: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      
      {/* 1. Hero Section (Topo) */}
      <section className="relative pt-24 pb-40 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#3b82f6_0%,_transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_#10b981_0%,_transparent_50%)]"></div>
        </div>

        <div className="w-[92%] max-w-[1200px] mx-auto relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block text-emerald-400 font-bold tracking-[0.4em] text-xs uppercase mb-8 border-l-2 border-r-2 border-emerald-500 px-6">
              Professional Qualification & Personal Results
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 font-serif-jp">
              プロとしての資格と個人の成果。<br />
              <span className="text-blue-400">痩せる科学をマスターする。</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium">
              ダイエットの学術理論を深く学ぶプログラム。意志の力に頼るのをやめ、体のメカニズムを理解することから始めましょう。
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button size="xl" variant="teal" onClick={() => {
                const element = document.getElementById('pricing');
                element?.scrollIntoView({ behavior: 'smooth' });
              }} className="px-12 h-20 text-xl shadow-2xl shadow-emerald-500/20 w-full md:w-auto">
                <span className="flex items-center gap-3">
                  コース詳細を見る
                  <ArrowRight size={22} />
                </span>
              </Button>
              <p className="text-emerald-400 font-bold text-sm flex items-center gap-2">
                <Award size={18} />
                修了証：Diet Master（ダイエット実務資格）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O Problema (A Dor do Público) */}
      <section className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif-jp leading-tight">
              なぜ、あなたは<br className="md:hidden" />体重との戦いを続けているのか？
            </h2>
          </div>
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-stone-100">
            <p className="text-stone-600 text-lg leading-relaxed font-medium mb-10 text-center">
              体重の増減は「運」や単なる「意志の力」の問題ではありません。あなたの身体の変化の裏には、必ず生物学的、栄養学的、そして行動学的なメカニズムが存在しています。
            </p>
            <div className="space-y-6 mb-12">
              <div className="flex gap-4 items-start bg-rose-50 p-6 rounded-2xl">
                <div className="bg-rose-100 text-rose-500 p-2 rounded-full flex-shrink-0 mt-1"><X size={16} /></div>
                <p className="text-stone-700 font-bold">流行りのダイエットに手を出しては、リバウンドに苦しんでいませんか？</p>
              </div>
              <div className="flex gap-4 items-start bg-rose-50 p-6 rounded-2xl">
                <div className="bg-rose-100 text-rose-500 p-2 rounded-full flex-shrink-0 mt-1"><X size={16} /></div>
                <p className="text-stone-700 font-bold">ものすごく努力しているのに、結果が長続きしないと感じていませんか？</p>
              </div>
              <div className="flex gap-4 items-start bg-rose-50 p-6 rounded-2xl">
                <div className="bg-rose-100 text-rose-500 p-2 rounded-full flex-shrink-0 mt-1"><X size={16} /></div>
                <p className="text-stone-700 font-bold">インターネット上の矛盾したダイエット情報に混乱していませんか？</p>
              </div>
            </div>
            <div className="border-t border-stone-100 pt-8 text-center">
              <p className="text-emerald-700 font-bold text-lg">
                レギュラーコースは、あなたをこの悪循環から抜け出させるために設計されました。ご自身の健康管理、または大切な人を守るための、強固で安全な理論的基盤を提供します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A Solução (O Que é o Curso Regular) */}
      <section className="py-32 bg-white text-center">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <span className="text-blue-500 font-bold tracking-[0.4em] text-xs uppercase mb-4 block">The Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif-jp mb-6">
            これは単なるダイエットではありません。<br />「教育」です。
          </h2>
          <p className="text-stone-500 text-lg font-medium mb-20 max-w-3xl mx-auto">
            レギュラーコースは全ての土台となります。ここでは、ダイエットを魔法ではなく「科学」として扱います。
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 hover:border-blue-200 transition-colors">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-sm">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4 font-serif-jp">1. 理論的理解</h3>
              <p className="text-stone-500 leading-relaxed text-sm">「栄養テロリズム」に陥ることなく、代謝、エネルギー、栄養の論理を学びます。</p>
            </div>
            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6 shadow-sm">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4 font-serif-jp">2. 絶対的な安全性</h3>
              <p className="text-stone-500 leading-relaxed text-sm">危険なダイエット法と、長期的な健康戦略の違いを明確に見分ける目を養います。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O Currículo (Conteúdo Programático) */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="w-[92%] max-w-[1000px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-serif-jp mb-6">カリキュラム</h2>
            <p className="text-stone-400 font-medium">一生使える知識を、体系的に学ぶ全14章。</p>
          </div>

          <div className="space-y-12">

            {/* Módulo 1 */}
            <div className="bg-stone-800 rounded-[2.5rem] border border-stone-700 overflow-hidden">
              <div className="bg-stone-800 p-8 flex items-center gap-6 border-b border-stone-700">
                <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Dna size={32} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-1">Module 1</h3>
                  <h4 className="text-2xl font-bold font-serif-jp">身体の科学（メカニズムの理解）</h4>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex gap-4">
                  <div className="text-stone-500 font-bold mt-1">Ch 1-2</div>
                  <div>
                    <h5 className="font-bold text-stone-200 mb-1">ダイエットの歴史と体重増減のメカニズム</h5>
                    <p className="text-sm text-stone-400">なぜ現代の多くのダイエット法は失敗に終わるのか？その根本原因を探ります。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-stone-500 font-bold mt-1">Ch 3-5</div>
                  <div>
                    <h5 className="font-bold text-stone-200 mb-1">代謝とエネルギー</h5>
                    <p className="text-sm text-stone-400">基礎代謝量とは何か？実際の消費カロリーの計算方法は？カロリーと栄養素に関する数学的な真実。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-stone-500 font-bold mt-1">Ch 6</div>
                  <div>
                    <h5 className="font-bold text-stone-200 mb-1">代謝と変化</h5>
                    <p className="text-sm text-stone-400">体重が減る時、体の中で何が起きているのか？生物学的なサインの読み解き方を学びます。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 2 */}
            <div className="bg-stone-800 rounded-[2.5rem] border border-stone-700 overflow-hidden">
              <div className="bg-stone-800 p-8 flex items-center gap-6 border-b border-stone-700">
                <div className="w-16 h-16 bg-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <HeartPulse size={32} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-rose-400 tracking-widest uppercase mb-1">Module 2</h3>
                  <h4 className="text-2xl font-bold font-serif-jp">健康とリスク（臨床的視点）</h4>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex gap-4">
                  <div className="text-stone-500 font-bold mt-1">Ch 7</div>
                  <div>
                    <h5 className="font-bold text-stone-200 mb-1">短期決戦の罠</h5>
                    <p className="text-sm text-stone-400">なぜ短期間での急激な減量が、将来の代謝を破壊してしまうのかを解明します。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-stone-500 font-bold mt-1">Ch 8-9</div>
                  <div>
                    <h5 className="font-bold text-stone-200 mb-1">肥満と生活習慣病</h5>
                    <p className="text-sm text-stone-400">BMIの理解、内臓脂肪と皮下脂肪の違い、そして肥満がもたらす健康への本当のリスクについて。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Módulo 3 */}
            <div className="bg-stone-800 rounded-[2.5rem] border border-stone-700 overflow-hidden">
              <div className="bg-stone-800 p-8 flex items-center gap-6 border-b border-stone-700">
                <div className="w-16 h-16 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Target size={32} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-orange-400 tracking-widest uppercase mb-1">Module 3</h3>
                  <h4 className="text-2xl font-bold font-serif-jp">戦略と行動（実践）</h4>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex gap-4">
                  <div className="text-stone-500 font-bold mt-1">Ch 10</div>
                  <div>
                    <h5 className="font-bold text-stone-200 mb-1">自己理解とモニタリング</h5>
                    <p className="text-sm text-stone-400">体重やサイズなどの「データ」を、どのようにして「戦略」へと変換するか。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-stone-500 font-bold mt-1">Ch 11-12</div>
                  <div>
                    <h5 className="font-bold text-stone-200 mb-1">肥満治療の原則</h5>
                    <p className="text-sm text-stone-400">安全で確実なダイエットプランの設計方法。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-stone-500 font-bold mt-1">Ch 13</div>
                  <div>
                    <h5 className="font-bold text-stone-200 mb-1">行動変容療法</h5>
                    <p className="text-sm text-stone-400">習慣の裏にある心理学。日々の「やる気・モチベーション」に依存せずに変化を起こす方法。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-stone-500 font-bold mt-1">Ch 14</div>
                  <div>
                    <h5 className="font-bold text-stone-200 mb-1">実践的栄養学</h5>
                    <p className="text-sm text-stone-400">理想論ではない、実際の忙しい生活サイクルに合わせた現実的な食事の組み立て方。</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Pricing */}
      <section id="pricing" className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif-jp leading-tight">
              一生使える知識と資格を手に入れる
            </h2>
            <p className="text-stone-600 text-lg">
              一生使えるダイエットの科学的知識を自ら学び、資格取得を目指すプランです。
            </p>
          </div>

          {/* Option 1: Study Edition */}
          <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-stone-200 shadow-sm flex flex-col hover:border-emerald-100 transition-colors">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-slate-900 font-serif-jp mb-2">レギュラーコース</h3>
              <p className="text-stone-500 font-bold tracking-widest text-xs uppercase">Self-Study</p>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
              全14章の講義を通じて、科学的なダイエット理論をマスターし、認定資格の取得を目指します。
            </p>

            <div className="pt-6 border-t border-stone-100 flex-grow flex flex-col justify-end">
              <div className="text-[10px] text-stone-400 font-bold mb-1 uppercase tracking-widest">Price</div>
              <div className="text-4xl font-bold text-slate-900 mb-2 font-serif-jp">¥66,000 <span className="text-sm font-normal text-stone-400">円(税込)</span></div>
              <p className="text-xs text-stone-500 mb-8 whitespace-pre-line leading-relaxed">
                ※全14章のカリキュラムと認定証「Diet Master」が含まれます。
              </p>
              <Button fullWidth size="lg" variant="outline" onClick={() => navigate('/checkout?courseId=regular-study')}>知識と資格を購入する</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Para Quem é Este Curso? & 7. Segurança e Ética */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-serif-jp">このコースは誰のためのものか？</h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-center bg-stone-50 p-4 rounded-xl border border-stone-100">
                <CheckCircle2 className="text-blue-500 flex-shrink-0" size={24} />
                <span className="text-stone-700 font-bold">決定的なダイエットを成功させ、その「理由」を深く理解したい方。</span>
              </li>
              <li className="flex gap-4 items-center bg-stone-50 p-4 rounded-xl border border-stone-100">
                <CheckCircle2 className="text-blue-500 flex-shrink-0" size={24} />
                <span className="text-stone-700 font-bold">終わりのない「過度な食事制限」のループからきっぱりと抜け出したい方。</span>
              </li>
              <li className="flex gap-4 items-center bg-stone-50 p-4 rounded-xl border border-stone-100">
                <CheckCircle2 className="text-blue-500 flex-shrink-0" size={24} />
                <span className="text-stone-700 font-bold">「Diet Master」の資格を取得し、ヘルスケアのキャリアの第一歩を踏み出したい方。</span>
              </li>
              <li className="flex gap-4 items-center bg-stone-50 p-4 rounded-xl border border-stone-100">
                <CheckCircle2 className="text-blue-500 flex-shrink-0" size={24} />
                <span className="text-stone-700 font-bold">家族や友人の健康管理を、安全かつ根拠を持ってサポートしたい方。</span>
              </li>
            </ul>
          </div>

          <div className="bg-stone-900 rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl">
            <div className="absolute top-0 right-0 p-8 text-stone-800/80 pointer-events-none">
              <ShieldCheck size={160} />
            </div>
            <div className="relative z-10">
              <span className="inline-block bg-rose-500 text-white text-[10px] font-black px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
                Important Notice
              </span>
              <h3 className="text-2xl font-bold mb-6 font-serif-jp">安全性と倫理について</h3>
              <p className="text-stone-300 mb-6 leading-relaxed text-sm">
                当プログラムは、表面的な美しさよりも<span className="text-rose-400 font-bold">【絶対的な安全性】</span>を最優先しています。
              </p>
              <ul className="space-y-4 text-sm text-stone-400">
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                  <p>極端な食事制限や健康を害する恐れのあるダイエット法は一切推奨しません。</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full flex-shrink-0"></div>
                  <p>臨床的な医学的介入が必要なリスクや摂食障害などが疑われる場合は、医療機関の受診を強く推奨します。</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Rodapé e CTA Final */}
      <section className="py-40 bg-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Sparkles size={400} className="text-emerald-500 absolute -top-20 -left-20" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight font-serif-jp">
            ダイエットを完全に支配するための<br /><span className="text-blue-400">あなたの旅が、ここから始まります。</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <Button
              onClick={() => {
                const element = document.getElementById('pricing');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="xl"
              variant="teal"
              className="px-16 h-20 text-xl shadow-2xl shadow-emerald-500/30"
            >
              受講プランを選択する
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
