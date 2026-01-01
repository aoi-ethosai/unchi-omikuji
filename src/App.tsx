import { motion, AnimatePresence } from 'framer-motion';
import { Toilet } from './components/Toilet';
import { Unchi } from './components/Unchi';
import { FlushButton } from './components/FlushButton';
import { FortuneResult } from './components/FortuneResult';
import { Effects } from './components/Effects';
import { useOmikuji } from './hooks/useOmikuji';
import './App.css';

function App() {
  const { phase, result, isCommentLoading, draw, reset } = useOmikuji();

  const isFlushing = phase === 'flushing';
  const showResult = phase === 'result';

  return (
    <div className="app">
      <div className="background-decoration">
        <div className="bubble bubble-1" />
        <div className="bubble bubble-2" />
        <div className="bubble bubble-3" />
      </div>

      <header className="header">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          うんちおみくじ
        </motion.h1>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          今日のうん勢を占おう！
        </motion.p>
      </header>

      <main className="main">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="toilet"
              className="toilet-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Toilet phase={phase}>
                {result && <Unchi unchi={result.unchi} />}
              </Toilet>

              <div className="button-section">
                <FlushButton
                  onClick={draw}
                  disabled={isFlushing}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              className="result-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {result && (
                <>
                  <FortuneResult
                    result={result}
                    isCommentLoading={isCommentLoading}
                  />
                  <Effects
                    fortune={result.fortune}
                    unchiShape={result.unchi.id}
                    isActive={showResult}
                  />
                </>
              )}

              <div className="button-section">
                <FlushButton
                  onClick={reset}
                  isResult
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="footer">
        <p>Powered by Gemini AI</p>
      </footer>
    </div>
  );
}

export default App;
