const Wishlist = ({ wishlist, onRemoveFromWishlist, onClearWishlist }) => {
  return (
    <div className="header-background text-white h-full p-5 md:py-8 md:px-20">
      <div className="mb-5 md:mb-10 grid grid-cols-2 items-center">
        <div className="text-xl font-bold md:text-3xl">Wishlist</div>
        <button
          onClick={onClearWishlist}
          className="justify-self-end mt-2 bg-transparent text-white text-xs hover:text-slate-500 py-2 px-4 border border-slate-500 rounded"
        >
          Clear wishlist
        </button>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max whitespace-nowrap">
          {wishlist.map((film, index) => (
            <div key={index} className="w-[120px] md:w-[234px]">
              <img
                src={film.poster_path}
                alt={film.title}
                className="w-full rounded-md object-cover"
              />
              <div className="grid justify-items-end">
                <button
                  onClick={() => onRemoveFromWishlist(film.id)}
                  className="mt-2 bg-transparent text-white text-xs hover:text-slate-500 py-2 px-4 border border-slate-500 rounded"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
