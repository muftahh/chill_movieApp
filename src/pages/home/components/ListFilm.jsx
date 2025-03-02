import "./src/style.css";

const ListFilm = ({ title, films }) => {
  return (
    <div className="header-background text-white h-full p-5 md:p-8">
      <div className="text-xl font-bold mb-5 md:text-3xl md:mb-10">{title}</div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-between gap-4 whitespace-nowrap pr-5 md:pr-0 md:py">
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
