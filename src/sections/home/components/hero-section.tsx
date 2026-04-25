'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Heart, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  isLoaded: boolean;
  couple: WeddingConfigType;
  inviteeName?: string;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({
  isLoaded,
  couple,
  inviteeName,
  onScrollToSection,
}: HeroSectionProps) => {
  const { t } = useTranslation('home');

  return (
    <div className="h-screen relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #fef3e2 50%, #fdf0d5 100%)' }}>
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(212,175,55,0.18)' }}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(180,140,30,0.14)' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(212,175,55,0.09)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-6 pt-10 sm:pt-18 md:pt-20">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <div className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 font-medium tracking-widest uppercase" style={{ color: '#9a7c40' }}>
                {inviteeName
                  ? `${t('letter.dear')}, ${inviteeName}`
                  : t('hero.welcome')}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 leading-tight" style={{ color: '#3d2e0e' }}>
                Nuestra
                <span className="block" style={{ backgroundImage: 'linear-gradient(90deg, #b8860b, #d4af37, #b8860b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Boda
                </span>
              </h1>
              <div className="w-32 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}></div>
            </motion.div>

            {/* Couple Photos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-4 sm:mb-6">
                {/* Bride */}
                <div className="text-center flex-shrink-0 justify-items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5e6c8, #e8c97a)', border: '3px solid #d4af37' }}>
                    <Image
                      src={couple.bride.photo}
                      alt={couple.bride.fullName}
                      width={128}
                      height={128}
                      className="rounded-full object-cover w-full h-full"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-auto px-2">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif break-words leading-tight" style={{ color: '#3d2e0e' }}>
                      {couple.bride.name}
                    </h3>
                  </div>
                </div>

                {/* Heart desktop */}
                <div className="hidden sm:flex items-center justify-center flex-shrink-0">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ color: '#d4af37' }}
                  >
                    <Heart size={40} fill="currentColor" strokeWidth={0} />
                  </motion.div>
                </div>

                {/* Heart mobile */}
                <div className="sm:hidden my-1" style={{ color: '#d4af37' }}>
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Heart size={24} fill="currentColor" strokeWidth={0} />
                  </motion.div>
                </div>

                {/* Groom */}
                <div className="text-center flex-shrink-0 justify-items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center mb-3 sm:mb-4 shadow-lg overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5e6c8, #e8c97a)', border: '3px solid #d4af37' }}>
                    <Image
                      src={couple.groom.photo}
                      alt={couple.groom.fullName}
                      width={128}
                      height={128}
                      className="rounded-full object-cover w-full h-full"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="w-28 sm:w-32 md:w-40 lg:w-48 xl:w-56 mx-auto px-2">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif break-words leading-tight" style={{ color: '#3d2e0e' }}>
                      {couple.groom.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.button
                onClick={() => onScrollToSection('rsvp')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{ background: 'linear-gradient(90deg, #b8860b, #d4af37)' }}
              >
                {t('navigation.rsvp')}
              </motion.button>
              <motion.button
                onClick={() => onScrollToSection('details')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 border cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.8)', color: '#5c4a1e', borderColor: '#d4af37' }}
              >
                {t('hero.view-details')}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pb-6 sm:pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center cursor-pointer"
              onClick={() => onScrollToSection('couple')}
              style={{ color: '#9a7c40' }}
            >
              <div className="text-xs mb-1 sm:mb-2">{t('hero.scroll-down')}</div>
              <ChevronDown size={22} strokeWidth={1.5} className="mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
