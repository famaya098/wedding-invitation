'use client';

import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Heart, Mail, Phone } from 'lucide-react';

interface ClosingMessageProps {
  bride: string;
  groom: string;
}

export const ClosingMessage = ({ bride, groom }: ClosingMessageProps) => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #fef3e2 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6" style={{ color: '#3d2e0e' }}>
            {t('closing-message.title')}
          </h2>
          <div className="w-24 h-px mx-auto mb-8" style={{ background: '#d4af37' }}></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl p-8 md:p-12 shadow-xl mb-12"
          style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid #e8c97a' }}
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-6 font-light" style={{ color: '#5c4a1e' }}>
            &quot;{t('closing-message.quote')}&quot;
          </p>
          <div className="text-base sm:text-lg" style={{ color: '#7a6030' }}>
            {t('closing-message.with-love')}
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mt-2" style={{ color: '#b8860b' }}>
            {groom} &amp; {bride}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <div className="flex justify-center space-x-5">
            {[0, 0.1, 0.2].map((delay, i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay, ease: 'easeInOut' }}
                style={{ color: '#d4af37' }}
              >
                <Heart size={28} fill="currentColor" strokeWidth={0} />
              </motion.div>
            ))}
          </div>

          <p className="text-sm sm:text-base" style={{ color: '#9a7c40' }}>
            {t('closing-message.hashtags')}
          </p>
        </motion.div>

        {/* Footer contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8"
          style={{ borderTop: '1px solid rgba(212,175,55,0.3)' }}
        >
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm" style={{ color: '#9a7c40' }}>
            <Phone size={13} strokeWidth={1.5} />
            <span>{t('closing-message.contact')}</span>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2 text-xs sm:text-sm" style={{ color: '#9a7c40' }}>
            <Mail size={13} strokeWidth={1.5} />
            <span>Confirma tu asistencia al 7563-2086</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
