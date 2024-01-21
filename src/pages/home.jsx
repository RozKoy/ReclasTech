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
        <div className="ornament absolute right-0 bottom-0 z-0">
          <img className="h-[680px] object-cover" src="Images/ornament2.png" alt="" />
        </div>
        <div className="container md:px-0 px-3 m-auto flex flex-wrap items-center justify-between h-full">
          <div data-aos="fade-up" className="left">
            <div className="wrap-head md:w-[514px] text-white">
              <div className="head text-[56px] md:text-[86px] font-bold">
                Reclas Tech
              </div>
              <div className="subhead text-[32px] md:text-[48px]">
                Your Vision, Our Code
              </div>
              <div className="teks text-[14px] md:text-[18px] text-justify">
                Innovative software development team with a focus on quality.
                With expertise in development, design and project management, we
                are ready to bring your ideas to life.
              </div>
            </div>
            <div className="btnget mt-16">
              <a
                href="#about"
                className="bg-white hover:bg-secondary px-5 py-3 rounded-[20px] text-[18px] md:text-[20px] font-bold text-srBlack hover:text-white transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className="right z-10 hidden lg:block">
            <img className="h-[484px] " src="Images/hero.png" alt="" />
          </div>
        </div>
      </div>
      {/* About us */}
      <div id="about" className="bg-srWhite py-[60px]">
        <div className="container m-auto md:px-0 px-3">
          <div
            data-aos="fade-up"
            className="head text-[35px] md:text-[40px] font-bold text-center mb-5"
          >
            ABOUT US
          </div>
          <div className="wrap flex flex-wrap justify-between items-center ">
            <div
              data-aos="fade-up"
              data-aos-offset="100"
              className="wrap-lefft order-4 md:order-1 w-[485px] text-justify"
            >
              <div className="subhead text-[22px] md:text-[27px] text-primary font-bold">
                Behind each of our products and services, there is a talented
                team dedicated to providing the best.
              </div>
              <div className="teks mt-3 text-[16px] md:text-[18px] text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s.
              </div>
              <div className="inline-block mt-5">
                <a
                  href=""
                  className="btn rounded-[15px] px-6 py-2 transition-all duration-300  hover:bg-secondary bg-primary flex items-center gap-1"
                >
                  <img
                    className="h-[35px] md:h-[40px]"
                    src="Images/play.png"
                    alt=""
                  />
                  <div className="md:text-[16px] text-[14px] font-semibold text-white">
                    Click on our short profile video{" "}
                  </div>
                </a>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="right w-full md:w-[50%] flex justify-center order-2"
            >
              <img
                className="md:w-[340px] w-[180px]"
                src="Images/reclas.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* About us */}

      {/* service */}
      <div id="service" className="service py-[60px] px-3 md:px-0">
        <div
          data-aos="fade-up"
          className="head text-[35px] md:text-[40px] font-bold text-center mb-5 text-white"
        >
          SERVICE
        </div>
        <div data-aos="fade-up" className="container m-auto">
          <div className="subhead text-[22px] md:text-[27px] text-white w-[304px] font-bold">
            Explore Our Services With Just One Click
          </div>
        </div>
        <div data-aos="fade-up" className="wrap mt-5 relative overflow-hidden">
          <div className="hero m-auto container h-[400px] md:h-[500px] md:block flex justify-center">
            <img src="Images/service2.png" alt="" />
          </div>
          <div className="wrap-card px-0 md:px-5 h-[400px] flex items-center  gap-4 md:absolute overflow-x-auto no-scrollbar scroll-smooth md:top-[20px]  right-0 md:w-[70%] w-full">
            <CardService
              service="Team Profesional"
              teks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            >
              <Team />
            </CardService>
            <CardService
              service="Team Profesional"
              teks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            >
              <Team />
            </CardService>
            <CardService
              service="Team Profesional"
              teks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            >
              <Team />
            </CardService>
            <CardService
              service="Team Profesional"
              teks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            >
              <Team />
            </CardService>
          </div>
        </div>
      </div>
      {/* service */}

      {/* product */}
      <div id="product" className="product bg-srWhite py-[60px] md:px-0 px-3">
        <div
          data-aos="fade-up"
          className="head text-[35px] md:text-[40px] font-bold text-center mb-5 text-black"
        >
          PRODUCT
        </div>
        <div className="wrap flex flex-wrap md:flex-nowrap gap-3 m-auto container h-full">
          <div data-aos="fade-up" className="left w-[100%] md:w-[40%]">
            <div className="subhead text-[22px] md:text-[27px] text-primary w-[544px] font-bold">
              Every product has a story, and we are committed to creating great
              stories.
            </div>
            <div className="img mt-5">
              <img src="Images/product.png" alt="" />
            </div>
          </div>
          <div className="center hidden md:block w-[2px] bg-primary"></div>
          <div data-aos="fade-up" className="right w-[100%] md:w-[60%] ">
            <div className="wrap-card flex flex-col gap-3  h-[550px] overflow-y-auto md:px-3 px-0">
              <CardProduct
                img="Images/produk1.png"
                teks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              />
              <CardProduct
                img="Images/produk1.png"
                teks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              />
              <CardProduct
                img="Images/produk1.png"
                teks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              />
              <CardProduct
                img="Images/produk1.png"
                teks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              />
              <CardProduct
                img="Images/produk1.png"
                teks="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              />
            </div>
          </div>
        </div>
      </div>
      {/* product */}

      {/* education */}
      <div id="education" className="education py-[60px] md:px-0 px-3">
        <div
          data-aos="fade-up"
          className="head text-[35px] md:text-[40px] font-bold text-center mb-5 text-white"
        >
          EDUCATION
        </div>
        <div className="wrap flex flex-wrap md:flex-nowrap gap-3 m-auto container h-full">
          <div data-aos="fade-up" className="left flex flex-col  md:w-[30%]">
            <div className="subhead text-[22px] md:text-[27px] text-white font-bold">
              Learning is the best investment for the future.
            </div>
            <div className="img md:mt-24 mt-10 flex justify-center">
              <img src="Images/education.png" alt="" />
            </div>
          </div>
          <div className="center hidden md:block w-[2px] bg-white"></div>
          <div data-aos="fade-up" className="right w-full md:w-[70%] ">
            <div className="wrap-card flex flex-col gap-3 md:h-[550px] h-[300px] overflow-y-auto">
              <CouPro />
            </div>
          </div>
        </div>
      </div>
      {/* education */}

      {/* roadmap */}
      <div className="roadmap py-[60px] md:px-0 px-3 bg-srWhite">
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
          “Flow In Project Creation”
        </div>
        <div data-aos="fade-up" className="wrap mt-5">
          <Road />
          <RoadM />
        </div>
      </div>
      {/* roadmap */}

      {/* Testi */}
      <div id="testi" className="testi py-[60px] md:px-0 px-3">
        <div  data-aos="fade-up" className="head text-[35px] md:text-[40px] font-bold text-center mb-5 text-white">
          Testimoni
        </div>
        <div  data-aos="fade-up" className="subhead text-[22px] md:text-[27px] text-white m-auto container font-bold mb-4">
          “What People Said About Us ?”
        </div>
        <div  data-aos="fade-up" className="wrap m-auto container">
          <CardTesti />
        </div>
      </div>
      {/* Testi */}

      {/* role */}
      <div className="role py-[60px] bg-srWhite">
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
      <div id="contact" className="footer py-[60px] mt-10">
        <div className="wrap px-3 md:px-0 flex-wrap text-white container m-auto flex min-h-[250px] md:justify-evenly gap-6 ">
          <div  data-aos="fade-up" className="left md:flex-nowrap flex-wrap flex gap-3 ">
            <div className="logo flex justify-center md:w-[200px] w-full">
              <img
                className="md:h-[174px] h-[130px]"
                src="Images/footer.png"
                alt=""
              />
            </div>
            <div className="alamat w-[300px] flex flex-col justify-between gap-3">
              <div className="add text-[20px] md:text-[24px] text-white">
                123 Market St. #22B Charlottesville, California 44635
              </div>
              <div className="wrap text-[14px] underline">
                <div className="no">(434) 546-4356</div>
                <div className="email mt-2 md:mt-4">reclastech@gmail.com</div>
              </div>
            </div>
          </div>
          <div  data-aos="fade-up" className="right gap-[30px] flex justify-between  w-full md:w-[40%]">
            <div className="flex gap-6 flex-col  justify-between">
              <div className="nav flex gap-[100px]">
                <div className="navi flex flex-col gap-3 text-[14px]">
                  <a className="font-bold" href="">
                    Home
                  </a>
                  <a href="">About</a>
                  <a href="">Service</a>
                  <a href="">Testimoni</a>
                  <a href="">Contact Us</a>
                </div>
                <div className="sosmed flex flex-col gap-3 text-[14px]">
                  <a href="">Instagram</a>
                  <a href="">Github</a>
                  <a href="">Linkedin</a>
                  <a href="">WhatsApp</a>
                </div>
              </div>
              <div className="wm text-[14px] text-center md:text-start hidden md:block">
                © 2024 Reclas Tech. All rights reserved.
              </div>
            </div>
            <a  data-aos="fade-up"
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
