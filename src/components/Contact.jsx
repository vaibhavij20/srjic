import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const WEB3FORMS_ACCESS_KEY = "81e3cb35-0108-4796-871f-bfa55a666273";

  // State matching your precise form names & drop downs
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    stream: "General Inquiry",
    message: ""
  });

  const [status, setStatus] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Quick validation check
    if (!formData.first_name || !formData.email || !formData.message) {
      setStatus("ERROR");
      setErrorMessage("Please fill out all required fields (First Name, Email, and Message).");
      return;
    }

    setStatus("SUBMITTING");

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Section Contact Submission - ${formData.stream}`,
      from_name: "SRJIC Section Component",
      ...formData
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setStatus("SUCCESS");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          stream: "General Inquiry",
          message: ""
        });
      } else {
        throw new Error(result.message || "Failed to submit web3forms API request.");
      }
    } catch (err) {
      setStatus("ERROR");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected submission error occurred.");
    }
  };

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
          <h2 className="text-sm font-semibold text-amber-600 mb-2">CONTACT US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about registrations or our curriculum? Reach out to us. Send a message, and our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Salig Ram Jaiswal Inter College<br />
                    Shanti Nagar, Chak Jhunsi<br />
                    Prayagraj, Uttar Pradesh, India - 211019
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone Links</h4>
                  <p className="text-gray-600 leading-relaxed">
                    +91 94152 79839<br />
                    +91 94153 78178
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 leading-relaxed">
                   srjintercollege60@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-400 p-3 rounded-xl flex-shrink-0">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Monday - Saturday: 7:30 AM - 1:30 PM<br />
                    <span className="text-xs text-gray-500 font-medium">(Subject to state summer/winter seasonal directives)</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition bg-white text-gray-900"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition bg-white text-gray-900"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition bg-white text-gray-900"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition bg-white text-gray-900"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <label htmlFor="stream-select" className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject / Stream Intent
                </label>
                <select
                  id="stream-select"
                  name="stream"
                  value={formData.stream}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition bg-white text-gray-900"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Admission (Primary & Middle Blocks)">Admission (Primary & Middle Blocks)</option>
                  <option value="Admission (High School Block)">Admission (High School Block)</option>
                  <option value="Intermediate Science Track">Intermediate Science Track</option>
                  <option value="Intermediate Arts Track">Intermediate Arts Track</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-indigo-900 focus:ring-2 focus:ring-indigo-900/20 outline-none transition resize-none bg-white text-gray-900"
                  placeholder="Provide detailed query details here..."
                />
              </div>

              <AnimatePresence mode="wait">
                {status === "SUCCESS" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>Inquiry submitted safely! The management group will reach out soon.</span>
                  </motion.div>
                )}

                {status === "ERROR" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={status === "SUBMITTING"}
                className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:bg-gray-200 text-gray-900 disabled:text-gray-400 font-semibold px-8 py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:cursor-not-allowed"
              >
                {status === "SUBMITTING" ? (
                  <>
                    <span>Sending Message...</span>
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}