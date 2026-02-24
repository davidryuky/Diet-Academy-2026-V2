
import { GraduationCap, Award, Crown, Rocket, Target, MessageCircle } from 'lucide-react';

export interface CourseDetail {
  id: string;
  level: string;
  name: string;
  subtitle: string;
  description: string;
  target: string;
  price: string;
  fullPrice?: string;
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
    id: 'regular-study',
    level: 'L01: Basic Foundation',
    name: '学習版',
    subtitle: 'ダイエット基礎理論習得',
    description: '自分のペースで学び、資格を取得したい方向けの標準プラン。全14章の共通カリキュラムで一生モノの知識を築きます。',
    target: '知識習得・資格保持を優先する方',
    price: '66,000',
    period: '標準2ヶ月 / 質問1年間',
    features: ['全14章のデジタル講義', 'ダイエットマスター認定証', '1年間の質問サポート', 'オンライン試験'],
    color: 'bg-orange-500',
    accent: 'text-orange-500',
    icon: GraduationCap,
    path: '/courses/regular'
  },
  {
    id: 'regular-master',
    level: 'L01: Practical Support',
    name: '実践サポート版',
    subtitle: '基礎理論 ＋ 3ヶ月減量伴走',
    description: '共通の14章の学びに加え、専任講師が3ヶ月間あなたのダイエットを徹底サポート。確実に結果を出したい方のための上位プラン。',
    target: '確実に体を変えたい・実践を重視する方',
    price: '79,800',
    period: '講義14章 ＋ 3ヶ月集中指導',
    features: ['全14章のデジタル講義', '専任講師の個別チャット指導', '3ヶ月間の実践サポート', 'ダイエットマスター認定証'],
    color: 'bg-emerald-600',
    accent: 'text-emerald-600',
    icon: MessageCircle,
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
    period: '標準3ヶ月 / 指導者ライセンス',
    features: ['コーチング心理学', '献立作成指導技術', '停滞期脱出メソッド', 'Wライセンス授与'],
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

export const comparisonFeatures = [
  { name: "デジタル講義アクセス", study: true, master: true, senior: true, pro: true },
  { name: "ダイエットマスター認定証", study: true, master: true, senior: true, pro: true },
  { name: "1年間の質問サポート", study: true, master: true, senior: true, pro: true },
  { name: "専任講師の個別指導(3ヶ月)", study: false, master: true, senior: true, pro: true },
  { name: "シニアコーチ認定資格", study: false, master: false, senior: true, pro: true },
  { name: "指導者用カウンセリング技術", study: false, master: false, senior: true, pro: true },
  { name: "ビジネス運営ライセンス", study: false, master: false, senior: false, pro: true },
  { name: "経営個別コンサルティング", study: false, master: false, senior: false, pro: true },
];
