import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import directorPhoto from "../assets/director.webp";
import managerPhoto from "../assets/manager.webp";

const messages = [
  {
    role: "Director's Message",
    name: "Mr. Sanjay Jaiswal",
    title: "Director",
    photo: directorPhoto,
    message: [
      "As the Director of Salig Ram Jaiswal Inter College, my vision has always been to create an institution that stands as a beacon of excellence, integrity, and opportunity for every student who walks through our doors.",
      "Over the past 24 years, we have built a legacy of academic achievement and character development. We believe that true education goes beyond textbooks — it shapes values, builds resilience, and ignites a lifelong love for learning.",
      "I invite every student and parent to partner with us in this journey, as together we build the leaders, thinkers, and changemakers of tomorrow.",
    ],
  },
  {
    role: "Manager's Message",
    name: "Mrs. Mamta Jaiswal",
    title: "Manager",
    photo: managerPhoto,
    message: [
      "At Salig Ram Jaiswal Inter College, our greatest priority is the well-being and growth of every student. As Manager, I ensure that our institution provides a safe, nurturing, and inspiring environment for all.",
      "We work tirelessly to strengthen the bridge between students, parents, and teachers — because we believe that education is a shared responsibility and a collective journey.",
      "Our focus on discipline, compassion, and innovation ensures that students not only achieve academic excellence but also grow into responsible citizens who contribute meaningfully to society.",
    ],
  },
];

export default function LeadershipMessages() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom space-y-24">
        {messages.map((person, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={person.role}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image — alternates left/right */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative ${!isEven ? "lg:order-2" : ""}`}
              >
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Quote badge */}
                <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-2xl shadow-xl">
                  <Quote className="w-8 h-8 text-gray-900" />
                </div>
                {/* Name card overlay */}
                <div className="absolute -bottom-6 left-6 bg-white border border-gray-100 shadow-lg px-5 py-3 rounded-xl">
                  <p className="font-bold text-gray-900 text-sm">{person.name}</p>
                  <p className="text-amber-600 text-xs font-medium">{person.title}</p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={!isEven ? "lg:order-1" : ""}
              >
                <h2 className="text-sm font-semibold text-amber-600 mb-2 uppercase tracking-wide">
                  {person.role}
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  A Message from Our {person.title}
                </h3>
                <div className="space-y-4 text-gray-600">
                  {person.message.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-yellow-400" />
                  <div>
                    <p className="font-semibold text-gray-900">{person.name}</p>
                    <p className="text-gray-500 text-sm">{person.title}, Salig Ram Jaiswal Inter College</p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}