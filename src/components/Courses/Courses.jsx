import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import imgEbac from "./../../assets/images/cursos/curso-ebac.png";
import imgCleanCode from "./../../assets/images/cursos/curso-cleancode.jpg";
import imgReact from "./../../assets/images/cursos/curso-react.jpg";
import imgAngular from "./../../assets/images/cursos/curso-angular.jpg";
import imgAnimation from "./../../assets/images/cursos/curso-animation.jpg";
import imgJavaScript from "./../../assets/images/cursos/curso-javascript.jpg";

const contentCourses = [
  {
    image: imgJavaScript,
    title: "JavaScript",
    description: "",
    completed: "Cursando",
  },
  {
    image: imgAnimation,
    title: "Creative Advanced CSS & JavaScript Animations",
    description: "",
    completed: "Na fila",
  },
  {
    image: imgAngular,
    title: "Angular 2 (v17+)",
    description: "",
    completed: "Na fila",
  },

  {
    image: imgReact,
    title: "React do Zero a Maestria",
    description: "",
    completed: "Concluido",
  },
  {
    image: imgCleanCode,
    title: "Clean Code",
    description: "",
    completed: "Concluido",
  },
  {
    image: imgEbac,
    title: "Desenvolvedor Full Stack Java",
    description: "",
    completed: "Concluido",
  },
];

const Courses = () => {
  useEffect(() => {
    contentCourses.map((item, index) => {
      ScrollReveal().reveal(`.course${index}`, {
        duration: 1000,
        origin: "start",
        distance: "-60px",
        delay: 200 * index,
      });
    });
  }, []);

  return (
    <section className="bg-zinc-900 py-[30px] md:py-[60px]  md:max-h-full section_container px-[30px] md:px-10 lg:px-0">
      <h2 className="title pb-10">Cursos</h2>

      <ul className="flex justify-between items-center flex-wrap gap-[60px]">
        {contentCourses.map((item, index) => (
          <li className={`w-full md:w-[28%]  course${index}`} key={index}>
            <div className="curse_card ">
              <div className="h-[64px] mb-[12px] flex justify-center">
                <h3 className="text-white text-center text-[20px] md:text-2xl">
                  {item.title}
                </h3>
              </div>

              <img
                className="curse_img rounded-xl w-full ease-in-out cursor-pointer hover:shadow-md hover:shadow-[#68aee8] hover:transition-all hover:duration-300"
                src={item.image}
                alt=""
              />
            </div>
            <p>{item.description}</p>
            <span className="block text-end text-white">{item.completed}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
