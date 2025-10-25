import { useEffect, useState } from "react";
import {RevealOnScroll} from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React", 
        "JavaScript", 
        "HTML", 
        "CSS", 
        "Tailwind CSS", 
        "Bootstrap"
    ];

    const backendSkills = [
        "Node.js",  
        "Python", 
        "Postgre", 
        "Java", 
        "C#", 
        "PHP", 
        "C++"
    ];

    return(
        <section 
        id="about" 
        className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    I'm a passionate software developer with a knack for creating dynamic and responsive web applications. With a strong foundation in JavaScript, React, and Node.js, I enjoy bringing ideas to life in the digital world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2 ">
                            {frontendSkills.map((tech, key) => (
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-semibold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2 ">
                            {backendSkills.map((tech, key) => (
                                <span key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 🎓 Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Bachelor of Science in Computer Science</strong> - STI West Negros University (2022 - 2026)
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                    <div className="list-disc list-inside text-gray-300 space-y-2">
                        <h4 className="font-semibold">
                            <strong>Intern Software Developer</strong> - XYZ Company (2026 - Present)
                        </h4>
                        <p>Assisting in the development of web applications using React and Node.js.</p>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};