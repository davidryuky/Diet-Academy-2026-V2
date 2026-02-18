import React, { useState } from 'react';
import { Button } from '../components/common/Button';
import { Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] p-12 text-center shadow-xl border border-stone-100 animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-2xl font-bold text-stone-800 font-serif-jp mb-4">お問い合わせ完了</h2>
          <p className="text-stone-500 mb-8 font-medium leading-relaxed">
            お問い合わせありがとうございます。担当者より24時間以内に折り返しご連絡させていただきます。
          </p>
          <Button fullWidth variant="orange" onClick={() => window.location.href = '/'}>ホームへ戻る</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#FF8C6B] font-bold text-xs tracking-[0.3em] uppercase block mb-4">Inquiry / Consultation</span>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 font-serif-jp">お問い合わせ・導入相談</h1>
          <p className="mt-6 text-stone-500 max-w-2xl mx-auto font-medium">
            プロフェッショナルコースの導入、法人契約、その他ご不明点はこちらからお気軽にご連絡ください。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Info Side */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col items-center text-center">
               <div className="w-12 h-12 bg-orange-50 text-[#FF8C6B] rounded-xl flex items-center justify-center mb-6">
                  <Phone size={24} />
               </div>
               <h3 className="font-bold text-stone-800 mb-2 font-serif-jp">お電話でのお問い合わせ</h3>
               <p className="text-lg font-bold text-stone-900 mb-1">0120-XXX-XXX</p>
               <p className="text-[10px] text-stone-400 uppercase font-bold">10:00 - 18:00 (平日)</p>
            </div>

            <div className="bg-stone-900 p-8 rounded-[2rem] shadow-xl text-white flex flex-col items-center text-center">
               <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare size={24} />
               </div>
               <h3 className="font-bold mb-2 font-serif-jp">LINE公式アカウント</h3>
               <p className="text-xs text-stone-400 mb-6">友達追加ですぐに質問できます</p>
               <Button variant="teal" fullWidth className="bg-emerald-500 hover:bg-emerald-600 border-none">LINEで相談する</Button>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">お名前</label>
                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF8C6B] transition-all" required />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">貴社名・施設名 (法人の場合)</label>
                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF8C6B] transition-all" />
                  </div>
               </div>

               <div className="space-y-1.5">
                 <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">メールアドレス</label>
                 <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF8C6B] transition-all" required />
               </div>

               <div className="space-y-1.5">
                 <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">お問い合わせ内容</label>
                 <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF8C6B] transition-all font-bold text-sm">
                    <option>プロフェッショナルコース導入の相談</option>
                    <option>シニアコースの詳細について</option>
                    <option>法人・施設認定について</option>
                    <option>その他</option>
                 </select>
               </div>

               <div className="space-y-1.5">
                 <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">メッセージ内容</label>
                 <textarea rows={6} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF8C6B] transition-all resize-none" required></textarea>
               </div>

               <Button type="submit" fullWidth size="lg" variant="orange" className="h-14">
                  <Send size={18} className="mr-2" /> 
                  送信する
               </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};