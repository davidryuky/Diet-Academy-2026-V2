import React, { useState, useCallback, Fragment, useRef, useEffect } from 'react';
import { 
  Calculator, 
  Info, 
  ArrowRight, 
  Wand2, 
  Venus, 
  Mars, 
  Cake, 
  Ruler, 
  Scale, 
  Target, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { ResultModal } from '../components/calculator/ResultModal';

interface DietFormData {
  gender: 'female' | 'male';
  age: string;
  height: string;
  weight: string;
  targetWeight: string;
  months: string;
}

const ModernFormInput: React.FC<{
    icon: React.ElementType;
    name: string;
    value: string;
    unit: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ icon: Icon, name, value, unit, placeholder, onChange }) => (
    <div className="group">
        <div className="flex items-stretch focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#FF8C6B] transition-all duration-300 rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:border-[#FF8C6B]/30">
            <div className="flex-grow flex items-stretch bg-white">
                <span className="inline-flex items-center pl-4 pr-1 text-stone-300">
                    <Icon size={18} strokeWidth={2} />
                </span>
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    name={name}
                    id={name}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent p-3.5 text-stone-800 text-center placeholder:text-stone-300 outline-none font-bold text-base"
                    placeholder={placeholder}
                />
            </div>
            <span className="inline-flex items-center justify-center w-16 bg-stone-50 text-stone-500 text-xs font-bold border-l border-stone-100">
                {unit}
            </span>
        </div>
    </div>
);

export const CalculatorPage: React.FC = () => {
    const [formData, setFormData] = useState<DietFormData>({
        gender: 'female',
        age: '',
        height: '',
        weight: '',
        targetWeight: '',
        months: '',
    });
    const [results, setResults] = useState<any>(null);
    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (/^\d*$/.test(value)) {
           setFormData(prev => ({ ...prev, [name]: value }));
        }
    };
    
    const handleGenderChange = (gender: 'female' | 'male') => {
        setFormData(prev => ({ ...prev, gender }));
    };

    const calculateDietPlan = useCallback(() => {
        const { age, height, weight, targetWeight, months, gender } = formData;
        const numAge = parseInt(age, 10);
        const numHeight = parseInt(height, 10);
        const numWeight = parseInt(weight, 10);
        const numTargetWeight = parseInt(targetWeight, 10);
        const numMonths = parseInt(months, 10);

        if ([numAge, numHeight, numWeight, numTargetWeight, numMonths].some(val => isNaN(val) || val <= 0)) {
            setError('すべての項目に正しい数値を入力してください。');
            return null;
        }
        
        if (numTargetWeight >= numWeight) {
            setError('目標体重は現在の体重より少なく設定してください。');
            return null;
        }

        const heightInMeters = numHeight / 100;
        const bmi = numWeight / (heightInMeters * heightInMeters);
        
        let bmr: number;
        if (gender === 'male') {
            bmr = (10 * numWeight) + (6.25 * numHeight) - (5 * numAge) + 5;
        } else {
            bmr = (10 * numWeight) + (6.25 * numHeight) - (5 * numAge) - 161;
        }
        
        const idealWeight = 22 * (heightInMeters * heightInMeters);
        const weightToLose = numWeight - numTargetWeight;
        const totalCaloriesToLose = weightToLose * 7200;
        const dailyCalorieDeficit = totalCaloriesToLose / (numMonths * 30);
        
        const activityLevel = 1.2;
        const tdee = bmr * activityLevel;
        const calculatedDailyIntake = tdee - dailyCalorieDeficit;
        
        let warningMessage: string | undefined = undefined;

        if (calculatedDailyIntake < bmr) {
            warningMessage = `目標を${numMonths}ヶ月で達成するには、摂取カロリーを約${Math.round(calculatedDailyIntake)}kcalにする必要があります。これはあなたの基礎代謝量（${Math.round(bmr)}kcal）を下回っており、筋肉が落ちやすくリバウンドのリスクが高い極端な設定です。プロの指導を強く推奨します。`;
        }
        
        if ((tdee - bmr) <= 0 && weightToLose > 0) {
            setError('現在の設定では、健康的な体重減少は困難です。より長い期間を設定するか、専門家にご相談ください。');
            return null;
        }

        return { 
            bmi, 
            idealWeight, 
            bmr,
            tdee,
            currentWeight: numWeight,
            targetWeight: numTargetWeight,
            weightToLose, 
            dailyIntake: calculatedDailyIntake,
            months: numMonths,
            warningMessage 
        };
    }, [formData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setResults(null);
        setError('');

        setTimeout(() => {
            const resultData = calculateDietPlan();
            setIsLoading(false);
            if(resultData) {
                setResults(resultData);
                setIsModalOpen(true);
            }
        }, 1000);
    };

    return (
        <div className="bg-[#FDFCFB] min-h-screen pb-20">
            {/* Header Area */}
            <div className="bg-white border-b border-stone-200 py-16 mb-12">
               <div className="max-w-4xl mx-auto px-6 text-center">
                  <span className="text-[#FF8C6B] font-bold text-xs tracking-[0.3em] uppercase block mb-4">Diagnostics</span>
                  <h1 className="text-4xl md:text-5xl font-bold text-stone-800 font-serif-jp leading-tight">
                     ダイエット計算機
                  </h1>
                  <p className="mt-6 text-stone-500 font-medium leading-relaxed max-w-2xl mx-auto">
                     あなたの性別・年齢・現在の体格と目標から、<br className="hidden md:block" />
                     科学的なダイエットプランをシミュレーションします。
                  </p>
               </div>
            </div>

            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-[3rem] shadow-xl border border-stone-100 overflow-hidden flex flex-col md:flex-row">
                    {/* Form Side */}
                    <div className="w-full md:w-3/5 p-8 md:p-14 relative">
                        <div className="relative z-10 space-y-8">
                            <div className="flex items-center gap-3">
                               <div className="w-12 h-12 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#FF8C6B]">
                                  <Calculator size={24} />
                               </div>
                               <div>
                                  <h2 className="text-xl font-bold text-stone-800 font-serif-jp">診断フォーム</h2>
                                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Input your data</p>
                               </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Gender Switcher */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest ml-1">性別</label>
                                    <div className="relative flex p-1 bg-stone-100 rounded-2xl max-w-xs">
                                        <div className={`absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm transition-all duration-300 ease-in-out ${formData.gender === 'male' ? 'translate-x-full' : ''}`}></div>
                                        <button 
                                            type="button" 
                                            onClick={() => handleGenderChange('female')} 
                                            className={`relative z-10 flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 rounded-xl transition-colors duration-300 ${formData.gender === 'female' ? 'text-[#FF8C6B]' : 'text-stone-400'}`}
                                        >
                                            <Venus size={16} /> 女性
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={() => handleGenderChange('male')} 
                                            className={`relative z-10 flex-1 py-3 text-sm font-bold flex items-center justify-center gap-2 rounded-xl transition-colors duration-300 ${formData.gender === 'male' ? 'text-teal-600' : 'text-stone-400'}`}
                                        >
                                            <Mars size={16} /> 男性
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <ModernFormInput icon={Cake} name="age" value={formData.age} unit="歳" placeholder="年齢" onChange={handleInputChange} />
                                    <ModernFormInput icon={Ruler} name="height" value={formData.height} unit="cm" placeholder="身長" onChange={handleInputChange} />
                                    <ModernFormInput icon={Scale} name="weight" value={formData.weight} unit="kg" placeholder="現在の体重" onChange={handleInputChange} />
                                    <ModernFormInput icon={Target} name="targetWeight" value={formData.targetWeight} unit="kg" placeholder="目標体重" onChange={handleInputChange} />
                                    <div className="sm:col-span-2">
                                        <ModernFormInput icon={Calendar} name="months" value={formData.months} unit="ヶ月" placeholder="目標期間" onChange={handleInputChange} />
                                    </div>
                                </div>

                                {error && (
                                    <div className="bg-red-50 text-red-500 text-xs font-bold p-4 rounded-xl flex items-center gap-2 border border-red-100">
                                       <Info size={14} /> {error}
                                    </div>
                                )}

                                <div className="pt-4">
                                    <button 
                                        type="submit" 
                                        className="w-full bg-stone-800 text-white py-5 rounded-[1.5rem] font-bold text-lg shadow-lg hover:bg-stone-900 transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                計算中...
                                            </>
                                        ) : (
                                            <>
                                                <Wand2 size={20} className="group-hover:rotate-12 transition-transform" />
                                                シミュレーションを実行
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="hidden md:block md:w-2/5 relative bg-[#FFF5F0]">
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-100/50 to-transparent"></div>
                        <img 
                           src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80" 
                           alt="Diet motivation" 
                           className="w-full h-full object-cover grayscale-[20%] opacity-90" 
                        />
                        <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-[2rem] border border-white/20">
                           <div className="flex items-center gap-3 mb-3">
                              <div className="w-8 h-8 rounded-full bg-[#FF8C6B] text-white flex items-center justify-center">
                                 <Sparkles size={16} />
                              </div>
                              <span className="font-bold text-stone-800 text-sm">Professional Analysis</span>
                           </div>
                           <p className="text-xs text-stone-600 leading-relaxed font-medium">
                              当協会のシミュレーションは、最新の生理学・栄養学のデータに基づいています。無理な減量は代謝を落とすだけ。正しい設計が成功の近道です。
                           </p>
                        </div>
                    </div>
                </div>
            </div>

            <ResultModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={results}
            />
        </div>
    );
};