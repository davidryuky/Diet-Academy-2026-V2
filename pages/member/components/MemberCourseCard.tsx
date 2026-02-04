import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Button } from '../../../components/common/Button';
import { CourseDetail } from '../../../data/coursesData';

interface MemberCourseCardProps {
  course: CourseDetail;
  isLocked: boolean;
  progress: number;
}

export const MemberCourseCard: React.FC<MemberCourseCardProps> = ({ course, isLocked, progress }) => {
  const navigate = useNavigate();

  return (
    <div 
      className={`group relative bg-white rounded-[2rem] border border-stone-200 overflow-hidden shadow-sm flex flex-col transition-all duration-500 ${
        isLocked ? 'opacity-75 grayscale hover:grayscale-0' : ''
      }`}
    >
      {/* Locked Overlay */}
      {isLocked && (
        <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-[3px] z-20 flex flex-col items-center justify-center text-center p-6 transition-opacity group-hover:opacity-90">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4 border border-white/20">
            <Lock size={24} />
          </div>
          <div className="text-white font-bold text-sm mb-6 font-serif-jp leading-relaxed">
            このコンテンツは<br />未購入またはロックされています
          </div>
          {/* 
            Removido o override 'bg-white text-stone-900' que causava conflito.
            Agora usa o padrão 'orange' (Coral com Texto Branco) que tem contraste 
            perfeito sobre o fundo escuro do overlay.
          */}
          <Button 
            size="sm" 
            variant="orange" 
            onClick={() => navigate('/pricing')}
            className="shadow-lg shadow-black/20"
          >
            コースを有効化する
          </Button>
        </div>
      )}

      {/* Course Header/Visual */}
      <div className={`h-32 ${course.color} flex items-center justify-center`}>
        <course.icon size={48} className="text-white/80" />
      </div>

      {/* Course Content Info */}
      <div className="p-8 flex-grow">
        <div className="text-[10px] font-bold text-stone-400 uppercase mb-1 tracking-widest">{course.level}</div>
        <h3 className="text-lg font-bold text-stone-800 mb-3 font-serif-jp leading-tight">{course.name}</h3>
        <p className="text-xs text-stone-500 line-clamp-3 mb-6 font-medium leading-relaxed">
          {course.description}
        </p>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#FF8C6B] transition-all duration-1000" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[10px] font-bold text-stone-400">
            <span>PROGRESS</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-6 bg-stone-50 border-t border-stone-100 mt-auto">
        <button 
          disabled={isLocked}
          className={`w-full py-2.5 rounded-xl border font-bold text-xs font-serif-jp transition-all ${
            isLocked 
            ? 'border-stone-200 text-stone-500 bg-stone-100/50 cursor-not-allowed opacity-60' 
            : 'border-[#FF8C6B] text-[#FF8C6B] hover:bg-[#FF8C6B] hover:text-white bg-white shadow-sm'
          }`}
        >
          {isLocked ? '学習を開始する' : '受講を継続する'}
        </button>
      </div>
    </div>
  );
};