import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Button } from '../components/common/Button';
import { courses, bundles } from '../data/coursesData';
import { 
  ShieldCheck, 
  Lock, 
  ChevronLeft, 
  CreditCard, 
  CheckCircle2, 
  Zap,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';

export const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState<'card' | 'amazon' | 'paypay'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Extrair courseId da URL
  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('courseId');
  
  // Buscar em cursos normais ou bundles
  const course = [...courses, ...bundles].find(c => c.id === courseId) || courses[0];

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('決済処理が完了しました。受講生エリアへ移動します。');
      sessionStorage.setItem('member_auth', 'true');
      navigate('/member-area');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <div className="bg-white border-b border-stone-200 py-4">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center text-stone-400 hover:text-stone-800 transition-colors group">
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold ml-1">戻る</span>
          </button>
          <div className="flex items-center gap-2">
            <img src="https://i.postimg.cc/sDKQrDBb/logoremaster.png" alt="Diet Academy" className="h-8 w-auto opacity-60" />
            <div className="h-4 w-px bg-stone-200 mx-2"></div>
            <span className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">Secure Checkout</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="lg:w-2/3 space-y-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-stone-100">
              <h1 className="text-2xl font-bold text-stone-800 mb-8 font-serif-jp flex items-center gap-3">
                <ShoppingBag size={24} className="text-[#FF8C6B]" />
                お申し込み情報の入力
              </h1>

              <form onSubmit={handlePayment} className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest border-b border-stone-50 pb-2">基本情報</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-600">お名前</label>
                      <input type="text" placeholder="山田 太郎" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF8C6B] transition-all" required />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-stone-600">メールアドレス</label>
                      <input type="email" placeholder="example@diet.jp" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-[#FF8C6B] transition-all" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-sm font-bold text-stone-400 uppercase tracking-widest border-b border-stone-50 pb-2">お支払い方法</h3>
                  <div className="grid gap-3">
                    <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedPayment === 'card' ? 'border-[#FF8C6B] bg-orange-50/30' : 'border-stone-100 bg-white hover:border-stone-200'}`}>
                      <div className="flex items-center gap-4">
                        <input type="radio" name="payment" checked={selectedPayment === 'card'} onChange={() => setSelectedPayment('card')} className="hidden" />
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedPayment === 'card' ? 'bg-[#FF8C6B] text-white' : 'bg-stone-100 text-stone-400'}`}>
                          <CreditCard size={20} />
                        </div>
                        <span className="font-bold text-stone-800">クレジットカード</span>
                      </div>
                    </label>

                    <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${selectedPayment === 'amazon' ? 'border-[#FF9900] bg-orange-50/20' : 'border-stone-100 bg-white hover:border-stone-200'}`}>
                      <div className="flex items-center gap-4">
                        <input type="radio" name="payment" checked={selectedPayment === 'amazon'} onChange={() => setSelectedPayment('amazon')} className="hidden" />
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedPayment === 'amazon' ? 'bg-[#FF9900] text-white' : 'bg-stone-100 text-stone-400'}`}>
                          <Zap size={20} />
                        </div>
                        <span className="font-bold text-stone-800">Amazon Pay</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="pt-6">
                  <Button type="submit" fullWidth size="xl" variant="orange" disabled={isProcessing} className="h-16">
                    {isProcessing ? '処理中...' : '注文を確定して受講を開始する'}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                <h2 className="text-lg font-bold text-stone-800 mb-6 font-serif-jp">ご注文内容</h2>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center text-white flex-shrink-0 shadow-sm`}>
                    <course.icon size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{course.level}</div>
                    <div className="text-sm font-bold text-stone-800 leading-tight">{course.name}</div>
                  </div>
                </div>

                <div className="space-y-4 border-t border-stone-50 pt-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-500">受講料</span>
                    <span className="text-stone-800 font-bold">¥{course.price}</span>
                  </div>
                  <div className="pt-4 border-t border-stone-100 flex justify-between items-baseline">
                    <span className="text-stone-800 font-bold">合計金額</span>
                    <div className="text-right">
                      <span className="text-2xl font-black text-[#FF8C6B] font-serif-jp">¥{course.price}</span>
                      <span className="text-[10px] text-stone-400 block font-bold">消費税込み</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};