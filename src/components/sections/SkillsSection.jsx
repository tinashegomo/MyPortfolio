import { motion } from 'framer-motion';
import { Code2, Blocks, Server, Database, Cloud, Cpu } from 'lucide-react';

const ENGINEERING_CATEGORIES = [
  {
    icon: Code2,
    title: 'Core Languages',
    description:
      'Everything begins with these languages. They are the foundation I use to design systems and communicate instructions to machines.',
    tools: ['JavaScript', 'Java'],
    color: 'from-primary-500 to-primary-600',
    glow: 'rgba(230, 0, 0, 0.15)',
  },
  {
    icon: Blocks,
    title: 'Building User Experiences',
    description:
      'React is my preferred frontend library because it enables component-driven architecture, reusable interfaces, predictable state management, and scalable applications.',
    tools: ['React', 'Tailwind CSS', 'Figma', 'Vite'],
    color: 'from-info-500 to-info-600',
    glow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    icon: Server,
    title: 'Engineering Reliable Backends',
    description:
      'Spring Boot allows me to build secure, maintainable, and production-ready backend services without spending time reinventing infrastructure.',
    tools: ['Spring Boot', 'Spring Security', 'REST APIs', 'Maven'],
    color: 'from-success-500 to-success-600',
    glow: 'rgba(34, 197, 94, 0.15)',
  },
  {
    icon: Database,
    title: 'Data',
    description:
      'I prefer relational databases where consistency and structured relationships are important. For cloud-native applications, Firebase provides fast development and real-time capabilities.',
    tools: ['MySQL', 'Firebase Firestore'],
    color: 'from-warning-500 to-warning-600',
    glow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    icon: Cloud,
    title: 'Deployment Pipeline',
    description:
      'I like deployments that are simple, repeatable, and reliable. Docker keeps environments consistent, Render hosts backend services, Aiven provides managed MySQL, and Vercel delivers frontend applications globally.',
    tools: ['Docker', 'Render', 'Aiven MySQL', 'Vercel'],
    color: 'from-purple-500 to-purple-600',
    glow: 'rgba(168, 85, 247, 0.15)',
  },
  {
    icon: Cpu,
    title: 'Engineering Workflow',
    description:
      'Artificial intelligence is part of my engineering workflow, not a replacement for engineering. It helps me explore ideas, review architecture, debug efficiently, automate repetitive work, and focus more time on solving real problems.',
    tools: ['OpenCode', 'Claude', 'ChatGPT', 'IntelliJ IDEA', 'VS Code', 'Git', 'GitHub'],
    color: 'from-primary-400 to-primary-500',
    glow: 'rgba(230, 0, 0, 0.15)',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary-500 text-sm font-medium tracking-widest uppercase mb-3">
            Philosophy
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            How I Build
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto leading-relaxed">
            I choose tools with intention. Every decision in my stack serves a purpose —
            and these are the pillars of how I engineer software.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ENGINEERING_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: -2,
                  transition: { duration: 0.3 },
                }}
                style={{ perspective: '1000px' }}
                className="group relative flex flex-col p-7 bg-surface-default border border-border-default rounded-card transition-shadow duration-500 hover:shadow-[0_20px_60px_-12px_var(--glow)]"
                onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty('--glow', category.glow);
                }}
              >
                <div className={`absolute inset-0 rounded-card bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

                <div className="absolute -inset-px rounded-card bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative flex flex-col flex-1">
                  <div className={`inline-flex self-start p-3 rounded-xl bg-gradient-to-br ${category.color} mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}>
                    <Icon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-lg font-semibold text-text-primary mb-3 leading-snug transition-transform duration-300 group-hover:translate-x-0.5">
                    {category.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {category.description}
                  </p>

                  <motion.div
                    className="flex flex-wrap gap-2 mt-auto"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.tools.map((tool) => (
                      <motion.span
                        key={tool}
                        variants={chipVariants}
                        className="px-3 py-1.5 bg-surface-elevated border border-border-default rounded-pill text-xs font-medium text-text-secondary transition-all duration-200 group-hover:border-border-strong group-hover:text-text-primary group-hover:bg-surface-muted"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
