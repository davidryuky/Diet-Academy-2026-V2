
import React from 'react';
import { Button } from '../components/common/Button';
import { Check, ShieldCheck, AlertCircle, Info, ArrowDown, Star, Rocket, ChevronRight, Zap } from 'lucide-react';
import { courses, bundles } from '../data/coursesData';
import { useNavigate } from 'react-router';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#FF8C6B] font-bold tracking-[0.3em] text-xs uppercase mb-6 block">Plan & Roadmap</span>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 font-serif-jp tracking-tight">
            目標に合わせた3つのステップ
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-stone-500 font-medium">
            基礎から応用、そして経営へ。段階的に学べるステップアップ方式を採用しています。<br />
            各コースは上位コースへの受講条件となっています。
          </p>
        </div>

        {/* Visual Roadmap / Prerequisites Info */}
        <div className="max-w-5xl mx-auto mb-24">
           <div className="bg-white rounded-[3rem] p-10 border border-stone-200 shadow-sm">
              <h3 className="text-xl font-bold text-stone-800 text-center mb-12 font-serif-jp flex items-center justify-center gap-3">
                 <Info size={20} className="text-stone-300" />
                 資格取得のロードマップ
              </h3>
              
              <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
                 {[
                   { step: "01", name: "Regular", icon: courses[0].icon, color: "bg-orange-500", desc: "全ての土台", req: "受講資格：なし" },
                   { step: "02", name: "Senior", icon: courses[1].icon, color: "bg-teal-600", desc: "指導力の習得", req: "受講条件：L01修了" },
                   { step: "03", name: "Professional", icon: courses[2].icon, color: "bg-indigo-700", desc: "経営と運営", req: "受講条件：L02修了" }
                 ].map((item, i) => (
                   <React.Fragment key={i}>
                     <div className="flex-1 flex flex-col items-center text-center group">
                        <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                           <item.icon size={30} />
                        </div>
                        <div className="text-[10px] font-bold text-stone-400 uppercase mb-1">Step {item.step}</div>
                        <div className="text-lg font-bold text-stone-800 font-serif-jp">{item.name}</div>
                        <div className="text-[10px] text-stone-500 font-bold mb-2">{item.desc}</div>
                        <div className="px-3 py-1 bg-stone-50 rounded-full text-[10px] font-bold text-stone-400 border border-stone-100">
                           {item.req}
                        </div>
                     </div>
                     {i < 2 && (
                       <div className="flex items-center justify-center md:pt-4">
                          <ArrowDown className="md:-rotate-90 text-stone-200" size={32} strokeWidth={1} />
                       </div>
                     )}
                   </React.Fragment>
                 ))}
              </div>
           </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course, idx) => (
            <div 
              key={course.id} 
              className={`relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl border-2 ${idx === 1 ? 'border-[#FF8C6B] shadow-xl md:-translate-y-4' : 'border-stone-100 shadow-sm'} ${course.id === 'professional' ? 'bg-gradient-to-b from-white to-stone-50/50' : ''}`}
            >
              {idx === 1 && (
                <div className="bg-[#FF8C6B] text-white text-[10px] font-bold text-center py-2.5 tracking-[0.2em] uppercase">
                  Best For Career Start - 指導者を目指すなら
                </div>
              )}
              
              <div className="p-10 flex-grow">
                <div className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <course.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 font-serif-jp">{course.name}</h3>
                <p className="text-[10px] text-stone-400 font-bold tracking-widest mt-1 mb-8 uppercase">{course.level}</p>
                
                <div className="mb-10 flex items-baseline">
                  {course.id === 'professional' ? (
                    <span className="text-3xl font-bold text-stone-800 font-serif-jp">要お問合せ</span>
                  ) : (
                    <>
                      <span className={`text-5xl font-bold ${idx === 1 ? 'text-[#FF8C6B]' : 'text-stone-800'} font-serif-jp`}>{course.price}</span>
                      <span className="ml-2 text-sm text-stone-400 font-bold">円 (税込)</span>
                    </>
                  )}
                </div>
                
                <ul className="space-y-4 text-sm font-medium text-stone-600 mb-10">
                  {course.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start">
                      <Check className={`h-5 w-5 ${course.accent} mr-3 flex-shrink-0 mt-0.5`} /> 
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start text-stone-400 pt-2 border-t border-stone-50">
                    <Info className="h-4 w-4 text-stone-300 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px]">{course.period}</span>
                  </li>
                </ul>
              </div>

              <div className="p-10 bg-stone-50/50 border-t border-stone-100">
                <Button 
                    fullWidth 
                    variant={course.id === 'professional' ? 'teal' : idx === 1 ? 'orange' : 'outline'} 
                    size="lg"
                    className="rounded-2xl h-14"
                    onClick={() => {
                      if (course.id === 'professional') {
                        navigate('/courses/professional');
                      } else {
                        navigate(`/checkout?courseId=${course.id}`);
                      }
                    }}
                >
                  {course.id === 'professional' ? '導入相談を予約' : '受講を申し込む'}
                </Button>
                <p className="text-center text-[10px] text-stone-400 mt-4 font-bold tracking-widest uppercase">
                   8日間返品保証・分割払い対応
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* THE BUNDLE - Strategic Offer for Business Owners / Career High-Performers */}
        <div className="max-w-5xl mx-auto mb-20">
           <div className="relative group overflow-hidden bg-stone-900 rounded-[3.5rem] p-1 shadow-2xl transition-transform hover:-translate-y-2 duration-500">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-transparent to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative bg-stone-900 rounded-[3.4rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 border border-white/5">
                 <div className="lg:w-2/3">
                    <div className="flex items-center gap-3 mb-6">
                       <span className="bg-amber-500 text-stone-900 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-[0.2em] animate-pulse">
                          Bundle Offer
                       </span>
                       <span className="text-amber-500/50 text-xs font-bold font-serif-jp italic">
                          一括受講で最大限の成果を
                       </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif-jp leading-tight">
                       プロフェッショナル<br className="md:hidden" />・キャリアパック
                    </h2>
                    <p className="text-stone-400 text-lg mb-8 leading-relaxed font-medium">
                       レギュラーからプロフェッショナルまで。全3段階を最短で駆け抜け、ダイエットビジネスの運営権と指導者ライセンスを一括で手に入れる最高峰のプランです。
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                       {["全ライセンスの一括付与", "特別受講料優待（11,400円引）", "代表理事への直接質問権", "施設運営スターターキット付属"].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-stone-200 font-bold text-sm">
                            <Star className="text-amber-500" size={16} fill="currentColor" /> {item}
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div className="lg:w-1/3 w-full bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 text-center">
                    <div className="text-stone-400 text-xs font-bold line-through mb-1">通常合計：¥144,600</div>
                    <div className="text-5xl font-black text-amber-500 font-serif-jp mb-2">¥128,000</div>
                    <div className="text-[10px] text-amber-500/70 font-bold mb-8 uppercase tracking-widest">Limited Bundle Price (Inc. Tax)</div>
                    <Button 
                      fullWidth 
                      variant="orange" 
                      size="xl" 
                      className="bg-amber-500 hover:bg-amber-600 text-stone-900 border-none h-16 shadow-xl shadow-amber-500/20"
                      onClick={() => navigate('/checkout?courseId=full-career-pack')}
                    >
                      パックで受講する
                    </Button>
                    <button className="mt-4 text-[10px] font-bold text-stone-500 hover:text-white transition-colors flex items-center justify-center mx-auto gap-2">
                      内容を詳しく見る <ChevronRight size={12} />
                    </button>
                 </div>
              </div>
           </div>
        </div>

        {/* Trust/Guarantee */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-stone-200 rounded-[2.5rem] p-10 shadow-sm flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center text-[#FF8C6B] flex-shrink-0">
                <ShieldCheck size={56} strokeWidth={1} />
            </div>
            <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-stone-800 mb-4 font-serif-jp">
                  100% 取得サポート保証
                </h3>
                <p className="text-stone-600 leading-relaxed font-medium">
                  本気で学びたい方を最後まで見捨てません。スペシャル講座なら課題提出で100%資格取得。取得後も、最新の学術データの提供や質問サポートを生涯継続します。
                </p>
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    <span className="bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-100 flex items-center gap-2">
                       <CreditCard className="text-stone-300" size={14} /> Visa / Master / JCB
                    </span>
                    <span className="bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-100 flex items-center gap-2">
                       <Zap className="text-[#FF9900]" size={14} fill="currentColor" /> Amazon Pay
                    </span>
                    <span className="bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-100 flex items-center gap-2">
                       <Star className="text-red-500" size={14} fill="currentColor" /> PayPay
                    </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Precisamos importar o ícone CreditCard que faltou no Pricing
import { CreditCard } from 'lucide-react';
