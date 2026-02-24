import React from 'react';
import { Button } from '../components/common/Button';
import { PlaceholderImage } from '../components/common/PlaceholderImage';
import { Sidebar } from '../components/layout/Sidebar';
import { 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Monitor, 
  GraduationCap, 
  Crown, 
  Target,
  Trophy,
  Activity,
  ThumbsUp,
  Star,
  Quote,
  Award,
  CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "佐藤 美咲 様",
      role: "主婦 → オンラインコーチとして独立",
      achievement: "3ヶ月で体重-8kg、体脂肪-6%を達成",
      comment: "「我慢」の連続だったダイエットが、レギュラーコースでの学びを通じて「自分を整える楽しさ」に変わりました。今ではシニア資格も取得し、同じ悩みを持つ女性たちをサポートする仕事に就いています。",
      rating: 5
    },
    {
      name: "高橋 健二 様",
      role: "パーソナルジム経営者",
      achievement: "導入後、継続率が40%向上、売上1.5倍",
      comment: "トレーニング技術だけでは限界を感じていました。プロフェッショナルコースで『診断システム』を導入したことで、感覚的だった食事指導が明確な数値に基づいたものになり、顧客満足度が飛躍的に上がりました。",
      rating: 5
    },
    {
      name: "田中 結衣 様",
      role: "ヨガインストラクター",
      achievement: "「食事指導もできる講師」として単価アップ",
      comment: "ポーズを教えるだけでなく、内面からの美しさを理論的に語れるようになったことで、生徒さんからの信頼が圧倒的に変わりました。ダブルライセンスは私のキャリアの最強の武器です。",
      rating: 5
    }
  ];

  return (
    <div className="bg-stone-50 font-sans text-stone-700 w-full">
      
      {/* Strategic Hero Section */}
      <div className="relative w-full h-[700px] overflow-hidden bg-white border-b border-stone-100">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-teal-50/30"></div>
        <div className="relative w-[92%] max-w-[1600px] mx-auto h-full flex flex-col justify-center">
            <div className="max-w-4xl animate-in fade-in slide-in-from-left-8 duration-1000">
                <span className="inline-block text-[#FF8C6B] font-bold tracking-[0.3em] text-sm md:text-base mb-6 bg-orange-100/50 px-4 py-1.5 rounded-full border border-orange-200">
                    ACADEMIC & PROFESSIONAL STANDARD 2026
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-800 leading-tight md:leading-tight mb-8 font-serif-jp">
                    その知識が、<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C6B] to-[#5D9B9B]">人生の新しい「軸」</span>になる。
                </h1>
                <p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed font-medium">
                    日本ダイエットアカデミー協会は、個人の目標からビジネスの成功まで、<br className="hidden md:block" />
                    科学的根拠に基づいた「3段階の変革」をプロデュースします。
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                    <Button size="xl" variant="orange" onClick={() => navigate('/pricing')} className="shadow-2xl shadow-orange-200/50 h-16 px-12">受講コースを見る</Button>
                    <Button size="xl" variant="outline" className="bg-white/50 backdrop-blur-md h-16 px-12" onClick={() => navigate('/seekers')}>まずは資料請求（無料）</Button>
                </div>
            </div>
        </div>
      </div>

      {/* Social Proof / Numbers Section */}
      <div className="bg-stone-900 py-16 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-5">
              <Activity size={400} className="absolute -right-20 -top-20" />
          </div>
          <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                      { label: "累計受講生数", value: "12,000", suffix: "名+", icon: Users },
                      { label: "資格取得率", value: "98.5", suffix: "%", icon: Trophy },
                      { label: "提携施設数", value: "450", suffix: "拠点", icon: Layers },
                      { label: "満足度調査", value: "4.9", suffix: "/5.0", icon: ThumbsUp }
                  ].map((stat, idx) => (
                      <div key={idx} className="text-center space-y-2 group">
                          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF8C6B] transition-colors duration-500">
                             <stat.icon size={24} className="text-[#FF8C6B] group-hover:text-white" />
                          </div>
                          <div className="text-3xl md:text-5xl font-bold font-serif-jp tracking-tight">
                              {stat.value}<span className="text-xl md:text-2xl ml-1 text-stone-400">{stat.suffix}</span>
                          </div>
                          <p className="text-stone-500 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      {/* Path Choice Section - ENHANCED */}
      <div className="py-24 bg-white border-y border-stone-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFF5F0]/30 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
          
          <div className="w-[92%] max-w-[1600px] mx-auto relative z-10">
              <div className="text-center mb-20">
                  <span className="text-[#FF8C6B] font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Choose Your Path</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 font-serif-jp tracking-tight">あなたの「目的」に最適な道をお選びください</h2>
                  <div className="w-20 h-1.5 bg-[#FF8C6B] mx-auto rounded-full"></div>
              </div>

              <div className="flex justify-center">
                  
                  {/* Card 1: Regular Course (Personal Improvement) */}
                  <div 
                    onClick={() => navigate('/courses/regular')} 
                    className="group relative bg-white rounded-[3rem] p-10 border border-stone-100 hover:border-[#FF8C6B] transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col w-full max-w-2xl"
                  >
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-orange-50 text-[#FF8C6B] rounded-2xl group-hover:bg-[#FF8C6B] group-hover:text-white transition-all duration-500 shadow-sm">
                            <Target size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-stone-300 tracking-[0.2em] uppercase">Level 01</span>
                          <h3 className="text-2xl font-bold text-stone-800 font-serif-jp">自分を劇的に変える</h3>
                        </div>
                      </div>

                      <div className="flex-grow">
                          <p className="text-stone-500 text-sm leading-relaxed font-medium mb-8">
                            リバウンドから卒業し、一生モノの健康な体を手に入れたい方へ。科学的根拠に基づくダイエットの「正解」をマスターします。
                          </p>
                          
                          <div className="bg-stone-50 rounded-2xl p-6 mb-8">
                            <h4 className="text-xs font-black text-stone-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                              <Users size={14} className="text-[#FF8C6B]" /> Ideal For / 対象
                            </h4>
                            <ul className="space-y-3">
                              {['ダイエットを繰り返している方', '家族の健康管理を学びたい方', '正しい栄養学を身につけたい方'].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs font-bold text-stone-700">
                                  <CheckCircle2 size={14} className="text-emerald-500" /> {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <span className="text-xs font-bold text-stone-400 group-hover:text-[#FF8C6B] transition-colors uppercase tracking-widest">Regular Course</span>
                        <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-[#FF8C6B] group-hover:text-white group-hover:border-[#FF8C6B] transition-all group-hover:translate-x-2">
                          <ArrowRight size={18} />
                        </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>

      {/* Layout with Sidebar */}
      <div className="w-[92%] max-w-[1600px] mx-auto py-24 flex flex-col lg:flex-row gap-16">
          <aside className="hidden lg:block w-[320px] flex-shrink-0 sticky top-32 self-start">
              <Sidebar />
          </aside>

          <main className="flex-1 space-y-20">
              {/* Features section */}
              <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-sm border border-stone-200 text-center relative overflow-hidden">
                  <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-10 font-serif-jp leading-tight relative z-10">
                      忙しいあなたのための、<br />
                      <span className="text-[#FF8C6B]">100%資格取得</span>保証システム
                  </h2>
                  <div className="grid md:grid-cols-3 gap-10 relative z-10">
                      {[
                          { title: "オンライン完結", icon: Monitor, text: "スマホで講義視聴から課題提出、試験まで全て完結。" },
                          { title: "特別講座制度", icon: ShieldCheck, text: "スペシャル講座なら課題提出で100%の資格取得を支援。" },
                          { title: "生涯サポート", icon: Users, text: "取得後も、最新の栄養学アップデートや質問に対応。" }
                      ].map((item, idx) => (
                          <div key={idx} className="space-y-4">
                              <div className="w-12 h-12 bg-orange-50 text-[#FF8C6B] rounded-2xl flex items-center justify-center mx-auto">
                                <item.icon size={24} />
                              </div>
                              <h4 className="font-bold text-stone-800 font-serif-jp">{item.title}</h4>
                              <p className="text-xs text-stone-500 leading-relaxed">{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* Supervision Section */}
              <div id="supervision" className="bg-stripe rounded-[3rem] p-10 md:p-20 border border-stone-200">
                  <div className="flex flex-col md:flex-row gap-16 items-center">
                      <div className="md:w-2/5">
                          <PlaceholderImage height="380px" className="rounded-[2.5rem] shadow-2xl w-full" color="bg-stone-200" text="CHIEF SUPERVISOR" />
                      </div>
                      <div className="md:w-3/5 space-y-6">
                          <span className="text-[#FF8C6B] font-bold text-xs tracking-[0.4em] uppercase">Supervision</span>
                          <h3 className="text-3xl md:text-4xl font-bold text-stone-800 font-serif-jp">小野 誠 監修：妥協なき品質。</h3>
                          <p className="text-stone-700 leading-loose text-lg font-medium">
                              「ただ痩せる」だけの知識 is どこにでもあります。私たちが教えるのは、最新の医学と栄養学、大して行動心理学に基づいた「一生モノの健康管理術」です。
                          </p>
                          <Button variant="outline" className="bg-white" onClick={() => navigate('/methods')}>メソッドの詳細へ</Button>
                      </div>
                  </div>
              </div>

              {/* 合格者の声 (Testimonials) Section - DIRECTLY AFTER SUPERVISION */}
              <div className="pt-20 border-t border-stone-100">
                  <div className="text-center mb-16">
                      <span className="text-[#FF8C6B] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Voices of Success</span>
                      <h2 className="text-3xl md:text-5xl font-bold text-stone-800 font-serif-jp">合格者の声</h2>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                      {testimonials.map((t, i) => (
                          <div key={i} className="bg-white rounded-[3rem] p-10 shadow-sm border border-stone-100 flex flex-col relative group hover:shadow-xl transition-all duration-500">
                              <div className="absolute top-8 right-10 text-orange-50/50">
                                  <Quote size={60} fill="currentColor" />
                              </div>
                              <div className="flex gap-1 mb-6">
                                  {[...Array(t.rating)].map((_, idx) => (
                                      <Star key={idx} size={16} className="text-amber-400" fill="currentColor" />
                                  ))}
                              </div>
                              <div className="flex-grow">
                                <p className="text-stone-700 leading-loose font-medium mb-8 relative z-10 italic">
                                    {t.comment}
                                </p>
                              </div>
                              <div className="pt-8 border-t border-stone-50 flex items-center gap-5">
                                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-300">
                                    <Users size={32} />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-stone-800 font-serif-jp">{t.name}</div>
                                    <div className="text-[10px] text-[#FF8C6B] font-bold uppercase tracking-wider mb-1">{t.role}</div>
                                    <div className="text-[11px] text-stone-400 font-bold">{t.achievement}</div>
                                </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </main>
      </div>

      {/* Floating CTA Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl p-4 md:hidden z-40 border-t border-stone-100 safe-area-bottom">
          <div className="flex gap-3 max-w-md mx-auto">
            <Button fullWidth variant="secondary" size="md" className="rounded-xl" onClick={() => navigate('/seekers')}>資料請求</Button>
            <Button fullWidth variant="orange" size="md" className="rounded-xl" onClick={() => navigate('/pricing')}>コースを見る</Button>
          </div>
      </div>

    </div>
  );
};
