import { NAVIGATION_ANIMATIONS } from '@/constants/navigation';
import type { NavigationSection } from '@/types/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Home, Heart, Calendar, MapPin, Camera, Mail } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Home,
  Heart,
  Calendar,
  MapPin,
  Camera,
  Mail,
};

interface NavigationButtonProps {
  section: NavigationSection;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function NavigationButton({
  section,
  index,
  isActive,
  onClick,
}: NavigationButtonProps) {
  const { t } = useTranslation('home');
  const IconComponent = ICON_MAP[section.icon] ?? Home;

  const baseClasses =
    'relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 group overflow-hidden cursor-pointer';

  const activeClasses = 'text-white shadow-lg';

  const inactiveClasses = 'text-stone-600 hover:text-amber-700 hover:bg-amber-50/80';

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 * index }}
      whileHover={NAVIGATION_ANIMATIONS.button.hover}
      whileTap={NAVIGATION_ANIMATIONS.button.tap}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={NAVIGATION_ANIMATIONS.background.initial}
            animate={NAVIGATION_ANIMATIONS.background.animate}
            exit={NAVIGATION_ANIMATIONS.background.exit}
            transition={NAVIGATION_ANIMATIONS.background.transition}
            className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-lg sm:rounded-xl`}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={NAVIGATION_ANIMATIONS.background.initial}
            animate={{ scale: 1.2, opacity: 0.3 }}
            exit={NAVIGATION_ANIMATIONS.background.exit}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-r ${section.gradient} rounded-lg sm:rounded-xl blur-sm -z-10`}
          />
        )}
      </AnimatePresence>

      <motion.span
        className="relative z-10 flex items-center"
        animate={isActive ? NAVIGATION_ANIMATIONS.icon.active : {}}
        transition={NAVIGATION_ANIMATIONS.icon.transition}
        whileHover={NAVIGATION_ANIMATIONS.icon.hover}
      >
        <IconComponent size={15} strokeWidth={1.8} />
      </motion.span>

      <motion.span
        className="hidden sm:inline-block whitespace-nowrap relative z-10 text-xs sm:text-sm"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 * index }}
      >
        {
          // @ts-expect-error - err
          t(section.labelKey)
        }
      </motion.span>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={NAVIGATION_ANIMATIONS.background.initial}
            animate={{ scale: 1, opacity: 1 }}
            exit={NAVIGATION_ANIMATIONS.background.exit}
            transition={NAVIGATION_ANIMATIONS.background.transition}
            className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 -translate-x-1/2 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full shadow-lg z-10"
          >
            <motion.div
              animate={NAVIGATION_ANIMATIONS.pulse.animate}
              transition={NAVIGATION_ANIMATIONS.pulse.transition}
              className="w-full h-full bg-white rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
