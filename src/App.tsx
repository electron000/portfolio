import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { portfolioData } from "./lib/data";
import { motion, type Variants } from "framer-motion";
import {
  Globe,
  Cpu,
  Layers,
  Zap,
  Github,
  Mail,
  Linkedin,
  GraduationCap,
  Briefcase,
  Code2,
  Download,
  ChevronDown,
  ChevronUp,
  Sun,
  Moon,
} from "lucide-react";

// --- Types ---
interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  links: { github: string; external: string };
}

// --- Shared Styles ---
// Restricts CSS transitions ONLY to colors and shadows. Layout/transforms are handled by Framer Motion.
const SHARED_CARD_STYLES =
  "transition-[border-color,box-shadow] duration-300 hover:border-zinc-900 dark:hover:border-zinc-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)]";

// --- Sub-Components ---

function SkillCard({ category, list }: { category: string; list: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (ulRef.current) {
        setIsOverflowing(ulRef.current.scrollHeight > 42);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [list]);

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative p-5 md:p-8 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-2xl flex flex-col sm:flex-row sm:items-start lg:items-center gap-4 md:gap-6 pr-10 md:pr-16 ${SHARED_CARD_STYLES}`}
    >
      <motion.span
        layout="position"
        className="text-xs md:text-sm font-bold uppercase text-zinc-500 w-full sm:w-32 shrink-0 sm:pt-1 lg:pt-0"
      >
        {category.replace("_", " ")}
      </motion.span>

      <motion.ul
        layout
        ref={ulRef}
        className={`flex flex-wrap gap-2 md:gap-3 py-1 overflow-hidden ${
          isExpanded ? "max-h-[500px]" : "max-h-10 md:max-h-10"
        }`}
      >
        {list.map((skill) => (
          <motion.li
            layout
            key={skill}
            className="group text-[12px] md:text-sm font-medium flex items-center gap-1.5 md:gap-2 bg-white dark:bg-zinc-900/80 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors duration-300 hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-200 dark:hover:text-zinc-900 cursor-default"
          >
            <Zap
              size={12}
              className="text-zinc-400 shrink-0 group-hover:text-zinc-300 dark:group-hover:text-zinc-600 transition-colors"
            />
            {skill}
          </motion.li>
        ))}
      </motion.ul>

      {isOverflowing && (
        <motion.button
          layout="position"
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-3 top-6 sm:top-1/2 sm:-translate-y-1/2 md:right-6 p-1.5 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
          aria-label="Toggle Skills"
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </motion.button>
      )}
    </motion.div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (descRef.current) {
        setIsOverflowing(
          descRef.current.scrollHeight > descRef.current.clientHeight,
        );
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [project.description]);

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`group flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 p-6 md:p-10 rounded-3xl space-y-6 md:space-y-8 overflow-hidden ${SHARED_CARD_STYLES}`}
    >
      <motion.div layout className="space-y-4">
        <motion.div
          layout="position"
          className="flex justify-between items-start gap-4"
        >
          <div>
            <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-1">
              {project.title}
            </h4>
            <p className="text-xs md:text-sm font-medium text-zinc-500">
              {project.subtitle}
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            {project.links.github !== "#" && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={16} />
              </a>
            )}
            {project.links.external !== "#" && (
              <a
                href={project.links.external}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Live Demo"
              >
                <Globe size={16} />
              </a>
            )}
          </div>
        </motion.div>

        <motion.div layout className="relative">
          <motion.p
            layout="position"
            ref={descRef}
            className={`text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed ${
              !isExpanded ? "line-clamp-3" : ""
            }`}
          >
            {project.description}
          </motion.p>
          {isOverflowing && (
            <motion.button
              layout="position"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1 hover:underline focus:outline-none"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp size={12} />
                </>
              ) : (
                <>
                  ... Read More <ChevronDown size={12} />
                </>
              )}
            </motion.button>
          )}
        </motion.div>
      </motion.div>

      <motion.div layout="position" className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] md:text-xs font-semibold px-2.5 py-1 bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded-full transition-colors hover:bg-zinc-800 hover:text-white dark:hover:bg-zinc-200 dark:hover:text-zinc-900 cursor-default"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}

// --- Animation Variants ---
const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function App() {
  const { personalInfo, experience, projects, skills, education } =
    portfolioData;

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      return savedTheme === "dark" || (!savedTheme && prefersDark)
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <main className="selection:bg-zinc-800 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-black h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-proximity scroll-smooth scroll-pt-16">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-2xl bg-white/30 dark:bg-[#09090b]/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="/ajck.webp"
              alt={personalInfo.name}
              className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover border border-zinc-200 dark:border-zinc-800 shadow-sm"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <span className="font-bold tracking-tight text-xs md:text-sm whitespace-nowrap">
              {personalInfo.name}
            </span>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden sm:flex gap-4 md:gap-8 text-xs md:text-sm font-medium text-zinc-500">
              {["skills", "experience", "projects"].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="hover:text-zinc-900 dark:hover:text-white capitalize transition-colors"
                >
                  {id}
                </a>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center snap-start pt-16 pb-8"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4 md:space-y-6"
          >
            <motion.div
              variants={item}
              className="flex items-center gap-2 text-[10px] md:text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 w-fit px-3 py-1.5 md:px-4 md:py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Status: {personalInfo.status}
            </motion.div>

            <motion.div variants={item} className="space-y-2 md:space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-zinc-500 max-w-4xl leading-tight">
                Building{" "}
                <span className="text-zinc-900 dark:text-white">
                  scalable AI pipelines
                </span>{" "}
                & systems.
              </h2>
            </motion.div>

            <motion.p
              variants={item}
              className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 md:gap-6 pt-2"
            >
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs md:text-sm font-semibold uppercase tracking-wider border-b-2 border-transparent pb-1 hover:border-zinc-900 dark:hover:border-white transition-colors flex items-center gap-2"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs md:text-sm font-semibold uppercase tracking-wider border-b-2 border-transparent pb-1 hover:border-zinc-900 dark:hover:white transition-colors flex items-center gap-2"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="/Arunjyoti_Resume.pdf"
                download
                className="text-xs md:text-sm font-semibold uppercase tracking-wider border-b-2 border-transparent pb-1 hover:border-zinc-900 dark:hover:border-white transition-colors flex items-center gap-2"
              >
                <Download size={14} /> Resume
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center snap-start py-16"
        >
          <div className="grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start w-full border-t border-zinc-200 dark:border-zinc-800 pt-8 md:pt-16">
            <div className="lg:sticky lg:top-32 space-y-2 md:space-y-4">
              <h2 className="text-[10px] md:text-sm font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Cpu size={14} /> Technical Skills
              </h2>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Technologies & Tools
              </h3>
              <p className="text-zinc-500 text-xs md:text-sm max-w-sm leading-relaxed">
                Bridging engineering fundamentals with cutting-edge AI to ship
                products that solve real problems.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {Object.entries(skills).map(([cat, list]) => (
                <SkillCard key={cat} category={cat} list={list as string[]} />
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <section
          id="experience"
          className="min-h-screen flex flex-col justify-center snap-start py-16"
        >
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start w-full border-t border-zinc-200 dark:border-zinc-800 pt-8 md:pt-16">
            <div className="lg:sticky lg:top-32 space-y-2 md:space-y-4">
              <h2 className="text-[10px] md:text-sm font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Layers size={14} /> Background
              </h2>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Experience & Education
              </h3>
            </div>
            <div className="space-y-12 md:space-y-16">
              <div className="space-y-6 md:space-y-8">
                <h4 className="flex items-center gap-2 text-base md:text-lg font-bold pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <Briefcase size={18} className="text-zinc-400" /> Work
                  Experience
                </h4>
                <div className="space-y-8">
                  {experience.map((job, idx) => (
                    <div
                      key={idx}
                      className="group relative pl-5 md:pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-2 md:space-y-3"
                    >
                      <div className="absolute w-2.5 h-2.5 bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-600 rounded-full -left-1.5 md:-left-1.75 top-1.5" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                        <h5 className="text-lg md:text-xl font-bold leading-tight">
                          {job.role}
                        </h5>
                        <span className="text-xs md:text-sm font-semibold text-zinc-500">
                          {job.duration}
                        </span>
                      </div>
                      <p className="text-sm md:text-base font-medium text-zinc-600 dark:text-zinc-400">
                        {job.company} — {job.location}
                      </p>
                      <ul className="space-y-2 pt-1 md:pt-2">
                        {job.bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-[13px] md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start gap-2"
                          >
                            <span className="mt-1.5 md:mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6 md:space-y-8">
                <h4 className="flex items-center gap-2 text-base md:text-lg font-bold pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <GraduationCap size={18} className="text-zinc-400" />{" "}
                  Education
                </h4>
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div
                      key={idx}
                      className="group relative pl-5 md:pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-1.5 md:space-y-2"
                    >
                      <div className="absolute w-2.5 h-2.5 bg-white dark:bg-black border-2 border-zinc-300 dark:border-zinc-600 rounded-full -left-1.5 md:-left-1.75 top-1.5" />
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                        <h5 className="text-base md:text-lg font-bold leading-tight">
                          {edu.degree}
                        </h5>
                        <span className="text-xs md:text-sm font-semibold text-zinc-500">
                          {edu.date}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
                        {edu.institution}
                      </p>
                      <p className="text-xs md:text-sm font-semibold text-zinc-500">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center snap-start py-16"
        >
          <div className="space-y-8 md:space-y-12 w-full border-t border-zinc-200 dark:border-zinc-800 pt-8 md:pt-16">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-[10px] md:text-sm font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Code2 size={14} /> Portfolio
              </h2>
              <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                Featured Projects
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {projects.map((project, i) => (
                <ProjectCard key={i} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="contact"
          className="snap-start py-8 mt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col-reverse md:flex-row justify-between items-center gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-xs md:text-sm font-medium text-zinc-500">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 md:px-5 md:py-2 rounded-full font-bold hover:scale-105 transition-transform text-xs md:text-sm shadow-sm flex items-center gap-2"
            >
              <Mail size={14} /> Email Me
            </a>
            <a
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2 md:px-5 md:py-2 rounded-full font-bold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all text-xs md:text-sm flex items-center gap-2"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
