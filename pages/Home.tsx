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
  Quote
} from 'lucide-react';
import { useNavigate } from 'react-router';

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

      {/* Path Choice Section */}
      <div className="py-24 bg-white border-y border-stone-100 relative">
          <div className="w-[92%] max-w-[1600px] mx-auto">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6 font-serif-jp tracking-tight">あなたの「目的」に最適な道をお選びください</h2>
                  <div className="w-16 h-1.5 bg-[#FF8C6B] mx-auto rounded-full mb-8"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  <div onClick={() => navigate('/courses/regular')} className="group relative bg-stone-50 rounded-[2.5rem] p-10 border-2 border-transparent hover:border-[#FF8C6B] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-20 h-20 flex-shrink-0 p-5 bg-white text-[#FF8C6B] rounded-3xl shadow-sm group-hover:bg-[#FF8C6B] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                          <Target size={40} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                          <h3 className="text-2xl font-bold text-stone-800 mb-3 font-serif-jp">「自分」を劇的に変える</h3>
                          <p className="text-stone-500 text-base leading-relaxed font-medium mb-6">リバウンドから卒業し、一生モノの健康な体を手に入れたい方はこちら。</p>
                          <div className="flex items-center text-[#FF8C6B] text-sm font-bold group-hover:translate-x-2 transition-transform">ダイエット実践・基礎へ <ArrowRight size={18} className="ml-2" /></div>
                      </div>
                  </div>

                  <div onClick={() => navigate('/instructors')} className="group relative bg-stone-50 rounded-[2.5rem] p-10 border-2 border-transparent hover:border-[#5D9B9B] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-20 h-20 flex-shrink-0 p-5 bg-white text-[#5D9B9B] rounded-3xl shadow-sm group-hover:bg-[#5D9B9B] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                          <GraduationCap size={40} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                          <h3 className="text-2xl font-bold text-stone-800 mb-3 font-serif-jp">「指導力」で勝負する</h3>
                          <p className="text-stone-500 text-base leading-relaxed font-medium mb-6">トレーナーや講師として独立したい、確かな理論と「資格」が欲しいプロ向け。</p>
                          <div className="flex items-center text-[#5D9B9B] text-sm font-bold group-hover:translate-x-2 transition-transform">プロ指導者養成へ <ArrowRight size={18} className="ml-2" /></div>
                      </div>
                  </div>

                  <div onClick={() => navigate('/courses/professional')} className="group relative bg-stone-50 rounded-[2.5rem] p-10 border-2 border-transparent hover:border-indigo-600 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl flex flex-col md:flex-row gap-8 items-start">
                      <div className="w-20 h-20 flex-shrink-0 p-5 bg-white text-indigo-600 rounded-3xl shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                          <Crown size={40} strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                          <h3 className="text-2xl font-bold text-stone-800 mb-3 font-serif-jp">「仕組み」で売上を創る</h3>
                          <p className="text-stone-500 text-base leading-relaxed font-medium mb-6">サロンやジムの売上を安定させたい経営者。個人の技術をシステムへ昇華させます。</p>
                          <div className="flex items-center text-indigo-600 text-sm font-bold group-hover:translate-x-2 transition-transform">経営・運営責任者向けへ <ArrowRight size={18} className="ml-2" /></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* Trust & Features Section */}
      <div className="w-[92%] max-w-[1600px] mx-auto py-24 flex flex-col lg:flex-row gap-16">
          <aside className="hidden lg:block w-[320px] flex-shrink-0 sticky top-32 self-start">
              <Sidebar />
          </aside>

          <main className="flex-1 space-y-20">
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
              <div className="bg-stripe rounded-[3rem] p-10 md:p-20 border border-stone-200">
                  <div className="flex flex-col md:flex-row gap-16 items-center">
                      <div className="md:w-2/5">
                          <PlaceholderImage height="380px" className="rounded-[2.5rem] shadow-2xl w-full" color="bg-stone-200" text="CHIEF SUPERVISOR" />
                      </div>
                      <div className="md:w-3/5 space-y-6">
                          <span className="text-[#FF8C6B] font-bold text-xs tracking-[0.4em] uppercase">Supervision</span>
                          <h3 className="text-3xl md:text-4xl font-bold text-stone-800 font-serif-jp">小野 誠 監修：妥協なき品質。</h3>
                          <p className="text-stone-700 leading-loose text-lg font-medium">
                              「ただ痩せる」だけの知識はどこにでもあります。私たちが教えるのは、最新の医学と栄養学、そして行動心理学に基づいた「一生モノの健康管理術」です。
                          </p>
                          <Button variant="outline" className="bg-white" onClick={() => navigate('/methods')}>メソッドの詳細へ</Button>
                      </div>
                  </div>
              </div>

              {/* 合格者の声 (Testimonials) Section - REPOSITIONED AT THE VERY BOTTOM */}
              <div className="pt-20">
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