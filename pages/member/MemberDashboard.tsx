import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MemberSidebar } from './components/MemberSidebar';
import { MemberCourseCard } from './components/MemberCourseCard';
import { courses } from '../../data/coursesData';
import { Button } from '../../components/common/Button';

export const MemberDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Mock data - In a real app, this would come from a context or backend API
  const user = {
    name: 'Demo User',
    status: 'Free Member'
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col md:flex-row">
      
      {/* Modular Sidebar */}
      <MemberSidebar userName={user.name} memberStatus={user.status} />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 max-w-6xl">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-stone-800 font-serif-jp">ようこそ、{user.name}様</h1>
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
              <MemberCourseCard 
                key={course.id} 
                course={course} 
                isLocked={true} 
                progress={0} 
              />
            ))}
          </div>
        </section>

        {/* Upsell / Info Banner */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden shadow-xl">
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
              
              {/* Support Badge */}
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