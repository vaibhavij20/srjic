import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ZoomIn, ArrowRight } from "lucide-react";

// Importing your actual assets from the listing
import annualImg from "../assets/annual.webp";
import sportsImg from "../assets/sports.webp";
import scienceImg from "../assets/science.webp";
import classroomImg from "../assets/classroom.webp";
import culturalImg from "../assets/cultural.webp";
import awardImg from "../assets/award.webp";

const galleryImages = [
  {
    id: 1,
    title: "Annual Day Celebration",
    category: "Events",
    src: annualImg,
  },
  {
    id: 2,
    title: "Sports Competition",
    category: "Sports",
    src: sportsImg,
  },
  {
    id: 3,
    title: "Science Exhibition",
    category: "Academics",
    src: scienceImg,
  },
  {
    id: 4,
    title: "Classroom Activities",
    category: "Academics",
    src: classroomImg,
  },
  {
    id: 5,
    title: "Cultural Program",
    category: "Culture",
    src: culturalImg,
  },
  {
    id: 6,
    title: "Award Ceremony",
    category: "Events",
    src: awardImg,
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-amber-600 mb-2">GALLERY</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Capturing Moments
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into the vibrant life, co-curricular activities, and celebrations at our school campus
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-200 shadow-md"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Information Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 z-10">
                  <p className="text-yellow-400 text-xs font-semibold tracking-wider uppercase mb-1">
                    {image.category}
                  </p>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {image.title}
                  </h4>
                </div>

                {/* Hover Action Layer */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center z-20">
                  <div className="bg-yellow-400 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                    <ZoomIn className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition shadow-md"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video relative w-full bg-black flex items-center justify-center">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-w-full max-h-[75vh] object-contain"
                  />
                  
                  {/* Lightbox Footer Details */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12 text-left">
                    <span className="text-xs font-semibold text-yellow-400 uppercase tracking-wider">
                      {selectedImage.category}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold text-white mt-1">
                      {selectedImage.title}
                    </h4>
                  </div>
                </div>

                {/* Close Button Outside Image Space */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md text-white p-2 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition z-30 border border-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}