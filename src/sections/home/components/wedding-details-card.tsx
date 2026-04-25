'use client';

import { motion } from 'motion/react';
import {
  formatWeddingTime,
  generateGoogleCalendarLink,
} from '@/lib/wedding-utils';
import type { WeddingConfigType } from '@/types';
import { useTranslation } from 'react-i18next';
import { useTranslate } from '@/locales';
import { Heart, CalendarPlus, MapPin, Shirt, ParkingSquare, Phone } from 'lucide-react';

interface WeddingDetailsCardProps {
  date: Date;
  venue: WeddingConfigType['venue'];
}

export const WeddingDetailsCard = ({ date, venue }: WeddingDetailsCardProps) => {
  const { currentLang } = useTranslate();
  const { t } = useTranslation('home');

  const calendarEvent = {
    title: t('details.our-wedding-day'),
    start: date,
    end: new Date(date.getTime() + 5 * 60 * 60 * 1000),
    description: t('details.join-us'),
    location: venue.ceremony.address,
  };

  return (
    <div className="py-20" style={{ background: 'linear-gradient(180deg, #fdf8f0 0%, #ffffff 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4" style={{ color: '#3d2e0e' }}>
            {t('details.title')}
          </h2>
          <div className="w-24 h-px mx-auto mb-6" style={{ background: '#d4af37' }}></div>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto" style={{ color: '#7a6030' }}>
            {t('details.join-us-text')}
          </p>
        </motion.div>

        {/* Date Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl shadow-2xl p-8 sm:p-10 md:p-12 mb-12 overflow-hidden group"
          style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fdf8f0 50%, #fef3e2 100%)', border: '1px solid #e8c97a' }}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" style={{ background: 'rgba(212,175,55,0.15)' }}></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" style={{ background: 'rgba(180,140,30,0.12)' }}></div>

          <div className="relative z-10">
            {/* Save the Date */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 mb-6"
                style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.4)' }}
              >
                <Heart size={20} style={{ color: '#d4af37' }} fill="currentColor" strokeWidth={0} />
                <span className="text-sm sm:text-base font-semibold tracking-wide uppercase" style={{ color: '#b8860b' }}>
                  {t('details.date')}
                </span>
              </motion.div>
            </div>

            {/* Date Display */}
            <div className="flex flex-col sm:flex-row items-stretch justify-center gap-6 sm:gap-8 md:gap-12 mb-8">
              {/* Day */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center group-hover:scale-105 transition-transform duration-300 flex-1 sm:flex-none"
              >
                <div className="text-white rounded-2xl p-4 sm:p-6 shadow-lg mb-2 h-24 sm:h-28 md:h-32 lg:h-36 flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px]" style={{ background: 'linear-gradient(135deg, #b8860b, #d4af37)' }}>
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none">
                    {date.getDate()}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider mt-3" style={{ color: '#9a7c40' }}>
                  {t('details.day')}
                </p>
              </motion.div>

              {/* Month */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center group-hover:scale-105 transition-transform duration-300 flex-1 sm:flex-none"
              >
                <div className="text-white rounded-2xl p-4 sm:p-6 shadow-lg mb-2 h-24 sm:h-28 md:h-32 lg:h-36 flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px]" style={{ background: 'linear-gradient(135deg, #6b4f10, #9a7c40)' }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none mb-1">
                    {date.toLocaleDateString('es-ES', { month: 'short' }).toUpperCase()}
                  </div>
                  <div className="text-sm sm:text-base md:text-lg font-medium opacity-90">
                    {date.getFullYear()}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider mt-3" style={{ color: '#9a7c40' }}>
                  {t('details.month')} &amp; {t('details.year')}
                </p>
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center group-hover:scale-105 transition-transform duration-300 flex-1 sm:flex-none"
              >
                <div className="text-white rounded-2xl p-4 sm:p-6 shadow-lg mb-2 h-24 sm:h-28 md:h-32 lg:h-36 flex flex-col items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px]" style={{ background: 'linear-gradient(135deg, #c8a028, #e8c060)' }}>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-none">
                    {formatWeddingTime(date, currentLang.numberFormat.code)}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium uppercase tracking-wider mt-3" style={{ color: '#9a7c40' }}>
                  {t('details.time')}
                </p>
              </motion.div>
            </div>

            {/* Weekday */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center mb-8 px-2"
            >
              <div className="relative inline-block w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl sm:rounded-3xl px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 shadow-xl" style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(212,175,55,0.4)' }}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3">
                  <Heart size={22} style={{ color: '#d4af37' }} fill="currentColor" strokeWidth={0} />
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-center leading-tight" style={{ color: '#3d2e0e' }}>
                    {date.toLocaleDateString('es-ES', { weekday: 'long' }).charAt(0).toUpperCase() + date.toLocaleDateString('es-ES', { weekday: 'long' }).slice(1)}
                  </p>
                  <Heart size={22} style={{ color: '#d4af37' }} fill="currentColor" strokeWidth={0} />
                </div>
                <div className="w-16 sm:w-20 md:w-24 h-px mx-auto mb-3" style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}></div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium" style={{ color: '#7a6030' }}>
                  {date.toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <p className="text-xs sm:text-sm md:text-base font-semibold mt-2" style={{ color: '#b8860b' }}>
                  {t('details.mark-calendar')}
                </p>
              </div>
            </motion.div>

            {/* Add to Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center"
            >
              <motion.a
                href={generateGoogleCalendarLink(calendarEvent)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, #b8860b, #d4af37, #9a7c40)' }}
              >
                <CalendarPlus size={20} strokeWidth={1.8} />
                <span>{t('details.add-to-calendar')}</span>
              </motion.a>
              <p className="text-xs sm:text-sm mt-4 max-w-md mx-auto" style={{ color: '#9a7c40' }}>
                {t('details.message')}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Single unified venue card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 group hover:shadow-2xl transition-all duration-300"
          style={{ border: '1px solid #f0e0b0' }}
        >
          <div className="text-center mb-6">
            <div
              className="inline-block rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #fef3e2, #fde8c0)' }}
            >
              <MapPin size={32} style={{ color: '#b8860b' }} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ color: '#3d2e0e' }}>
              {venue.ceremony.name}
            </h3>
            <p className="text-sm sm:text-base" style={{ color: '#7a6030' }}>
              {venue.ceremony.address}
            </p>
            <div className="w-16 h-px mx-auto mt-4" style={{ background: '#d4af37' }} />
          </div>
          <div className="space-y-4 text-center">
            <div className="rounded-xl p-4" style={{ background: '#fdf8f0' }}>
              <p className="font-medium text-sm sm:text-base" style={{ color: '#5c4a1e' }}>
                {t('details.time')}
              </p>
              <p className="font-semibold text-sm sm:text-base" style={{ color: '#b8860b' }}>
                {venue.ceremony.time}
              </p>
            </div>
            <motion.a
              href="https://maps.google.com/maps?q=La+Casa+del+Parque+frente+al+Tin+Marin+San+Salvador"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
              style={{ background: 'linear-gradient(90deg, #b8860b, #d4af37)' }}
            >
              <MapPin size={14} strokeWidth={1.5} />
              {t('details.get-directions')}
            </motion.a>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, #fdf8f0, #fef3e2)', border: '1px solid #e8c97a' }}>
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4" style={{ color: '#3d2e0e' }}>
              {t('details.please-note')}
            </h4>
            <div className="grid md:grid-cols-3 gap-6 text-xs sm:text-sm" style={{ color: '#7a6030' }}>
              <div className="flex flex-col items-center gap-2">
                <Shirt size={22} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                <p className="font-medium" style={{ color: '#5c4a1e' }}>{t('details.dress-code')}</p>
                <p>{t('details.formal-attire')}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ParkingSquare size={22} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                <p className="font-medium" style={{ color: '#5c4a1e' }}>{t('details.parking')}</p>
                <p>{t('details.valet-available')}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone size={22} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                <p className="font-medium" style={{ color: '#5c4a1e' }}>{t('details.contact')}</p>
                <p>7563-2086</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
