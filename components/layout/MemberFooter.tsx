import React from 'react';

export const MemberFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 py-8">
      <div className="w-[94%] max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center opacity-40 grayscale">
          <img src="https://i.postimg.cc/sDKQrDBb/logoremaster.png" alt="Diet Academy" className="h-8 w-auto" />
          <span className="text-[10px] font-bold text-stone-500 ml-3 tracking-widest font-serif-jp" style={{ writingMode: 'vertical-rl' }}>2026</span>
        </div>
        
        <div className="text-[10px] font-medium text-stone-400 tracking-wider">
          © 2026 日本ダイエットアカデミー協会 | 学習管理システム v2.4
        </div>

        <div className="flex gap-6 text-[10px] font-bold text-stone-300 uppercase">
          <a href="#" className="hover:text-stone-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-stone-500 transition-colors">Terms</a>
          <a href="#" className="hover:text-stone-500 transition-colors">Rules</a>
        </div>
      </div>
    </footer>
  );
};