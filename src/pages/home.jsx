/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import CardProduct from "../Components/CardProduct";
import CardService from "../Components/CardService";
// import CardTesti from "../Components/CardTesti";
import CouPro from "../Components/CouPro";
import Team from "../Components/Icon/Team";
import Navbar from "../Components/Navbar";
import Road from "../Components/Road";
import TabsRole from "../Components/TabsRole";
import Aos from "aos";
import "aos/dist/aos.css";
import CardTesti from "../Components/CardTesti";
import Arrow from "../Components/Icon/Arrow";
import RoadM from "../Components/RoadM";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div id="Home" className="home  h-screen w-full">
        <div className="ornament absolute md:block hidden right-0 bottom-0 z-0">
          <img
            className="h-[680px] object-cover"
            src="Images/ornament2.png"
            alt=""
          />
        </div>
        <div className="container md:px-0 px-3 m-auto flex items-center justify-between h-full">
          <div data-aos="fade-up" className="left">
            <div className="wrap-head md:w-[514px] text-white">
              <div className="head text-[56px] md:text-[86px] font-bold">
                Reclas Tech
              </div>
              <div className="subhead text-[32px] md:text-[48px]">
                Your Vision, Our Code
              </div>
              <div className="teks text-[14px] md:text-[18px] text-justify">
                Selamat datang di Reclas Tech, di mana inovasi bertemu dengan
                kualitas. Tim ahli kami dalam pengembangan perangkat lunak,
                desain kreatif, dan manajemen proyek siap untuk mewujudkan
                ide-ide brilian Anda menjadi kenyataan. Mari ciptakan masa depan
                bersama!
              </div>
            </div>
            <div className="btnget mt-16">
              <a
                href="#about"
                className="bg-white hover:bg-secondary px-8 py-3 rounded-[20px] text-[18px] md:text-[19px] font-bold text-srBlack hover:text-white transition-all duration-300"
              >
                Ayo Jelajahi
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className="right z-10 hidden lg:block">
            <img className="h-[484px] " src="Images/hero.png" alt="" />
          </div>
        </div>
      </div>

      {/* About us */}
      <div id="about" className="bg-srWhite py-[60px] md:py-[80px]">
        <div className="container m-auto md:px-0 px-3">
          <div
            data-aos="fade-up"
            className="head text-[35px] md:text-[40px] font-bold text-center mb-5"
          >
            TENTANG KAMI
          </div>
          <div className="wrap flex flex-wrap justify-between items-center ">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              className="wrap-lefft order-4 md:order-1 w-[485px] text-justify"
            >
              <div className="subhead text-[22px] md:text-[27px] text-primary font-bold">
                Awal Perjalanan Dari Reclas Tech
              </div>
              <div className="teks mt-1 text-[16px] md:text-[18px] text-justify">
                Kami memulai sebagai programmer baru diluar perguruan tinggi dan
                berhasil membangun tim yang sekarang menjadi salah satu tim
                pengembangan perangkat lunak di Bandar Lampung. Kami terdiri
                dari 11 orang. Kami telah menyelesaikan beberapa proyek yang
                sesuai dengan kebutuhan dan harapan klien. Kami tidak pernah
                takut gagal jika ini akan menuntun kami untuk mempelajari
                sesuatu yang baru dan memperluas wawasan profesional dan pribadi
                kami. Kami percaya bahwa komunikasi sangat penting untuk
                keberhasilan penyelesaian proyek kami. Inilah sebabnya mengapa
                kami mendengarkan dengan cermat dari klien kami dan kami
                menyambut baik terhadap umpan balik mereka di setiap tahap
                proses pengembangan web.
              </div>
              {/* video */}
              {/* <div className="inline-block mt-5">
                <a
                  href=""
                  className="btn rounded-[15px] px-6 py-2 transition-all duration-300  hover:bg-secondary bg-primary flex items-center gap-1"
                >
                  <img
                    className="h-[35px] md:h-[40px] w-[35px] md:w-[40px] flex-shrink-0"
                    src="Images/play.png"
                    alt=""
                  />
                  <div className="md:text-[16px] text-[14px] font-semibold text-white">
                    Click on our short profile video{" "}
                  </div>
                </a>
              </div> */}
            </div>
            <div
              data-aos="fade-up"
              className="right w-full md:w-[50%] flex justify-center order-2"
            >
              <img
                className="md:w-[340px] w-[180px] object-cover"
                src="Images/reclas.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* About us */}

      {/* service */}
      <div id="service" className="service py-[60px] md:py-[80px] px-3 md:px-0">
        <div
          data-aos="fade-up"
          className="head text-[35px] md:text-[40px] font-bold text-center mb-5 text-white"
        >
          LAYANAN
        </div>
        <div data-aos="fade-up" className="container m-auto">
          <div className="subhead text-[22px] md:text-[27px] text-white w-[304px] font-bold">
            Layanan Yang Kami Sediakan Untuk Membantu Bisnis Anda
          </div>
        </div>
        <div data-aos="fade-up" className="wrap mt-5 relative overflow-hidden">
          <div className="hero m-auto container h-[300px]  md:h-[490px] md:block flex justify-center">
            <img className=" h-full" src="Images/service2.png" alt="" />
          </div>
          <div className="wrap-card px-0 md:px-5 flex items-center  gap-4 md:absolute overflow-x-auto  scroll-smooth md:top-[20px] p-3 py-5  right-0 md:w-[70%] w-full">
            <CardService
              service="Web Application Dev"
              teks="Tim akan memproses pengembangan perangkat lunak yang bertujuan untuk membuat aplikasi yang dapat diakses melalui web browser. Proses pengembangan ini mencakup berbagai langkah mulai dari perencanaan, desain, pengembangan, pengujian, hingga implementasi aplikasi web yang interaktif dan fungsional."
            >
              <Team />
            </CardService>
            <CardService
              service="Mobile Application Dev"
              teks="Tim akan membuat aplikasi perangkat lunak yang dirancang khusus untuk digunakan pada perangkat mobile seperti smartphone dan tablet. Proses ini melibatkan serangkaian langkah yang mirip dengan pengembangan aplikasi web, tetapi dengan fokus pada platform mobile dan karakteristik uniknya sesuai dengan kebutuhan klien."
            >
              <Team />
            </CardService>
            <CardService
              service="Custom Software Dev"
              teks="Tim akan memproses pengembangan perangkat lunak yang dirancang khusus untuk memenuhi kebutuhan unik dan spesifik suatu organisasi atau individu. Berbeda dengan perangkat lunak yang sudah jadi yang umumnya dirancang untuk penggunaan umum, perangkat lunak kustom dibangun dari awal atau dimodifikasi secara mendalam."
            >
              <Team />
            </CardService>
            <CardService
              service="Graphic Design"
              teks="Tim akan menciptakan dan menggabungkan elemen visual, seperti gambar, teks, dan grafik, untuk menyampaikan pesan atau informasi dengan cara yang efektif dan menarik. Ini adalah bidang seni dan desain yang melibatkan kreativitas, pemahaman tentang prinsip desain, dan penggunaan alat desain grafis komputer."
            >
              <Team />
            </CardService>
          </div>
        </div>
      </div>
      {/* service */}

      {/* product */}
      <div
        id="product"
        className="product bg-srWhite py-[60px] md:py-[80px] md:px-0 px-3"
      >
        <div
          data-aos="fade-up"
          className="head text-[35px] md:text-[40px] font-bold text-center mb-5 text-black"
        >
          PRODUK
        </div>
        <div className="wrap flex flex-wrap md:flex-nowrap gap-3 m-auto container h-full">
          <div data-aos="fade-up" className="left w-[100%] md:w-[40%]">
            <div className="subhead text-[22px] md:text-[27px] text-primary max-w-[544px] font-bold">
              Beberapa produk yang telah kami ciptakan. Ayo, mulai perjalanan
              inovasi Anda dengan kami!
            </div>
            <div className="img mt-5">
              <img className="h-[270px] m-auto md:h-auto" src="Images/product.png" alt="" />
            </div>
          </div>
          <div className="center hidden md:block w-[2px] bg-primary"></div>
          <div data-aos="fade-up" className="right w-[100%] md:w-[60%] ">
            <div className="wrap-card flex flex-col gap-3  h-[550px] overflow-y-auto md:px-3 px-0">
              <CardProduct
                img="Images/pro1.jpg"
                title="Bimbel Griselda"
                teks="Bimbel Griselda merupakan sebuah website bimbel yang menyediakan layanan bimbel baik dari sekolah dasar hingga atas dan juga terbuka untuk umum dalam dunia pendidikan."
              />
              <CardProduct
                img="Images/pro2.jpg"
                title="PT. ElyNaz IndoMasr Global"
                teks="PT. ElyNaz IndoMasr Global merupakan sebuah website company profile yang menampilkan profile dari PT. Elynaz IndoMasr yang bergerak pada bidang Home Cleaning dan Catering."
              />
              <CardProduct
                img="Images/pro3.jpg"
                title="POS Yang's Grosir"
                teks="POS Yang's Grosir merupakan sebuah website point of sale atau kasir yang dapat melakukan transaksi belaja dari konsumen serta dapat menampilkan laporan keuangn dari toko retail."
              />
              <CardProduct
                img="Images/pro4.jpg"
                title="Slaxx Distro Store"
                teks="Slaxx Distro Store merupakan sebuah website toko distro baju yang menampilkan produk serta dapat melakukan transaksi pembelian dari produk baju yang tersedia dalam website."
              />
              <CardProduct
                img="Images/pro4a.jpg"
                title="Kedai Bu Titin"
                teks="Kedai Bu Titin merupakan sebuah website warung makan ayam geprek dimana konsumen dapat memesan melalui website serta toko dapat mencatat inventaris seperti bahan baku toko."
              />
              <CardProduct
                img="Images/pro5.jpg"
                title="BUBOO Book Store"
                teks="BuBoo Store Book merupakan aplikasi toko buku online dimana konsumen dapat melihat berbagai daftar buku yang dijual dan dapat melakukan pembelian didalam website.
"
              />
              <CardProduct
                img="Images/pro5a.jpg"
                title="Toko Sayuran Online"
                teks="Toko Sayuran Online merupakan aplikasi toko sayuran dimana konsumen dapat melihat berbagai sayuran yang dijual dan dapat melakukan pembelian didalam website secara online."
              />
              <CardProduct
                img="Images/pro6.jpg"
                title="Game Petualangan Si Pele"
                teks="Game Petualangan Si Pele merupakan sebuah game yang memiliki alur dimana seorang anak bernama pele akan mengalami suatu kejadian mistis dalam perjalanan menuju rumah."
              />
            </div>
          </div>
        </div>
      </div>
      {/* product */}

      {/* education */}
      <div
        id="education"
        className="education py-[60px] md:py-[80px] md:px-0 px-3"
      >
        <div
          data-aos="fade-up"
          className="head text-[35px] md:text-[40px] font-bold text-center mb-5 text-white"
        >
          EDUCATION
        </div>
        <div className="wrap flex flex-wrap md:flex-nowrap gap-3 m-auto container h-full">
          <div data-aos="fade-up" className="left flex flex-col  md:w-[30%]">
            <div className="subhead text-[22px] md:text-[27px] text-white font-bold">
              Belajar adalah investasi terbaik untuk masa depan.
            </div>
            <div className="img w-[90%] m-auto md:w-auto md:mt-24 mt-4 flex justify-center">
              <img src="Images/education.png" alt="" />
            </div>
          </div>
          <div className="center hidden md:block w-[2px] bg-white"></div>
          <div data-aos="fade-up" className="right w-full md:w-[70%] ">
            <div className="wrap-card flex flex-col gap-3 md:h-[500px] h-[210px] overflow-y-auto">
              <CouPro />
            </div>
          </div>
        </div>
      </div>
      {/* education */}

      {/* roadmap */}
      <div className="roadmap py-[60px] md:py-[80px] md:px-0 px-3 bg-srWhite">
        <div
          data-aos="fade-up"
          className="head text-[35px] md:text-[40px] font-bold text-center mb-5 "
        >
          ROADMAP
        </div>
        <div
          data-aos="fade-up"
          className="subhead text-[22px] md:text-[27px] text-primary md:text-start text-center m-auto container font-bold"
        >
          Peta Jalan Pembuatan Proyek
        </div>
        <div data-aos="fade-up" className="wrap mt-5 container m-auto ">
          {/* <Road /> */}
          <RoadM />
        </div>
      </div>
      {/* roadmap */}

      {/* Testi */}
      <div id="testi" className="testi py-[60px] md:py-[80px] md:px-0 px-3">
        <div
          data-aos="fade-up"
          className="head text-[35px] md:text-[40px] font-bold text-center mb-5 text-white"
        >
          Testimoni
        </div>
        <div
          data-aos="fade-up"
          className="subhead text-[22px] md:text-[27px] text-white m-auto container font-bold mb-4"
        >
          Apa Yang Mereka Rasakan Dengan Reclas Tech
        </div>
        <div data-aos="fade-up" className="wrap m-auto container">
          <CardTesti />
        </div>
      </div>
      {/* Testi */}

      {/* role */}
      <div className="role py-[60px] md:py-[80px] bg-srWhite">
        <div
          data-aos="fade-up"
          className="head text-[35px] md:text-[40px]  font-bold text-center mb-5 "
        >
          TEAM GRUP
        </div>
        <div
          data-aos="fade-up"
          className="wrap w-full  m-auto container flex justify-center"
        >
          <TabsRole />
        </div>
      </div>
      {/* role */}

      {/* FOOTER */}
      <div id="contact" className="footer py-[60px] md:py-[80px]">
        <div className="wrap px-3 md:px-0 flex-wrap text-white container m-auto flex min-h-[250px] md:justify-evenly gap-6 ">
          <div
            data-aos="fade-up"
            className="left md:flex-nowrap flex-wrap flex gap-3 "
          >
            <div className="logo flex justify-center md:w-[200px] w-full">
              <img
                className="md:h-[174px] h-[130px]"
                src="Images/footer.png"
                alt=""
              />
            </div>
            <div className="alamat w-[300px] flex flex-col justify-between gap-3">
              <div className="add text-[20px] md:text-[24px] text-white">
                Bandar Lampung, Lampung
              </div>
              <div className="wrap text-[14px] underline">
                <div className="no">083838485199</div>
                <div className="email mt-2 md:mt-4">reclastech@gmail.com</div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="right gap-[30px] flex justify-between  w-full md:w-[40%]"
          >
            <div className="flex gap-6 flex-col  justify-between">
              <div className="nav flex gap-[100px]">
                <div className="navi flex flex-col gap-3 text-[14px]">
                  <a className="font-bold" href="#Home">
                    Beranda
                  </a>
                  <a href="#about">Tentang</a>
                  <a href="#service">Layanan</a>
                  <a href="#testi">Testimoni</a>
                  <a href="#contact">Kontak</a>
                </div>
                <div className="sosmed flex flex-col gap-3 text-[14px]">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/reclas_tech/"
                    className="wrap flex items-center gap-1"
                  >
                    <div className="icon">
                      <img className="w-[15px]" src="Images/ig.svg" alt="" />
                    </div>
                    <div className="hover:font-semibold">Instagram</div>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/reclas-tech"
                    className="wrap flex items-center gap-1"
                  >
                    <div className="icon">
                      <img className="w-[15px]" src="Images/git.svg" alt="" />
                    </div>
                    <div className="hover:font-semibold">Github</div>
                  </a>
                  <a
                    target="_blank"
                    href="mailto:reclastech@gmail.com"
                    className="wrap flex items-center gap-1"
                  >
                    <div className="icon">
                      <img className="w-[15px]" src="Images/email.svg" alt="" />
                    </div>
                    <div className="hover:font-semibold">Email</div>
                  </a>
                  <a
                    target="_blank"
                    href="https://wa.me/6283838485199"
                    className="wrap flex items-center gap-1"
                  >
                    <div className="icon">
                      <img className="w-[15px]" src="Images/wa.svg" alt="" />
                    </div>
                    <div className="hover:font-semibold">WhatsApp</div>
                  </a>
                </div>
              </div>
              <div className="wm text-[14px] text-center md:text-start hidden md:block">
                © 2024 Reclas Tech. All rights reserved.
              </div>
            </div>
            <a
              data-aos="fade-up"
              href="#Home"
              className="arow flex justify-center items-center bg-white rounded-full w-[52px] h-[52px] hover:bg-gray-200 transition-all duration-300"
            >
              <Arrow />
            </a>
          </div>
          <div className="wm text-[14px] text-center md:text-start  w-full md:hidden">
            © 2024 Reclas Tech. All rights reserved.
          </div>
        </div>
      </div>
      {/* FOOTER */}
    </div>
  );
};

export default Home;
