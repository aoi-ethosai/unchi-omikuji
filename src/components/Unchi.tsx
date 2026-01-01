import { motion } from 'framer-motion';
import type { UnchiData } from '../types/fortune';
import './Unchi.css';

interface UnchiProps {
  unchi: UnchiData;
  size?: 'small' | 'medium' | 'large';
}

export function Unchi({ unchi, size = 'medium' }: UnchiProps) {
  const sizeMap = {
    small: 40,
    medium: 60,
    large: 80,
  };

  const fontSize = sizeMap[size];

  const getUnchiStyle = () => {
    if (unchi.gradient) {
      return {
        background: unchi.gradient,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        filter:
          unchi.id === 'golden'
            ? 'drop-shadow(0 0 10px #FFD700)'
            : unchi.id === 'rainbow'
            ? 'drop-shadow(0 0 10px #FF69B4)'
            : unchi.id === 'fire'
            ? 'drop-shadow(0 0 8px #FF4500)'
            : unchi.id === 'ice'
            ? 'drop-shadow(0 0 8px #00CED1)'
            : unchi.id === 'crystal'
            ? 'drop-shadow(0 0 8px #87CEEB)'
            : 'none',
      };
    }
    return { color: unchi.color };
  };

  const getAnimation = () => {
    switch (unchi.id) {
      case 'golden':
        return {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
          transition: { repeat: Infinity, duration: 2 },
        };
      case 'rainbow':
        return {
          scale: [1, 1.05, 1],
          rotate: [0, 360],
          transition: { repeat: Infinity, duration: 4, ease: 'linear' as const },
        };
      case 'fire':
        return {
          y: [0, -5, 0],
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 0.5 },
        };
      case 'ice':
        return {
          scale: [1, 1.02, 1],
          transition: { repeat: Infinity, duration: 1.5 },
        };
      default:
        return {
          y: [0, -5, 0],
          transition: { repeat: Infinity, duration: 1 },
        };
    }
  };

  return (
    <motion.div
      className={`unchi unchi-${unchi.id}`}
      style={{ fontSize }}
      animate={getAnimation()}
    >
      <span className="unchi-emoji" style={getUnchiStyle()}>
        {unchi.emoji}
      </span>
      {unchi.id === 'golden' && <div className="sparkles" />}
      {unchi.id === 'rainbow' && <div className="rainbow-glow" />}
      {unchi.id === 'fire' && <div className="fire-particles" />}
      {unchi.id === 'ice' && <div className="ice-crystals" />}
    </motion.div>
  );
}
