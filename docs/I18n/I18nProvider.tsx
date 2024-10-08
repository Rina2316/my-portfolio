import React, { createContext, useContext, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

interface I18nProviderProps {
  locale: string;
  children: React.ReactNode;
}

const I18nContext = createContext<"en"| "ru">("en");

export const I18nProvider: React.FC<I18nProviderProps> = ({ locale, children }) => {

  useEffect(() => {
    i18n.changeLanguage(locale || 'en'); 
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <I18nContext.Provider value={locale as "en" | "ru"}>
        {children}
      </I18nContext.Provider>
    </I18nextProvider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
