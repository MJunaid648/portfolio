import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
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
    title: "Movie-App",
    desc: "A responsive web app built with React and Redux Toolkit that fetches data through third party movies API.",
    imgSrc: "../assets/movie-app.png",
    liveDemoLink: "https://redux-movie-app-by-junaid.netlify.app/",
  },
  {
    id: 2,
    title: "Expense-Tracker-App",
    desc: "A responsive web app built with React to track you daily, monthly and yearly expenses.",
    imgSrc: "../assets/expense-tracker-app.png",
    liveDemoLink: "https://expense-tracker648.netlify.app/",
  },
  {
    id: 3,
    title: "Todo-List",
    desc: "A responsive web app built with React that lets you create a list of your daily todos.",
    imgSrc: "../assets/todo-list.png",
    liveDemoLink: "https://junaids-todo-list.netlify.app/",
  },
  {
    id: 4,
    title: "Nixxsol-Landing-Page",
    desc: "A responsive landing page created using React.js",
    imgSrc: "../assets/nixxsol-landing-page.png",
    liveDemoLink: "https://nixxsol.netlify.app/",
  },
  {
    id: 5,
    title: "Recipe-Landing-Page",
    desc: "A responsive restaurant landing page created using React.js",
    imgSrc: "../assets/recipe-landing-page.png",
    liveDemoLink: "https://juni-recipes.netlify.app/",
  },
  {
    id: 6,
    title: "Food-Order-Landing-Page",
    desc: "A responsive food order landing page created using React.js",
    imgSrc: "../assets/food-order-landing-page.png",
    liveDemoLink: "https://junaid-food-order-app.netlify.app/",
  },
  {
    id: 7,
    title: "React-Image-Slider",
    desc: "A responsive Image Slider created using React.js",
    imgSrc: "../assets/react-image-slider.png",
    liveDemoLink: "https://junaid-react-slider.netlify.app/",
  },
];
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ title, desc, imgSrc, liveDemoLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div
      variants={projectVariant}
      className="relative flex border-2 border-black"
    >
      <a href={liveDemoLink}>
        <div className={`${overlayStyles}`}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{desc}</p>
        </div>
      </a>
      <img src={imgSrc} alt={projectTitle} className="object-cover" />
    </motion.div>
  );
};

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
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {projectsData.map((project) => {
            return (
              <Project
                id={project.id}
                title={project.title}
                desc={project.desc}
                imgSrc={project.imgSrc}
                liveDemoLink={project.liveDemoLink}
              />
            );
          })}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
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
