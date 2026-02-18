
// Data structure for professional course chapters deep dive
export interface ChapterSection {
  title: string;
  content: string[];
}

export interface ChapterDetail {
  num: string;
  title: string;
  subtitle: string;
  sections: ChapterSection[];
  isDraft?: boolean;
}

// Export the chapter details used by the ProfessionalChapterDetail page
export const professionalChapters: Record<string, ChapterDetail> = {
  "01": {
    num: "01",
    title: "ビジネスとしてのダイエット",
    subtitle: "才能依存からの脱却と持続可能なビジョンの構築",
    sections: [
      {
        title: "才能依存からの脱却",
        content: [
          "多くのダイエット指導が、指導者の個人的な『経験』や『カリスマ性』に頼っています。しかし、それでは事業としての継続性や再現性が確保できません。",
          "プロフェッショナルコースでは、誰が担当しても同じ成果を出せる『標準化されたシステム』の構築を学びます。"
        ]
      },
      {
        title: "持続可能なビジョンの構築",
        content: [
          "単発の成功ではなく、長期的なビジネスモデルの設計方法を解説します。",
          "信頼を資産に変え、紹介とリピートが自然に生まれる仕組みを構築します。"
        ]
      }
    ]
  },
  "02": {
    num: "02",
    title: "ビジネスデザイン",
    subtitle: "集客からサポート開始までの全体構造の設計",
    sections: [
      {
        title: "導線の最適化",
        content: [
          "見込み客がどのようにサービスを知り、信頼し、購入に至るか。その全ステップをデザインします。",
          "WEB集客から対面カウンセリングまでのスムーズな移行方法を学びます。"
        ]
      }
    ]
  },
  "03": {
    num: "03",
    title: "診断・初回カウンセリング設計",
    subtitle: "直感を排除した客観的判断基準の構築",
    sections: [
      {
        title: "標準プロトコルの導入",
        content: [
          "ヒアリング項目を完全にマニュアル化し、抜け漏れのない現状把握を可能にします。",
          "顧客の課題を数値と論理で可視化する手法を学びます。"
        ]
      }
    ]
  },
  "04": {
    num: "04",
    title: "行動変容療法のデザイン",
    subtitle: "習慣のズレを特定し、自然に変わるプランを作る",
    sections: [
      {
        title: "習慣の分析技術",
        content: [
          "62項目のチェックリストを使用し、本人が気づいていない太る習慣を特定します。",
          "意志力に頼らない環境設計のアプローチを学びます。"
        ]
      }
    ]
  },
  "05": {
    num: "05",
    title: "3ヶ月サポート運用モデル",
    subtitle: "成果と継続を安定させる運用の仕組み",
    sections: [
      {
        title: "90日間のルーチン管理",
        content: [
          "週単位での目標設定とフィードバックの型を定めます。",
          "停滞期を予測し、事前に対策を講じる予防的サポートを学びます。"
        ]
      }
    ]
  },
  "06": {
    num: "06",
    title: "ユニット認定と責任",
    subtitle: "施設全体の信頼性を担保する管理体制",
    sections: [],
    isDraft: true
  },
  "07": {
    num: "07",
    title: "チーム運営とトレーニング設計",
    subtitle: "品質を維持しながら自律的に動くチームの育て方",
    sections: [],
    isDraft: true
  },
  "08": {
    num: "08",
    title: "倫理と専門的限界",
    subtitle: "プロとしての誇りと法的安全",
    sections: [],
    isDraft: true
  },
  "09": {
    num: "09",
    title: "既存サービスとの統合",
    subtitle: "既存メニューとの相乗効果最大化",
    sections: [],
    isDraft: true
  },
  "10": {
    num: "10",
    title: "次のステップと拡張",
    subtitle: "事業の進化とコミュニティ活用",
    sections: [],
    isDraft: true
  }
};
