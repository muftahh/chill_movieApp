import { useNavigate } from "react-router";
import background from "../../assets/background.jpg";
import logo from "../../assets/logo.png";
import "../../pages/home/components/src/style.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-96 text-white">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Chill Logo" className="h-14" />
        </div>

        {/* Judul */}
        <div className="text-center">
          <h2 className="mb-1.5 text-2xl font-bold">Daftar</h2>
          <p className=" text-gray-300 mb-5">Selamat datang!</p>
        </div>

        {/* Input Username */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-1.5">Username</label>
          <input
            type="text"
            placeholder="Masukkan username"
            className="w-full px-3 py-2 rounded-full text-sm header-background border-gray-600 focus:outline-none focus:ring focus:ring-gray-900"
          />
        </div>

        {/* Input Password */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-1.5">Pasword</label>
          <input
            type="text"
            placeholder="Masukkan username"
            className="w-full px-3 py-2 rounded-full text-sm header-background border-gray-600 focus:outline-none focus:ring focus:ring-gray-900"
          />
        </div>

        {/* Input Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1.5">
            Konfirmasi Password
          </label>
          <div className="relative">
            <input
              type="password"
              placeholder="Masukkan kata sandi"
              className="w-full px-3 py-2 rounded-full text-sm header-background border-gray-600 focus:outline-none focus:ring focus:ring-gray-900"
            />
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-300 mb-8">
          <div href="#" className="">
            Sudah punya akun?{" "}
            <a onClick={() => navigate("/login")}>
              <span className="text-white font-semibold hover:underline">
                Masuk
              </span>
            </a>
          </div>
        </div>

        {/* Tombol Daftar */}
        <button
          className="w-full bg-[#3D4142] hover:bg-gray-600 text-white py-2 rounded-md"
          onClick={() => navigate("/login")}
        >
          Daftar
        </button>
        <div className="text-center text-gray-300 my-4">Atau</div>

        {/* Tombol Daftar dengan Google */}
        <button className="w-full header-background text-white py-2 rounded-md flex items-center justify-center gap-2">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="h-5 w-5"
          />
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
};

export default Register;
