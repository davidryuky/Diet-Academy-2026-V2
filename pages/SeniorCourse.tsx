import React from 'react';
import { Button } from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Brain, 
  ArrowRight,
  Trophy,
  Star,
  CheckCircle2,
  Lightbulb,
  MessageSquare,
  Lock
} from 'lucide-react';

export const SeniorCourse: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* Strategic Hero Section */}
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
              <span className="text-amber-500">信頼されるリーダーとなれ。</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed font-medium max-w-3xl">
              シニアコースは、知識を「リーダーシップ」へと昇華させます。危機管理、心理掌握、そして圧倒的な指導力を手に入れるエリートのためのプログラム。
            </p>
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mb-12 flex items-center gap-4 text-amber-400 font-bold">
                <Lock size={20} />
                <span>受講条件：レギュラーコース(L01)の修了または同時申し込みが必要です。</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate('/pricing')}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-amber-900/40 transition-all flex items-center justify-center gap-3 group"
              >
                指導者ライセンスを取得する
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Proof Section */}
      <section className="py-20 bg-amber-500">
         <div className="w-[92%] max-w-[1200px] mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
               {[
                 { label: "指導者認定数", value: "2,500", suffix: "名+", icon: Trophy },
                 { label: "平均顧客継続率", value: "85", suffix: "%", icon: TrendingUp },
                 { label: "指導単価上昇率", value: "140", suffix: "%", icon: Star },
                 { label: "提携専門職", value: "80", suffix: "名", icon: Users }
               ].map((stat, i) => (
                 <div key={i} className="text-center group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                       <stat.icon size={24} />
                    </div>
                    <div className="text-4xl font-black text-white font-serif-jp">{stat.value}<span className="text-lg ml-1">{stat.suffix}</span></div>
                    <div className="text-[10px] text-white/70 font-bold uppercase tracking-widest mt-2">{stat.label}</div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Leadership Skills Grid */}
      <section className="py-32 bg-stone-50">
        <div className="w-[92%] max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif-jp">シニアが習得する「4つのプロスキル」</h2>
            <p className="text-stone-500 font-medium">知識をどう「結果」に変換するか。その実戦的手法を網羅します。</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "カウンセリング心理学", desc: "クライアントの深層心理にある「痩せない理由」を言語化し、マインドから変革させる対話術。", icon: MessageSquare },
              { title: "危機管理・リスクヘッジ", desc: "停滞期や体調不良など、不測の事態においても科学的根拠に基づき安全に誘導する能力。", icon: ShieldCheck },
              { title: "パーソナル献立設計", desc: "個々の体質・ライフスタイルに合わせた、再現性の高いオーダーメイドの栄養計画作成技術。", icon: Lightbulb },
              { title: "モチベーション工学", desc: "脳科学に基づいた報酬系のコントロール。挫折させないためのフォローアップ・システムの運用。", icon: Brain }
            ].map((skill, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <skill.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-stone-800 mb-4 font-serif-jp leading-tight">{skill.title}</h4>
                <p className="text-stone-500 text-xs leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
          <div className="flex items-center justify-center gap-4 text-stone-400 font-bold text-xs uppercase tracking-widest mt-8">
            <CheckCircle2 size={16} className="text-amber-500" /> Wライセンス付与
            <CheckCircle2 size={16} className="text-amber-500" /> 生涯質問サポート
          </div>
        </div>
      </section>

    </div>
  );
};