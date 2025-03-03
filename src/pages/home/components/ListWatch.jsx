import film1 from "./src/assets/film1.png";
import film2 from "./src/assets/film2.png";
import film3 from "./src/assets/film3.png";
import film4 from "./src/assets/film4.png";

const ListWatch = () => {
  const films = [film1, film2, film3, film4];

  return (
    <div className="header-background text-white h-full p-5 md:py-8 md:px-20">
      <div className="text-xl font-bold mb-5 md:text-3xl md:mb-10">
        Melanjutkan Tonton Film
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex justify-between gap-4 whitespace-nowrap pr-5 md:pr-0 md:py">
          {films.map((film, index) => (
            <img
              key={index}
              src={film}
              className="w-[310px] md:w-[310px] rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListWatch;
