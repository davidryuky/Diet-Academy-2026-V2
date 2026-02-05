import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Settings, 
  ChevronRight,
  PlusCircle,
  Video
} from 'lucide-react';
import { courses } from '../../data/coursesData';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Students', value: '1,284', change: '+12%', icon: Users, color: 'text-blue-600' },
    { label: 'Active Courses', value: '3', change: '0%', icon: BookOpen, color: 'text-[#FF8C6B]' },
    { label: 'Monthly Revenue', value: '¥2.4M', change: '+8%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Avg. Progress', value: '64%', change: '+5%', icon: Clock, color: 'text-purple-600' },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-stone-800 font-serif-jp">管理者ダッシュボード</h1>
          <p className="text-stone-500 text-sm font-medium">コンテンツと受講生の管理を行います。</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-stone-800 text-white rounded-xl text-xs font-bold hover:bg-stone-900 transition-all">
             <PlusCircle size={16} />
             新規コース作成
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
             <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl bg-stone-50 ${stat.color}`}>
                   <stat.icon size={20} />
                </div>
                <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">{stat.change}</span>
             </div>
             <div className="text-2xl font-bold text-stone-800">{stat.value}</div>
             <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Course List Management */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <h2 className="text-lg font-bold text-stone-800 font-serif-jp">コース管理</h2>
          <span className="text-xs font-bold text-stone-400">Total: {courses.length} Courses</span>
        </div>

        <div className="grid gap-4">
          {courses.map((course) => (
            <div 
              key={course.id}
              onClick={() => navigate(`/admin/course/${course.id}`)}
              className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm hover:border-orange-200 transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center text-white`}>
                  <course.icon size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{course.level}</div>
                  <h3 className="text-lg font-bold text-stone-800 font-serif-jp">{course.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded flex items-center gap-1">
                       <Video size={10} /> 12 Lessons
                    </span>
                    <span className="text-[10px] font-bold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                       Active Status
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="text-right hidden md:block">
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Pricing</div>
                    <div className="text-sm font-bold text-stone-800">¥{course.price}</div>
                 </div>
                 <div className="p-2 rounded-full bg-stone-50 text-stone-400 group-hover:bg-[#FF8C6B] group-hover:text-white transition-all">
                    <ChevronRight size={20} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};