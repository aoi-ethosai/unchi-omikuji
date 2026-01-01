import { useState, useCallback } from 'react';
import {
  UNCHI_TYPES,
  FORTUNE_LEVELS,
  FORTUNE_WEIGHTS,
  UNCHI_MIN_FORTUNE,
  FORTUNE_RANK,
  LUCKY_ITEMS,
  LUCKY_COLORS,
  LUCKY_DIRECTIONS,
  LUCKY_TIMES,
  ADVICE_BY_FORTUNE,
} from '../constants/fortunes';
import type { FortuneResult, UnchiData, FortuneLevel, AppPhase, LuckyInfo } from '../types/fortune';
import { useGemini } from './useGemini';

function weightedRandomSelect<T>(
  items: T[],
  getWeight: (item: T) => number
): T {
  const totalWeight = items.reduce((sum, item) => sum + getWeight(item), 0);
  let random = Math.random() * totalWeight;

  for (const item of items) {
    random -= getWeight(item);
    if (random <= 0) {
      return item;
    }
  }

  return items[items.length - 1];
}

function randomSelect<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function drawUnchi(): UnchiData {
  return weightedRandomSelect(UNCHI_TYPES, (u) => 6 - u.rarity);
}

function drawFortuneLevel(): FortuneLevel {
  return weightedRandomSelect(FORTUNE_LEVELS, (f) => FORTUNE_WEIGHTS[f]);
}

function adjustFortuneForUnchi(unchi: UnchiData, fortune: FortuneLevel): FortuneLevel {
  const minFortune = UNCHI_MIN_FORTUNE[unchi.id];

  if (!minFortune) {
    return fortune;
  }

  const currentRank = FORTUNE_RANK.indexOf(fortune);
  const minRank = FORTUNE_RANK.indexOf(minFortune);

  // 現在の運勢がminFortuneより悪い場合、minFortuneに引き上げる
  if (currentRank > minRank) {
    return minFortune;
  }

  return fortune;
}

function generateLuckyInfo(fortune: FortuneLevel): LuckyInfo {
  return {
    item: randomSelect(LUCKY_ITEMS),
    color: randomSelect(LUCKY_COLORS),
    direction: randomSelect(LUCKY_DIRECTIONS),
    time: randomSelect(LUCKY_TIMES),
    advice: randomSelect(ADVICE_BY_FORTUNE[fortune]),
  };
}

export function useOmikuji() {
  const [phase, setPhase] = useState<AppPhase>('idle');
  const [result, setResult] = useState<FortuneResult | null>(null);
  const { comment, isLoading: isCommentLoading, fetchComment, reset: resetComment } = useGemini();

  const draw = useCallback(async () => {
    setPhase('flushing');
    resetComment();

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const unchi = drawUnchi();
    const rawFortune = drawFortuneLevel();
    const fortune = adjustFortuneForUnchi(unchi, rawFortune);
    const lucky = generateLuckyInfo(fortune);

    const newResult: FortuneResult = {
      unchi,
      fortune,
      comment: '',
      lucky,
      timestamp: new Date(),
    };

    setResult(newResult);
    setPhase('revealing');

    await new Promise((resolve) => setTimeout(resolve, 800));

    setPhase('result');
    fetchComment(unchi.name, fortune);
  }, [fetchComment, resetComment]);

  const reset = useCallback(() => {
    setPhase('idle');
    setResult(null);
    resetComment();
  }, [resetComment]);

  return {
    phase,
    result: result ? { ...result, comment } : null,
    isCommentLoading,
    draw,
    reset,
  };
}
