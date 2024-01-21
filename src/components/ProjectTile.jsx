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
      className="relative flex flex-1 m-3 border-red border-2 overflow-hidden min-h-52 "
    >
      <a href={liveDemoLink}>
        <div className={`${overlayStyles}`}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-2">{desc}</p>
        </div>
      </a>
      <img
        src={imgSrc}
        alt={projectTitle}
        className="object-contain bg-white/40 "
      />
    </motion.div>
  );
};
export default ProjectTile;
