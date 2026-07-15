import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, FileText, ArrowRight } from "lucide-react";

const notices = [
  {
    type: "Reopening",
    title: "School Reopening After Summer Vacation",
    date: "2026-06-21",
    description: "Dear Parents and Students, summer vacations are concluding. The school will reopen on July 1, 2026. Students must complete their re-registrations, holiday homework, and keep their text books and stationery ready.",
    urgent: true,
  },
  {
    type: "Academic",
    title: "Mandatory Submission of Holiday Homework",
    date: "2026-05-25",
    description: "All students are notified that Holiday Homework has been shared in respective groups. Submission is mandatory as marks will directly influence Half-Yearly Examinations and Practical Assessments.",
    urgent: true,
  },
  {
    type: "PTM",
    title: "Parent-Teacher Meeting (PTM) Scheduled",
    date: "2026-05-19",
    description: "A Parent-Teacher Meeting is scheduled for May 24 (Sunday) from 9:00 AM to 11:00 AM. All parents are requested to attend to discuss academic progress and critical institutional schedules.",
    urgent: false,
  },
  {
    type: "Holiday",
    title: "Official Declaration of Summer Vacation",
    date: "2026-05-20",
    description: "Summer vacations for all blocks commence on May 21. Students must complete the assigned homework and remain safe. Parents are reminded to attend the PTM scheduled on May 24.",
    urgent: false,
  },
];

export default function Notices() {
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
          <h2 className="text-sm font-semibold text-amber-600 mb-2">SRJ INTER COLLEGE</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Notice Board & Circulars
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest official declarations, academic schedules, and institutional protocols issued by the management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {notices.map((notice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-2xl border-l-4 border-indigo-900 hover:shadow-lg transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {notice.urgent && (
                      <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                        Urgent
                      </span>
                    )}
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-semibold">
                      {notice.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {new Date(notice.date).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{notice.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{notice.description}</p>
              </div>
              
              <div className="flex items-center gap-2 text-indigo-900 text-sm font-semibold mt-2 cursor-pointer w-fit group">
                <FileText className="w-4 h-4 text-yellow-500" />
                <span className="group-hover:underline">By Order of Management</span>
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
            to="/notices"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition shadow-sm"
          >
            View All Circulars
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}