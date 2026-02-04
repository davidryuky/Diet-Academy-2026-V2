import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { User, Lock, AlertCircle } from 'lucide-react';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'demo' && password === 'demo') {
      navigate('/member-area');
    } else {
      setError('ユーザー名またはパスワードが正しくありません。 (demo/demo)');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] bg-stone-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-xl border border-stone-100">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#FFF5F0] rounded-3xl flex items-center justify-center text-[#FF8C6B] mx-auto mb-6 shadow-sm">
              <User size={40} strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl font-bold text-stone-800 font-serif-jp">受講生ログイン</h1>
            <p className="text-stone-400 text-sm mt-2">Member Login</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 mb-6 text-sm border border-red-100 animate-in fade-in slide-in-from-top-2">
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">ユーザーID / メールアドレス</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-300 group-focus-within:text-[#FF8C6B] transition-colors">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-[#FF8C6B] focus:ring-4 focus:ring-[#FF8C6B]/5 transition-all font-medium text-stone-800"
                  placeholder="demo"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">パスワード</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-300 group-focus-within:text-[#FF8C6B] transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-[#FF8C6B] focus:ring-4 focus:ring-[#FF8C6B]/5 transition-all font-medium text-stone-800"
                  placeholder="demo"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-stone-300 text-[#FF8C6B] focus:ring-[#FF8C6B]" />
                <span className="text-xs text-stone-500 font-medium group-hover:text-stone-700">ログイン状態を保持</span>
              </label>
              <a href="#" className="text-xs text-stone-400 hover:text-[#FF8C6B] font-medium underline underline-offset-4">パスワードをお忘れの方</a>
            </div>

            <Button type="submit" fullWidth size="lg" variant="orange" className="h-14">
              ログインする
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-stone-100 text-center">
            <p className="text-sm text-stone-500 mb-4">アカウントをお持ちでないですか？</p>
            <Button variant="outline" fullWidth onClick={() => navigate('/seekers')}>
              新規受講のお申し込みはこちら
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};