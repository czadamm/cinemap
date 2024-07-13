import Filters from "../components/Filters";
import BgWrapper from "../components/layout/BgWrapper";
import Movies from "../components/Movies";
import { LANGUAGES } from "../utils/tmdb";

function LibraryPage() {
  return (
    <>
      <BgWrapper double>
        <Filters />
        <Movies categories={[]} lang={LANGUAGES.pl.lang} />
      </BgWrapper>
    </>
  );
}

export default LibraryPage;
