import Header from "./components/Header";
import Footer from "./components/Footer";
import ListFilm from "./components/ListFilm";

// Import Film
import film1 from "../../assets/poster/film1.png";
import film2 from "../../assets/poster/film2.png";
import film3 from "../../assets/poster/film3.png";
import film4 from "../../assets/poster/film4.png";
import film5 from "../../assets/poster/film5.png";

const Home = () => {
  const trendingFilms = [film1, film2, film3, film4, film5];
  const newReleases = [film3, film4, film5, film1, film2];
  const popularNow = [film5, film1, film2, film3, film4];

  return (
    <>
      <Header />

      <ListFilm
        title="Top Rating Film dan Series Hari ini"
        films={trendingFilms}
      />

      <ListFilm title="Film Trending" films={newReleases} />

      <ListFilm title="Rilis Baru" films={popularNow} />

      <Footer />
    </>
  );
};

export default Home;
