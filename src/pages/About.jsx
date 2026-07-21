import { motion } from 'framer-motion';
import { Code2, Blocks, Server, Database, Cloud, Cpu, GraduationCap, Heart } from 'lucide-react';

const ENGINEERING_CATEGORIES = [
  {
    icon: Code2,
    title: 'Core Languages',
    description: 'The foundation I use to design systems and communicate instructions to machines.',
    tools: ['JavaScript', 'Java'],
  },
  {
    icon: Blocks,
    title: 'Building User Experiences',
    description: 'Component-driven architecture with React for reusable, scalable interfaces.',
    tools: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    icon: Server,
    title: 'Engineering Reliable Backends',
    description: 'Secure, maintainable, and production-ready backend services with Spring Boot.',
    tools: ['Spring Boot', 'Spring Security', 'REST APIs', 'Maven'],
  },
  {
    icon: Database,
    title: 'Data',
    description: 'Relational databases for consistency, Firebase for real-time cloud-native apps.',
    tools: ['MySQL', 'Firebase Firestore'],
  },
  {
    icon: Cloud,
    title: 'Deployment Pipeline',
    description: 'Simple, repeatable, and reliable deployments from code to production.',
    tools: ['Docker', 'Render', 'Aiven MySQL', 'Vercel'],
  },
  {
    icon: Cpu,
    title: 'Engineering Workflow',
    description: 'AI as a partner in engineering — exploring ideas, debugging, and automating.',
    tools: ['OpenCode', 'Claude', 'ChatGPT', 'IntelliJ IDEA', 'VS Code', 'Git', 'GitHub'],
  },
];

const STATS = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Years Coding', value: '3+' },
];

export default function About() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-grid max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">About Me</h1>

          {/* Bio */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-text-secondary leading-relaxed text-base">
              I&apos;m Tinashe Gomo, a software engineer from Zimbabwe with a passion for building
              modern web applications. I specialize in crafting beautiful, responsive frontends with
              React and building robust backends with Spring Boot and Firebase.
            </p>
            <p className="text-text-secondary leading-relaxed text-base mt-4">
              My journey in software development started with a curiosity for how things work on the
              web. Today, I build end-to-end solutions that solve real problems — from inventory
              management systems to e-commerce platforms. I believe in clean code, thoughtful design,
              and continuous learning.
            </p>
            <p className="text-text-secondary leading-relaxed text-base mt-4">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
              open-source projects, or diving into a good book about software architecture.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-surface-default border border-border-default rounded-card">
                <p className="text-2xl lg:text-3xl font-bold text-brand-primary">{stat.value}</p>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Engineering Stack */}
          <h2 className="text-2xl font-bold text-text-primary mb-2">How I Build</h2>
          <p className="text-text-secondary text-sm mb-8 leading-relaxed">
            I choose tools with intention. Every decision in my stack serves a purpose.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {ENGINEERING_CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="group p-5 bg-surface-default border border-border-default rounded-card transition-all duration-300 hover:border-border-strong">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-surface-elevated border border-border-default group-hover:border-border-strong transition-colors">
                      <Icon className="w-4 h-4 text-brand-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-text-primary">{category.title}</h3>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.tools.map((tool) => (
                      <span key={tool} className="px-2.5 py-1 bg-surface-elevated border border-border-default rounded-pill text-[11px] font-medium text-text-muted group-hover:text-text-secondary group-hover:border-border-strong transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Education */}
          <div className="p-6 bg-surface-default border border-border-default rounded-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 bg-brand-subtle rounded-lg">
                <GraduationCap className="w-5 h-5 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary">Computer Science Student</h3>
                <p className="text-sm text-text-muted">Currently pursuing my studies</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mt-2">
              Continuously learning and expanding my skills in software engineering, algorithms, and system design.
            </p>
          </div>

          {/* Fun Fact */}
          <div className="mt-8 p-6 bg-brand-tint border border-brand-subtle rounded-card">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-brand-primary fill-brand-primary" />
              <h3 className="text-sm font-semibold text-brand-primary">Fun Fact</h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              I built my first web application when I was 16 and haven&apos;t stopped coding since.
              Every project is an opportunity to learn something new.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
