'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Clock, Phone, Mail, Heart, Users } from 'lucide-react';

interface RSVPProps {
  inviteeName?: string;
  cupos?: number;
}

export const RSVP = ({ inviteeName = '', cupos = 4 }: RSVPProps) => {
  const { t } = useTranslation('home');

  const [formData, setFormData] = useState({
    name: inviteeName,
    email: '',
    attendance: '',
    guests: '1',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: inviteeName, email: '', attendance: '', guests: '1', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <div className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #fdf8f0, #fef3e2)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-12 shadow-xl"
            style={{ border: '1px solid #e8c97a' }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: '#fef3e2' }}
            >
              <CheckCircle2 size={40} style={{ color: '#b8860b' }} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4" style={{ color: '#3d2e0e' }}>
              {t('rsvp.thank-you')}
            </h3>
            <p className="text-base sm:text-lg md:text-xl" style={{ color: '#7a6030' }}>
              {t('rsvp.thank-you-received')}
            </p>
            <div className="mt-6 flex justify-center" style={{ color: '#d4af37' }}>
              <Heart size={28} fill="currentColor" strokeWidth={0} />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="py-20 px-4"
      style={{ background: 'linear-gradient(135deg, #fdf8f0, #fef3e2)' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4"
            style={{ color: '#3d2e0e' }}
          >
            {t('rsvp.title')}
          </h2>
          <div className="w-24 h-px mx-auto mb-6" style={{ background: '#d4af37' }} />
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: '#7a6030' }}
          >
            {t('rsvp.subtitle')}
          </p>

          {/* Cupos badge */}
          {cupos > 0 && (
            <div className="mt-4 flex justify-center">
              <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold"
                style={{ background: 'white', color: '#b8860b', border: '1px solid #e8c97a' }}
              >
                <Users size={15} strokeWidth={1.8} />
                {cupos === 1
                  ? t('letter.cupos-one')
                  : `${cupos} ${t('letter.cupos-many')}`}
              </div>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* RSVP Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl" style={{ border: '1px solid #e8c97a' }}>
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-serif mb-6 text-center"
                style={{ color: '#3d2e0e' }}
              >
                {t('rsvp.confirm-attendance')}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium mb-2"
                    style={{ color: '#5c4a1e' }}
                  >
                    {t('rsvp.full-name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl outline-none transition-all duration-300 focus:ring-2"
                    style={{ borderColor: '#e8c97a', color: '#3d2e0e' }}
                    placeholder={t('rsvp.full-name')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium mb-2"
                    style={{ color: '#5c4a1e' }}
                  >
                    {t('rsvp.email-address')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-xl outline-none transition-all duration-300 focus:ring-2"
                    style={{ borderColor: '#e8c97a', color: '#3d2e0e' }}
                    placeholder={t('rsvp.email-address')}
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label
                    htmlFor="attendance"
                    className="block text-xs sm:text-sm font-medium mb-2"
                    style={{ color: '#5c4a1e' }}
                  >
                    {t('rsvp.will-attend')} *
                  </label>
                  <select
                    id="attendance"
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-xl outline-none transition-all duration-300"
                    style={{ borderColor: '#e8c97a', color: '#3d2e0e' }}
                  >
                    <option value="">{t('rsvp.please-select')}</option>
                    <option value="yes">{t('rsvp.yes-there')}</option>
                    <option value="no">{t('rsvp.no-cant')}</option>
                  </select>
                </div>

                {/* Number of guests — limited to cupos */}
                {formData.attendance === 'yes' && (
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-xs sm:text-sm font-medium mb-2"
                      style={{ color: '#5c4a1e' }}
                    >
                      {t('rsvp.number-guests')}
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-xl outline-none"
                      style={{ borderColor: '#e8c97a', color: '#3d2e0e' }}
                    >
                      {Array.from({ length: cupos }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={String(n)}>
                          {n} {n === 1 ? t('rsvp.guest-count') : t('rsvp.guests-count')}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs mt-1" style={{ color: '#9a7c40' }}>
                      {cupos === 1
                        ? t('letter.cupos-one')
                        : `${cupos} ${t('letter.cupos-many')}`}
                    </p>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium mb-2"
                    style={{ color: '#5c4a1e' }}
                  >
                    {t('rsvp.message-couple')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border rounded-xl outline-none transition-all duration-300 resize-none"
                    style={{ borderColor: '#e8c97a', color: '#3d2e0e' }}
                    placeholder={t('rsvp.message-placeholder')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white py-4 px-6 rounded-xl font-medium text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{ background: 'linear-gradient(90deg, #b8860b, #d4af37)' }}
                >
                  {t('rsvp.send-rsvp')}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Deadline */}
            <div className="bg-white rounded-2xl p-6 shadow-lg" style={{ border: '1px solid #e8c97a' }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ background: '#fef3e2' }}
                >
                  <Clock size={22} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base" style={{ color: '#3d2e0e' }}>
                    {t('rsvp.deadline')}
                  </h4>
                  <p className="text-xs sm:text-sm" style={{ color: '#9a7c40' }}>
                    {t('rsvp.deadline-date')}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm" style={{ color: '#7a6030' }}>
                {t('rsvp.deadline-help')}
              </p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg" style={{ border: '1px solid #e8c97a' }}>
              <div className="flex items-center mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ background: '#fef3e2' }}
                >
                  <Phone size={22} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base" style={{ color: '#3d2e0e' }}>
                    {t('rsvp.questions')}
                  </h4>
                  <p className="text-xs sm:text-sm" style={{ color: '#9a7c40' }}>
                    {t('rsvp.questions-help')}
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-xs sm:text-sm" style={{ color: '#7a6030' }}>
                <p className="flex items-center gap-2">
                  <Phone size={12} style={{ color: '#b8860b' }} strokeWidth={1.5} />
                  7563-2086
                </p>
              </div>
            </div>

            {/* Cupos info card */}
            <div
              className="rounded-2xl p-6 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fdf8f0, #fef3e2)', border: '1px solid #e8c97a' }}
            >
              <div className="flex items-start mb-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #d4af37, #b8860b)' }}
                >
                  <Users size={22} color="white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base" style={{ color: '#3d2e0e' }}>
                    {t('rsvp.reserved-spots')}
                  </h4>
                  <p className="text-xs sm:text-sm mt-1 font-medium" style={{ color: '#b8860b' }}>
                    {cupos === 1
                      ? t('letter.cupos-one')
                      : `${cupos} ${t('letter.cupos-many')}`}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: '#7a6030' }}>
                {t('rsvp.spots-note')}
              </p>
            </div>

            {/* Gift */}
            <div
              className="rounded-2xl p-6 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #fdf8f0, #fef3e2)', border: '1px solid #d4af37' }}
            >
              <div className="flex items-start mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #d4af37, #b8860b)' }}
                >
                  <Mail size={22} color="white" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base" style={{ color: '#3d2e0e' }}>
                    {t('rsvp.gift-registry')}
                  </h4>
                  <p className="text-xs sm:text-sm mt-1" style={{ color: '#7a6030' }}>
                    {t('rsvp.registry-text')}
                  </p>
                </div>
              </div>
              <p className="text-xs font-medium italic" style={{ color: '#9a7c40' }}>
                Agradecemos sus muestras de cariño en regalo de sobre.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
