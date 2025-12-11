import { motion } from "framer-motion";

// Data
const education = [
  {
    title: "High school graduation",
    date: "September-2023",
    school: "Zubeir School",
  },
  {
    title: "Studying in university",
    date: "Present",
    school: "SNU",
  },
  {
    title: "Learning Web dev",
    date: "Present",
    school: "Self studying",
  },
];

const journeys = [
  {
    image: "/images/me.jpg",
    rotation: 2,
  },
  {
    image: "/images/computer.jpg",
    rotation: -2,
  },
  {
    image: "/images/we.png",
    rotation: 1,
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

function About() {
  return (
    <div className="text-white/90 container mx-auto px-4 py-16 flex flex-col items-center gap-20">
        {/* About Me Section */}
      <motion.section
        className="text-center max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold mb-4">About me</h1>
        <p className="text-lg text-white/80">
          Hi!, I am Yusuf Abdullaahi a problem solver passionate about turning
          ideas into beautiful, functional interfaces. I enjoy crafting
          responsive and accessible UIs that make the web feel intuitive.
        </p>
      </motion.section>

      {/* Journeys Section */}
      <motion.section
        className="w-full max-w-4xl flex flex-col items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full"
          variants={staggerContainer}
        >
          {journeys.map((journey, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2"
              variants={itemVariants}
            >
              <motion.div
                className="bg-gray-800/40 p-2 rounded-lg overflow-hidden"
                style={{ rotate: journey.rotation }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={journey.image}
                  alt={`Journey ${index + 1}`}
                  className="aspect-square w-full h-full object-cover rounded-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section - Timeline Design */}
      <motion.section
        className="w-full max-w-4xl flex flex-col items-center gap-12 py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h2 className="text-3xl font-bold" variants={fadeInUp}>
          Education
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Timeline Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-cyan-500/50"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />

          {/* Timeline Items */}
          <div className="space-y-12">
            {education.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {/* Left Side Card */}
                  {isLeft && (
                    <motion.div
                      className="w-5/12 pr-8 text-right"
                      whileHover={{ scale: 1.02, x: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-white/70 mb-1">{item.school}</p>
                        <p className="text-white/50 text-sm">{item.date}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Center Timeline Dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="relative">
                      {/* Outer glow ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-md"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      {/* Inner dot */}
                      <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 border-4 border-gray-900" />
                    </div>
                  </motion.div>

                  {/* Spacer for left cards */}
                  {isLeft && <div className="w-5/12" />}

                  {/* Right Side Card */}
                  {!isLeft && (
                    <>
                      <div className="w-5/12" />
                      <motion.div
                        className="w-5/12 pl-8 text-right"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-xl">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-white/70 mb-1">{item.school}</p>
                          <p className="text-white/50 text-sm">{item.date}</p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
