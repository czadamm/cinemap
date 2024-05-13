import RandomMovie from "../components/RandomMovie";
import RankSection from "../components/RankSection";

function HomePage() {
  return (
    <main>
      <RandomMovie />
      <RankSection title="Popular in cinemas" rank="cinema" />
      <RankSection title="Best on Netflix" rank="netflix" />
      <RankSection title="Best on Disney+" rank="disney" />
    </main>
  );
}

export default HomePage;
