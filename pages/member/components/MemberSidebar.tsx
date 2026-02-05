
import React from 'react';
// Fix: Import useNavigate from 'react-router'
import { useNavigate } from 'react-router';
import { 
  LayoutDashboard, 
  CheckCircle2, 
  FileText, 
  Award, 
  LifeBuoy, 
  Bell, 
  Settings, 
  LogOut, 
  User 
} from 'lucide-react';

interface MemberSidebarProps {
  userName: string;
  memberStatus: string;
}

// Fix: Add MemberSidebarProps to React.FC and destructure props to fix type error
export const MemberSidebar: React.FC<MemberSidebarProps> = ({ userName, memberStatus }) => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'ダッシュボード', icon: LayoutDashboard, active: true, path: '/member-area' },
    { label: '学習の進捗', icon: CheckCircle2, path: '#' },
    { label: '課題・テスト', icon: FileText, path: '#' },
    { label: 'マイ認定証', icon: Award, path: '/demo' },
    { label: '受講生サポート', icon: LifeBuoy, path: '#' },
    { label: 'お知らせ', icon: Bell, path: '#' },
    { label: '設定', icon: Settings, path: '#' },
  ];

  return (
    <aside className="w-full md:w-64 bg-white border-r border-stone-100 p-6 space-y-8 flex-shrink-0">
      {/* User Profile Summary */}
      <div className="flex items-center gap-4 mb-10 px-2">
        <div className="w-12 h-12 rounded-2xl bg-[#FF8C6B]/10 flex items-center justify-center text-[#FF8C6B]">
          <User size={24} />
        </div>
        <div>
          <div className="text-sm font-bold text-stone-800 font-serif-jp">{userName}</div>
          <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">{memberStatus}</div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-1">
        {menuItems.map((item, idx) => (
          <button 
            key={idx}
            onClick={() => item.path !== '#' && navigate(item.path)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              item.active 
              ? 'bg-[#FF8C6B] text-white shadow-md shadow-orange-100' 
              : 'text-stone-500 hover:bg-stone-50 hover:text-stone-800'
            }`}
          >
            <item.icon size={18} />
            <span className="font-serif-jp whitespace-nowrap">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout Action */}
      <div className="pt-10">
        <button 
          onClick={() => navigate('/member')}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold text-stone-400 hover:text-red-500 hover:bg-red-50 transition-all"
        >
          <LogOut size={18} />
          <span className="font-serif-jp">ログアウト</span>
        </button>
      </div>
    </aside>
  );
};
