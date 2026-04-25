'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useInvitee } from '@/hooks/use-invitee';
import { Heart, Sparkles, ArrowRight, Users } from 'lucide-react';

interface LetterAnimationProps {
  onOpen: () => void;
  coupleName: string;
}

export const LetterAnimation = ({ onOpen, coupleName }: LetterAnimationProps) => {
  const { t } = useTranslation('home');
  const { name: toName, cupos } = useInvitee();

  const [isOpening, setIsOpening] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [letterVisible, setLetterVisible] = useState(false);

  const handleEnvelopeClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => setLetterVisible(true), 1600);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #fef3e2 40%, #fdf0d5 100%)' }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(212,175,55,0.15)' }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(180,140,30,0.12)' }} />
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100%', opacity: 0.4 }}
            animate={{ y: '-100%', opacity: [0.4, 0.7, 0.4], x: [0, 40, -40, 0] }}
            transition={{ duration: 10 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 1.5 }}
            className="absolute"
            style={{ left: `${10 + i * 15}%`, color: '#d4af37' }}
          >
            <Heart size={14} fill="currentColor" strokeWidth={0} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mb-8 sm:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4" style={{ color: '#5c4a1e' }}>
              {t('hero.welcome')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-md mx-auto" style={{ color: '#7a6030' }}>
              {t('letter.dear')}{' '}
              <span className="font-semibold" style={{ color: '#b8860b' }}>
                {toName || t('letter.guest')}
              </span>
              <br />
              {t('letter.you-are-invited')}
            </p>
          </motion.div>

          {/* Envelope */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="relative mx-auto"
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="relative cursor-pointer"
              onClick={handleEnvelopeClick}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={!isOpening ? { scale: 1.05 } : {}}
              whileTap={!isOpening ? { scale: 0.95 } : {}}
            >
              {/* Envelope body */}
              <motion.div
                className="w-80 h-56 sm:w-96 sm:h-64 rounded-lg shadow-2xl relative mx-auto"
                style={{ background: 'linear-gradient(135deg, #f5e6c8 0%, #e8c97a 100%)' }}
                animate={{ rotateY: isOpening ? 15 : 0, z: isOpening ? -50 : 0 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute inset-4 border rounded border-dashed" style={{ borderColor: 'rgba(180,140,30,0.35)' }} />

                {/* Wax seal */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #8b6914 0%, #6b4f10 100%)' }}
                  animate={{ scale: isHovered && !isOpening ? 1.1 : 1, rotate: isHovered && !isOpening ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart size={24} color="white" fill="white" strokeWidth={0} />
                </motion.div>

                {/* Flap */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-32 origin-top"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    background: 'linear-gradient(135deg, #e8c97a 0%, #d4a830 100%)',
                  }}
                  animate={{ rotateX: isOpening ? -180 : 0, z: isOpening ? 50 : 0 }}
                  transition={{ duration: 1.4, delay: isOpening ? 0.2 : 0 }}
                />
              </motion.div>

              {/* Sparkles on hover */}
              <AnimatePresence>
                {isHovered && !isOpening && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: [0, (Math.random() - 0.5) * 80],
                          y: [0, (Math.random() - 0.5) * 80],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, delay: i * 0.12, repeat: Infinity, repeatDelay: 2 }}
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{ color: '#d4af37' }}
                      >
                        <Sparkles size={14} />
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>

              {/* Letter card */}
              <AnimatePresence>
                {isOpening && (
                  <motion.div
                    initial={{ y: 0, opacity: 0, scale: 0.8 }}
                    animate={{ y: -60, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.4, delay: 0.7 }}
                    className="absolute top-8 left-1/2 -translate-x-1/2 w-72 sm:w-80 bg-white rounded-lg shadow-xl"
                    style={{ border: '1px solid #e8c97a' }}
                  >
                    <div className="p-6 sm:p-8 flex flex-col items-center text-center gap-3">
                      <Heart size={28} fill="currentColor" strokeWidth={0} style={{ color: '#b8860b' }} />

                      <p className="text-sm sm:text-base" style={{ color: '#7a6030' }}>
                        {t('letter.to')}:{' '}
                        <span className="font-semibold" style={{ color: '#b8860b' }}>
                          {toName || t('letter.guest')}
                        </span>
                      </p>

                      <h3 className="text-lg sm:text-xl font-serif" style={{ color: '#5c4a1e' }}>
                        {coupleName}
                      </h3>

                      <p className="text-sm sm:text-base" style={{ color: '#7a6030' }}>
                        {t('letter.invitation-title')}
                      </p>

                      {/* Cupos badge */}
                      <div
                        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold"
                        style={{ background: '#fef3e2', color: '#b8860b', border: '1px solid #e8c97a' }}
                      >
                        <Users size={14} strokeWidth={1.8} />
                        {cupos === 1
                          ? t('letter.cupos-one')
                          : `${cupos} ${t('letter.cupos-many')}`}
                      </div>

                      <div className="text-xs sm:text-sm font-serif italic" style={{ color: '#9a7c40' }}>
                        &ldquo;{t('letter.invitation-quote')}&rdquo;
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Before opening: click hint */}
          <AnimatePresence>
            {!isOpening && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="mt-8 sm:mt-12"
              >
                <motion.p
                  animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-sm sm:text-base font-medium"
                  style={{ color: '#7a6030' }}
                >
                  {t('letter.click-to-open')}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* After opening: "Ver invitación" button */}
          <AnimatePresence>
            {letterVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-48 sm:mt-52"
              >
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={onOpen}
                  className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #b8860b, #d4af37)' }}
                >
                  {t('letter.enter-invitation')}
                  <ArrowRight size={20} strokeWidth={2} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
