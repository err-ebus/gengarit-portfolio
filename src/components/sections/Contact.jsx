import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
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
        .sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            e.target,
            PUBLIC_KEY
        )
        .then(result => {
            alert ("Message sent successfully!");
            setFormData({ name: "", email: "", message: ""});
        })
        .catch(() => alert("An error occurred, please try again."));
    };

    return (
        <section 
        id="contact" 
        className="min-h-screen flex items-center justify-center py-20 px-4">
            <RevealOnScroll>
                <div className="max-w-2xl w-full mx-auto p-4 sm:p-8 md:p-12 bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 box-border">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
                    <form className="w-full" onSubmit={handleSubmit}>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    className="w-full px-5 py-4 mb-6 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 shadow-sm text-lg text-white placeholder-gray-400"
                                                    placeholder="Name..."
                                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    className="w-full px-5 py-4 mb-6 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 shadow-sm text-lg text-white placeholder-gray-400"
                                                    placeholder="example@gmail.com"
                                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                />
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    value={formData.message}
                                                    rows={5}
                                                    className="w-full px-5 py-4 mb-6 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/5 shadow-sm text-lg text-white placeholder-gray-400 resize-none"
                                                    placeholder="Your Message..."
                                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                                />

                                                <button
                                                    type="submit"
                                                    className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 transition-all"
                                                >
                                                    Send Message
                                                </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};