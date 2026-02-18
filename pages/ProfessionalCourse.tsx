import React from 'react';
import { Button } from '../components/common/Button';
import { 
  ShieldCheck, 
  ArrowRight, 
  LineChart,
  Layout,
  ClipboardCheck,
  Brain,
  CalendarRange,
  DollarSign,
  Building,
  Settings,
  CheckCircle2,
  TrendingUp,
  Award,
  Layers
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProfessionalCourse: React.FC = () => {
  const navigate = useNavigate();

  const chapters = [
    { icon: LineChart, num: "01", title: "ビジネスモデルとしての指導", desc: "才能への依存からプロセスの運営へ。事業を資産化するための基盤構築。", textColor: "text-teal-600" },
    { icon: Layout, num: "02", title: "システムの全体設計", desc: "「ダイエット診断」を核とした集客・面談・サポートの統合システム。", textColor: "text-blue-600" },
    { icon: ClipboardCheck, num: "03", title: "面談の標準化技術", desc: "誰が担当しても一貫した結論に達するための標準プロトコル。", textColor: "text-cyan-600" },
    { icon: Brain, num: "04", title: "診断のエンジニアリング", desc: "直感を排除する診断ツール. 運営の安全性を高め、教育を加速させる。", textColor: "text-indigo-600" },
    { icon: CalendarRange, num: "05", title: "3ヶ月サポートの科学", desc: "習慣化の科学に基づく90日間の運用リズム。高い成功率を実現する。", textColor: "text-purple-600" }
  ];

  return (
    <div className="bg-white text-stone-800 font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[750px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80" 
            alt="Professional Environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="w-[92%] max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <span className="inline-block text-teal-400 font-bold tracking-[0.4em] text-xs uppercase mb-6 border-l-2 border-teal-500 pl-4">
              Business Owner Program
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-serif-jp">
              「技術」を<br />
              <span className="text-teal-400">「システム」へ昇華させる。</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-10 leading-relaxed font-medium">
              個人の才能に依存しない. どんなスタッフでも最高の結果を出せる、<br className="hidden md:block" />
              ダイエットビジネスの運営権を手に入れる唯一の道。
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button size="xl" variant="teal" onClick={() => navigate('/contact')} className="shadow-2xl shadow-teal-500/20 h-16 px-12">
                導入相談（無料）を予約
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2 Certifications Highlight */}
      <section className="py-20 bg-teal-600 text-white">
          <div className="w-[92%] max-w-[1200px] mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Layers size={48} />
                  </div>
                  <div>
                      <h2 className="text-2xl md:text-4xl font-bold font-serif-jp mb-2">プロコースは「2つの認定資格」を同時に授与します</h2>
                      <p className="text-teal-50 font-medium">マネジメント運営認定に加え、専門指導者としての最上位ライセンスを付与。組織としての信頼を保証します。</p>
                  </div>
              </div>
          </div>
      </section>

      {/* ROI / Business Impact Section */}
      <section className="py-32 bg-stone-900 text-white">
         <div className="w-[92%] max-w-[1200px] mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-bold font-serif-jp mb-6">導入による圧倒的なインパクト</h2>
               <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full"></div>
               <p className="text-stone-400 mt-8 font-medium">属人化を排除し、組織として強固な収益基盤を構築します。</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { title: "売上の安定化", icon: DollarSign, desc: "「ダイエット診断」からの成約フローを確立し、月々の収益予測を可能にします。成約率のバラつきを解消。" },
                 { title: "教育コストの削減", icon: Building, desc: "標準化された診断ツールにより、新人の教育期間を従来の50%以下に短縮。即戦力化を加速。" },
                 { title: "ブランド価値の向上", icon: Award, desc: "「日本ダイエットアカデミー協会認定施設」の称号が、地域での信頼を不動のものに。" }
               ].map((item, i) => (
                 <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 mb-8 group-hover:bg-teal-500 group-hover:text-white transition-all">
                       <item.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-bold mb-4 font-serif-jp">{item.title}</h4>
                    <p className="text-stone-400 leading-loose text-sm font-medium">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Scaling Methodology */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-teal-600 font-bold tracking-widest text-xs uppercase mb-6 block">Scale Up Strategy</span>
              <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-8 font-serif-jp leading-tight">
                「職人」から「経営者」へ。<br />
                自由な時間を手に入れるための自動化。
              </h3>
              <div className="space-y-6">
                {[
                  "プロトコルに基づいた『診断オートメーション』の導入",
                  "スタッフの習熟度に関わらず、一定の指導品質を維持",
                  "LTV（顧客生涯価値）を最大化する継続課金モデルの設計",
                  "リスクマネジメントを統合した運営マニュアルの提供"
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 text-stone-600 font-medium">
                    <CheckCircle2 size={20} className="text-teal-500 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
               <div className="bg-stone-50 p-10 rounded-[2.5rem] text-center border border-stone-100">
                  <Settings size={40} className="text-teal-600 mx-auto mb-4" />
                  <div className="text-xl font-bold font-serif-jp mb-1">効率化</div>
               </div>
               <div className="bg-teal-50 p-10 rounded-[2.5rem] text-center border border-teal-100">
                  <TrendingUp size={40} className="text-teal-600 mx-auto mb-4" />
                  <div className="text-xl font-bold font-serif-jp mb-1">成長</div>
               </div>
               <div className="bg-indigo-50 p-10 rounded-[2.5rem] text-center col-span-2 border border-indigo-100">
                  <ShieldCheck size={40} className="text-indigo-600 mx-auto mb-4" />
                  <div className="text-xl font-bold font-serif-jp mb-1">資産化</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[1600px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 font-serif-jp leading-tight mb-6">
              プロフェッショナル・マスター<br className="md:hidden" />
              <span className="text-teal-600">全10章の体系</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {chapters.map((chapter, idx) => (
              <div key={idx} className="group relative bg-white rounded-[2.5rem] p-10 border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full overflow-hidden">
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-stone-400 group-hover:${chapter.textColor} transition-all duration-500`}>
                    <chapter.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 mt-8 mb-4 font-serif-jp leading-snug">
                    {chapter.title}
                  </h4>
                  <p className="text-xs text-stone-500 leading-relaxed mb-6 font-medium">
                    {chapter.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="w-[92%] max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-12 font-serif-jp leading-tight">
            あなたの施設に、<br className="md:hidden" />プロフェッショナルの信頼を。
          </h2>
          <Button size="xl" variant="teal" className="px-16 h-18 text-xl shadow-2xl shadow-teal-100" onClick={() => navigate('/contact')}>
            導入相談（無料）を予約する
          </Button>
        </div>
      </section>

    </div>
  );
};