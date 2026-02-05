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
            duration: '05:01',
            videoUrl: 'https://www.youtube.com/embed/hTWKbfoikeg', // Nirvana - Smells Like Teen Spirit
            description: '体の中でエネルギーがどのように消費され、脂肪が蓄積されるのか、その基本的な生理学的プロセスを学びます。このセクションでは、90年代のエネルギーのように力強い代謝の仕組みを解説します。'
          },
          {
            id: 'reg-l2',
            title: '血糖値とインスリンの関係',
            duration: '04:31',
            videoUrl: 'https://www.youtube.com/embed/GLvohMXgcsc', // Red Hot Chili Peppers - Under The Bridge
            description: '「なぜ甘いものを食べると太るのか」をホルモンの観点から理解します。安定した血糖値を保つための食事の順番と、体のバランスを整える方法について触れます。'
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
            duration: '04:52',
            videoUrl: 'https://www.youtube.com/embed/xwtdhWltSIg', // R.E.M. - Losing My Religion
            description: 'タンパク質、脂質、炭水化物の理想的な比率を、あなたのライフスタイルに合わせて計算する方法をマスターします。完璧な調和（ハーモニー）を見つけることが成功の鍵です。'
          },
          {
            id: 'reg-l4',
            title: '外食・コンビニ活用術',
            duration: '05:32',
            videoUrl: 'https://www.youtube.com/embed/CD-E-LDc384', // Metallica - Enter Sandman
            description: '完璧主義は失敗の元です。忙しい現代人がどのようにして賢く出来合いの食品を選び、ダイエットを継続させるかを学びます。悪夢のようなリバウンドを防ぐための実践術。'
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
            duration: '08:57',
            videoUrl: 'https://www.youtube.com/embed/8SbUCzU9axU', // Guns N' Roses - November Rain
            description: '指導者としての第一歩は信頼です。相手の本音を引き出す「傾聴」と「共感」の技術について深く掘り下げます。雨の日も晴れの日も寄り添う指導の在り方。'
          },
          {
            id: 'sen-l2',
            title: 'モチベーション維持の科学',
            duration: '04:39',
            videoUrl: 'https://www.youtube.com/embed/6hzrDeceEKc', // Oasis - Wonderwall
            description: 'やる気が続かないのは意志が弱いからではありません。脳科学に基づいた「報酬系」のコントロール方法を学びます。クライアントにとっての「Wonderwall」となる指導を目指します。'
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
            duration: '05:06',
            videoUrl: 'https://www.youtube.com/embed/6Ejga4kJUts', // The Cranberries - Zombie
            description: '必ずやってくる停滞期。それが生理的なものか、行動のズレによるものかを判断し、適切なアドバイスを行う方法を学びます。思考停止（Zombie状態）に陥らないための戦略。'
          },
          {
            id: 'sen-l4',
            title: 'サプリメントの有効活用',
            duration: '04:23',
            videoUrl: 'https://www.youtube.com/embed/TR3Vdo5etCQ', // No Doubt - Don't Speak
            description: '過剰な期待を持たせず、不足している栄養を補うためのサプリメントの選び方とクライアントへの説明法。言葉（Speak）よりもエビデンスを重視した指導法。'
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
            duration: '02:02',
            videoUrl: 'https://www.youtube.com/embed/SSbBvKaM6sk', // Blur - Song 2
            description: '単発のセッションではなく、LTV（顧客生涯価値）を高めるためのサブスクリプション型やパッケージ型のモデルを設計します。スピード感（Woo-hoo!）のある事業展開の秘訣。'
          },
          {
            id: 'pro-l2',
            title: '法的リスクと同意書の作成',
            duration: '05:18',
            videoUrl: 'https://www.youtube.com/embed/MS91knuzoOA', // Pearl Jam - Jeremy
            description: 'トラブルを未然に防ぎ、信頼を守るための法的知識と、プロとしての境界線の引き方を学びます。不測の事態にも動じない組織の守り方。'
          }
        ]
      },
      {
        id: 'pro-m2',
        title: '第2章：マーケティング戦略',
        lessons: [
          {
            id: 'pro-l3',
            title: 'SNS集客オートメーション',
            duration: '05:18',
            videoUrl: 'https://www.youtube.com/embed/3mbBbFH9fAg', // Soundgarden - Black Hole Sun
            description: '自分の時間を切り売りせず、自動的に理想のクライアントが集まる仕組みの作り方を解説します。広大なSNSの海から、あなたを求める声を引き寄せる方法。'
          },
          {
            id: 'pro-l4',
            title: 'スクール認定制度の運用方法',
            duration: '03:56',
            videoUrl: 'https://www.youtube.com/embed/XFkzRNyygfk', // Radiohead - Creep
            description: '組織としてダイエットマスターの看板を掲げ、スタッフに指導を任せるためのクオリティ管理術。独自性（Specialness）を保ちながら規模を拡大するマネジメント。'
          }
        ]
      }
    ]
  }
};