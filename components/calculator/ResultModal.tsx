import React from 'react';
import { X, TrendingDown, Info, AlertTriangle, ArrowRight, Sparkles, Target, Activity } from 'lucide-react';
import { useNavigate } from 'react-router';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

export const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, data }) => {
  const navigate = useNavigate();
  if (!isOpen || !data) return null;

  const bmiValue = parseFloat(data.bmi.toFixed(1));
  
  // Determinando status do IMC
  let bmiStatus = "普通体重";
  let bmiColor = "text-green-500";
  if (bmiValue < 18.5) { bmiStatus = "低体重"; bmiColor = "text-blue-400"; }
  else if (bmiValue >= 25 && bmiValue < 30) { bmiStatus = "肥満(1度)"; bmiColor = "text-orange-400"; }
  else if (bmiValue >= 30) { bmiStatus = "肥満(2度以上)"; bmiColor = "text-red-500"; }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-[#FDFCFB] w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in fade-in duration-300">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#FF8C6B] to-[#FFB088] p-8 text-white flex justify-between items-start">
           <div>
              <h2 className="text-2xl font-bold font-serif-jp mb-1">あなたのダイエット診断結果</h2>
              <p className="text-white/80 text-xs font-bold uppercase tracking-widest">Personalized Health Analysis</p>
           </div>
           <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors text-white">
              <X size={24} />
           </button>
        </div>

        <div className="p-8 md:p-10 space-y-10 overflow-y-auto max-h-[70vh]">
          {/* Main Results Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="bg-white p-4 rounded-2xl border border-stone-100 text-center">
                <div className="text-[10px] text-stone-400 font-bold mb-1 uppercase">BMI</div>
                <div className={`text-2xl font-bold ${bmiColor}`}>{bmiValue}</div>
                <div className="text-[9px] font-bold text-stone-500 mt-1">{bmiStatus}</div>
             </div>
             <div className="bg-white p-4 rounded-2xl border border-stone-100 text-center">
                <div className="text-[10px] text-stone-400 font-bold mb-1 uppercase">Ideal Weight</div>
                <div className="text-2xl font-bold text-stone-800">{Math.round(data.idealWeight)}<span className="text-xs ml-0.5">kg</span></div>
                <div className="text-[9px] font-bold text-stone-500 mt-1">健康的な標準体重</div>
             </div>
             <div className="bg-white p-4 rounded-2xl border border-stone-100 text-center">
                <div className="text-[10px] text-stone-400 font-bold mb-1 uppercase">BMR</div>
                <div className="text-2xl font-bold text-stone-800">{Math.round(data.bmr)}<span className="text-xs ml-0.5">kcal</span></div>
                <div className="text-[9px] font-bold text-stone-500 mt-1">1日の基礎代謝</div>
             </div>
             <div className="bg-white p-4 rounded-2xl border border-stone-100 text-center">
                <div className="text-[10px] text-stone-400 font-bold mb-1 uppercase">Daily Intake</div>
                <div className="text-2xl font-bold text-[#FF8C6B]">{Math.round(data.dailyIntake)}<span className="text-xs ml-0.5">kcal</span></div>
                <div className="text-[9px] font-bold text-stone-500 mt-1">目標達成の摂取目安</div>
             </div>
          </div>

          {/* Warning Section */}
          {data.warningMessage && (
            <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex gap-4 items-start">
               <AlertTriangle className="text-orange-500 flex-shrink-0" size={20} />
               <div>
                  <h4 className="text-sm font-bold text-orange-800 mb-1">健康上の注意点</h4>
                  <p className="text-xs text-orange-700 leading-relaxed">{data.warningMessage}</p>
               </div>
            </div>
          )}

          {/* Marketing Call to Action */}
          <section className="space-y-6">
             <div className="text-center">
                <h3 className="text-xl font-bold text-stone-800 font-serif-jp mb-2">
                   ただ「食べない」だけでは、<br className="md:hidden" />
                   体は変わりません。
                </h3>
                <p className="text-sm text-stone-500 font-medium">
                   数値がわかっても、実践できなければリバウンドの元です。<br />
                   科学的に正しい「一生太らない知識」を手に入れませんか？
                </p>
             </div>

             <div className="bg-stone-50 rounded-3xl p-6 border border-stone-200 grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#FF8C6B]">
                      <Sparkles size={20} />
                   </div>
                   <div className="text-xs font-bold text-stone-700">プロ監修の<br />栄養メソッド</div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#5D9B9B]">
                      <Target size={20} />
                   </div>
                   <div className="text-xs font-bold text-stone-700">挫折させない<br />メンタル管理術</div>
                </div>
             </div>

             <button 
                onClick={() => navigate('/pricing')}
                className="w-full bg-[#FF8C6B] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:bg-[#FF7F59] transition-all flex items-center justify-center gap-3 group"
             >
                自分にぴったりのコースを見る
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
             </button>
             
             <p className="text-[10px] text-stone-400 text-center font-medium">
                ダイエットマスター資格講座なら、オンラインで完kel。質問無制限サポート。
             </p>
          </section>
        </div>
      </div>
    </div>
  );
};