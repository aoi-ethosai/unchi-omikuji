import { motion } from 'framer-motion';
import type { FortuneResult as FortuneResultType } from '../types/fortune';
import { FORTUNE_COLORS } from '../constants/fortunes';
import { Unchi } from './Unchi';
import './FortuneResult.css';

interface FortuneResultProps {
  result: FortuneResultType;
  isCommentLoading: boolean;
}

export function FortuneResult({ result, isCommentLoading }: FortuneResultProps) {
  const fortuneColor = FORTUNE_COLORS[result.fortune];

  return (
    <motion.div
      className="fortune-result"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="result-card">
        <motion.div
          className="fortune-badge"
          style={{ backgroundColor: fortuneColor }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          {result.fortune}
        </motion.div>

        <motion.div
          className="unchi-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Unchi unchi={result.unchi} size="large" />
        </motion.div>

        <motion.h2
          className="unchi-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {result.unchi.name}
        </motion.h2>

        <motion.p
          className="unchi-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {result.unchi.description}
        </motion.p>

        <motion.div
          className="comment-section"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="comment-label">AIからのメッセージ</div>
          <div className="comment-box">
            {isCommentLoading ? (
              <div className="loading-comment">
                <span className="loading-dot">.</span>
                <span className="loading-dot">.</span>
                <span className="loading-dot">.</span>
              </div>
            ) : (
              <p className="comment-text">{result.comment}</p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
