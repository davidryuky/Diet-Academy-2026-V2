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
  Layers,
  UserPlus,
  Store,
  HelpCircle,
  ArrowDownRight,
  Users,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ProfessionalCourse: React.FC = () => {
  const navigate = useNavigate();

  const chapters = [
    { id: "01", icon: LineChart, title: "ビジネスモデルとしての指導", desc: "才能への依存からプロセスの運営へ。事業を資産化するための基盤構築。", textColor: "text-teal-600", bgColor: "bg-teal-50" },
    { id: "02", icon: Layout, title: "システムの全体設計", desc: "「ダイエット診断」を核とした集客・面談・サポートの統合システム。", textColor: "text-blue-600", bgColor: "bg-blue-50" },
    { id: "03", icon: ClipboardCheck, title: "面談の標準化技術", desc: "誰が担当しても一貫した結論に達するための標準プロトコル。", textColor: "text-cyan-600", bgColor: "bg-cyan-50" },
    { id: "04", icon: Brain, title: "診断のエンジニアリング", desc: "直感を排除する診断ツール. 運営の安全性を高め、教育を加速させる。", textColor: "text-indigo-600", bgColor: "bg-indigo-50" },
    { id: "05", icon: CalendarRange, title: "3ヶ月サポートの科学", desc: "習慣化の科学に基づく90日間の運用リズム。高い成功率を実現する。", textColor: "text-purple-600", bgColor: "bg-purple-50" },
    { id: "06", icon: Building, title: "施設認定と運営管理", desc: "個人の信頼から組織の信頼へ。一貫した基準を維持するための管理体制。", textColor: "text-emerald-600", bgColor: "bg-emerald-50" },
    { id: "07", icon: Users, title: "チームとトレーニング", desc: "品質を落とさずにチームを拡大する。安全な権限委譲と教育の仕組み。", textColor: "text-amber-600", bgColor: "bg-amber-50" },
    { id: "08", icon: ShieldCheck, title: "倫理と専門的限界", desc: "「NO」と言える力。法的安全と高い信頼を築くための専門家としての矜持。", textColor: "text-rose-600", bgColor: "bg-rose-50" },
    { id: "09", icon: Settings, title: "運営オートメーション", desc: "集客から診断、アフターフォローまでを自動化し、経営者の時間を創出する。", textColor: "text-stone-500", bgColor: "bg-stone-50" },
    { id: "10", icon: Clock, title: "将来の展望とアップデート", desc: "変わり続ける栄養学への対応と、コミュニティを活用した継続的な事業成長。", textColor: "text-stone-500", bgColor: "bg-stone-50" }
  ];

  // Dividir capítulos em duas listas de 5
  const firstHalf = chapters.slice(0, 5);
  const secondHalf = chapters.slice(5, 10);

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
          <div className="max-w-4xl animate-in fade-in slide-in-from-left-10 duration-1000">
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
              <Button size="xl" variant="teal" onClick={() => navigate('/contact')} className="shadow-2xl shadow-teal-500/40 h-16 px-12 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles size={20} className="animate-pulse" />
                  「成功のシステム」を導入し、収益を最大化する
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Decision Guide: Which path? */}
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 font-serif-jp mb-4">どのコースから始めるべきか？</h2>
            <p className="text-stone-500 font-medium">目的と現在の状況に合わせて, 最適なロードマップを提示します。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[2.5rem] border border-stone-200 shadow-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-6 opacity-5">
                  <UserPlus size={100} />
               </div>
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#FF8C6B] mb-6 flex items-center gap-2 font-serif-jp">
                    <CheckCircle2 size={24} /> 目的：自分や周囲をきれいにしたい
                  </h3>
                  <div className="space-y-4">
                    <p className="text-sm text-stone-600 leading-loose">
                      「まずは自分が痩せたい」「家族の健康を守りたい」という方は、ビジネス運営のL03ではなく、**L01（レギュラーコース）**からスタートしてください。
                    </p>
                    <div className="bg-orange-50 p-4 rounded-xl">
                       <span className="text-[10px] font-black text-orange-400 uppercase block mb-1">Recommended Path</span>
                       <div className="font-bold text-stone-800 text-sm">L01 レギュラー or マスタープログラム</div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-stone-900 p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden text-white">
               <div className="absolute top-0 right-0 p-6 opacity-10">
                  <TrendingUp size={100} />
               </div>
               <div className="relative z-10">
                  <h3 className="text-xl font-bold text-teal-400 mb-6 flex items-center gap-2 font-serif-jp">
                    <TrendingUp size={24} /> 目的：収益 e キャリアの拡大
                  </h3>
                  <div className="space-y-4">
                    <p className="text-sm text-stone-400 leading-loose">
                      「プロとして独立したい」「今の事業の売上を倍増させたい」という方は、**L02（シニア）およびL03（プロ）**が必須となります。
                    </p>
                    <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                       <span className="text-[10px] font-black text-teal-400 uppercase block mb-1">Recommended Path</span>
                       <div className="font-bold text-white text-sm">L02 シニア ＋ L03 プロフェッショナル</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Lists - MINIMALIST LIST DESIGN */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-teal-600 font-bold tracking-[0.3em] text-xs uppercase block mb-4">Curriculum Overview</span>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 font-serif-jp leading-tight">
              プロフェッショナル・マスター全10章の体系
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-4">
            {/* First List: Chapters 01-05 */}
            <div className="space-y-4">
              {firstHalf.map((chapter) => (
                <div 
                  key={chapter.id}
                  onClick={() => navigate(`/courses/professional/chapter/${chapter.id}`)}
                  className="group flex items-center gap-6 p-5 rounded-2xl hover:bg-stone-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-stone-100"
                >
                  <div className={`w-14 h-14 rounded-xl ${chapter.bgColor} flex items-center justify-center ${chapter.textColor} flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm`}>
                    <chapter.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-black text-stone-300 tracking-widest uppercase">Chapter {chapter.id}</span>
                      <div className="h-px flex-grow bg-stone-100"></div>
                    </div>
                    <h3 className="text-lg font-bold text-stone-800 font-serif-jp group-hover:text-teal-600 transition-colors">
                      {chapter.title}
                    </h3>
                  </div>
                  <ChevronRight size={18} className="text-stone-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>

            {/* Second List: Chapters 06-10 */}
            <div className="space-y-4">
              {secondHalf.map((chapter) => (
                <div 
                  key={chapter.id}
                  onClick={() => navigate(`/courses/professional/chapter/${chapter.id}`)}
                  className="group flex items-center gap-6 p-5 rounded-2xl hover:bg-stone-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-stone-100"
                >
                  <div className={`w-14 h-14 rounded-xl ${chapter.bgColor} flex items-center justify-center ${chapter.textColor} flex-shrink-0 transition-transform group-hover:scale-110 shadow-sm`}>
                    <chapter.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-black text-stone-300 tracking-widest uppercase">Chapter {chapter.id}</span>
                      <div className="h-px flex-grow bg-stone-100"></div>
                    </div>
                    <h3 className="text-lg font-bold text-stone-800 font-serif-jp group-hover:text-teal-600 transition-colors">
                      {chapter.title}
                    </h3>
                  </div>
                  <ChevronRight size={18} className="text-stone-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-stone-400 text-sm font-medium">※各章をクリックすると、詳細な学習内容をご確認いただけます。</p>
          </div>
        </div>
      </section>

      {/* ROI / Business Impact Section */}
      <section className="py-32 bg-stone-900 text-white">
         <div className="w-[92%] max-w-[1200px] mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-bold font-serif-jp mb-6">導入による圧倒的なインパクト</h2>
               <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full"></div>
               <p className="text-stone-400 mt-8 font-medium">属人化を排除し, 組織として強固な収益基盤を構築します。</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { title: "売上の安定化", icon: DollarSign, desc: "「ダイエット診断」からの成約フローを確立し、月々の収益予測を可能にします。成約率のバラつきを解消。" },
                 { title: "教育コストの削減", icon: Building, desc: "標準化された診断ツールにより、新人の教育期間を従来の50%以下に短縮。即戦力化を加速。" },
                 { title: "ブランド価値の向上", icon: Award, desc: "「日本ダイエットアカデミー協会認定施設」の称号が, 地域での信頼を不動のものに。" }
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

      {/* Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="w-[92%] max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-12 font-serif-jp leading-tight">
            あなたの施設に、<br className="md:hidden" />プロフェッショナルの信頼を。
          </h2>
          <Button size="xl" variant="teal" className="px-16 h-18 text-xl shadow-2xl shadow-teal-500/20 group relative overflow-hidden" onClick={() => navigate('/contact')}>
             <span className="relative z-10 flex items-center gap-3">
                <Sparkles size={24} className="animate-pulse" />
                【無料】あなたの施設を「稼げる仕組み」に変える相談をする
             </span>
             <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
          </Button>
          <p className="mt-8 text-stone-400 font-medium text-sm">
             ※導入相談は完全無料です。現在のビジネスの課題をヒアリングし、最適なシステムをご提案します。
          </p>
        </div>
      </section>

    </div>
  );
};