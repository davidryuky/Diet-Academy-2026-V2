
import React, { useState } from 'react';
// Fix: Import useNavigate from 'react-router'
import { useNavigate } from 'react-router';
import { Button } from '../../components/common/Button';
import { ShieldCheck, Lock, User, AlertCircle } from 'lucide-react';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      // Salva a sessão para o Guard ler
      sessionStorage.setItem('admin_auth', 'true');
      navigate('/admin');
    } else {
      setError('Acesso negado. Credenciais administrativas inválidas.');
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-500">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-stone-100 rounded-3xl flex items-center justify-center text-stone-800 mx-auto mb-6">
              <ShieldCheck size={40} strokeWidth={1.5} />
            </div>
            <h1 className="text-2xl font-bold text-stone-800 font-serif-jp uppercase tracking-tighter">System Administrator</h1>
            <p className="text-stone-400 text-xs mt-2 font-bold uppercase tracking-widest">Management Portal</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 mb-6 text-sm border border-red-100 animate-in slide-in-from-top-2">
              <AlertCircle size={18} className="flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Admin ID</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-300 group-focus-within:text-stone-800 transition-colors">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-stone-800 focus:ring-4 focus:ring-stone-800/5 transition-all font-medium"
                  placeholder="admin"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">Master Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-300 group-focus-within:text-stone-800 transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-stone-800 focus:ring-4 focus:ring-stone-800/5 transition-all font-medium"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <Button type="submit" fullWidth size="lg" variant="teal" className="h-14 bg-stone-800 hover:bg-stone-900 border-none shadow-xl">
              Enter Dashboard
            </Button>
          </form>
          
          <div className="mt-8 text-center text-[10px] text-stone-400 font-medium">
            Authorized Personnel Only. All actions are logged.
          </div>
        </div>
      </div>
    </div>
  );
};
