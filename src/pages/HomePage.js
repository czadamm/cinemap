import RandomMovie from "../components/movies/RandomMovie";
import RankSection from "../components/movies/RankSection";
import { PROVIDERS } from "../utils/tmdb";
import {usePreferences} from "../context/PreferencesContext";
import {useTranslation} from "react-i18next";

function HomePage() {
  const { preferences } = usePreferences();
  const { t } = useTranslation();

  return (
    <>
      <RandomMovie />
      <RankSection
        title={t("rankTheaters")}
        lang={preferences.locale}
        region={preferences.country}
        cinema={true}
      />
      <RankSection
        title={t("rankNetflix")}
        lang={preferences.locale}
        provider={PROVIDERS.netflix}
        region={preferences.country}
        min_votes={10000}
      />
      <RankSection
        title={t("rankDisney")}
        lang={preferences.locale}
        provider={PROVIDERS.disney}
        region={preferences.country}
        min_votes={10000}
      />
      <RankSection
        title={t("rankPrime")}
        lang={preferences.locale}
        provider={PROVIDERS.amazon}
        region={preferences.country}
        min_votes={10000}
      />
    </>
  );
}

export default HomePage;
