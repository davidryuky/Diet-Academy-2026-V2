import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, LogOut, LayoutDashboard, Settings, HelpCircle, Bell, User, CheckCircle2 } from 'lucide-react';
import { courses } from '../data/coursesData';
import { Button } from '../components/common/Button';

export const MemberArea: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-stone-100 p-6 space-y-8">
        <div className="flex items-center gap-4 mb-10 px-2">
          <div className="w-12 h-12 rounded-2xl bg-[#FF8C6B]/10 flex items-center justify-center text-[#FF8C6B]">
            <User size={24} />
          </div>
          <div>
            <div className="text-sm font-bold text-stone-800 font-serif-jp">Demo User</div>
            <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Free Member</div>
          </div>
        </div>

        <nav className="space-y-1">
          {[
            { label: 'ダッシュボード', icon: LayoutDashboard, active: true },
            { label: '学習の進捗', icon: CheckCircle2 },
            { label: 'お知らせ', icon: Bell },
            { label: 'お問い合わせ', icon: HelpCircle },
            { label: '設定', icon: Settings },
          ].map((item, idx) => (
            <button 
              key={idx}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                item.active 
                ? 'bg-[#FF8C6B] text-white shadow-md shadow-orange-100' 
                : 'text-stone-500 hover:bg-stone-50 hover:text-stone-800'
              }`}
            >
              <item.icon size={18} />
              <span className="font-serif-jp">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="pt-10">
          <button 
            onClick={() => navigate('/login')}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold text-stone-400 hover:text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut size={18} />
            <span className="font-serif-jp">ログアウト</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 max-w-6xl">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-stone-800 font-serif-jp">ようこそ、Demo User様</h1>
          <p className="text-stone-500 mt-2 font-medium">現在受講可能なコースはありません。学習を開始するにはコースのアクティベーションが必要です。</p>
        </header>

        {/* Courses Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h2 className="text-xl font-bold text-stone-800 font-serif-jp">受講コース一覧</h2>
            <span className="text-xs font-bold text-stone-400 tracking-widest uppercase">My Courses</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id}
                className="group relative bg-white rounded-[2rem] border border-stone-200 overflow-hidden shadow-sm flex flex-col opacity-75 grayscale hover:grayscale-0 transition-all duration-500"
              >
                {/* Locked Overlay */}
                <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center text-center p-6 transition-opacity group-hover:opacity-80">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 border border-white/30">
                    <Lock size={24} />
                  </div>
                  <div className="text-white font-bold text-sm mb-4 font-serif-jp">
                    このコンテンツは<br />未購入またはロックされています
                  </div>
                  <Button 
                    size="sm" 
                    variant="orange" 
                    className="bg-white text-stone-900 hover:bg-stone-100"
                    onClick={() => navigate('/pricing')}
                  >
                    コースを有効化する
                  </Button>
                </div>

                {/* Course Content (Visual Only) */}
                <div className={`h-32 ${course.color} flex items-center justify-center`}>
                  <course.icon size={48} className="text-white/80" />
                </div>
                <div className="p-8 flex-grow">
                  <div className="text-[10px] font-bold text-stone-400 uppercase mb-1 tracking-widest">{course.level}</div>
                  <h3 className="text-lg font-bold text-stone-800 mb-3 font-serif-jp leading-tight">{course.name}</h3>
                  <p className="text-xs text-stone-500 line-clamp-3 mb-6 font-medium leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-[#FF8C6B] transition-all"></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-bold text-stone-400">
                      <span>PROGRESS</span>
                      <span>0%</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-stone-50 border-t border-stone-100 mt-auto">
                  <button className="w-full py-2.5 rounded-xl border border-stone-200 text-stone-400 text-xs font-bold font-serif-jp cursor-not-allowed">
                    学習を開始する
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Information / Upsell */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="text-teal-400 font-bold tracking-[0.4em] text-xs uppercase mb-4 block">Information</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 font-serif-jp leading-tight">
                  全てのコンテンツを解放して、<br />ダイエットのプロを目指しましょう。
                </h3>
                <p className="text-stone-400 mb-8 font-medium leading-relaxed max-w-lg">
                  正規受講生になると、全てのビデオ講義、教材PDF、プロ講師による無制限のチャットサポートが利用可能になります。
                </p>
                <Button variant="teal" size="lg" onClick={() => navigate('/pricing')}>
                  受講プランを確認する
                </Button>
              </div>
              <div className="w-40 h-40 md:w-56 md:h-56 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] flex flex-col items-center justify-center text-center p-6">
                <div className="text-4xl font-bold font-serif-jp mb-2">24h</div>
                <div className="text-[10px] text-stone-400 font-bold tracking-widest uppercase">Support System</div>
                <div className="mt-4 w-12 h-px bg-white/20"></div>
                <div className="mt-4 text-[11px] text-stone-300 font-medium">いつでも質問可能</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};