import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const {ref, inView } = useInView({ triggerOnce: true, threshold: 0.2})

    return (
    <>
      <div className="relative min-h-screen w-full" 
        style={{backgroundImage: "url(/2waypath.JPG)", backgroundAttachment: "fixed"}}>
          <div className="absolute inset-0 bg-cover bg-center z-0"></div>

        <div className="text-white relative min-h-screen items-center px-6 py-12">
          <h1 className="text-5xl font-bold mb-6">📖 About Us!</h1>
          <h2 className="text-3xl font-bold mt-3">Team</h2>
          <p className="max-w-2xl text-lg opacity-80 text-center leading-relaxed mt-4 font-semibold">
            Behind every cozy stay is a small, passionate team dedicated to creating unforgettable moments. From handcrafted cabins to welcoming smiles, we’ve poured love and care into every detail — so your experience feels less like a rental and more like a second home.
          </p>
        </div>

      <section className="text-white relative min-h-screen items-center px-6 py-12">
          <h2 className="font-bold text-5xl px-6 py-12">More Options</h2>
      <div ref={ref} className="space-y-6 flex flex-col items-center justify-center px-6 py-12">
        <motion.button
          className="w-64 text-2xl px-10 py-6 rounded-full shadow-lg transition-colors bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => window.open("https://square.link/u/ExhzpdqU")}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 1} : {}}
          transition={{ duration: 1, ease: "easeOut"}}
          >
            Pay Here!
          </motion.button>
          <motion.button
          className="w-64 text-2xl px-10 py-6 rounded-full shadow-lg transition-color bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => window.open("https://calendly.com/universematias-98/30min")}
          initial={{opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, y: 1} : {}}
          transition={{ duration: 2, ease: "easeOut"}}
          >
            Schedule now!
          </motion.button>
          </div>
          </section>
      </div>
    </>
    );
  };
  