import "./Cover.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cover() {
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 900);
    return () => clearTimeout(timer);
  }, []);

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
          <div className="div">
            <h1 className="h1">Meet Your Realtor "Name"</h1>
            <p className="p">
              Dedicated, Experienced, and Professional.
              <br />
              Helping You Find Your Dream Home.
            </p>
          </div>

          <div className="div2">
            {/* Headshot animation */}
            <motion.img
              src="/Empty.png"
              alt="Realtor Karina Ruiz"
              className="Headshot"
              initial={{ y: -200, scale: 0.9, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* Contact card animation */}
            <motion.div
              className="animated"
              initial={{ y: "100%", opacity: 0 }}
              animate={showCard ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div className="contactcard">
                <div className="insidecontcard">
                  <h3 className="contactname">Contact Me</h3>
                  <p className="contactinfo">Phone: (123) 123-1234</p>
                  <p className="contactinfo">Email: Name@example.com</p>
                  <p className="contactinfo">DRE#: 01234567</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <section className="section2">
        <h2 className="heading2">Coming Up: Featured Listings</h2>
      </section>
    </>
  );
}
