import { ArrowRight, ExternalLink, Github } from "lucide-react";


const projects = [
    {
      id: 1,
      title: "DevLink",
      description: "A tool that lets users create and publish beautiful developer portfolios by filling out a form (name, skills, projects, etc.).",
      image: "./projects/DevLink.png",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Authentication", "Vercel"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
        id: 1,
        title: "Blogify",
        description: "Users can register, write blog posts with markdown, and comment on others'. Admin can moderate.",
        image: "./projects/Blogify.png",
        tags: ["Laravel", "MySQL/PostgreSQL", "API Integration", "MongoDB", "Blade templating", "Authentication",],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 1,
        title: "DevConnect",
        description: "A chat app where devs can join rooms, chat in real time, and even share code snippets.",
        image: "./projects/DevConnect.png",
        tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "Socket.io", "Chrome DevTools"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 1,
        title: "Foodly",
        description: "A user-facing app for browsing menus, placing orders, and receiving delivery updates. Includes admin panel for restaurants to manage menus.",
        image: "./projects/Foodly.png",
        tags: ["TypeScript", "Next.js", "Express.js", "MongoDB", "API integration", "Responsive Design", "Docker"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 1,
        title: "QuickTask",
        description: "A kanban-style task manager with boards, lists, and draggable cards. Includes user auth and team-based collaboration.",
        image: "./projects/QuickTask.png",
        tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "RDrag and Drop", "JWT", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#",
      },
];

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Each of these projects reflects my journey as a developer: hands-on learning, problem-solving, and building real-world solutions with modern tools. From frontend design to backend logic, these works showcase my growing expertise and commitment to writing clean, maintainable code.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, key) => (
                        <div 
                            key={key} 
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover" 
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4">      
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a 
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"> 
                                        <ExternalLink size={20}/> 
                                    </a>
                                    <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/> 
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/syntaxamurai"> 
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>

            </div>
        </section>
    )
};