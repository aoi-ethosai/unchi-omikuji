import type { UnchiData, FortuneLevel } from '../types/fortune';

export const UNCHI_TYPES: UnchiData[] = [
  {
    id: 'golden',
    name: 'ゴールデンうんち',
    emoji: '💩',
    description: '黄金に輝く伝説のうんち！最高の運気を呼び込む',
    color: '#FFD700',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
    rarity: 5,
  },
  {
    id: 'rainbow',
    name: 'レインボーうんち',
    emoji: '💩',
    description: '七色に輝く奇跡のうんち！夢が叶う前兆',
    color: '#FF69B4',
    gradient: 'linear-gradient(135deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #8B00FF)',
    rarity: 5,
  },
  {
    id: 'crystal',
    name: 'クリスタルうんち',
    emoji: '💩',
    description: '透き通る宝石のようなうんち！心が澄み渡る',
    color: '#87CEEB',
    gradient: 'linear-gradient(135deg, #E0FFFF 0%, #87CEEB 50%, #ADD8E6 100%)',
    rarity: 4,
  },
  {
    id: 'fire',
    name: 'ファイヤーうんち',
    emoji: '💩',
    description: '燃え上がる情熱のうんち！やる気MAX',
    color: '#FF4500',
    gradient: 'linear-gradient(135deg, #FF0000 0%, #FF4500 50%, #FFD700 100%)',
    rarity: 4,
  },
  {
    id: 'ice',
    name: 'アイスうんち',
    emoji: '💩',
    description: '冷静沈着なうんち！判断力が冴える',
    color: '#00CED1',
    gradient: 'linear-gradient(135deg, #E0FFFF 0%, #00CED1 50%, #87CEEB 100%)',
    rarity: 4,
  },
  {
    id: 'mega',
    name: 'メガうんち',
    emoji: '💩',
    description: '圧倒的存在感のうんち！大きなチャンス到来',
    color: '#8B4513',
    gradient: 'linear-gradient(135deg, #A0522D 0%, #8B4513 50%, #654321 100%)',
    rarity: 3,
  },
  {
    id: 'fluffy',
    name: 'ふわふわうんち',
    emoji: '💩',
    description: '雲のようにふんわり！心が軽くなる',
    color: '#DEB887',
    gradient: 'linear-gradient(135deg, #FFE4C4 0%, #DEB887 50%, #D2B48C 100%)',
    rarity: 2,
  },
  {
    id: 'hard',
    name: 'カチカチうんち',
    emoji: '💩',
    description: '岩のように固い意志！困難に負けない',
    color: '#696969',
    gradient: 'linear-gradient(135deg, #808080 0%, #696969 50%, #555555 100%)',
    rarity: 2,
  },
  {
    id: 'spiral',
    name: 'ぐるぐるうんち',
    emoji: '💩',
    description: '完璧なフォルムの芸術作品！バランスが大事',
    color: '#CD853F',
    gradient: 'linear-gradient(135deg, #DEB887 0%, #CD853F 50%, #A0522D 100%)',
    rarity: 1,
  },
  {
    id: 'tiny',
    name: 'ちびうんち',
    emoji: '💩',
    description: '小さくてもパワフル！コツコツが実を結ぶ',
    color: '#D2691E',
    gradient: 'linear-gradient(135deg, #DEB887 0%, #D2691E 50%, #A0522D 100%)',
    rarity: 1,
  },
];

export const FORTUNE_LEVELS: FortuneLevel[] = [
  '大吉',
  '中吉',
  '小吉',
  '吉',
  '末吉',
  '凶',
];

export const FORTUNE_WEIGHTS: Record<FortuneLevel, number> = {
  '大吉': 18,
  '中吉': 20,
  '小吉': 18,
  '吉': 22,
  '末吉': 15,
  '凶': 7,
};

// レアうんちの最低運勢（これ以上の運勢が保証される）
export const UNCHI_MIN_FORTUNE: Partial<Record<string, FortuneLevel>> = {
  golden: '中吉',    // ゴールデンは中吉以上
  rainbow: '中吉',   // レインボーは中吉以上
  crystal: '吉',     // クリスタルは吉以上
  fire: '吉',        // ファイヤーは吉以上
  ice: '吉',         // アイスは吉以上
  mega: '小吉',      // メガは小吉以上
};

// 運勢のランク順（インデックスが小さいほど良い）
export const FORTUNE_RANK: FortuneLevel[] = [
  '大吉', '中吉', '小吉', '吉', '末吉', '凶'
];

// 本格占い要素
export const LUCKY_ITEMS = [
  'トイレットペーパー', '便座カバー', 'ウォシュレット', '芳香剤',
  '新聞', 'スマホ', '観葉植物', 'カレンダー', '時計', '鏡',
  'タオル', 'スリッパ', 'マット', 'ポプリ', 'キャンドル'
];

export const LUCKY_COLORS = [
  { name: '黄金色', hex: '#FFD700' },
  { name: '茶色', hex: '#8B4513' },
  { name: 'ピンク', hex: '#FF69B4' },
  { name: '水色', hex: '#87CEEB' },
  { name: '緑', hex: '#98FB98' },
  { name: 'オレンジ', hex: '#FFA500' },
  { name: '紫', hex: '#9370DB' },
  { name: '白', hex: '#FFFFFF' },
];

export const LUCKY_DIRECTIONS = [
  '北', '北東', '東', '南東', '南', '南西', '西', '北西'
];

export const LUCKY_TIMES = [
  '朝イチ', '午前中', 'お昼どき', '午後3時', '夕方', '夜', '深夜'
];

export const ADVICE_BY_FORTUNE: Record<FortuneLevel, string[]> = {
  '大吉': [
    '今日は何をしても絶好調！積極的に行動しよう',
    '大きな決断をするなら今日がベスト',
    '周りの人にも幸運をおすそわけしよう',
  ],
  '中吉': [
    '良い流れが来ている！チャンスを見逃すな',
    '新しいことを始めるのに良い日',
    '人との出会いを大切に',
  ],
  '小吉': [
    '小さな幸せを積み重ねよう',
    '焦らず着実に進めば吉',
    '身近な人への感謝を忘れずに',
  ],
  '吉': [
    '安定した一日。平常心を保とう',
    'いつも通りが一番の幸せ',
    '基本に立ち返ることで道が開ける',
  ],
  '末吉': [
    '今は準備の時期。力を蓄えよう',
    '焦らなければ必ず好転する',
    '小さな変化に気づくことが大切',
  ],
  '凶': [
    '今日は無理せず休息を',
    '慎重に行動すれば災いは避けられる',
    '明日はきっと良い日になる！',
  ],
};

export const FORTUNE_COLORS: Record<FortuneLevel, string> = {
  '大吉': '#FFD700',
  '中吉': '#FF69B4',
  '小吉': '#87CEEB',
  '吉': '#98FB98',
  '末吉': '#DDA0DD',
  '凶': '#808080',
};

export const DEFAULT_COMMENTS: Record<FortuneLevel, string[]> = {
  '大吉': [
    '今日はうんがいい日！何をやってもうまくいく！',
    'うんの流れが最高潮！チャンスを逃すな！',
    '黄金のうん気があなたを包んでいる！',
  ],
  '中吉': [
    'うんうん、なかなかいい調子！',
    'うん気上昇中！いい波に乗ろう！',
    'ちょっとしたラッキーがありそう！',
  ],
  '小吉': [
    'コツコツ頑張ればうんが味方する！',
    '小さな幸うんを大切に！',
    'うんは自分で引き寄せるもの！',
  ],
  '吉': [
    '普通が一番！安定したうん勢！',
    'のんびりマイペースでうんを待とう！',
    '焦らずゆっくり、うんは巡ってくる！',
  ],
  '末吉': [
    'うんは溜まっている！爆発寸前！',
    '今は力を蓄える時期！',
    'じっくり待てば大きなうんが来る！',
  ],
  '凶': [
    'うんが詰まり気味...でも明日は快便！',
    '今日は静かに過ごそう、うんは回復中！',
    '凶も経験！きっとスッキリする日が来る！',
  ],
};
