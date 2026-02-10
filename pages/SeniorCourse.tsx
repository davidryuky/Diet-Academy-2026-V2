import React from 'react';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router';
import { 
  Award, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Users, 
  Brain, 
  Target, 
  ArrowRight,
  Crown,
  ChevronRight,
  Activity,
  Flame,
  Scale,
  Heart
} from 'lucide-react';

export const SeniorCourse: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Header & Hero Section (Autoridade) */}
      <section className="relative pt-24 pb-40 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_center,_#f59e0b_0%,_transparent_70%)] opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1600&auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale"
            alt="Elite Leadership"
          />
        </div>
        
        <div className="w-[92%] max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-amber-500 font-bold tracking-[0.4em] text-xs md:text-sm uppercase mb-8 border-l-2 border-amber-500 pl-4">
              Advanced Coaching Certification
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 font-serif-jp">
              単なる指導者で終わるな。<br />
              <span className="text-amber-500 text-shadow-glow">信頼されるリーダー（導き手）となれ。</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium max-w-3xl">
              シニアコースは、技術的知識を「リーダーシップの知恵」へと昇華させます。危機管理、停滞期、そしてクライアントの心理を完全に掌握するプロフェッショナルへ。
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate('/pricing')}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-amber-900/40 transition-all flex items-center justify-center gap-3 group"
              >
                Diet Coaching Master を目指す
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" />
                    </div>
                  ))}
               </div>
               <p className="text-slate-400 text-sm font-bold">エキスパート 500名以上が認定取得済み</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O Problema (A Insegurança do Profissional) */}
      <section className="py-32 bg-stone-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
           <ShieldCheck size={400} />
        </div>
        
        <div className="w-[92%] max-w-[1000px] mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 font-serif-jp leading-tight">
              クライアントに発するその一言に、<br /><span className="text-amber-500">確固たる自信はありますか？</span>
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-12 opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-1 gap-12 max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 leading-loose text-center font-medium italic">
              「多くのプロフェッショナルが資格を積み上げますが、真実の瞬間に立ち往生してしまいます。」
            </p>
            
            <div className="space-y-8 mt-8">
               {[
                 { q: "クライアントの体重が停滞したとき、あなたは具体的な解決策を提示できますか？それとも単に「もっと頑張りましょう」と言ってしまいますか？", icon: TrendingUp },
                 { q: "ホルモンや遺伝子について質問されたとき、科学的根拠に基づいた揺るぎない回答を持っていますか？", icon: Brain },
                 { q: "クライアントの不安を受け止めきれず、彼らが途中で諦めていくのを感じたことはありませんか？", icon: Users }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                       <item.icon size={24} />
                    </div>
                    <p className="text-lg text-slate-200 font-medium leading-relaxed">{item.q}</p>
                 </div>
               ))}
            </div>
          </div>

          <div className="mt-20 text-center">
             <p className="text-2xl font-bold text-amber-500 font-serif-jp">
               技術的知識（レギュラー）は土台に過ぎません。<br />
               リーダーシップ（シニア）こそが、顧客を惹きつけ、成果を継続させる鍵です。
             </p>
          </div>
        </div>
      </section>

      {/* 3. A Solução (O Que é um Líder?) */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-10 font-serif-jp">
             エリート・トレーナーを定義するものとは何か？
          </h2>
          <p className="text-xl text-slate-500 mb-20 max-w-3xl mx-auto font-medium leading-relaxed">
            「Diet Coaching Master」とは、単に言葉巧みな人物でも、厳しい人物でもありません。<br className="hidden md:block" />
            それは、以下の3つの資質を備えた人物です。
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "冷静な対応力", desc: "クライアントがパニックに陥ったときでも、冷静に状況を分析し、安心感を与えられます。", icon: ShieldCheck },
              { title: "不変の判断軸", desc: "流行に左右されず、科学的根拠に基づいた一貫した評価基準を持っています。", icon: Crown },
              { title: "心身のバイオリズム", desc: "クライアントの体と心の「リズム」を読み解き、最適なタイミングで介入できます。", icon: Activity }
            ].map((item, i) => (
              <div key={i} className="group p-12 bg-stone-50 rounded-[3rem] border border-stone-100 hover:border-amber-200 transition-all duration-500 flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center text-amber-600 mb-10 shadow-xl shadow-amber-900/5 group-hover:-translate-y-2 transition-transform">
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-6 font-serif-jp">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-10 bg-slate-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="text-left">
                <div className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2">RESULTS & RETENTION</div>
                <h3 className="text-3xl font-bold font-serif-jp">クライアントは長く留まり、信頼は不動のものとなります。</h3>
             </div>
             <ChevronRight size={48} className="text-amber-500 hidden md:block" />
          </div>
        </div>
      </section>

      {/* 4. O Currículo (Dividido em Pilares de Liderança) */}
      <section className="py-32 bg-stone-50 overflow-hidden">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-amber-600 font-bold tracking-[0.4em] text-xs uppercase mb-6 block">Elite Curriculum</span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif-jp leading-tight">リーダーシップの4大柱</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Pilar 1 */}
            <div className="bg-white rounded-[2.5rem] p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 group-hover:scale-110 transition-transform">
                 <Crown size={120} />
              </div>
              <h3 className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-8 flex items-center gap-3">
                 <span className="w-6 h-px bg-amber-600"></span> Pillar 01
              </h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-8 font-serif-jp">リーダーの軸（マインドセット）</h4>
              <div className="space-y-8 relative z-10">
                <div>
                   <span className="text-[10px] font-bold text-slate-400 block mb-1">CHAPTER 01</span>
                   <div className="font-bold text-slate-800 text-lg mb-2">指導哲学の構築</div>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">疑問に直面した際、二度と言葉に詰まらないための独自の理論的バックボーンを構築します。</p>
                </div>
                <div>
                   <span className="text-[10px] font-bold text-slate-400 block mb-1">CHAPTER 10</span>
                   <div className="font-bold text-slate-800 text-lg mb-2">倫理とリスク管理</div>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">プロフェッショナルとして自分自身を守り、責任の範囲を明確に定義する方法。</p>
                </div>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="bg-white rounded-[2.5rem] p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 group-hover:scale-110 transition-transform">
                 <Flame size={120} />
              </div>
              <h3 className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-8 flex items-center gap-3">
                 <span className="w-6 h-px bg-amber-600"></span> Pillar 02
              </h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-8 font-serif-jp">クライシス・マネジメント</h4>
              <div className="space-y-8 relative z-10">
                <div>
                   <span className="text-[10px] font-bold text-slate-400 block mb-1">CHAPTER 03</span>
                   <div className="font-bold text-slate-800 text-lg mb-2">リバウンドのメカニズム（ヨヨ効果）</div>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">なぜリバウンドが起きるのかを科学的に予見し、未然に防ぐための戦略。</p>
                </div>
                <div>
                   <span className="text-[10px] font-bold text-slate-400 block mb-1">CHAPTER 04</span>
                   <div className="font-bold text-slate-800 text-lg mb-2">停滞期（プラトー）の克服</div>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">ダイエットで最も重要な局面：体重が落ち止まった際、焦りを戦略に変える具体的なアクションプラン。</p>
                </div>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="bg-white rounded-[2.5rem] p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 group-hover:scale-110 transition-transform">
                 <Brain size={120} />
              </div>
              <h3 className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-8 flex items-center gap-3">
                 <span className="w-6 h-px bg-amber-600"></span> Pillar 03
              </h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-8 font-serif-jp">高度な生体情報の読解</h4>
              <div className="space-y-8 relative z-10">
                <div>
                   <span className="text-[10px] font-bold text-slate-400 block mb-1">CHAPTER 05</span>
                   <div className="font-bold text-slate-800 text-lg mb-2">月経周期とプランニング</div>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">女性特有のホルモン変動に合わせ、ダイエット計画をパーソナライズする方法。</p>
                </div>
                <div className="grid grid-cols-2 gap-6 border-t border-slate-100 pt-6">
                   <div>
                      <div className="font-bold text-slate-800 text-sm mb-1">自律神経系</div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">ストレス、休息、脂肪燃焼の相関関係。</p>
                   </div>
                   <div>
                      <div className="font-bold text-slate-800 text-sm mb-1">遺伝と個性</div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">変えられるものと、受け入れるべき個性の境界線。</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="bg-white rounded-[2.5rem] p-12 border border-slate-200 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-amber-600 group-hover:scale-110 transition-transform">
                 <TrendingUp size={120} />
              </div>
              <h3 className="text-amber-600 font-bold text-sm tracking-widest uppercase mb-8 flex items-center gap-3">
                 <span className="w-6 h-px bg-amber-600"></span> Pillar 04
              </h3>
              <h4 className="text-2xl font-bold text-slate-900 mb-8 font-serif-jp">長期的戦略・ライフステージ</h4>
              <div className="space-y-8 relative z-10">
                <div>
                   <span className="text-[10px] font-bold text-slate-400 block mb-1">CHAPTER 02</span>
                   <div className="font-bold text-slate-800 text-lg mb-2">エクササイズ・セラピー</div>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">脱落者を生まない、継続率を最大化させるためのトレーニング設計術。</p>
                </div>
                <div>
                   <span className="text-[10px] font-bold text-slate-400 block mb-1">CHAPTER 08 & 09</span>
                   <div className="font-bold text-slate-800 text-lg mb-2">世代別戦略とメタボリックシンドローム</div>
                   <p className="text-sm text-slate-500 leading-relaxed font-medium">20代の若者から70代の高齢者まで。健康寿命を見据えた臨床的な視点による指導。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Para Quem é Este Curso? */}
      <section className="py-32 bg-white">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 font-serif-jp">受講対象となる方</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "プロを目指す卒業生", desc: "レギュラーコースを修了し、プロとして活動を始めたい方。" },
              { title: "現役トレーナー・栄養士", desc: "顧客の継続率（リテンション）を高め、単価を上げたい専門家。" },
              { title: "高単価メンター", desc: "ダイエットの枠を超え、ライフスタイル全般を導く高単価なメンタリングを目指す方。" }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-stone-50 border border-stone-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                   <Target size={24} />
                </div>
                <h4 className="font-bold text-slate-900 mb-4 text-xl font-serif-jp">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. A Certificação */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="w-[92%] max-w-[1000px] mx-auto">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                 <div className="inline-block p-4 bg-amber-500 rounded-3xl mb-8 shadow-2xl shadow-amber-500/20">
                    <Award size={80} className="text-white" strokeWidth={1} />
                 </div>
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif-jp leading-tight">
                    Diet Coaching Master<br />認定ライセンス
                 </h2>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                    この称号は、あなたが単なる「情報の伝達者」ではなく、健康の「戦略家」であることを証明します。業界で一目置かれる信頼の証。
                 </p>
                 <ul className="space-y-4">
                    {["高度なコーチング心理学の証明", "危機管理スキルの公認", "戦略的ダイエット設計の専門性"].map((t, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-200 font-bold">
                         <ShieldCheck className="text-amber-500" size={20} /> {t}
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="lg:w-1/2">
                 <div className="relative">
                    <div className="absolute -inset-10 bg-amber-500/10 rounded-full blur-[100px]"></div>
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] text-center">
                       <p className="text-amber-500 text-sm font-black uppercase tracking-[0.4em] mb-4">Official Seal</p>
                       <div className="w-48 h-48 mx-auto border-4 border-double border-amber-500/40 rounded-full flex items-center justify-center mb-8">
                          <Crown size={80} className="text-amber-500 opacity-80" />
                       </div>
                       <p className="text-white font-serif-jp text-lg italic">
                          "Since I attained my Senior certification, my student retention rate has doubled."
                       </p>
                       <p className="text-slate-500 text-xs mt-4 font-bold tracking-widest uppercase">— Placeholer Testimonial</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 7. Footer & CTA Final */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight font-serif-jp">
            クライアントの自信は、<br /><span className="text-amber-600">あなたの自信に依存しています。</span>
          </h2>
          <button 
            onClick={() => navigate('/pricing')}
            className="bg-slate-900 hover:bg-black text-white px-16 py-6 rounded-2xl font-bold text-2xl shadow-2xl transition-all mb-8 hover:-translate-y-1"
          >
            シニアコースへの入学を申し込む
          </button>
          <div className="flex items-center justify-center gap-2 text-stone-400 font-bold text-sm tracking-widest">
            <ShieldCheck size={16} className="text-amber-500" />
            PROFESSIONAL GRADE CERTIFICATION
          </div>
        </div>
      </section>

    </div>
  );
};