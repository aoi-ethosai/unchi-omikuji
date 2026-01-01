import { motion } from 'framer-motion';
import './FlushButton.css';

interface FlushButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isResult?: boolean;
}

export function FlushButton({ onClick, disabled, isResult }: FlushButtonProps) {
  return (
    <motion.button
      className={`flush-button ${isResult ? 'retry' : ''}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="button-icon">{isResult ? '🔄' : '🚽'}</span>
      <span className="button-text">
        {disabled ? 'お待ちください...' : isResult ? 'もう一度引く' : '流してうん勢を占う！'}
      </span>
    </motion.button>
  );
}
