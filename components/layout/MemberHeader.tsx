import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  LogOut, 
  Home, 
  LifeBuoy, 
  Bell,
  UserCircle
} from 'lucide-react';

export const MemberHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica de logout aqui
    navigate('/login');
  };

  return (
    <header className="bg-white border-b border-stone-100 h-20 sticky top-0 z-50">
      <div className="w-[94%] max-w-[1600px] mx-auto h-full flex items-center justify-between">
        
        {/* Logo e Identificação */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-end group">
            <img src="https://i.postimg.cc/sDKQrDBb/logoremaster.png" alt="Diet Academy" className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" />
            <span className="text-[10px] font-bold text-stone-300 ml-2 tracking-widest hidden md:block">STUDENT AREA</span>
          </Link>
          <div className="h-6 w-px bg-stone-100 mx-2 hidden md:block"></div>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-full">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold text-orange-600 uppercase">Demo Access</span>
          </div>
        </div>

        {/* Navegação de Utilidades */}
        <nav className="flex items-center gap-2 md:gap-6">
          <button 
            onClick={() => navigate('/')}
            className="p-2 text-stone-400 hover:text-stone-800 transition-colors flex flex-col items-center gap-1 group"
            title="Página Principal"
          >
            <Home size={20} className="group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-[9px] font-bold uppercase hidden md:block">Main Site</span>
          </button>

          <button 
            className="p-2 text-stone-400 hover:text-[#5D9B9B] transition-colors flex flex-col items-center gap-1 group"
            title="Suporte"
          >
            <LifeBuoy size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="text-[9px] font-bold uppercase hidden md:block">Support</span>
          </button>

          <button 
            className="p-2 text-stone-400 hover:text-orange-500 transition-colors flex flex-col items-center gap-1 group relative"
            title="Notificações"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
            <span className="text-[9px] font-bold uppercase hidden md:block">Alerts</span>
          </button>

          <div className="h-10 w-px bg-stone-100 mx-2"></div>

          {/* Perfil e Logout */}
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-bold text-stone-800 font-serif-jp">Demo User</div>
              <div className="text-[9px] text-stone-400 font-bold uppercase tracking-tighter">Premium Student</div>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-50 text-stone-600 hover:bg-red-50 hover:text-red-500 transition-all font-bold text-xs border border-stone-200"
            >
              <LogOut size={16} />
              <span className="hidden md:block">ログアウト</span>
            </button>
          </div>
        </nav>

      </div>
    </header>
  );
};