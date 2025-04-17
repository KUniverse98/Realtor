import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Homes() {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    setTimeout(() => navigate(`/${id}`), 400);
  };

  return (
    <div className="relative min-h-screen items-center px-6 py-12">
    <div className=" absolute inset-0 bg-cover bg-center"
    style={{backgroundImage: "url(/Homesbg.jpg)"}}>
    <div className="absolute inset-0 bg-black opacity-50 max-height"></div>
    
    </div>
    {/* About the site header and paragraph about what we offer*/}
    <section>
      <div className=" relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-20">
        <h1 className="font-bold text-white mt-20 text-6xl ">Welcome to Our Homes!</h1>
        <p className="font-semibold text-white mt-8 text-2xl leading-relaxed max-w-xl">We've got a variety of homes across San Antonio, Texas — perfect for hosting events or simply relaxing and enjoying time with your loved ones!</p>
      </div>
    </section>
    {/* content section */}
    <section className="mt-0 px-3">
      <div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-4 text-center cursor-pointer transition-transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleClick("WildSprings")}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          layoutId="wildsprings-card"
          >
          <img
            src="/IMG_0966.JPG"
            alt="WildSprings"
            className="rounded-lg w-full h-48 object-cover mb-4"
            />
          <h2 className="text-xl font-semibold">WildSprings</h2>
        </motion.div>
        <motion.div
        className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-4 text-center cursor-pointer transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleClick("Cadley")}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease:"easeOut"}}
        layoutId="cadley-card"
        >
          <img 
          src="/cadley.JPG"
          alt="Cadley"
          className="rounded-lg w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold">Cadley</h2>
        </motion.div>
      </div>
    </section>
  </div>
  );
}
