import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import carousel0 from "../assets/carousel0.webp";
import carousel1 from "../assets/carousel1.webp";
import carousel2 from "../assets/carousel2.webp";
import carousel3 from "../assets/carousel3.webp";
import carousel4 from "../assets/carousel4.webp";
import carousel5 from "../assets/carousel5.webp";

const images = [carousel0, carousel1, carousel2, carousel3, carousel4, carousel5];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent((index + images.length) % images.length);
    },
    [current]
  );

  useEffect(() => {
    const timer = setInterval(() => go(current + 1), 4000);
    return () => clearInterval(timer);
  }, [current, go]);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Carousel Slides */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images[current]}')` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Prev Arrow */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 z-20 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border border-white/30 text-white rounded-full p-2 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Arrow */}
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 z-20 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 border border-white/30 text-white rounded-full p-2 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-yellow-400 font-semibold mb-4"
        >
          Excellence • Discipline • Knowledge
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-3xl md:text-5xl font-bold leading-tight"
        >
          Empowering Students Through
          <br />
          Knowledge, Discipline & Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-200 mt-8 text-lg md:text-xl"
        >
          Building future leaders through quality education, innovation, values and holistic development.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/admissions"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2"
          >
            Admission Open
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/about"
            className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`w-4 h-4 rounded-full transition-all ${
              i === current
                ? "bg-yellow-400 scale-125"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}