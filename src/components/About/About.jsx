import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import myPhoto from "../../assets/images/myPhoto.jpg";
const About = () => {
  useEffect(() => {
    ScrollReveal().reveal(".about_image", {
      duration: 1000,
      origin: "start",
      distance: "-100px",
      delay: 400,
    });

    ScrollReveal().reveal(".about_text", {
      duration: 1000,
      origin: "start",
      distance: "100px",
      delay: 400,
    });
  }, []);

  return (
    <section className="bg-zinc-900 pb-[30px] md:pb-[60px] px-[20px] md:px-10 lg:px-0">
      <div className="max-w-[1240px] mx-auto text-[#fff]">
        <div className="flex flex-col md:flex-row items-center gap-14">
          <img
            className="about_image w-[60%] object-contain md:w-1/3 rounded-[20px]"
            src={myPhoto}
            alt=""
          />
          <div className="about_text md:w-2/3">
            <h2 className="title !text-start mb-[40px]">Sobre mim</h2>
            <ul className="list-none text-[18px] md:text-2xl flex flex-col gap-9 justify-center">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                amet ullam quos nulla corrupti. Modi, mollitia! Explicabo
                architecto dolor ea doloribus. Sequi eveniet cupiditate
                consequatur quis eos nesciunt reprehenderit obcaecati.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                amet ullam quos nulla corrupti. Modi, mollitia! Explicabo
                architecto dolor ea doloribus. Sequi eveniet cupiditate
                consequatur quis eos nesciunt reprehenderit obcaecati.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                amet ullam quos nulla corrupti. Modi, mollitia! Explicabo
                architecto dolor ea doloribus. Sequi eveniet cupiditate
                consequatur quis eos nesciunt reprehenderit obcaecati.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
