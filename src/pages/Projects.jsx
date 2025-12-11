import { useState } from "react";
import { motion } from "framer-motion";
import { Link, Github } from "lucide-react";

// Data
const projects = [
  {
    image: "/images/extension-img.jpg",
    title: "Browser Extension",
    description: "Browser extension manager built with React and Zustand for state management.",
    tags: ["React", "Javascript", "Tailwindcss", "Zustand"],
    category: "Web dev",
    liveSite: "https://browser-extensions-manager-five.vercel.app/",
    GitHub: "https://github.com/Joseph-Abdullaah/browser-extensions-manager",
  },
  {
    image: "/images/Weather-img.jpg",
    title: "Weather Web App",
    description: "A weather web application built with Open-meteo API.",
    tags: ["Vite", "React", "Javascript", "API"],
    category: "Web dev",
    liveSite: "https://weather-web-application-rho.vercel.app/",
    GitHub: "https://github.com/Joseph-Abdullaah/weather-web-application",
  },
  {
    image: "/images/calculator img.jpg",
    title: "Calculator App",
    description: "A multi-theme calculator app built with vanilla JavaScript.",
    tags: ["CSS", "Javascript", "Html"],
    category: "Web dev",
    liveSite: "https://calculator-app-iota-seven.vercel.app",
    GitHub: "https://github.com/Joseph-Abdullaah/Calculator-app",
  },
  {
    image: "/images/faylo-img.jpg",
    title: "Faylo",
    description: "A dark theme landing page for a fictional file storage service called Fylo.",
    tags: ["CSS", "Javascript", "Html"],
    category: "Web dev",
    liveSite: "https://joseph-abdullaah.github.io/fylo-dark-theme-landing-page/",
    GitHub: "https://github.com/Joseph-Abdullaah/fylo-dark-theme-landing-page?tab=readme-ov-file",
  },
  {
    image: "/images/asci-img.png",
    title: "ASCII-CLI",
    description: "A command-line tool to convert images to ASCII art.",
    tags: ["Python", "CLI", "Pillow"],
    category: "CLI",
    liveSite: "#",
    GitHub: "https://github.com/Joseph-Abdullaah/Image-to-ASCII-code",
  },
];

const categories = ["All", "Web dev", "CLI", "Animations"];


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="text-white/90 container mx-auto px-4 py-16 flex flex-col items-center gap-12">
        {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Here some of my projects
      </motion.h1>

      {/* Filter Buttons */}
      <motion.div
        className="flex gap-x-4 border-b border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((cat, index) => (
          <motion.button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 text-lg ${
              activeFilter === cat
                ? "text-white border-b-2 border-white"
                : "text-white/60"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-4xl"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        key={activeFilter}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-4"
            variants={scaleIn}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Project Image */}
            <motion.div
              className="aspect-video rounded-lg overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project Title */}
            <h3 className="text-2xl font-semibold">{project.title}</h3>

            {/* Project Description */}
            <p className="text-white/70">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-700/80 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-2">
              <motion.a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link size={24} />
              </motion.a>
              <motion.a
                href={project.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={24} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
