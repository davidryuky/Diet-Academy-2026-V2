
import React from 'react';
import { Button } from '../components/common/Button';
import { 
  Check, 
  ShieldCheck, 
  Clock,
  GraduationCap
} from 'lucide-react';
import { courses } from '../data/coursesData';
import { useNavigate } from 'react-router-dom';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();

  const regularStudy = courses.find(c => c.id === 'regular-study')!;

  return (
    <div className="min-h-screen bg-stone-50 py-24">
      <div className="max-w-[1600px] mx-auto px-6">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF8C6B] px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-orange-100">
            <Clock size={14} /> 2026年度 受講生募集中
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 font-serif-jp tracking-tight mb-8">
            一生使える知識と資格を手に入れる
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-stone-500 font-medium">
            ダイエットの学術理論を深く学ぶプログラム。<br />
            意志の力に頼るのをやめ、体のメカニズムを理解することから始めましょう。
          </p>
        </div>

        {/* Single Card Grid */}
        <div className="flex justify-center mb-24">
          
          {/* Card: Regular (L01) */}
          <div className="flex flex-col bg-white rounded-[2.5rem] border-2 border-orange-500 shadow-xl relative overflow-hidden group w-full max-w-md">
            <div className="bg-orange-500 text-white text-[10px] font-bold text-center py-2 tracking-widest uppercase">
              Step 01: Foundation
            </div>
            
            <div className="p-8 flex-grow">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white mb-6 shadow-md transition-colors">
                <GraduationCap size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-stone-800 font-serif-jp mb-1">
                レギュラーコース
              </h3>
              <p className="text-[10px] text-stone-400 font-bold mb-6 tracking-widest">
                SELF-STUDY PROGRAM
              </p>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-black text-stone-800 font-serif-jp">
                  {regularStudy.price}
                </span>
                <span className="text-xs text-stone-400 font-bold">円</span>
              </div>
              
              <ul className="space-y-3 text-xs font-medium text-stone-600 mb-8">
                 <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" /> 
                    <span>全14章の共通講義アクセス</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" /> 
                    <span>ダイエットマスター認定資格</span>
                 </li>
                 <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" /> 
                    <span>1年間の質問サポート</span>
                 </li>
              </ul>
            </div>

            <div className="p-6 pt-0 mt-auto">
              <Button 
                fullWidth 
                variant="orange" 
                className="rounded-xl h-12 bg-orange-500 hover:bg-orange-600"
                onClick={() => navigate(`/checkout?courseId=regular-study`)}
              >
                申し込む
              </Button>
            </div>
          </div>

        </div>

        {/* Support & Guarantee */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-stone-200 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-stone-800 mb-2 font-serif-jp">100% 資格取得・活動サポート</h4>
              <p className="text-sm text-stone-500 leading-relaxed font-medium">
                あなたの学びが止まらないよう、当アカデミーが生涯にわたってバックアップします。
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

