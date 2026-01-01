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
  '大吉': 10,
  '中吉': 15,
  '小吉': 20,
  '吉': 25,
  '末吉': 20,
  '凶': 10,
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
