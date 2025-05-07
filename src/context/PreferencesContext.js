import {createContext, useContext, useState} from "react";
import {LANGUAGES} from "../utils/tmdb";
import {useTranslation} from "react-i18next";
import i18next from "i18next";


const PreferencesContext = createContext();

export const PreferencesProvider = ({children}) => {
  const clientLang = i18next.language.split("-")[0];

  const [preferences, setPreferences] = useState({
    locale: LANGUAGES[clientLang].locale,
    country: LANGUAGES[clientLang].countryCode,
    language: LANGUAGES[clientLang].language,
  });
  const { i18n } = useTranslation();

  const changeUiLang = (language) => i18n.changeLanguage(language);

  const setLocale = (locale) => {
    setPreferences((prevState) => ({
      ...prevState,
      locale,
    }))
  }

  const setCountry = (country) => {
    setPreferences((prevState) => ({
      ...prevState,
      country,
    }))
  }

  const setLanguage = (language) => {
    setPreferences((prevState) => ({
      ...prevState,
      language,
    }))
    changeUiLang(language).catch(err => console.log(err))
  }

  const setGlobalLanguage = (language) => {
    setPreferences((prevState) => ({
      ...prevState,
      locale: LANGUAGES[language].locale,
      country: LANGUAGES[language].countryCode,
      language: LANGUAGES[language].language,
    }))
    changeUiLang(language).catch(err => console.log(err))
  }

  const contextValue = {
    preferences,
    setLanguage,
    setGlobalLanguage,
    setCountry,
    setLocale
  }

  return (
    <PreferencesContext.Provider value={contextValue}>
      {children}
    </PreferencesContext.Provider>
  )
}

export const usePreferences = () => {
  const context = useContext(PreferencesContext);
  if (context === undefined) {
    throw new Error('Preferences Context must be wrapped with a PreferencesProvider');
  }
  return context;
}