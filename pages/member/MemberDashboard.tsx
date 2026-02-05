import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MemberSidebar } from './components/MemberSidebar';
import { MemberCourseCard } from './components/MemberCourseCard';
import { courses } from '../../data/coursesData';
import { Button } from '../../components/common/Button';
import { Sparkles } from 'lucide-react';

export const MemberDashboard: React.FC = () => {
  const navigate = useNavigate();

  // Mock data - Em um app real, isso viria de um contexto de autenticação
  const user = {
    name: 'Demo User',
    status: 'Premium Member' // Alterado para Premium no Demo
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col md:flex-row">
      
      {/* Modular Sidebar */}
      <MemberSidebar userName={user.name} memberStatus={user.status} />

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12 max-w-6xl">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#FF8C6B] font-bold text-xs uppercase tracking-widest mb-2">
              <Sparkles size={14} />
              Welcome Back
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 font-serif-jp leading-tight">ようこそ、{user.name}様</h1>
            <p className="text-stone-500 mt-2 font-medium">デモアカウントとして全てのコースが開放されています。学習を継続しましょう。</p>
          </div>
          
          <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-stone-400 font-bold uppercase">Total Progress</div>
                <div className="text-xl font-bold text-stone-800">12%</div>
             </div>
             <div className="w-12 h-12 rounded-full border-4 border-[#FF8C6B]/20 border-t-[#FF8C6B] rotate-45"></div>
          </div>
        </header>

        {/* Courses Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4">
            <h2 className="text-xl font-bold text-stone-800 font-serif-jp">受講コース一覧</h2>
            <div className="flex gap-4">
               <button className="text-[10px] font-bold text-[#FF8C6B] bg-[#FFF5F0] px-3 py-1 rounded-full">ACTIVE</button>
               <button className="text-[10px] font-bold text-stone-400 px-3 py-1 hover:bg-stone-100 rounded-full transition-colors">COMPLETED</button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <MemberCourseCard 
                key={course.id} 
                course={course} 
                isLocked={false} // Desbloqueado no Demo
                progress={idxToMockProgress(course.id)} 
              />
            ))}
          </div>
        </section>

        {/* Community / Support Banner */}
        <section className="mt-16">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-stone-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
             <div className="w-16 h-16 bg-[#5D9B9B]/10 rounded-full flex items-center justify-center text-[#5D9B9B]">
                <Sparkles size={32} />
             </div>
             <div className="flex-1 text-center md:text-left">
                <h4 className="text-lg font-bold text-stone-800 font-serif-jp mb-1">受講生コミュニティに参加する</h4>
                <p className="text-sm text-stone-500 font-medium">同じ目標を持つ仲間と知識を共有し、モチベーションを高め合いましょう。</p>
             </div>
             <Button variant="outline" size="md">Discordに参加</Button>
          </div>
        </section>
      </main>
    </div>
  );
};

// Helper para simular progresso diferente
function idxToMockProgress(id: string) {
  if (id === 'regular') return 35;
  if (id === 'senior') return 0;
  return 0;
}