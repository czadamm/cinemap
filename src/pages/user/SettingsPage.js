import { useState } from "react";
import BgWrapper from "../../components/layout/BgWrapper";
import Title from "../../components/layout/Title";
import classes from "./SettingsPage.module.css";
import SettingsSelect from "../../components/forms/SettingsSelect";

const SettingsPage = () => {
  const [activeContent, setActiveContent] = useState("interface");

  return (
    <>
      <BgWrapper />
      <div className={classes.content_wrapper}>
        <div className={classes.section_title}>
          <Title>Settings</Title>
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
                  Interface
                </button>
              </li>
              <li>
                <button
                  className={activeContent === "language" ? classes.active : ""}
                  onClick={() => setActiveContent("language")}
                >
                  Language
                </button>
              </li>
              <li>
                <button
                  className={activeContent === "movies" ? classes.active : ""}
                  onClick={() => setActiveContent("movies")}
                >
                  Movies
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
                  label="Theme"
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
                  label="Display language"
                  options={["one", "two"]}
                />
                <SettingsSelect
                  id="country"
                  label="Country"
                  options={["one", "two"]}
                />
                <SettingsSelect
                  id="timezone"
                  label="Timezone"
                  options={["one", "two"]}
                />
              </div>
              <div
                className={`${classes.settings_section} ${
                  activeContent === "movies" ? classes.active : ""
                }`}
              >
                <SettingsSelect>Adult movies</SettingsSelect>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
