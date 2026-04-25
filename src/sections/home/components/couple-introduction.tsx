'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Heart, Gem, Crown } from 'lucide-react';

interface CoupleIntroductionProps {
  bride: WeddingConfigType['bride'];
  groom: WeddingConfigType['groom'];
  isVisible: boolean;
}

export const CoupleIntroduction = ({ bride, groom }: CoupleIntroductionProps) => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #fdf8f0 0%, #fef9ee 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4" style={{ color: '#3d2e0e' }}>
            {t('couple.our-story')}
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: '#d4af37' }}></div>
          <p className="text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto" style={{ color: '#7a6030' }}>
            {t('couple.story-text')}
          </p>
        </motion.div>

        {/* Couple Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-right"
          >
            <div className="relative inline-block mb-6">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5e6c8, #e8c97a)', border: '8px solid white' }}>
                <Image
                  src={bride.photo}
                  alt={`Foto de ${bride.fullName}`}
                  width={256}
                  height={256}
                  className="rounded-full object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #d4af37, #b8860b)' }}>
                <Gem size={20} color="white" strokeWidth={1.5} />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-2" style={{ color: '#3d2e0e' }}>
              {bride.fullName}
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 font-medium" style={{ color: '#b8860b' }}>
              {t('couple.the-bride')}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0 lg:ml-auto" style={{ color: '#7a6030' }}>
              {t('couple.bride-description')}
            </p>

            <div className="mt-6 flex justify-center lg:justify-end space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ background: '#e8c97a' }}></div>
              <div className="w-2 h-2 rounded-full" style={{ background: '#d4af37' }}></div>
              <div className="w-2 h-2 rounded-full" style={{ background: '#b8860b' }}></div>
            </div>
          </motion.div>

          {/* Heart Divider Desktop */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: inView ? 1 : 0, rotate: inView ? 0 : -180 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl"
              style={{ border: '4px solid #f5e6c8' }}
            >
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} style={{ color: '#d4af37' }}>
                <Heart size={24} fill="currentColor" strokeWidth={0} />
              </motion.div>
            </motion.div>
          </div>

          {/* Heart Divider Mobile */}
          <div className="lg:hidden flex justify-center -my-6 z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: inView ? 1 : 0, rotate: inView ? 0 : -180 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl"
              style={{ border: '4px solid #f5e6c8' }}
            >
              <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} style={{ color: '#d4af37' }}>
                <Heart size={18} fill="currentColor" strokeWidth={0} />
              </motion.div>
            </motion.div>
          </div>

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-6">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5e6c8, #e8c97a)', border: '8px solid white' }}>
                <Image
                  src={groom.photo}
                  alt={`Foto de ${groom.fullName}`}
                  width={256}
                  height={256}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #d4af37, #b8860b)' }}>
                <Crown size={20} color="white" strokeWidth={1.5} />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-2" style={{ color: '#3d2e0e' }}>
              {groom.fullName}
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 font-medium" style={{ color: '#b8860b' }}>
              {t('couple.the-groom')}
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0" style={{ color: '#7a6030' }}>
              {t('couple.groom-description')}
            </p>

            <div className="mt-6 flex justify-center lg:justify-start space-x-2">
              <div className="w-2 h-2 rounded-full" style={{ background: '#e8c97a' }}></div>
              <div className="w-2 h-2 rounded-full" style={{ background: '#d4af37' }}></div>
              <div className="w-2 h-2 rounded-full" style={{ background: '#b8860b' }}></div>
            </div>
          </motion.div>
        </div>

        {/* Love Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="rounded-2xl p-8 max-w-2xl mx-auto shadow-lg" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid #e8c97a' }}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic mb-4" style={{ color: '#5c4a1e' }}>
              {t('couple.love-quote')}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
