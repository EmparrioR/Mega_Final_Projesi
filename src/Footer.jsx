import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0 text-center">
            <img
              className="img-fluid rounded-circle mb-4"
              src="https://logowik.com/content/uploads/images/943_meram_belediyesi_logo.jpg"
              alt="Meram Belediyesi Logosu"
              width="150"
              height="150"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 text-center">
            <h5 className="mb-4">HIZLI BAĞLANTILAR</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="https://www.meram.bel.tr/"   className="text-white">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#!" className="text-white">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="https://www.meram.bel.tr/e-belediye-hizmetleri" className="text-white">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="https://www.meram.bel.tr/iletisim" className="text-white">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0 text-center">
            <h5 className=" mb-4">BİZİ TAKİP EDİN</h5>
            <div className="social-icons">
              <a
                href="https://twitter.com/MeramBelediyesi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Es
                erp%7Ctwgr%5Eauthor"
                className="text-white me-3"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/meram.belediyesi/"
                className="text-white me-3"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/Meram.Belediyesi/?locale=tr_TR"
                className="text-white"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-white py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-16">
              <h5 className=" mb-3">İLETİŞİM BİLGİLERİ</h5>
              <p className="mb-1">E-posta: bizimmeram@meram.bel.tr</p>
              <p className="mb-1">Telefon: 444 3 042</p>
              <p>
                Yenişehir Mahallesi Azerbaycan Caddesi <br /> No: 5, 42010 Meram / KONYA
              </p>
            </div>
            
                
            
          </div>
        </div>
      </div>

      <div className="container text-center ">
        <p>&copy; Hazırlayan: Mahmut Alperen Atar </p>
      </div>
    </footer>
  );
}

export default Footer;
