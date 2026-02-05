export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  description: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface CourseContent {
  courseId: string;
  modules: Module[];
}

export const memberContent: Record<string, CourseContent> = {
  regular: {
    courseId: 'regular',
    modules: [
      {
        id: 'reg-m1',
        title: '第1章：ダイエットの科学的基礎',
        lessons: [
          {
            id: 'reg-l1',
            title: 'エネルギー代謝のメカニズム',
            duration: '15:20',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
            description: '体の中でエネルギーがどのように消費され、脂肪が蓄積されるのか、その基本的な生理学的プロセスを学びます。カロリー計算の限界についても解説します。'
          },
          {
            id: 'reg-l2',
            title: '血糖値とインスリンの関係',
            duration: '12:45',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: '「なぜ甘いものを食べると太るのか」をホルモンの観点から理解します。安定した血糖値を保つための食事の順番についても触れます。'
          }
        ]
      },
      {
        id: 'reg-m2',
        title: '第2章：実践的な食事設計',
        lessons: [
          {
            id: 'reg-l3',
            title: 'PFCバランスの最適化',
            duration: '18:10',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: 'タンパク質、脂質、炭水化物の理想的な比率を、あなたのライフスタイルに合わせて計算する方法をマスターします。'
          },
          {
            id: 'reg-l4',
            title: '外食・コンビニ活用術',
            duration: '10:30',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: '完璧主義は失敗の元です。忙しい現代人がどのようにして賢く出来合いの食品を選び、ダイエットを継続させるかを学びます。'
          }
        ]
      }
    ]
  },
  senior: {
    courseId: 'senior',
    modules: [
      {
        id: 'sen-m1',
        title: '第1章：コーチング心理学',
        lessons: [
          {
            id: 'sen-l1',
            title: 'クライアントとの信頼関係構築',
            duration: '22:15',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: '指導者としての第一歩は信頼です。相手の本音を引き出す「傾聴」と「共感」の技術について深く掘り下げます。'
          },
          {
            id: 'sen-l2',
            title: 'モチベーション維持の科学',
            duration: '19:40',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: 'やる気が続かないのは意志が弱いからではありません。脳科学に基づいた「報酬系」のコントロール方法を学びます。'
          }
        ]
      },
      {
        id: 'sen-m2',
        title: '第2章：高度な栄養指導',
        lessons: [
          {
            id: 'sen-l3',
            title: '停滞期のアセスメント',
            duration: '25:00',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: '必ずやってくる停滞期。それが生理的なものか、行動のズレによるものかを判断し、適切なアドバイスを行う方法を学びます。'
          },
          {
            id: 'sen-l4',
            title: 'サプリメントの有効活用と限界',
            duration: '14:50',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: '過剰な期待を持たせず、不足している栄養を補うためのサプリメントの選び方とクライアントへの説明法。'
          }
        ]
      }
    ]
  },
  professional: {
    courseId: 'professional',
    modules: [
      {
        id: 'pro-m1',
        title: '第1章：ビジネスモデルの構築',
        lessons: [
          {
            id: 'pro-l1',
            title: 'ダイエット事業の収益構造',
            duration: '30:00',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: '単発のセッションではなく、LTV（顧客生涯価値）を高めるためのサブスクリプション型やパッケージ型のモデルを設計します。'
          },
          {
            id: 'pro-l2',
            title: '法的リスクと同意書の作成',
            duration: '15:30',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: 'トラブルを未然に防ぎ、信頼を守るための法的知識と、プロとしての境界線の引き方を学びます。'
          }
        ]
      },
      {
        id: 'pro-m2',
        title: '第2章：マーケティング戦略',
        lessons: [
          {
            id: 'pro-l3',
            title: 'SNSを活用した集客オートメーション',
            duration: '28:10',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: '自分の時間を切り売りせず、自動的に理想のクライアントが集まる仕組みの作り方を解説します。'
          },
          {
            id: 'pro-l4',
            title: 'スクール認定制度の運用方法',
            duration: '20:45',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            description: '組織としてダイエットマスターの看板を掲げ、スタッフに指導を任せるためのクオリティ管理術。'
          }
        ]
      }
    ]
  }
};