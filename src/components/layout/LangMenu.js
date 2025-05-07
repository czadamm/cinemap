import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {usePreferences} from "../../context/PreferencesContext";
import classes from './LangMenu.module.css';
import plFlag from "../../assets/flags/pl.svg";
import gbFlag from "../../assets/flags/gb.svg";
import deFlag from "../../assets/flags/de.svg";
import frFlag from "../../assets/flags/fr.svg";
import esFlag from "../../assets/flags/es.svg";

const MENU_LANGUAGES = [
  { language: 'pl', flag: plFlag },
  { language: 'en', flag: gbFlag },
  { language: 'fr', flag: frFlag },
  { language: 'es', flag: esFlag },
  { language: 'de', flag: deFlag },
]

const LangMenu = () => {
  const { preferences, setGlobalLanguage } = usePreferences();
  const [currentLang, setCurrentLang] = useState(null);
  const [restOfLangs, setRestOfLangs] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const langMenuRef = useRef(null);

  useEffect(() => {
    const langFlag = MENU_LANGUAGES.find(lang => lang.language === preferences.language).flag;
    const otherLangs = MENU_LANGUAGES.filter(lang => lang.language !== preferences.language);

    setCurrentLang({ language: preferences.language, flag: langFlag });
    setRestOfLangs(otherLangs);
  }, [currentLang]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!langMenuRef.current?.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mouseup', handleOutsideClick);
    return () => {
      document.removeEventListener('mouseup', handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  }

  const handleSetLanguage = (language) => {
    setIsMenuOpen(false)
    setGlobalLanguage(language);
  }

  return (
    <div className={classes.buttonContainer}>
      <button className={classes.flagButton} onClick={toggleMenu}>
        <div className={classes.flagContainer}>
          <img src={currentLang?.flag} alt={currentLang?.language.toUpperCase() + ' flag'} />
        </div>
      </button>
      {isMenuOpen && (
        <ul ref={langMenuRef} className={[classes.languagesList]}>
          {restOfLangs.map((lang, index) => (
            <li key={index}>
              <button className={classes.flagButton} onClick={handleSetLanguage.bind(this, lang.language)}>
                <div className={classes.flagContainer}>
                  <img src={lang.flag} alt={`${lang.language.toUpperCase()} flag`} />
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LangMenu;