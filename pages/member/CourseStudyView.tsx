import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Play, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  ChevronRight, 
  Download,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { memberContent, Lesson, Module } from '../../data/memberContent';
import { courses } from '../../data/coursesData';
import { Button } from '../../components/common/Button';

export const CourseStudyView: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const courseInfo = courses.find(c => c.id === courseId);
  const content = memberContent[courseId || ''];
  
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (content && content.modules.length > 0) {
      setActiveLesson(content.modules[0].lessons[0]);
      setExpandedModules({ [content.modules[0].id]: true });
    }
  }, [content]);

  if (!courseInfo || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Course not found.</p>
        <Button onClick={() => navigate('/member-area')}>Return</Button>
      </div>
    );
  }

  const toggleModule = (id: string) => {
    setExpandedModules(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-[calc(100vh-160px)] bg-[#FDFCFB] flex flex-col">
      {/* Informações Auxiliares do Curso (Sub-header) */}
      <div className="bg-white border-b border-stone-100 py-3 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
           <button 
             onClick={() => navigate('/member-area')}
             className="p-2 hover:bg-stone-50 rounded-lg text-stone-400 hover:text-stone-800 transition-all"
           >
             <ChevronLeft size={20} />
           </button>
           <div className={`w-8 h-8 rounded-lg ${courseInfo.color} flex items-center justify-center text-white shadow-sm`}>
              <courseInfo.icon size={16} />
           </div>
           <div>
             <h2 className="text-xs md:text-sm font-bold text-stone-800 font-serif-jp">
               {courseInfo.name} <span className="text-stone-400 font-normal">| {courseInfo.subtitle}</span>
             </h2>
           </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
           <div className="text-[10px] text-stone-400 font-bold uppercase text-right">
             Module Progress
             <div className="text-stone-800 text-xs">12% Completed</div>
           </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Main Content (Video Player & Info) */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-10">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Video Player Container */}
            <div className="bg-stone-900 aspect-video rounded-3xl overflow-hidden shadow-2xl relative group">
               {activeLesson ? (
                 <iframe 
                   src={activeLesson.videoUrl} 
                   className="w-full h-full border-0"
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                   allowFullScreen
                 ></iframe>
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    <Play size={80} strokeWidth={1} />
                 </div>
               )}
            </div>

            {/* Lesson Info */}
            {activeLesson && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-stone-800 font-serif-jp">
                      {activeLesson.title}
                    </h1>
                    <div className="flex items-center gap-4 mt-3">
                       <span className="flex items-center gap-1.5 text-xs font-bold text-[#FF8C6B] bg-[#FFF5F0] px-3 py-1 rounded-full">
                          <Play size={12} fill="currentColor" />
                          NOW PLAYING
                       </span>
                       <span className="flex items-center gap-1.5 text-xs font-bold text-stone-400">
                          <Clock size={14} />
                          {activeLesson.duration}
                       </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-50 transition-all">
                      <Download size={14} />
                      資料 (PDF)
                    </button>
                    <button className="p-2 bg-white border border-stone-200 rounded-xl text-stone-400 hover:text-[#FF8C6B] transition-all">
                      <CheckCircle2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-100 shadow-sm space-y-4">
                   <h3 className="flex items-center gap-2 text-stone-800 font-bold font-serif-jp">
                      <Info size={18} className="text-[#FF8C6B]" />
                      講義のポイント
                   </h3>
                   <p className="text-stone-600 text-sm leading-loose">
                     {activeLesson.description}
                   </p>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Sidebar (Curriculum) */}
        <aside className="w-full lg:w-[380px] bg-white border-l border-stone-100 overflow-y-auto flex-shrink-0">
           <div className="p-6 border-b border-stone-50">
              <h3 className="text-base font-bold text-stone-800 font-serif-jp flex items-center gap-2">
                 <BookOpen size={18} className="text-stone-400" />
                 カリキュラム
              </h3>
           </div>

           <div className="p-2 space-y-1">
              {content.modules.map((module, mIdx) => (
                <div key={module.id} className="bg-white">
                   <button 
                     onClick={() => toggleModule(module.id)}
                     className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                       expandedModules[module.id] ? 'bg-stone-50' : 'hover:bg-stone-50'
                     }`}
                   >
                      <div className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-full bg-stone-200 text-stone-500 text-[10px] flex items-center justify-center font-bold">
                            {mIdx + 1}
                         </div>
                         <span className="text-sm font-bold text-stone-800 text-left font-serif-jp">{module.title}</span>
                      </div>
                      {expandedModules[module.id] ? <ChevronUp size={16} className="text-stone-400" /> : <ChevronDown size={16} className="text-stone-400" />}
                   </button>

                   {expandedModules[module.id] && (
                     <div className="mt-1 space-y-1 px-2 pb-4">
                        {module.lessons.map((lesson, lIdx) => (
                          <button
                            key={lesson.id}
                            onClick={() => setActiveLesson(lesson)}
                            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all group ${
                              activeLesson?.id === lesson.id 
                              ? 'bg-[#FFF5F0] text-[#FF8C6B]' 
                              : 'hover:bg-stone-50 text-stone-600'
                            }`}
                          >
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                               activeLesson?.id === lesson.id ? 'bg-[#FF8C6B] text-white' : 'bg-stone-100 text-stone-400 group-hover:bg-stone-200'
                             }`}>
                                {activeLesson?.id === lesson.id ? <Play size={10} fill="currentColor" /> : <Play size={10} />}
                             </div>
                             <div className="text-left">
                                <div className="text-[9px] font-bold opacity-60 uppercase mb-0.5">Lesson {lIdx + 1}</div>
                                <div className="text-xs font-bold line-clamp-1">{lesson.title}</div>
                             </div>
                          </button>
                        ))}
                     </div>
                   )}
                </div>
              ))}
           </div>
        </aside>
      </div>
    </div>
  );
};