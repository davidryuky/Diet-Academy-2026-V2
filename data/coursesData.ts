import { GraduationCap, Award, Crown, Rocket } from 'lucide-react';

export interface CourseDetail {
  id: string;
  level: string;
  name: string;
  subtitle: string;
  description: string;
  target: string;
  price: string;
  fullPrice?: string; // Para mostrar descontos
  period: string;
  features: string[];
  color: string;
  accent: string;
  icon: any;
  path: string;
  isBundle?: boolean;
}

export const courses: CourseDetail[] = [
  {
    id: 'regular',
    level: 'L01: Basic Foundation',
    name: 'Diet Master',
    subtitle: 'ダイエット基礎実践認定',
    description: '全ての教育の土台となる科学的根拠。自分自身の体を変え、正しい知識の基礎を築きます。',
    target: '個人・初心者・全ての導入者',
    price: '59,800',
    period: '標準2ヶ月 (最短1ヶ月)',
    features: ['基礎栄養学の完全習得', '代謝メカニズムの理解', 'リバウンド防衛策', 'デジタル認定証授与'],
    color: 'bg-orange-500',
    accent: 'text-orange-500',
    icon: GraduationCap,
    path: '/courses/regular'
  },
  {
    id: 'senior',
    level: 'L02: Professional Coach',
    name: 'Diet Coaching Master',
    subtitle: 'ダイエット指導者認定',
    description: '他者を導くための心理学とカウンセリング技術。停滞期を突破させるプロの指導力を習得。',
    target: '講師・トレーナー・カウンセラー',
    price: '84,800',
    period: '標準3ヶ月 (最短1.5ヶ月)',
    features: ['コーチング心理学', '献立作成指導技術', '停滞期脱出メソッド', '指導者ライセンス授与'],
    color: 'bg-teal-600',
    accent: 'text-teal-600',
    icon: Award,
    path: '/courses/senior'
  },
  {
    id: 'professional',
    level: 'L03: Business Owner',
    name: 'Diet Professional Master',
    subtitle: 'ダイエットマネジメント運営認定',
    description: '事業としての仕組み化と運営。個人の才能に依存しない「売れるシステム」を施設に導入。',
    target: '独立・開業・経営者・サロンオーナー',
    price: '要お問合せ',
    period: '個別コンサルティング',
    features: ['店舗・スクール運営システム', 'リスクマネジメント', '集客マーケティング戦略', '施設認定証授与'],
    color: 'bg-indigo-700',
    accent: 'text-indigo-700',
    icon: Crown,
    path: '/courses/professional'
  }
];

export const bundles: CourseDetail[] = [
  {
    id: 'full-career-pack',
    level: 'Complete Success Path',
    name: 'Professional Career Pack',
    subtitle: '全3コース一括取得パック',
    description: '基礎から経営まで、ダイエットビジネスを成功させるための最短ルート。一括申し込み限定の特別優待。',
    target: '本気でプロを目指す方・経営者',
    price: '128,000',
    fullPrice: '144,600',
    period: '無期限サポート',
    features: ['全3コースの受講権', '優先質問サポート', '経営個別相談(1回)', '全ライセンス一括取得'],
    color: 'bg-gradient-to-br from-stone-800 to-black',
    accent: 'text-amber-500',
    icon: Rocket,
    path: '/checkout?courseId=full-career-pack',
    isBundle: true
  }
];