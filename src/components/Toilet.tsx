import { motion } from 'framer-motion';
import type { AppPhase } from '../types/fortune';
import './Toilet.css';

interface ToiletProps {
  phase: AppPhase;
  children?: React.ReactNode;
}

export function Toilet({ phase, children }: ToiletProps) {
  const isFlushing = phase === 'flushing';
  const showUnchi = phase === 'revealing' || phase === 'result';

  return (
    <div className="toilet-container">
      <div className="toilet">
        <motion.div
          className="toilet-lid"
          initial={false}
          animate={{
            rotateX: phase === 'idle' ? 0 : -120,
            transformOrigin: 'top center',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="lid-front" />
          <div className="lid-top" />
        </motion.div>

        <div className="toilet-bowl">
          <div className={`water ${isFlushing ? 'flushing' : ''}`}>
            <div className="water-surface" />
            {isFlushing && (
              <>
                <div className="water-swirl" />
                <div className="water-swirl delay" />
                <div className="water-swirl delay-2" />
              </>
            )}
          </div>

          {showUnchi && (
            <motion.div
              className="unchi-container"
              initial={{ y: 50, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 15,
              }}
            >
              {children}
            </motion.div>
          )}
        </div>

        <div className="toilet-base" />
        <div className="toilet-shadow" />
      </div>
    </div>
  );
}
