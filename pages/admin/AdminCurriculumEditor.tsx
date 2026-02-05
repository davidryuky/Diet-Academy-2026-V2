import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  Save, 
  Plus, 
  Trash2, 
  MoveVertical, 
  Video, 
  FileText, 
  Clock,
  Layout
} from 'lucide-react';
import { memberContent, CourseContent, Module, Lesson } from '../../data/memberContent';
import { courses } from '../../data/coursesData';

export const AdminCurriculumEditor: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  
  const courseInfo = courses.find(c => c.id === courseId);
  const [content, setContent] = useState<CourseContent | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (memberContent[courseId || '']) {
      // Clona o conteúdo para o estado local para edição
      setContent(JSON.parse(JSON.stringify(memberContent[courseId || ''])));
    }
  }, [courseId]);

  if (!courseInfo || !content) return <div>Loading...</div>;

  const handleSave = () => {
    setIsSaving(true);
    // Aqui seria: await supabase.from('courses').update(content).eq('id', courseId)
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }, 1000);
  };

  const addModule = () => {
    const newModule: Module = {
      id: `m-${Date.now()}`,
      title: '新セクション',
      lessons: []
    };
    setContent({ ...content, modules: [...content.modules, newModule] });
  };

  const addLesson = (moduleId: string) => {
    const newLesson: Lesson = {
      id: `l-${Date.now()}`,
      title: '新講義タイトル',
      duration: '00:00',
      videoUrl: '',
      description: '講義の説明を入力してください。'
    };
    
    const updatedModules = content.modules.map(mod => {
      if (mod.id === moduleId) {
        return { ...mod, lessons: [...mod.lessons, newLesson] };
      }
      return mod;
    });
    
    setContent({ ...content, modules: updatedModules });
  };

  const updateLesson = (moduleId: string, lessonId: string, field: keyof Lesson, value: string) => {
    const updatedModules = content.modules.map(mod => {
      if (mod.id === moduleId) {
        const updatedLessons = mod.lessons.map(less => {
          if (less.id === lessonId) {
            return { ...less, [field]: value };
          }
          return less;
        });
        return { ...mod, lessons: updatedLessons };
      }
      return mod;
    });
    setContent({ ...content, modules: updatedModules });
  };

  const updateModuleTitle = (moduleId: string, title: string) => {
    const updatedModules = content.modules.map(mod => {
      if (mod.id === moduleId) return { ...mod, title };
      return mod;
    });
    setContent({ ...content, modules: updatedModules });
  };

  const deleteLesson = (moduleId: string, lessonId: string) => {
    const updatedModules = content.modules.map(mod => {
      if (mod.id === moduleId) {
        return { ...mod, lessons: mod.lessons.filter(l => l.id !== lessonId) };
      }
      return mod;
    });
    setContent({ ...content, modules: updatedModules });
  };

  const deleteModule = (moduleId: string) => {
    setContent({ ...content, modules: content.modules.filter(m => m.id !== moduleId) });
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen">
      {/* Admin Editor Header */}
      <header className="bg-white border-b border-stone-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <button onClick={() => navigate('/admin')} className="p-2 hover:bg-stone-50 rounded-xl text-stone-400 hover:text-stone-800 transition-all">
                <ChevronLeft size={20} />
             </button>
             <div>
                <h1 className="text-xl font-bold text-stone-800 font-serif-jp">{courseInfo.name} のカリキュラム編集</h1>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">CMS Mode | {content.modules.length} Modules</p>
             </div>
          </div>
          <div className="flex items-center gap-4">
             {saveSuccess && <span className="text-green-500 text-xs font-bold animate-pulse">Changes Saved!</span>}
             <button 
               onClick={handleSave}
               disabled={isSaving}
               className="flex items-center gap-2 px-6 py-2.5 bg-[#FF8C6B] text-white rounded-xl text-xs font-bold hover:shadow-lg transition-all disabled:opacity-50"
             >
                <Save size={16} />
                {isSaving ? '保存中...' : '変更を保存'}
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 md:p-12 space-y-12">
        
        {/* Module List */}
        <div className="space-y-8">
          {content.modules.map((module, mIdx) => (
            <div key={module.id} className="bg-white rounded-3xl border border-stone-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
               {/* Module Header */}
               <div className="bg-stone-50 p-6 flex items-center justify-between border-b border-stone-100">
                  <div className="flex items-center gap-4 flex-1">
                     <div className="p-2 text-stone-300 cursor-move">
                        <MoveVertical size={20} />
                     </div>
                     <div className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-bold">
                        {mIdx + 1}
                     </div>
                     <input 
                       type="text" 
                       value={module.title}
                       onChange={(e) => updateModuleTitle(module.id, e.target.value)}
                       className="bg-transparent text-lg font-bold text-stone-800 font-serif-jp border-b border-transparent focus:border-[#FF8C6B] outline-none flex-1 py-1"
                       placeholder="Module Title"
                     />
                  </div>
                  <button 
                    onClick={() => deleteModule(module.id)}
                    className="p-2 text-stone-300 hover:text-red-500 transition-colors"
                  >
                     <Trash2 size={18} />
                  </button>
               </div>

               {/* Lessons Area */}
               <div className="p-6 space-y-4">
                  {module.lessons.map((lesson, lIdx) => (
                    <div key={lesson.id} className="bg-stone-50/50 rounded-2xl p-6 border border-stone-100 space-y-6">
                       <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-stone-400 font-bold text-[10px] uppercase">
                             <Layout size={14} /> Lesson {lIdx + 1}
                          </div>
                          <button 
                            onClick={() => deleteLesson(module.id, lesson.id)}
                            className="text-stone-300 hover:text-red-500 text-xs font-bold flex items-center gap-1"
                          >
                             <Trash2 size={14} /> 削除
                          </button>
                       </div>

                       <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                             <div>
                                <label className="text-[10px] font-bold text-stone-400 uppercase block mb-1.5">Lesson Title</label>
                                <input 
                                  type="text" 
                                  value={lesson.title}
                                  onChange={(e) => updateLesson(module.id, lesson.id, 'title', e.target.value)}
                                  className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-sm font-bold text-stone-800 outline-none focus:border-[#FF8C6B]"
                                />
                             </div>
                             <div className="grid grid-cols-2 gap-4">
                                <div>
                                   <label className="text-[10px] font-bold text-stone-400 uppercase block mb-1.5 flex items-center gap-1">
                                      <Video size={10} /> Video URL (YouTube/Vimeo)
                                   </label>
                                   <input 
                                     type="text" 
                                     value={lesson.videoUrl}
                                     onChange={(e) => updateLesson(module.id, lesson.id, 'videoUrl', e.target.value)}
                                     className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-xs font-medium text-stone-600 outline-none focus:border-[#FF8C6B]"
                                   />
                                </div>
                                <div>
                                   <label className="text-[10px] font-bold text-stone-400 uppercase block mb-1.5 flex items-center gap-1">
                                      <Clock size={10} /> Duration
                                   </label>
                                   <input 
                                     type="text" 
                                     value={lesson.duration}
                                     onChange={(e) => updateLesson(module.id, lesson.id, 'duration', e.target.value)}
                                     className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-xs font-medium text-stone-600 outline-none focus:border-[#FF8C6B]"
                                   />
                                </div>
                             </div>
                          </div>
                          <div>
                             <label className="text-[10px] font-bold text-stone-400 uppercase block mb-1.5 flex items-center gap-1">
                                <FileText size={10} /> Description / Key Points
                             </label>
                             <textarea 
                               value={lesson.description}
                               onChange={(e) => updateLesson(module.id, lesson.id, 'description', e.target.value)}
                               rows={5}
                               className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-xs font-medium text-stone-600 outline-none focus:border-[#FF8C6B] resize-none leading-loose"
                             />
                          </div>
                       </div>
                    </div>
                  ))}

                  <button 
                    onClick={() => addLesson(module.id)}
                    className="w-full py-4 border-2 border-dashed border-stone-100 rounded-2xl text-stone-300 hover:border-orange-100 hover:text-[#FF8C6B] transition-all flex items-center justify-center gap-2 text-sm font-bold"
                  >
                     <Plus size={18} />
                     講義を追加
                  </button>
               </div>
            </div>
          ))}

          <button 
            onClick={addModule}
            className="w-full py-10 bg-white border-2 border-dashed border-stone-200 rounded-[2.5rem] text-stone-400 hover:border-[#FF8C6B] hover:text-[#FF8C6B] hover:bg-orange-50/30 transition-all flex flex-col items-center justify-center gap-3"
          >
             <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center text-stone-300 group-hover:bg-[#FF8C6B] group-hover:text-white transition-all">
                <Plus size={24} />
             </div>
             <span className="text-sm font-bold font-serif-jp uppercase tracking-widest">新しいセクションを追加する</span>
          </button>
        </div>
      </main>
    </div>
  );
};