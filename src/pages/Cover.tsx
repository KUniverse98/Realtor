import "./Cover.css";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

import { useEffect, useState } from "react";

export default function Cover () {
  const [showCard, setShowCard] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setShowCard(true), 900);
  }, []);

  const cardSpring = useSpring({
    transform: showCard ? 'translateY(0%)' : 'translateY(100%)',
    opacity: showCard ? 1 : 0,
    config: { mass:1, tension:200, friction: 25 },
  });

  return (
    <>
    <div className="div3">
      <div
        className="Background"
        style={{ backgroundImage: "url('/realtorBackround.jpg')" }}
      >
        <div className="Overlay"></div>
      </div>

      <section className="Karina">
        <div className='div'>
          <h1 className="h1">
            Meet Your Realtor "Name"
          </h1>
          <p className="p">
            Dedicated, Experienced, and Professional.<br /> Helping You Find Your Dream Home.
          </p>
        </div>

        <div className="div2">
        <motion.img
            src="/Empty.png"
            alt="Realtor Karina Ruiz"
            className="Headshot"
            initial={{ y: -200, rotate: 0, scale: 0.9, opacity: 0 }}
            animate={{ y: 0, rotate: 0, scale: 1, opacity:1}}
            transition={{ duration: 1.8, ease: "easeInOut"}}
          />


        <animated.div style={cardSpring} className="animated">
          <div className="contactcard">
            <div className="insidecontcard">
              <h3 className="contactname">"Contact me"</h3>
              <p className="contactinfo">Phone: (123) 123-1234</p>
              <p className="contactinfo">Email: Name@example.com</p>
              <p className="contactinfo">DRE#: 01234567</p>
           </div>
          </div>
        </animated.div>
        </div>
      </section>
      </div>

      <section className="section2">
        <h2 className="heading2">Coming Up: Featured Listings</h2>
      </section>
    </>
  );
}

  