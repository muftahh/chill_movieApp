import "./src/style.css";

const ListFilm = ({ title, films, onAddToWishlist }) => {
  return (
    <div className="header-background text-white h-full p-5 md:py-8 md:px-20">
      <div className="text-xl font-bold mb-5 md:text-3xl md:mb-10">{title}</div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 whitespace-nowrap justify-between">
          {films.map((film, index) => (
            <div
              key={index}
              className="w-[120px] md:w-[234px] grid justify-items-center"
            >
              <img
                src={film.poster_path}
                alt={film.title}
                className="w-full rounded-md object-cover"
              />
              <button
                onClick={() => onAddToWishlist(film)}
                className="mt-2 bg-transparent text-white text-xs hover:text-slate-500 py-2 px-4 border border-slate-500 rounded"
              >
                Add to wishlist
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListFilm;
