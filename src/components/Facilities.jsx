import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Monitor, FlaskConical, Trophy, ShieldAlert, Store, Landmark, BookOpen } from "lucide-react";

const facilities = [
  {
    icon: Building2,
    title: "Optimized Classrooms",
    description: "Spacious, well-ventilated spaces configured to support interactive daily learning.",
  },
  {
    icon: Building2,
    title: "Smart Classrooms",
    description: "Equipped with digital presentation screens and multimedia resources to illustrate complex topics visually.",
  },
  {
    icon: Monitor,
    title: "Computer Labs",
    description: "Modern desktop systems allowing students to develop essential technical skills and digital literacy.",
  },
  {
    icon: FlaskConical,
    title: "Practical Science Labs",
    description: "Dedicated practical spaces supporting Physics, Chemistry, and Biology boards tracks.",
  },
  {
    icon: Trophy,
    title: "Playground & Sports",
    description: "Open-air grounds layout providing active physical training and tracking.",
  },
  {
    icon: ShieldAlert,
    title: "Safe Campus Layout",
    description: "Disciplined campus safety measures and orderly daily infrastructure oversight.",
  },
  {
    icon: Store,
    title: "Campus Tuck Shop",
    description: "An on-site counter offering clean refreshments and essential midday supplies.",
  },
  {
    icon: BookOpen,
    title: "Dual-Medium Support",
    description: "Resources carefully mapped to support both English and Hindi curriculums.",
  },
];

export default function Facilities() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-amber-600 mb-2">FACILITIES</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Campus Facilities
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical, well-maintained institutional infrastructure built to support student growth at an affordable low fee
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition group"
            >
              <div className="bg-yellow-400 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <facility.icon className="w-7 h-7 text-gray-900" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
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
            to="/facilities"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition"
          >
            Explore All Facilities
          </Link>
        </motion.div>
      </div>
    </section>
  );
}