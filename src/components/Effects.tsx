import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import type { FortuneLevel, UnchiShape } from '../types/fortune';

interface EffectsProps {
  fortune: FortuneLevel;
  unchiShape: UnchiShape;
  isActive: boolean;
}

export function Effects({ fortune, unchiShape, isActive }: EffectsProps) {
  useEffect(() => {
    if (!isActive) return;

    if (fortune === '大吉') {
      celebrateGreatFortune();
    }

    if (unchiShape === 'golden') {
      celebrateGolden();
    } else if (unchiShape === 'rainbow') {
      celebrateRainbow();
    }
  }, [fortune, unchiShape, isActive]);

  return null;
}

function celebrateGreatFortune() {
  const duration = 3000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FF6347'],
    });

    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FF6347'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}

function celebrateGolden() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.5 },
    colors: ['#FFD700', '#FFA500', '#FFE4B5'],
    shapes: ['circle'],
    scalar: 1.2,
  });
}

function celebrateRainbow() {
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'];

  colors.forEach((color, index) => {
    setTimeout(() => {
      confetti({
        particleCount: 20,
        angle: 90 + (index - 2.5) * 15,
        spread: 30,
        origin: { y: 0.6 },
        colors: [color],
      });
    }, index * 100);
  });
}
