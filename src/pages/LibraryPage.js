import Filters from "../components/Filters";
import Movies from "../components/Movies";
import { LANGUAGES } from "../utils/tmdb";

function LibraryPage() {
  return (
    <main>
      <Filters />
      <Movies categories={[]} lang={LANGUAGES.pl.lang} />
    </main>
  );
}

export default LibraryPage;
