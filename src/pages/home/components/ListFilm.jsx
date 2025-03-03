import "./src/style.css";

const ListFilm = ({ title, films }) => {
  return (
    <div className="header-background text-white h-full p-5 md:py-8 md:px-20">
      <div className="text-xl font-bold mb-5 md:text-3xl md:mb-10">{title}</div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-between gap-4 whitespace-nowrap">
          {films.map((film, index) => (
            <img
              key={index}
              src={film}
              className="w-[120px] md:w-[234px] rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListFilm;
