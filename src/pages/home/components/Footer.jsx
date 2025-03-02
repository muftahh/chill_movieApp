import logo from "../../../assets/logo.png";
import "./src/style.css";

const Footer = () => {
  return (
    <div className="header-background text-white text-xs p-5 md:py-10 md:px-20 border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="pb-5 md:pb-0">
          <img src={logo} className="h-6 md:h-10" />
          <div className="pt-3 text-gray-500">
            @2023 Chill All Rights Reserved.
          </div>
        </div>

        <div>
          <h3 className=" mb-3">Genre</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-400">
            <span>Aksi</span>
            <span>Drama</span>
            <span>Komedi</span>
            <span>Anak-anak</span>
            <span>Fantasi Ilmiah & Fantasi</span>
            <span>Petualangan</span>
            <span>Anime</span>
            <span>Kejahatan</span>
            <span>Perang</span>
            <span>Britania</span>
            <span>KDrama</span>
            <span>Romantis</span>
            <span>Sains & Alam</span>
            <span>Thriller</span>
          </div>
        </div>

        <div className="md:grid md:justify-items-end">
          <div>
            <h3 className=" mb-3">Bantuan</h3>
            <ul className="text-gray-400 space-y-2">
              <li>FAQ</li>
              <li>Kontak Kami</li>
              <li>Privasi</li>
              <li>Syarat & Ketentuan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
