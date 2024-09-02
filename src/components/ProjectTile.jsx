import { motion } from "framer-motion";
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectTile = ({ title, desc, imgSrc, liveDemoLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue cursor-pointer`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div
      variants={projectVariant}
      className="relative flex flex-1 m-3 overflow-hidden min-h-52 "
    >
      <a href={liveDemoLink} target="_blank" >
        <div className={`${overlayStyles}`}>
          <p className="text-2xl font-playfair font-bold">{title}</p>
          <p className="mt-2">{desc}</p>
        </div>
      </a>
      <div className="flex-1 flex items-center justify-center">
        <img
          src={imgSrc}
          alt={projectTitle}
          className="object-cover bg-white/40 "
        />
      </div>
    </motion.div>
  );
};
export default ProjectTile;
