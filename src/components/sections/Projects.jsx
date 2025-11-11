import {RevealOnScroll} from "../RevealOnScroll";

export const Projects = () => {
    return (<section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid gap-8 md:grid-cols-1 md:grid-cols-2 gap-6">
                    {/* MorpHRift Game Project */}
                    {/* SENTINELS Educational RPG Project */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_2px_8px_rgba(99,102,241,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2 text-indigo-400">
                            SENTINELS - 2D Educational RPG Game
                        </h3>
                        <div className="mb-4 flex flex-col items-center justify-center gap-2">
                            <img src="/pictures/SENTINELS_SS.png" alt="SENTINELS Game Screenshot" className="rounded-lg shadow-md max-h-48 object-contain" />
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            SENTINELS is a 2D educational RPG game inspired by classic Pokémon GBA style, designed for the Cybersecurity Fundamentals course. The game teaches cybersecurity concepts through interactive gameplay and quests. It also features a companion website for administration:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 mb-4">
                            <li>Superadmin: manages accounts, unlocks levels</li>
                            <li>Admin (faculty): monitors student progress</li>
                            <li>Student: plays the RPG game and learns cybersecurity</li>
                            <li>Multiple levels and quests based on cybersecurity topics</li>
                            <li>Classic 2D RPG gameplay and graphics</li>
                            <li>Integrated website for admin/superadmin controls</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {["Python", "Django", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Firebase", "PostgreSQL", "C#", "Unity"].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-indigo-500/10 text-indigo-500 py-1 px-3 rounded-full text-sm hover:bg-indigo-500/20 transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2 text-green-400">
                            MorphRift - 2D Puzzle Game
                        </h3>
                        <div className="mb-4 flex flex-col items-center justify-center gap-2">
                            <img src="/pictures/MORPHRIFT_SS.png" alt="MorpHRift Game Screenshot" className="rounded-lg shadow-md max-h-48 object-contain" />
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            MorphRift is a 2D puzzle game built with Unity. You play as a slime that can change its size to solve puzzles and clear each level. The game features:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 mb-4">
                            <li>Slime character that morphs size to overcome obstacles</li>
                            <li>Challenging monsters that chase the player</li>
                            <li>Various obstacles and puzzle mechanics</li>
                            <li>Multiple levels with increasing difficulty</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {["Unity", "C#", "2D Game", "Puzzle", "Design"].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Mabels POS Project */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgba(236,72,153,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2 text-pink-400">
                            Mabels Bar & Restaurant POS
                        </h3>
                        <div className="mb-4 flex flex-col items-center justify-center gap-2">
                            <img src="/pictures/MABELS_SS.png" alt="Mabels POS Screenshot" className="rounded-lg shadow-md max-h-48 object-contain" />
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            A custom Point of Sale system designed for Mabels Bar & Restaurant. Features include:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 mb-4">
                            <li>Inventory management</li>
                            <li>Order processing</li>
                            <li>Category-based menu navigation</li>
                            <li>Responsive design for tablets and desktops</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {["JavaScript", "HTML", "CSS", "Firebase"].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-pink-500/10 text-pink-500 py-1 px-3 rounded-full text-sm hover:bg-pink-500/20 transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* POS with System Analysis Project */}
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2 text-blue-400">
                            Point of Sale System with System Analysis
                        </h3>
                        <div className="mb-4 flex flex-col items-center justify-center gap-2">
                            <img src="/pictures/POS_SS.png" alt="POS System Analysis Screenshot" className="rounded-lg shadow-md max-h-48 object-contain" />
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            A robust Point of Sale system featuring integrated system analysis tools. Key features:
                        </p>
                        <ul className="list-disc list-inside text-gray-400 mb-4">
                            <li>Cashier accounts with secure login</li>
                            <li>Desktop-first design, fully responsive for phones</li>
                            <li>Add products with category management</li>
                            <li>Order calculation and receipt printing</li>
                            <li>Inventory management</li>
                            <li>Order processing</li>
                            <li>System analysis dashboard</li>
                        </ul>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {["HTML", "CSS", "JavaScript", "Tailwind CSS", "Python", "Django", "PostgreSQL", "MySQL"].map((tech, key) => (
                                <span 
                                key={key} 
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};