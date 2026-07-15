import { stats } from "../data/data";
import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        
        <div className="grid md:grid-cols-4 gap-8">
          
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >
              <h2 className="text-5xl font-bold text-amber-600">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}