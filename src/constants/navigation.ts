export const NAVIGATION_ANIMATIONS = {
  navigation: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  },
  button: {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    transition: { duration: 0.3 },
  },
  background: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: 0.3, type: 'spring', stiffness: 300 },
  },
  icon: {
    active: {
      rotate: [0, -10, 10, -10, 0],
      scale: [1, 1.1, 1],
    },
    hover: { scale: 1.2, rotate: 5 },
    transition: { duration: 0.5 },
  },
  pulse: {
    animate: { scale: [1, 1.5, 1] },
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const NAVIGATION_SECTIONS = [
  {
    id: 'hero',
    labelKey: 'navigation.home',
    icon: 'Home',
    gradient: 'from-amber-600 to-yellow-500',
  },
  {
    id: 'couple',
    labelKey: 'navigation.couple',
    icon: 'Heart',
    gradient: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'details',
    labelKey: 'navigation.details',
    icon: 'Calendar',
    gradient: 'from-amber-700 to-yellow-600',
  },
  {
    id: 'venue',
    labelKey: 'navigation.venue',
    icon: 'MapPin',
    gradient: 'from-yellow-600 to-amber-700',
  },
  {
    id: 'gallery',
    labelKey: 'navigation.gallery',
    icon: 'Camera',
    gradient: 'from-amber-600 to-yellow-700',
  },
  {
    id: 'rsvp',
    labelKey: 'navigation.rsvp',
    icon: 'Mail',
    gradient: 'from-yellow-700 to-amber-600',
  },
];
