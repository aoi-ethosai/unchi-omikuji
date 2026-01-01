export type FortuneLevel = '大吉' | '中吉' | '小吉' | '吉' | '末吉' | '凶';

export type UnchiShape =
  | 'golden'
  | 'rainbow'
  | 'crystal'
  | 'fire'
  | 'ice'
  | 'fluffy'
  | 'hard'
  | 'spiral'
  | 'tiny'
  | 'mega';

export interface UnchiData {
  id: UnchiShape;
  name: string;
  emoji: string;
  description: string;
  color: string;
  gradient?: string;
  rarity: 1 | 2 | 3 | 4 | 5;
}

export interface FortuneResult {
  unchi: UnchiData;
  fortune: FortuneLevel;
  comment: string;
  timestamp: Date;
}

export type AppPhase = 'idle' | 'flushing' | 'revealing' | 'result';
