import { useState } from "react";
import { cn } from "../lib/utils";

const skills =
    [
        // 🌐 Core Programming
        { name: "HTML/CSS", level: 90, category: "core" },
        { name: "JavaScript", level: 80, category: "core" },
        { name: "Python", level: 65, category: "core" },
        { name: "TypeScript", level: 60, category: "core" },
        { name: "SQL", level: 65, category: "core" },

        // 🎨 Frontend
        { name: "React.js", level: 75, category: "frontend" },
        { name: "Tailwind CSS", level: 80, category: "frontend" },
        { name: "Responsive Design", level: 80, category: "frontend" },
        { name: "Next.js", level: 60, category: "frontend" },
        { name: "Redux", level: 60, category: "frontend" },
      
        // 🛠 Backend
        { name: "Node.js", level: 70, category: "backend" },
        { name: "Express.js", level: 70, category: "backend" },
        { name: "RESTful APIs", level: 75, category: "backend" },
        { name: "Laravel", level: 60, category: "backend" },      
        { name: "Authentication (JWT)", level: 60, category: "backend" },
        { name: "Error Handling", level: 75, category: "backend" },
        { name: "GraphQL", level: 45, category: "backend" },
      
        // 🗃 Databases
        { name: "MongoDB", level: 75, category: "database" },
        { name: "PostgreSQL", level: 60, category: "database" },
        { name: "Mongoose", level: 65, category: "database" },

        // 🔧 Tools & DevOps
        { name: "Git / GitHub", level: 85, category: "tools" },
        { name: "CLI / Terminal", level: 75, category: "tools" },
        { name: "API integration", level: 60, category: "tools" },
        { name: "VS Code", level: 85, category: "tools" },
        { name: "Vercel", level: 75, category: "tools" },
        { name: "Netlify", level: 70, category: "tools" },
        { name: "Docker (basics)", level: 40, category: "tools" },
      
        // 🧪 Testing & Debugging
        { name: "Chrome DevTools", level: 70, category: "testing" },
        { name: "Console Logging", level: 70, category: "testing" },

];

const categories = ["all", "core", "frontend", "backend", "database", "tools", "testing"]


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) =>activeCategory === "all" || skill.category === activeCategory);

    return (
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button 
                        key={key}
                        onClick={() => setActiveCategory(category)} 
                        className={cn("px-5 py-5 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name} </h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width: skill.level + "%"}} />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    )
};