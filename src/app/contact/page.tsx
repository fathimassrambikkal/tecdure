"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      title: "Phone",
      details: "+974 5145 1588",
      sub: "Mon-Fri 9am - 6pm",
    },
    {
      icon: (
        <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "Email",
      details: "tecdure@gmail.com",
      sub: "We'll respond within 24h",
    },
    {
      icon: (
        <svg className="w-4 h-4 xs:w-5 xs:h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "Address",
      details: "Doha, Qatar",
      sub: "Visit our showroom",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[30vh] xs:min-h-[35vh] sm:min-h-[40vh] flex items-center justify-center bg-white pt-20 xs:pt-24 sm:pt-28 md:pt-32 pb-12 xs:pb-14 sm:pb-16 px-4 xs:px-6">
        <div className="relative max-w-4xl mx-auto text-center px-3 xs:px-4 sm:px-6">
          <div className="inline-block mb-3 xs:mb-4 px-3 xs:px-4 py-1 border border-black/10 rounded-full">
            <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.2em] xs:tracking-[0.3em] uppercase text-black/60">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-light text-black tracking-[0.05em] xs:tracking-[0.1em] mb-3 xs:mb-4">
            Contact Us
          </h1>
          <div className="w-12 xs:w-14 sm:w-16 h-[1px] bg-black/30 mx-auto mb-4 xs:mb-5 sm:mb-6" />
          <p className="text-black/50 font-light text-xs xs:text-sm sm:text-base lg:text-lg max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mx-auto leading-relaxed px-2">
            We'd love to hear from you. Whether you have a question about our products, 
            services, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-[#F8F8F8] py-12 xs:py-14 sm:py-16 px-4 xs:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-8 lg:gap-10 xl:gap-12">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-3 xs:space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 border border-black/5 hover:border-black/20 transition-all duration-500 shadow-sm hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-start gap-3 xs:gap-4">
                    <div className="flex-shrink-0 w-9 h-9 xs:w-10 xs:h-10 sm:w-11 sm:h-11 rounded-full bg-black/5 flex items-center justify-center text-black/60 group-hover:bg-black group-hover:text-white transition-all duration-500">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.2em] xs:tracking-[0.3em] uppercase text-black/40 mb-0.5 xs:mb-1">
                        {info.title}
                      </h3>
                      <p className="text-sm xs:text-[15px] sm:text-base font-light text-black">
                        {info.details}
                      </p>
                      <p className="text-[10px] xs:text-[11px] sm:text-xs font-light text-black/30 mt-0.5">
                        {info.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="bg-white rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-6 border border-black/5">
                <h3 className="text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.2em] xs:tracking-[0.3em] uppercase text-black/40 mb-3 xs:mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-2 xs:gap-3 flex-wrap">
                  {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((social) => (
                    <button
                      key={social}
                      className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full border border-black/10 hover:border-black hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center text-black/40 hover:text-white"
                    >
                      <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.1em] uppercase">
                        {social.charAt(0)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl xs:rounded-2xl p-6 xs:p-8 sm:p-10 border border-black/5 shadow-sm">
                <div className="mb-6 xs:mb-8">
                  <h2 className="text-xl xs:text-2xl sm:text-3xl font-light text-black tracking-[0.05em]">
                    Send a Message
                  </h2>
                  <div className="w-10 xs:w-12 h-[1px] bg-black/30 mt-2 xs:mt-3" />
                </div>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 xs:py-10 sm:py-12 animate-in fade-in duration-500">
                    <div className="w-14 h-14 xs:w-16 xs:h-16 rounded-full bg-black/5 flex items-center justify-center mb-3 xs:mb-4">
                      <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-black/60" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-light text-black mb-1 xs:mb-2">Message Sent!</h3>
                    <p className="text-black/50 text-xs xs:text-sm font-light">
                      Thank you for reaching out. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                      <div>
                        <label className="block text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.2em] uppercase text-black/40 mb-1.5 xs:mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-[#F8F8F8] border border-transparent focus:border-black/30 rounded-lg xs:rounded-xl transition-all duration-300 outline-none text-black text-xs xs:text-sm font-light placeholder:text-black/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.2em] uppercase text-black/40 mb-1.5 xs:mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-[#F8F8F8] border border-transparent focus:border-black/30 rounded-lg xs:rounded-xl transition-all duration-300 outline-none text-black text-xs xs:text-sm font-light placeholder:text-black/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xs:gap-5 sm:gap-6">
                      <div>
                        <label className="block text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.2em] uppercase text-black/40 mb-1.5 xs:mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-[#F8F8F8] border border-transparent focus:border-black/30 rounded-lg xs:rounded-xl transition-all duration-300 outline-none text-black text-xs xs:text-sm font-light placeholder:text-black/20"
                          placeholder="+974 1234 5678"
                        />
                      </div>
                      <div>
                        <label className="block text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.2em] uppercase text-black/40 mb-1.5 xs:mb-2">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-[#F8F8F8] border border-transparent focus:border-black/30 rounded-lg xs:rounded-xl transition-all duration-300 outline-none text-black text-xs xs:text-sm font-light appearance-none cursor-pointer"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="products">Product Information</option>
                          <option value="orders">Order Support</option>
                          <option value="partnership">Partnership</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.2em] uppercase text-black/40 mb-1.5 xs:mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 xs:px-4 py-2.5 xs:py-3 bg-[#F8F8F8] border border-transparent focus:border-black/30 rounded-lg xs:rounded-xl transition-all duration-300 outline-none text-black text-xs xs:text-sm font-light placeholder:text-black/20 resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full sm:w-auto px-8 xs:px-10 sm:px-12 py-3 xs:py-3.5 bg-black text-white text-[10px] xs:text-[11px] font-light tracking-[0.2em] xs:tracking-[0.3em] uppercase rounded-lg xs:rounded-xl hover:bg-black/80 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12 xs:py-14 sm:py-16 px-4 xs:px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 xs:mb-8 sm:mb-10">
            <h3 className="text-[8px] xs:text-[9px] sm:text-[10px] font-light tracking-[0.2em] xs:tracking-[0.3em] uppercase text-black/40 mb-1 xs:mb-2">
              Find Us
            </h3>
            <p className="text-black/50 text-xs xs:text-sm font-light">
              Visit our showroom in the heart of Doha
            </p>
          </div>
          <div className="relative w-full h-[200px] xs:h-[250px] sm:h-[300px] lg:h-[350px] 2xl:h-[400px] bg-[#F8F8F8] rounded-xl xs:rounded-2xl overflow-hidden border border-black/5">
            <div className="absolute inset-0 flex items-center justify-center flex-col text-black/20">
              <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 mb-2 xs:mb-3" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[10px] xs:text-xs sm:text-sm font-light tracking-widest uppercase text-black/30">
                Map Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}