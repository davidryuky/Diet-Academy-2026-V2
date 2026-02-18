import { GraduationCap, Award, Crown, Rocket, Target } from 'lucide-react';

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
    name: 'Diet Master (学習版)',
    subtitle: 'ダイエット基礎実践認定',
    description: '知識の習得と認定証取得を目的とした標準プラン。一生モノの栄養学の基礎を築きます。',
    target: '教養・知識習得を優先する方',
    price: '59,800',
    period: '標準2ヶ月 / 質問1年間',
    features: ['全14章のデジタル講義', 'ダイエットマスター認定証', '1年間の質問サポート', 'オンライン試験'],
    color: 'bg-orange-500',
    accent: 'text-orange-500',
    icon: GraduationCap,
    path: '/courses/regular'
  },
  {
    id: 'regular-master',
    level: 'L01: Master Program',
    name: 'Diet Master (実践サポート版)',
    subtitle: '基礎認定 ＋ 3ヶ月集中減量サポート',
    description: '知識だけでなく「結果」を出すための最上位プラン。専任講師が3ヶ月間あなたのダイエットを伴走します。',
    target: '確実に体を変えたい・結果を出したい方',
    price: '79,800',
    period: '講義14章 ＋ 3ヶ月集中指導',
    features: ['全14章のデジタル講義', '専任講師の個別チャット指導', '週次フィードバック', 'ダイエット診断(必須)'],
    color: 'bg-emerald-600',
    accent: 'text-emerald-600',
    icon: Target,
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