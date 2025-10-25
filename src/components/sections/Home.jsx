import { useEffect, useState } from "react";
import {RevealOnScroll} from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-4">
                <div className="flex-1 text-left z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        Hi, I'm Gengarit
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg">
                        I am a passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span>
                        specializing in creating dynamic and responsive web applications. Welcome to my portfolio!
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#projects"
                            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                        >
                            View Contact
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
                    <img src="/pictures/weweqwfqfqw.png" alt="Profile" className="w-80 max-w-xs md:max-w-md object-contain shadow-lg scale-x-[-1]" />
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
