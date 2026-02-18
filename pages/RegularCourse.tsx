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
  Scale
} from 'lucide-react';

export const RegularCourse: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Strategic Hero Section */}
      <section className="relative pt-24 pb-36 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_#3b82f6_0%,_transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_#10b981_0%,_transparent_50%)]"></div>
        </div>
        
        <div className="w-[92%] max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-emerald-400 font-bold tracking-[0.4em] text-xs uppercase mb-8 border-l-2 border-emerald-500 pl-4">
              L01: Basic Foundation & Practice
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-serif-jp">
              その知識で、<br />
              <span className="text-blue-400">「体」と「未来」をデザインする。</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium max-w-3xl">
              一生モノの健康習慣を手に入れる。レギュラーコースでは、科学的な「知識の習得」か、専任サポートによる「劇的な体質改善」か、あなたの目的に合わせて選べます。
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="xl" variant="teal" onClick={() => {
                const element = document.getElementById('offer-comparison');
                element?.scrollIntoView({ behavior: 'smooth' });
              }} className="shadow-2xl shadow-emerald-500/20">
                プランを比較して選ぶ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Offer Comparison - THE KEY SECTION */}
      <section id="offer-comparison" className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif-jp">受講スタイルを選択してください</h2>
            <p className="text-stone-500 text-lg font-medium">知識を武器にする「学習」か、結果までコミットする「実践」か。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Option 1: Study Only */}
            <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-stone-200 shadow-sm flex flex-col hover:border-emerald-100 transition-colors">
               <div className="mb-10">
                  <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center text-stone-400 mb-6">
                     <GraduationCap size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 font-serif-jp mb-2">レギュラーコース（学習版）</h3>
                  <p className="text-stone-500 font-bold tracking-widest text-xs uppercase">Certification Only</p>
               </div>
               
               <p className="text-slate-600 leading-loose mb-10 font-medium">
                  自身の教養として、あるいは将来の指導者としての基礎を築きたい方向け。最新の栄養学とダイエット理論を体系的に学び、資格取得を目指します。
               </p>

               <div className="space-y-4 mb-12 flex-grow">
                  {[
                    { text: "全14章の講義アクセス", included: true },
                    { text: "デジタルテキスト教材", included: true },
                    { text: "ダイエットマスター認定資格（1種類）", included: true },
                    { text: "無制限の質問対応(1年間)", included: true },
                    { text: "3ヶ月の減量実践サポート", included: false },
                    { text: "初回ダイエット診断", included: false }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 text-sm font-bold ${item.included ? 'text-slate-700' : 'text-slate-300'}`}>
                       {item.included ? <Check className="text-emerald-500" size={18} /> : <X size={18} />}
                       {item.text}
                    </div>
                  ))}
               </div>

               <div className="pt-8 border-t border-stone-50">
                  <div className="text-3xl font-bold text-slate-900 mb-6 font-serif-jp">¥59,800 <span className="text-sm font-normal text-stone-400">円(税込)</span></div>
                  <Button fullWidth size="lg" variant="outline" onClick={() => navigate('/checkout?courseId=regular')}>学習コースを申し込む</Button>
               </div>
            </div>

            {/* Option 2: Master Program (Support) */}
            <div className="relative group overflow-hidden bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl flex flex-col border border-emerald-500/30">
               <div className="absolute top-0 right-0 p-8 text-emerald-500/10 pointer-events-none">
                  <Sparkles size={160} />
               </div>
               
               <div className="mb-10 relative z-10">
                  <div className="inline-block bg-emerald-500 text-slate-900 text-[10px] font-black px-4 py-1 rounded-full mb-6 uppercase tracking-widest">
                     Results Committed
                  </div>
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 border border-emerald-500/20">
                     <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-white font-serif-jp mb-2">ダイエットマスター<br />プログラム（実践版）</h3>
                  <p className="text-emerald-400/60 font-bold tracking-widest text-xs uppercase">Cert + 3 Months Support</p>
               </div>
               
               <p className="text-slate-400 leading-loose mb-10 font-medium relative z-10">
                  知識を得るだけでなく、実際に体を変えたい方向け。3ヶ月の専任サポートにより、確実に理想の体へと導きます。<span className="text-emerald-400">※受講前に専門のダイエット診断が必要です。</span>
               </p>

               <div className="space-y-4 mb-12 flex-grow relative z-10">
                  {[
                    { text: "全14章の講義アクセス", included: true },
                    { text: "認定資格(レギュラーレベル)", included: true },
                    { text: "3ヶ月の専任講師サポート", included: true },
                    { text: "週次の個別フィードバック", included: true },
                    { text: "初回ダイエット診断による目標設計", included: true },
                    { text: "ライフスタイル個別設計図", included: true }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-emerald-100/90">
                       <CheckCircle2 className="text-emerald-500" size={18} />
                       {item.text}
                    </div>
                  ))}
               </div>

               <div className="pt-8 border-t border-white/10 relative z-10">
                  <div className="text-3xl font-bold text-white mb-6 font-serif-jp">¥79,800 <span className="text-sm font-normal text-slate-500">円(税込)</span></div>
                  <Button fullWidth size="lg" variant="orange" className="bg-emerald-500 text-slate-900 hover:bg-emerald-400 border-none h-14" onClick={() => navigate('/calculator')}>診断を受けて開始する</Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section about Diagnosis */}
      <section className="py-20 bg-white">
          <div className="w-[92%] max-w-[800px] mx-auto text-center">
              <div className="bg-orange-50 p-10 rounded-[2.5rem] border border-orange-100">
                  <div className="flex justify-center mb-6">
                      <Scale className="text-[#FF8C6B]" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-800 font-serif-jp mb-4">なぜ実践版には「診断」が必要なのか？</h3>
                  <p className="text-stone-600 leading-loose text-sm font-medium">
                      私たちの目標は、あなたに無理な減量をさせることではありません。あなたの現在のBMI、基礎代謝、目標期間を科学的に分析し、「リバウンドしない、健康的な減量幅」を事前に確定させるためです。診断結果に基づいた個別プランのみが、本物の成功を生み出します。
                  </p>
              </div>
          </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
             <span className="text-blue-600 font-bold tracking-[0.4em] text-xs uppercase mb-6 block">Foundation & Science</span>
             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 leading-tight font-serif-jp">
               「我慢」を「理解」へ。<br />
               <span className="text-emerald-600">それが成功の唯一の鍵。</span>
             </h2>
             <div className="space-y-8">
                <p className="text-slate-600 text-lg leading-loose font-medium">
                  世の中には溢れるほどの「手法」があります。しかし、なぜその手法が必要なのか、あなたの体に何が起きているのかを理解せずに始めれば、それは単なるギャンブルです。
                </p>
                <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
                   <p className="text-lg font-bold font-serif-jp italic leading-relaxed relative z-10">
                     「レギュラーコースは、あなたの体という高度な精密機器の、正しい操作マニュアル（説明書）を手に入れる場所です。」
                   </p>
                </div>
             </div>
          </div>
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
                <div className="bg-white p-8 rounded-3xl border border-stone-200 text-center">
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
      </section>

      {/* CTA Final */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12 leading-tight font-serif-jp">
            あなたの「本気」を、<br /><span className="text-emerald-600">「確信」に変える準備はいいですか？</span>
          </h2>
          <Button 
            onClick={() => navigate('/pricing')}
            size="xl"
            variant="orange"
            className="px-20 h-18 text-xl shadow-2xl shadow-orange-200"
          >
            自分に最適なプランを選ぶ
          </Button>
        </div>
      </section>

    </div>
  );
};