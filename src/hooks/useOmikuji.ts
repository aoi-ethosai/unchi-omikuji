import { useState, useCallback } from 'react';
import { UNCHI_TYPES, FORTUNE_LEVELS, FORTUNE_WEIGHTS } from '../constants/fortunes';
import type { FortuneResult, UnchiData, FortuneLevel, AppPhase } from '../types/fortune';
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

function drawUnchi(): UnchiData {
  return weightedRandomSelect(UNCHI_TYPES, (u) => 6 - u.rarity);
}

function drawFortuneLevel(): FortuneLevel {
  return weightedRandomSelect(FORTUNE_LEVELS, (f) => FORTUNE_WEIGHTS[f]);
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
    let fortune = drawFortuneLevel();

    if (unchi.id === 'golden' && ['凶', '末吉'].includes(fortune)) {
      fortune = '大吉';
    }

    const newResult: FortuneResult = {
      unchi,
      fortune,
      comment: '',
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
