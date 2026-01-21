import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { GlassmorphismCard } from "../GlassmorphismCard";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const SERVICE_ID = "service_ga6df7j";
    const TEMPLATE_ID = "template_d97zceq";
    const PUBLIC_KEY = "iCDXyO4yyYF7diIJO";

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then(() => {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => alert("An error occurred, please try again."));
    };

    return (
        <section id="contact" className="relative py-32 px-4 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <RevealOnScroll>
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 space-y-4 text-center">
                        <div className="inline-block mx-auto">
                            <span className="text-sm uppercase tracking-widest text-blue-400 font-medium">
                                Get In Touch
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-white">
                            Let's Connect
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Have a question or want to collaborate? I'd love to hear from you.
                        </p>
                    </div>

                    {/* Contact Form Card */}
                    <GlassmorphismCard className="p-8 md:p-12">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Name Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                            >
                                Send Message
                            </button>
                        </form>
                    </GlassmorphismCard>

                    {/* Social Links */}
                    <div className="mt-12 text-center space-y-6">
                        <p className="text-gray-400">Or find me on</p>
                        <div className="flex justify-center gap-6">
                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/john_bayer1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-pink-500/50 hover:bg-pink-500/5 transition group"
                                aria-label="Instagram"
                            >
                                <svg className="w-5 h-5 fill-gray-400 group-hover:fill-pink-400 transition" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/john.bayer.965"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/5 transition group"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5 fill-gray-400 group-hover:fill-blue-400 transition" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/Gengarit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/5 transition group"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5 fill-gray-400 group-hover:fill-purple-400 transition" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};