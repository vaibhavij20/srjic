import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Target, GraduationCap } from "lucide-react";

export default function About() {
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
          <h2 className="text-sm font-semibold text-yellow-500 mb-2">ABOUT US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Legacy of Excellence in Education
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded with a vision to make quality education accessible to all, Salig Ram Jaiswal Inter College 
            has been nurturing young minds in Jhunsi, Prayagraj since 2003.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-600">
              Salig Ram Jaiswal Inter College (S.R.J. Inter College) stands as a trusted landmark of educational 
              excellence. Our institution is dedicated to preparing students not just academically, but also 
              morally, socially, and emotionally to become responsible citizens.
            </p>
            <p className="text-gray-600">
              Adhering strictly to the structured <strong>NCERT Pattern under the UP Board</strong>, we offer a comprehensive 
              dual-medium curriculum featuring <strong>both English and Hindi medium sections</strong> to equip our students for 
              modern competitive pathways.
            </p>
            <p className="text-gray-600">
              Guided by our inspiring motto, <em>"Tamso Ma Jyotirgamaya"</em> (Lead us from darkness to light), we remain 
              firmly committed to our core conviction: ensuring that every single child deserves the best education at 
              an affordable, low fee.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-yellow-600 font-semibold hover:text-yellow-700 transition"
              aria-label="Read full history of Salig Ram Jaiswal Inter College"
            >
              Read Our Full History
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <BookOpen className="w-12 h-12 text-yellow-500 mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Quality Education</h4>
              <p className="text-gray-600 text-sm">
                Dual-medium system structured completely under the UP Board NCERT pattern.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Users className="w-12 h-12 text-yellow-500 mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Expert Faculty</h4>
              <p className="text-gray-600 text-sm">
                A dedicated team of 25 to 35+ qualified teachers focused on personal mentorship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <Target className="w-12 h-12 text-yellow-500 mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Holistic Growth</h4>
              <p className="text-gray-600 text-sm">
                Focus on student character building, deep ethical values, and moral discipline.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <GraduationCap className="w-12 h-12 text-yellow-500 mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Affordable Access</h4>
              <p className="text-gray-600 text-sm">
                Delivering high-standard institutional resources at a structured low fee.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}