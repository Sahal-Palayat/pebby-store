"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import KidsFooter from "@/components/Footer";

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      // Clear success message after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };

  const openWhatsApp = () => {
    const message = "Hi! I have a question about Pebby Store products.";
    const whatsappUrl = `https://wa.me/+1234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-[#f9f3e6]  h-[300px] z-0"></div>
        <div className="container mx-auto px-4 pt-12 pb-20 relative z-10">
          <div className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-700 mb-6">
             {' Have questions about our products or want to share feedback? Wedlove to hear from you!'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 -mt-20 mb-16">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {[
              {
                icon: <Phone className="h-6 w-6 text-green-500" />,
                title: "Call Us",
                details: ["+91 8136851299"],
              },
              {
                icon: <Mail className="h-6 w-6 text-blue-500" />,
                title: "Email Us",
                details: ["pebby.in@gmail.com"],
              },
              {
                icon: <MapPin className="h-6 w-6 text-pink-500" />,
                title: "Visit Us",
                details: ["www.pebby.in"],
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>

              {formStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                 {" Thank you for your message! We'll get back to you soon."}
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  There was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter Your Phone"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Return Request">Return Request</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Store Information and Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Visit Our Online store
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-800 font-medium">
                        Pebby Store - Main Location
                      </p>
                      <p className="text-gray-600">
                        Panambally Nagar,Ernakulam,Kerala
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-800 font-medium">Store Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9am - 7pm
                      </p>
                      <p className="text-gray-600">Saturday: 10am - 8pm</p>
                      <p className="text-gray-600">Sunday: 11am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-800 font-medium">Email</p>
                      <p className="text-gray-600">pebby.in@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-gray-500 mt-1 mr-3" />
                    <div>
                      <p className="text-gray-800 font-medium">Phone</p>
                      <p className="text-gray-600">+91 8136851299</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <p className="text-sm text-yellow-800">
                    <span className="font-medium">Special Events:</span> Join us
                    every Saturday morning for story time and craft activities
                    for kids!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Find quick answers to common questions about our store and
              products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How do I place an order?",
                answer:
                  "Just pick your product and click “Order” — you’ll be redirected to WhatsApp where our team will assist with details, payment, and design approval.",
              },
              {
                question: "What is the estimated delivery time?",
                answer:
                  "Orders are usually dispatched in 1–2 days. Delivery may take 2–4 days depending on your location.",
              },
              {
                question: "Can I cancel my order?",
                answer:
                  "Yes, within 1 hour for a full refund. After that, cancellations might not be possible due to personalization.",
              },
              {
                question: "What is your return or refund policy?",
                answer:
                  "If you get a wrong or damaged item, contact us within 3 days. We'll replace or refund it. Returns aren't accepted otherwise.",
              },
              {
                question: "Can I request changes after placing an order?",
                answer:
                  "If your order hasn’t gone into production, small edits may be possible. Reach out ASAP.",
              },
              {
                question: "Do you offer bulk or school orders?",
                answer:
                  "Yes! We offer bulk pricing for schools and party return gifts. Just message us on WhatsApp.",
              },
             
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <KidsFooter />
    </div>
  );
}
