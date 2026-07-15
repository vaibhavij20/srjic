import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Board Success",
      count: "100%",
      description: "Consistent pass rates with high division scores across board examinations.",
      details: "Our intermediate and high school blocks consistently produce excellent results in the annual UP Board state examinations, validating our academic core focus.",
    },
    {
      icon: Award,
      title: "Years of Excellence",
      count: "23+",
      description: "Nurturing generations of successful students in Jhunsi since 2003.",
      details: "For over two decades, our institution has proudly built educational foundations for thousands of young minds, assisting them into professions and higher studies.",
    },
    {
      icon: Star,
      title: "Cultural & Youth Awards",
      count: "75+",
      description: "Distinguished positions in local, block, and district level events.",
      details: "Students actively participate in local talent events, patriotic assemblies, and regional competitions, regularly bringing laurels home to the school campus.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Achievements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100 text-lg max-w-2xl mx-auto"
          >
            Celebrating the academic dedication and collective success of our community
          </motion.p>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center group"
              >
                <div className="bg-yellow-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                  <achievement.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-4xl font-bold text-amber-600 mb-2">{achievement.count}</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Detailed Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Milestones & Honors</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-2xl border-l-4 border-yellow-400"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{achievement.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Shared Trust</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Salig Ram Jaiswal Inter College is highly regarded throughout Jhunsi, Prayagraj for its steady commitment 
                to value-focused intermediate schooling. Our reputation relies entirely on realistic milestones rather than 
                commercial labels.
              </p>
              <p>
                We ground our recognition in the continuous trust of countless regional parents who rely on our institution 
                to provide stable environments, core UP Board curriculum focus, and high moral discipline.
              </p>
              <p>
                These steps forward are a reflection of the dedicated perseverance of our young minds, the systematic guidance of our 
                teaching faculty, and the ongoing coordination of our parent community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}