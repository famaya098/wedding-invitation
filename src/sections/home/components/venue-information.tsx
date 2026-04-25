'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Navigation, Church, UtensilsCrossed, ParkingSquare, Users } from 'lucide-react';

interface VenueInformationProps {
  venue: WeddingConfigType['venue'];
}

export const VenueInformation = ({ venue }: VenueInformationProps) => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4" style={{ color: '#3d2e0e' }}>
            {t('venue.location-title')}
          </h2>
          <div className="w-24 h-px mx-auto" style={{ background: '#d4af37' }}></div>
          <p className="text-base sm:text-lg md:text-xl mt-6 max-w-2xl mx-auto" style={{ color: '#7a6030' }}>
            {t('venue.location-subtitle')}
          </p>
        </motion.div>

        {/* Single venue card — ceremony = reception */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto rounded-3xl p-8 shadow-lg"
          style={{ background: 'linear-gradient(135deg, #fdf8f0, #fef3e2)', border: '1px solid #e8c97a' }}
        >
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ background: 'linear-gradient(135deg, #d4af37, #b8860b)' }}>
              <Church size={32} color="white" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif mb-2" style={{ color: '#3d2e0e' }}>
              Ceremonia &amp; Recepción
            </h3>
            <div className="w-16 h-px mx-auto" style={{ background: '#d4af37' }}></div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2" style={{ color: '#3d2e0e' }}>
                {venue.ceremony.name}
              </h4>
              <p className="text-sm sm:text-base md:text-lg mb-4 flex items-center justify-center gap-2" style={{ color: '#7a6030' }}>
                <MapPin size={16} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                {venue.ceremony.address}
              </p>
              <div className="inline-flex items-center gap-2 rounded-lg px-4 py-2 shadow-sm" style={{ background: 'rgba(255,255,255,0.7)' }}>
                <Clock size={16} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                <p className="font-medium text-sm sm:text-base" style={{ color: '#b8860b' }}>
                  {venue.ceremony.time}
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-6 space-y-3" style={{ background: 'rgba(255,255,255,0.6)' }}>
              <h5 className="font-semibold mb-3 text-sm sm:text-base" style={{ color: '#5c4a1e' }}>
                {t('venue.ceremony-details')}
              </h5>
              <div className="space-y-2 text-xs sm:text-sm" style={{ color: '#7a6030' }}>
                <p className="flex items-center gap-2">
                  <Clock size={13} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                  {t('venue.arrive-early')}
                </p>
                <p className="flex items-center gap-2">
                  <ParkingSquare size={13} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                  {t('venue.parking')}
                </p>
                <p className="flex items-center gap-2">
                  <UtensilsCrossed size={13} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                  {t('venue.open-bar')}
                </p>
                <p className="flex items-center gap-2">
                  <Users size={13} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                  {t('venue.wheelchair')}
                </p>
              </div>
            </div>

            <button
              onClick={() => window.open('https://maps.google.com/maps?q=La+Casa+del+Parque+frente+al+Tin+Marin+San+Salvador', '_blank')}
              className="w-full text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(90deg, #b8860b, #d4af37)' }}
            >
              <Navigation size={16} strokeWidth={1.5} />
              {t('venue.view-map')}
            </button>
          </div>
        </motion.div>

        {/* Parking / access info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <div
            className="rounded-2xl p-5 max-w-xl mx-auto text-xs sm:text-sm space-y-1"
            style={{ background: 'rgba(255,255,255,0.6)', border: '1px solid #f0e0b0', color: '#9a7c40' }}
          >
            <p>{t('venue.taxi-uber')}</p>
            <p>{t('venue.public-parking')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
