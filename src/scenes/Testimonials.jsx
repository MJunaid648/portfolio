import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="w-2/5" />
        <p className="mt-10">Here's What People are Saying About My Work.</p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[460px] flex flex-col justify-end p-12 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-left text-xl">
            Junaid has proved to be an extra-ordinary part of our team. His best
            characteristic is that he is always willing to go an extra mile and
            work proactively. In our Team he worked on full-stack MERN and
            Wordpress.
          </p>
          <p className="self-end text-xl text-[#ffffff] font-bold">
            Khurram Sajjad
          </p>
          <p className="self-end text-[#ffffff]">CEO Adroit Tech</p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[460px] flex flex-col justify-end p-12 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-left text-xl">
            He is very quick at understanding project requirements. Knows his
            way around web development very well, and is passionate about
            learning new skills that can help him grow.
          </p>
          <p className="self-end text-xl text-[#ffffff] font-bold">
            Khadeeja Rauf
          </p>
          <p className="self-end text-[#ffffff]">Teammate at Adroit Tech</p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[460px] flex flex-col justify-end p-12 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-left text-xl">
            Junaid always goes above and beyond, using his tech skills and
            creativity to bring great ideas to life. He's a proactive and
            dedicated team player, making him a valuable asset.
          </p>
          <p className="self-end text-xl text-[#ffffff] font-bold">
            Muneeb Wahad Khan
          </p>
          <p className="self-end text-[#ffffff]">CEO at Khantastic Ventures</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
