import { motion } from 'framer-motion';

const STATS = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '20+' },
  { label: 'Years Coding', value: '3+' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-bg-subtle">
      <div className="container-grid max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-primary-500 text-sm font-medium tracking-widest uppercase mb-3 text-center">
            About
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 text-center">
            About Me
          </h2>

          <div className="max-w-none mb-12 space-y-5">
            <p className="text-text-secondary text-[15px] leading-[1.8]">
              I&apos;m Tinashe Gomo, a software engineer from Zimbabwe. I enjoy understanding how
              businesses work, identifying where their everyday processes become slow or inefficient,
              and building software that makes those processes simpler.
            </p>
            <p className="text-text-secondary text-[15px] leading-[1.8]">
              Most of the solutions I build are web applications. Not because I only enjoy building
              websites, but because the web is one of the best ways to make a system available
              wherever it&apos;s needed. Whether it&apos;s managing inventory, processing customer orders, or
              keeping information synchronized across different parts of a business, I like building
              systems that people can rely on every day.
            </p>
            <p className="text-text-secondary text-[15px] leading-[1.8]">
              Before I write any code, I spend time understanding the problem. I believe good software
              starts with asking the right questions, not choosing the right framework. Once I
              understand how people work and where the challenges are, the technologies become tools
              that help turn the solution into reality.
            </p>
            <p className="text-text-secondary text-[15px] leading-[1.8]">
              Every project teaches me something new. That&apos;s what keeps me building, improving,
              and looking for better ways to solve the next problem.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-surface-default border border-border-default rounded-card">
                <p className="text-3xl lg:text-4xl font-bold text-brand-primary mb-1">{stat.value}</p>
                <p className="text-xs font-medium text-text-muted uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
