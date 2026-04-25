'use client';

import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Users, Heart, Camera, Wine, UtensilsCrossed, Cake, LogOut } from 'lucide-react';

export const EventSchedule = () => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const scheduleItems = [
    {
      time: '3:30 PM',
      event: t('schedule.guest-arrival'),
      description: t('schedule.welcome-drinks'),
      Icon: Users,
    },
    {
      time: '4:00 PM',
      event: t('schedule.wedding-ceremony'),
      description: t('schedule.ceremony-desc'),
      Icon: Heart,
    },
    {
      time: '4:30 PM',
      event: t('schedule.photography'),
      description: t('schedule.photography-desc'),
      Icon: Camera,
    },
    {
      time: '5:00 PM',
      event: t('schedule.toast'),
      description: t('schedule.toast-desc'),
      Icon: Wine,
    },
    {
      time: '5:15 PM',
      event: t('schedule.reception-begins'),
      description: t('schedule.dinner-celebration'),
      Icon: UtensilsCrossed,
    },
    {
      time: '6:15 PM',
      event: t('schedule.cake'),
      description: t('schedule.cake-desc'),
      Icon: Cake,
    },
    {
      time: '6:30 PM',
      event: t('schedule.send-off'),
      description: t('schedule.sparkler-farewell'),
      Icon: LogOut,
    },
  ];

  return (
    <div
      ref={ref}
      className="py-16 px-4"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #fdf8f0 100%)' }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4"
            style={{ color: '#3d2e0e' }}
          >
            {t('schedule.title')}
          </h3>
          <div className="w-20 h-px mx-auto" style={{ background: '#d4af37' }} />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: '#e8c97a' }}
          />

          <div className="space-y-8">
            {scheduleItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
              >
                {/* Dot */}
                <div
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10"
                  style={{ background: '#d4af37' }}
                />

                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  } pl-12 md:pl-0`}
                >
                  <div
                    className="rounded-2xl p-6 shadow-lg"
                    style={{ background: 'white', border: '1px solid #f0e0b0' }}
                  >
                    <div className="flex items-center mb-2 gap-2">
                      <span
                        className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                        style={{ background: '#fef3e2', color: '#b8860b' }}
                      >
                        {item.time}
                      </span>
                      <item.Icon size={15} style={{ color: '#d4af37' }} strokeWidth={1.5} />
                    </div>
                    <h4
                      className="text-base sm:text-lg md:text-xl font-semibold mb-1"
                      style={{ color: '#3d2e0e' }}
                    >
                      {item.event}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base" style={{ color: '#7a6030' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
