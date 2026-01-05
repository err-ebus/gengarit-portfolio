import {RevealOnScroll} from "../RevealOnScroll";
import ProjectFolder from "../ProjectFolder";

export const Projects = () => {
    const projects = [
        {
            title: "SENTINELS - 2D Educational RPG Game",
            color: "indigo",
            image: "/pictures/SENTINELS_SS.png",
            description:
                "SENTINELS is a 2D educational RPG game inspired by classic Pokémon GBA style, designed for the Cybersecurity Fundamentals course. The game teaches cybersecurity concepts through interactive gameplay and quests. It also features a companion website for administration.",
            bullets: [
                "Superadmin: manages accounts, unlocks levels",
                "Admin (faculty): monitors student progress",
                "Student: plays the RPG game and learns cybersecurity",
                "Multiple levels and quests based on cybersecurity topics",
                "Classic 2D RPG gameplay and graphics",
                "Integrated website for admin/superadmin controls",
            ],
            techs: ["Python", "Django", "React", "Tailwind CSS", "HTML", "CSS", "JavaScript", "Firebase", "PostgreSQL", "C#", "Unity"],
        },
        {
            title: "MorphRift - 2D Puzzle Game",
            color: "green",
            image: "/pictures/MORPHRIFT_SS.png",
            description:
                "MorphRift is a 2D puzzle game built with Unity. You play as a slime that can change its size to solve puzzles and clear each level.",
            bullets: [
                "Slime character that morphs size to overcome obstacles",
                "Challenging monsters that chase the player",
                "Various obstacles and puzzle mechanics",
                "Multiple levels with increasing difficulty",
            ],
            techs: ["Unity", "C#", "2D Game", "Puzzle", "Design"],
        },
        {
            title: "Mabels Bar & Restaurant POS",
            color: "pink",
            image: "/pictures/MABELS_SS.png",
            description: "A custom Point of Sale system designed for Mabels Bar & Restaurant.",
            bullets: ["Inventory management", "Order processing", "Category-based menu navigation", "Responsive design for tablets and desktops"],
            techs: ["JavaScript", "HTML", "CSS", "Firebase"],
        },
        {
            title: "Point of Sale System with System Analysis",
            color: "blue",
            image: "/pictures/POS_SS.png",
            description: "A robust Point of Sale system featuring integrated system analysis tools.",
            bullets: [
                "Cashier accounts with secure login",
                "Desktop-first design, fully responsive for phones",
                "Add products with category management",
                "Order calculation and receipt printing",
                "Inventory management",
                "Order processing",
                "System analysis dashboard",
            ],
            techs: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Python", "Django", "PostgreSQL", "MySQL"],
        },
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        {projects.map((p, idx) => (
                            <ProjectFolder
                                key={idx}
                                title={p.title}
                                color={p.color}
                                image={p.image}
                                description={p.description}
                                bullets={p.bullets}
                                techs={p.techs}
                            />
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};