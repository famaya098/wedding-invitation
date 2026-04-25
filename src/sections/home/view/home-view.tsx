'use client';

import { useState, useEffect } from 'react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { useInvitee } from '@/hooks/use-invitee';
import { LetterAnimation } from '@/components';
import {
  HeroSection,
  CoupleIntroduction,
  WeddingDetailsCard,
  CountdownTimer,
  VenueInformation,
  EventSchedule,
  RSVP,
  GalleryPreview,
  ClosingMessage,
  FloatingNavigation,
  NavigationFAB,
  MusicPlayer,
  ScrollProgressIndicator,
} from '../components';
import { NAVIGATION_SECTIONS, WEDDING_CONFIG } from '@/constants';

export default function HomeView() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLetter, setShowLetter] = useState(true);
  const { name: inviteeName, cupos } = useInvitee();

  const activeSection = useScrollSpy(
    NAVIGATION_SECTIONS.map((section) => section.id)
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLetterOpen = () => {
    setShowLetter(false);
    setTimeout(() => setIsLoaded(true), 300);
  };

  if (showLetter) {
    return (
      <LetterAnimation
        onOpen={handleLetterOpen}
        coupleName={`${WEDDING_CONFIG.bride.name} & ${WEDDING_CONFIG.groom.name}`}
      />
    );
  }

  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      <FloatingNavigation
        activeSection={activeSection}
        onScrollToSection={scrollToSection}
      />

      <section id="hero" className="relative">
        <HeroSection
          isLoaded={isLoaded}
          couple={WEDDING_CONFIG}
          inviteeName={inviteeName}
          onScrollToSection={scrollToSection}
        />
      </section>

      <section id="couple" className="relative">
        <CoupleIntroduction
          bride={WEDDING_CONFIG.bride}
          groom={WEDDING_CONFIG.groom}
          isVisible={isLoaded}
        />
      </section>

      <section id="details" className="relative">
        <WeddingDetailsCard
          date={WEDDING_CONFIG.date}
          venue={WEDDING_CONFIG.venue}
        />
        <CountdownTimer targetDate={WEDDING_CONFIG.date} />
      </section>

      <section id="venue" className="relative">
        <VenueInformation venue={WEDDING_CONFIG.venue} />
        <EventSchedule />
      </section>

      <section id="gallery" className="relative">
        <GalleryPreview />
      </section>

      <section id="rsvp" className="relative">
        <RSVP inviteeName={inviteeName} cupos={cupos} />
      </section>

      <section id="closing" className="relative">
        <ClosingMessage
          bride={WEDDING_CONFIG.bride.fullName}
          groom={WEDDING_CONFIG.groom.fullName}
        />
      </section>

      <MusicPlayer />
      <NavigationFAB activeSection={activeSection} onScrollToSection={scrollToSection} />
      <ScrollProgressIndicator activeSection={activeSection} />
    </div>
  );
}
