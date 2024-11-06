import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowForward } from "react-icons/io5";

import imgBlog from "../../assets/images/projetos/project-blog.jpeg";
import imgEplay from "../../assets/images/projetos/project-eplay.jpg";

import "./Projects.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Modal from "../Modal/Modal";

const carouselContent = [
  {
    image: imgBlog,
    title: "Mini Blog",
  },
  {
    image: imgEplay,
    title: "EPlay",
  },
  {
    image: imgBlog,
    title: "Mini Blog",
  },
  {
    image: imgBlog,
    title: "Mini Blog",
  },
  {
    image: imgBlog,
    title: "Mini Blog",
  },
  {
    image: imgBlog,
    title: "Mini Blog",
  },
];

const Projects = () => {
  const [modal, setModal] = useState(null);

  const closeModal = () => {
    setModal(null);
  };

  return (
    <section className="bg-zinc-900 py-[30px] md:py-[60px] px-[30px] md:px-10 lg:px-0">
      <div className="max-w-[1240px] mx-auto text-[#fff]">
        <h2 className="title text-center md:pb-10">Meus Projetos</h2>

        <div className="pt-10 ">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {carouselContent.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card" onClick={() => setModal(index)}>
                  <img className="w-full h-full" src={item.image} alt="" />
                  <h3 className="text-center mt-2 text-white text-2xl">
                    {item.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {carouselContent[modal] && (
          <Modal closeModal={closeModal}>
            <div className="flex flex-col gap-5 items-center">
              <img
                className="w-full"
                src={carouselContent[modal].image}
                alt="image"
              />
              <div className="content">
                <h2 className="pb-5">{carouselContent[modal].title}</h2>
                <p className="text-[20px] leading-[120%]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                  nisi, illum natus similique vel incidunt! Consequuntur tempora
                  rem ipsa quo, rerum similique aperiam nemo distinctio? Ut
                  recusandae ea expedita voluptatem.
                </p>
                <p className="text-[20px] leading-[120%]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                  nisi, illum natus similique vel incidunt! Consequuntur tempora
                  rem ipsa quo, rerum similique aperiam nemo distinctio? Ut
                  recusandae ea expedita voluptatem.
                </p>

                <a
                  href=""
                  className="pt-5 flex items-center gap-2 cta hover:gap-3"
                >
                  Confira
                  <IoArrowForward />
                </a>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Projects;
