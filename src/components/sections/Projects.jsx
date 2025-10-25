import {RevealOnScroll} from "../RevealOnScroll";

export const Projects = () => {
    return (<section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid gap-8 md:grid-cols-1 md:grid-cols-2 gap-6">
                     {/* To add projects copy paste here */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2 text-white">
                            Point of Sale System with Analysis and Inventory
                        </h3>
                        <p className="text-gray 400 mb-4 leading-relaxed">
                            Developed a comprehensive Point of Sale (POS) system using Python Django 
                            for backend and tailwind CSS for frontend. The system includes features 
                            for sales processing, inventory management, and data analysis, providing 
                            businesses with efficient transaction handling and insightful reports.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Django", "Tailwind CSS", "JavaScript"].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent hover:text-purple-300 transition-colors my-4 inline-block">
                                View Projects &#8594;{" "}
                            </a>
                        </div>
                    </div>
                     {/* to here */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2 text-white">
                            Point of Sale System with Analysis and Inventory
                        </h3>
                        <p className="text-gray 400 mb-4 leading-relaxed">
                            Developed a comprehensive Point of Sale (POS) system using Python Django 
                            for backend and tailwind CSS for frontend. The system includes features 
                            for sales processing, inventory management, and data analysis, providing 
                            businesses with efficient transaction handling and insightful reports.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Django", "Tailwind CSS", "JavaScript"].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:text-purple-300 transition-colors my-4 inline-block">
                                View Projects &#8594;{" "}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};