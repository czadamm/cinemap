import RandomMovie from "../components/movies/RandomMovie";
import RankSection from "../components/movies/RankSection";
import { PROVIDERS, LANGUAGES } from "../utils/tmdb";

function HomePage() {
  return (
    <>
      <RandomMovie />
      <RankSection
        title="Popular in theaters"
        lang={LANGUAGES.us.lang}
        region={LANGUAGES.us.region}
        cinema={true}
      />
      <RankSection
        title="Best on Netflix"
        lang={LANGUAGES.us.lang}
        provider={PROVIDERS.netflix}
        region={LANGUAGES.us.region}
        min_votes={10000}
      />
      <RankSection
        title="Best on Disney+"
        lang={LANGUAGES.us.lang}
        provider={PROVIDERS.disney}
        region={LANGUAGES.us.region}
        min_votes={10000}
      />
      <RankSection
        title="Best on Amazon Prime"
        lang={LANGUAGES.us.lang}
        provider={PROVIDERS.amazon}
        region={LANGUAGES.us.region}
        min_votes={10000}
      />
    </>
  );
}

export default HomePage;
