import { motion } from "framer-motion";

// Data
const skills = [
  "Html",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Tailwindcss",
  "Git",
  "UI/UX",
  "Python",
  "ShadCN UI",
  "React Router",
  "Zustand",
];

const projects = [
  {
    image: "/images/extension-img.jpg",
    title: "Browser Extension",
    description: "The most universal kit for figma",
    tags: ["React", "Javascript", "Tailwindcss", "Zustand"],
    GitHub: "https://github.com/Joseph-Abdullaah/browser-extensions-manager",
  },
  {
    image: "/images/Weather-img.jpg",
    title: "Weather Web App",
    description: "The most universal kit for figma",
    tags: ["Vite", "React", "Javascript", "API"],
    GitHub: "https://github.com/Joseph-Abdullaah/weather-web-application",
  },
  {
    image: "/images/asci-img.png",
    title: "ASCII-CLI",
    description: "A command-line tool to convert images to ASCII art.",
    tags: ["Python", "CLI", "Pillow"],
    GitHub: "https://github.com/Joseph-Abdullaah/Image-to-ASCII-code",
  },
];

const social = [
  { name: "Github", link: "https://github.com/Joseph-Abdullaah" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/yuusuf-abdullaahi-7a238a37a/" },
  { name: "Frontend Mentor", link: "https://www.frontendmentor.io/profile/Joseph-Abdullaah" },
  { name: "Twitter", link: "https://twitter.com/josephabdullaah" }, 
];

const achievements = [
  {
    title: "PyCon somalia hackathon participation",
    date: "September-2025",
    description: "Food insecurity in Somalia",
  },
  {
    title: "FM 30days hackathon participation",
    date: "September-2025",
    description: "Weather app open-metio API",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

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
  visible: { opacity: 1, scale: 1 },
};

function Home() {
  return (
    <div className="text-white/90 container mx-auto px-4 py-16 flex flex-col items-center gap-20">
        {/* Hero Section */}
      <motion.section
        className="text-left max-w-3xl w-full flex flex-col gap-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Location and Availability */}
        <motion.div
          className="flex justify-between items-center text-sm text-white/60"
          variants={fadeInUp}
        >
          <span>Mogadishu, Somalia</span>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <p className="text-white/70 text-sm">Available for work</p>
          </div>
        </motion.div>

        {/* Profile Info */}
        <motion.div className="flex flex-col gap-1" variants={fadeInUp}>
          <img
            src="/images/profile.png"
            alt="Joseph"
            className="w-16 h-16 rounded-xl object-cover mb-2"
          />
          <h2 className="text-2xl font-bold">Joseph Abdullaahi</h2>
          <p className="text-white/70">Front-End Engineer</p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl font-bold leading-tight"
          variants={fadeInUp}
        >
          Where{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-gray-300">
            Code
          </span>{" "}
          Meets Creativity in Web Experiences
        </motion.h1>

        {/* Social Links */}
        <motion.div className="mt-8" variants={fadeInUp}>
          <p className="text-white/60 mb-2">Find me on</p>
          <div className="flex gap-6 text-white/70">
            {social.map(({ name, link }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* About Me Description */}
        <motion.div
          className="mt-8 flex flex-col gap-4 text-white/70"
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp}>
            With 2 years of experience in frontend development, I build
            interfaces that are responsive, efficient, and user-centered. I
            focus on creating digital products that feel intuitive, visually
            consistent, and enjoyable to interact with.
          </motion.p>
          <motion.p variants={fadeInUp}>
            I approach every project with curiosity and a commitment to
            iteration, continuously refining both functionality and design to
            deliver cleaner, smarter solutions.
          </motion.p>
          <motion.p variants={fadeInUp}>
            From component structure to subtle UI interactions, I develop with
            intent and attention to detail, ensuring every element serves a
            purpose and contributes to a seamless, well-crafted experience.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="w-full max-w-3xl flex flex-col items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-3xl font-bold" variants={fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          variants={staggerContainer}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              className="bg-gray-800/60 border border-gray-600 rounded-md px-4 py-1 text-sm"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="w-full max-w-3xl flex flex-col items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-3xl font-bold" variants={fadeInUp}>
          Projects
        </motion.h2>
        <motion.div
          className="w-full flex flex-col gap-6"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/40 p-4 md:p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Project Info */}
              <div className="flex-1 w-full md:w-auto">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-white/70 mt-2 text-sm">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-700/80 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Image */}
              <div className="w-full md:w-auto flex justify-center md:justify-end">
                <a
                  href={project.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-64 md:w-48 h-40 md:h-32 rounded overflow-hidden flex-shrink-0 hover:opacity-80 transition-opacity"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        className="w-full max-w-3xl flex flex-col items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="text-3xl font-bold" variants={fadeInUp}>
          Achievements
        </motion.h2>
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
              variants={fadeInUp}
            >
              {/* Gradient accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Trophy Icon */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Home;
