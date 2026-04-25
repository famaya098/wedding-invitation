'use client';

import i18next from 'i18next';
import { useMemo } from 'react';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, I18nextProvider as Provider } from 'react-i18next';

import { i18nOptions } from './config-locales';

// ----------------------------------------------------------------------

const init = { ...i18nOptions(), detection: { caches: ['cookie'] } };

const i18nChain = i18next.use(initReactI18next).use(
  resourcesToBackend(
    (lang: string, ns: string) => import(`./langs/${lang}/${ns}.json`)
  )
);

// LanguageDetector uses localStorage/sessionStorage — only safe in browser
if (typeof window !== 'undefined') {
  // eslint-disable-next-line import/no-named-as-default-member
  i18nChain.use(LanguageDetector);
}

i18nChain.init(init);

// ----------------------------------------------------------------------

export function I18nProvider({
  lang,
  children,
}: {
  lang?: string;
  children: React.ReactNode;
}) {
  useMemo(() => {
    if (lang) {
      // eslint-disable-next-line import/no-named-as-default-member
      i18next.changeLanguage(lang);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Provider i18n={i18next}>{children}</Provider>;
}
