import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 } },
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background orbs */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 left-[15%] w-[500px] h-[500px] bg-brand-primary/[0.04] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -25, 20, 0], y: [0, 25, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-info-500/[0.03] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 15, -10, 0], y: [0, -10, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 right-[30%] w-[300px] h-[300px] bg-primary-400/[0.02] rounded-full blur-[80px] pointer-events-none"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-grid py-20 lg:py-32 relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-5 py-2 bg-surface-default border border-border-default rounded-full text-sm font-medium text-text-secondary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-main opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success-main" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item} className="mb-6">
            <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary tracking-tight leading-[1.05]">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-brand-primary via-primary-400 to-brand-primary bg-clip-text text-transparent">
                Tinashe
              </span>
            </span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-muted tracking-tight leading-[1.1] mt-3">
              Software Engineer
            </span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            variants={lineReveal}
            className="w-20 h-1 bg-gradient-to-r from-brand-primary to-primary-400 rounded-full mb-8 origin-left"
          />

          {/* Description */}
          <motion.p variants={item} className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl">
            I see software as an engineering discipline. Programming languages, frameworks, and development tools are simply the means of bringing ideas to life. My focus is on 
            understanding real problems, designing practical solutions, and building systems that improve efficiency, simplify work, and deliver lasting value.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-5">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center justify-center gap-3 h-14 px-10 bg-brand-primary text-white font-semibold text-base rounded-2xl hover:bg-brand-hover transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              View Projects
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 h-14 px-10 text-text-primary font-semibold text-base rounded-2xl border-2 border-border-default hover:border-brand-primary hover:bg-brand-subtle/50 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 text-brand-primary transition-transform duration-300 group-hover:rotate-12" />
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 text-text-secondary font-medium text-base rounded-2xl hover:text-text-primary hover:bg-surface-elevated transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
