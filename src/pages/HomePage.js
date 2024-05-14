import RandomMovie from "../components/RandomMovie";
import RankSection from "../components/RankSection";
import { PROVIDERS, LANGUAGES } from "../utils/tmdb";

function HomePage() {
  return (
    <main>
      <RandomMovie />
      <RankSection
        title="Popular in cinemas"
        lang={LANGUAGES.pl.lang}
        region={LANGUAGES.pl.region}
        cinema={true}
      />
      <RankSection
        title="Best on Netflix"
        lang={LANGUAGES.pl.lang}
        provider={PROVIDERS.netflix}
        region={LANGUAGES.pl.region}
      />
      <RankSection
        title="Best on Disney+"
        lang={LANGUAGES.pl.lang}
        provider={PROVIDERS.disney}
        region={LANGUAGES.pl.region}
      />
      <RankSection
        title="Best on HBO MAX"
        lang={LANGUAGES.pl.lang}
        provider={PROVIDERS.hboMAX}
        region={LANGUAGES.pl.region}
      />
    </main>
  );
}

export default HomePage;
