import { useState, useCallback } from 'react';
import { generateFortuneComment } from '../services/geminiApi';
import type { FortuneLevel } from '../types/fortune';

export function useGemini() {
  const [comment, setComment] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchComment = useCallback(
    async (unchiName: string, fortuneLevel: FortuneLevel) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await generateFortuneComment(unchiName, fortuneLevel);
        setComment(result);
      } catch (err) {
        setError(err as Error);
        setComment('うんが読み込めませんでした...');
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setComment('');
    setError(null);
    setIsLoading(false);
  }, []);

  return { comment, isLoading, error, fetchComment, reset };
}
