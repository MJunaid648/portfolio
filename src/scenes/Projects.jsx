import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import ProjectTile from "../components/ProjectTile";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const projectsData = [
  {
    id: 1,
    title: "Movie App",
    desc: "A responsive Redux Toolkit app.",
    imgSrc: "../assets/movie-app.png",
    liveDemoLink: "https://redux-movie-app-by-junaid.netlify.app/",
  },
  {
    id: 2,
    title: "Foodie, recipe app",
    desc: "A  recipe app built with React.",
    imgSrc: "../assets/Foodie.png",
    liveDemoLink: "https://foodie648.netlify.app/",
  },
  {
    id: 3,
    title: "Buzz Bazaar",
    desc: "Ecommerce shopping react redux store",
    imgSrc: "../assets/store-img-2.png",
    liveDemoLink: "https://buzz-bazaar.netlify.app/",
  },
  {
    id: 4,
    title: "Nixxsol",
    desc: "A React.js landing page created using ",
    imgSrc: "../assets/nixxsol-landing-page.png",
    liveDemoLink: "https://nixxsol.netlify.app/",
  },
  {
    id: 5,
    title: "Recipe",
    desc: "A React.js restaurant landing page  ",
    imgSrc: "../assets/recipe-landing-page.png",
    liveDemoLink: "https://juni-recipes.netlify.app/",
  },
  {
    id: 6,
    title: "Food Order",
    desc: "A React.js food order landing page",
    imgSrc: "../assets/food-order-landing-page.png",
    liveDemoLink: "https://junaid-food-order-app.netlify.app/",
  },

  {
    id: 7,
    title: "Todo List",
    desc: "A responsive todo list react app.",
    imgSrc: "../assets/todo-list.png",
    liveDemoLink: "https://junaids-todo-list.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 ">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">A quick look at my portfolio</p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] m-3 text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {projectsData.map((project) => {
            return (
              <ProjectTile
                id={project.id}
                title={project.title}
                desc={project.desc}
                imgSrc={project.imgSrc}
                liveDemoLink={project.liveDemoLink}
              />
            );
          })}
          <div
            className="flex justify-center text-center items-center m-3 p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
