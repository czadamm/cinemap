import { useState } from "react";
import BgWrapper from "../../components/layout/BgWrapper";
import Title from "../../components/layout/Title";
import classes from "./SettingsPage.module.css";
import SettingsSelect from "../../components/forms/SettingsSelect";
import {useTranslation} from "react-i18next";

const SettingsPage = () => {
  const [activeContent, setActiveContent] = useState("interface");
  const { t } = useTranslation();

  return (
    <>
      <BgWrapper />
      <div className={classes.content_wrapper}>
        <div className={classes.section_title}>
          <Title>{t("settingsTitle")}</Title>
        </div>
        <div className={classes.settings_window}>
          <div className={classes.menu}>
            <ul>
              <li>
                <button
                  className={
                    activeContent === "interface" ? classes.active : ""
                  }
                  onClick={() => setActiveContent("interface")}
                >
                  {t("settingsInterface")}
                </button>
              </li>
              <li>
                <button
                  className={activeContent === "language" ? classes.active : ""}
                  onClick={() => setActiveContent("language")}
                >
                  {t("settingsLanguage")}
                </button>
              </li>
              <li>
                <button
                  className={activeContent === "movies" ? classes.active : ""}
                  onClick={() => setActiveContent("movies")}
                >
                  {t("settingsMovies")}
                </button>
              </li>
            </ul>
          </div>
          <div className={classes.content}>
            <form
              className={classes.settings_form}
              action="/settings"
              method="PATCH"
            >
              <div
                className={`${classes.settings_section} ${
                  activeContent === "interface" ? classes.active : ""
                }`}
              >
                <SettingsSelect
                  id="theme"
                  label={t("settingsInterfaceTheme")}
                  options={["one", "two"]}
                />
              </div>
              <div
                className={`${classes.settings_section} ${
                  activeContent === "language" ? classes.active : ""
                }`}
              >
                <SettingsSelect
                  id="display_lang"
                  label={t("settingsLanguageDisplay")}
                  options={["one", "two"]}
                />
                <SettingsSelect
                  id="country"
                  label={t("settingsLanguageCountry")}
                  options={["one", "two"]}
                />
                <SettingsSelect
                  id="timezone"
                  label={t("settingsLanguageTimezone")}
                  options={["one", "two"]}
                />
              </div>
              <div
                className={`${classes.settings_section} ${
                  activeContent === "movies" ? classes.active : ""
                }`}
              >
                <SettingsSelect
                  id="adult_enabled"
                  label={t("settingsMoviesAdult")}
                  options={["one", "two"]}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
