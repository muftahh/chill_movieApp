import background from "../components/src/assets/film1.png";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[225px] md:h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full text-white p-5 md:p-10">
        <h1 className="text-lg md:text-5xl font-bold mb-1 md:mb-4">Shuzume</h1>
        <p className="text-xs md:text-lg max-w-2xl leading-snug md:block">
          A modern action adventure road story where a 17-year-old girl named
          Suzume helps a mysterious young man close doors from the other side
          that are releasing disasters all over in Japan.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-5">
          <button className="bg-blue-600 text-white px-3 py-1 md:px-6 md:py-3 rounded-md text-xs md:text-lg">
            Mulai
          </button>
          <button className="flex items-center gap-2 text-white border border-gray-400 px-3 py-1 md:px-6 md:py-3 rounded-md text-xs md:text-lg">
            ⓘ Selengkapnya
          </button>
          <div className="flex items-center justify-center border border-gray-400 px-3 py-1 md:px-6 md:py-3 rounded-md text-xs md:text-lg">
            18+
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
