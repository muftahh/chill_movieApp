import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListFilm from "./components/ListFilm";
import ListWatch from "./components/ListWatch";
import Wishlist from "./components/Wishlist";
import HeroBanner from "./components/HeroBanner";

const Home = () => {
  const [films, setFilms] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const API_URL = "https://jsonfakery.com/movies/random/15";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Data Film:", data);
        setFilms(data);
      })
      .catch((error) => console.error("Error fetching film data:", error));
  }, []);

  const AddWishlist = (film) => {
    console.log("nambahfilm");
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some((item) => item.id === film.id)) {
        return [...prevWishlist, film];
      }
      return prevWishlist;
    });
  };

  const deleteWishlist = (filmId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((film) => film.id !== filmId)
    );
  };

  const deleteAllWishlist = () => {
    setWishlist([]);
  };

  return (
    <>
      <Header />
      <HeroBanner />
      <ListWatch />

      {wishlist.length > 0 && (
        <Wishlist
          wishlist={wishlist}
          onRemoveFromWishlist={deleteWishlist}
          onClearWishlist={deleteAllWishlist}
        />
      )}

      {films.length > 0 ? (
        <>
          <ListFilm
            title="Top Rating Film dan Series Hari Ini"
            films={films.slice(0, 5)}
            onAddToWishlist={AddWishlist}
          />
          <ListFilm
            title="Film Trending"
            films={films.slice(5, 10)}
            onAddToWishlist={AddWishlist}
          />
          <ListFilm
            title="Rilis Baru"
            films={films.slice(10, 15)}
            onAddToWishlist={AddWishlist}
          />
        </>
      ) : (
        <p className="text-center text-white">Loading daftar film...</p>
      )}

      <Footer />
    </>
  );
};

export default Home;
