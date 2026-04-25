'use client';

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { Images } from 'lucide-react';

const GALLERY_PHOTOS = [
  { id: 1, src: '/assets/images/foto1.png', alt: 'Foto 1' },
  { id: 2, src: '/assets/images/foto2.png', alt: 'Foto 2' },
  { id: 3, src: '/assets/images/foto3.png', alt: 'Foto 3' },
  { id: 4, src: '/assets/images/foto4.png', alt: 'Foto 4' },
  { id: 5, src: '/assets/images/foto5.png', alt: 'Foto 5' },
  { id: 6, src: '/assets/images/foto6.png', alt: 'Foto 6' },
];

export const GalleryPreview = () => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #fef9ee 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4" style={{ color: '#3d2e0e' }}>
            {t('gallery.journey-title')}
          </h2>
          <div className="w-24 h-px mx-auto mb-6" style={{ background: '#d4af37' }}></div>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#7a6030' }}>
            {t('gallery.journey-subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              style={{ border: '1px solid #e8c97a' }}
            >
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5e6c8, #e8c97a)' }}>
                <Images size={40} style={{ color: '#d4af37', opacity: 0.5 }} strokeWidth={1} />
              </div>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
