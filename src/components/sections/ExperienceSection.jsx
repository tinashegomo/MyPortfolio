import { motion } from 'framer-motion';

const MILESTONES = [
  {
    stage: { number: '01', label: 'OBSERVE' },
    year: '2023',
    role: 'Systems Developer Intern',
    company: 'Axcellus Enterprises',
    tradeName: 'Monisha',
    period: 'September 2023 – July 2024',
    sections: [
      {
        heading: 'What I Observed',
        text: 'Production relied heavily on paperwork, manual inventory records, and printed PDFs. I spent months recording and monitoring operational data across manufacturing and distribution processes.',
      },
      {
        heading: 'What I Learned',
        text: 'Small operational inefficiencies became much larger business problems. Information was delayed, duplicated, or completely lost across the workflow.',
      },
      {
        heading: 'Outcome',
        text: 'That experience became the foundation for the systems I would later design and build.',
      },
    ],
    focusAreas: [
      'Warehouse Operations',
      'Production Monitoring',
      'Inventory Records',
      'Order Management',
      'Process Analysis',
    ],
    color: 'info',
  },
  {
    stage: { number: '02', label: 'ENGINEER' },
    year: '2025',
    role: 'Junior Systems Developer',
    company: 'Axcellus Enterprises',
    tradeName: 'Monisha',
    period: 'July 2025 – March 2026',
    sections: [
      {
        heading: 'What I Observed',
        text: 'Critical processes depended on paperwork, disconnected spreadsheets, and manual communication. Customers often travelled over 100 kilometers only to discover products were unavailable.',
      },
      {
        heading: 'What I Engineered',
        text: 'A centralized inventory management system that brought warehouse management, production tracking, customer orders, reporting, and stock visibility into a single platform.',
      },
      {
        heading: 'What I Connected',
        text: 'An e-commerce platform that integrated directly with the internal inventory system. Products published internally became immediately available online, and customers could track their orders without repeatedly contacting the company.',
      },
    ],
    focusAreas: [
      'Inventory Management',
      'Production Workflow',
      'Warehouse Management',
      'E-commerce Integration',
      'Customer Order Tracking',
      'Business Process Automation',
    ],
    color: 'primary',
  },
];

// Static class maps. Every value here is a complete, literal string so
// Tailwind's compiler can find it — never build these via template
// interpolation (e.g. `group-hover:${x}`), or the rule silently disappears.
const COLOR_STYLES = {
  info: {
    dot: 'bg-info-500',
    bar: 'bg-gradient-to-b from-info-400 to-info-600',
    eyebrow: 'text-info-400',
    yearNumber: 'text-info-500',
  },
  primary: {
    dot: 'bg-primary-500',
    bar: 'bg-gradient-to-b from-primary-400 to-primary-600',
    eyebrow: 'text-primary-500',
    yearNumber: 'text-primary-500',
  },
};

const COLOR_KEYS = Object.keys(COLOR_STYLES);

function MilestoneCard({ milestone, index }) {
  // Falls back to alternating colors by position if a milestone doesn't
  // specify one — so adding new entries doesn't require hand-picking a color.
  const colorKey = milestone.color || COLOR_KEYS[index % COLOR_KEYS.length];
  const styles = COLOR_STYLES[colorKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="hidden sm:flex justify-center mb-4">
        <div className={`w-3 h-3 rounded-full ${styles.dot} ring-4 ring-bg-default`} />
      </div>

      {/* Card */}
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="relative h-full"
      >
        <div className="relative h-full bg-surface-default border border-border-default rounded-card overflow-hidden">
          {/* Colored left bar */}
          <div className={`absolute left-0 top-0 bottom-0 w-1 ${styles.bar}`} />

          <div className="relative p-8 lg:p-10 pl-9 lg:pl-11">
            {/* Stage */}
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-[10px] font-bold tracking-[0.2em] ${styles.eyebrow}`}>
                Stage {milestone.stage.number}
              </span>
              <span className="w-8 h-px bg-border-strong" />
              <span className={`text-[10px] font-bold tracking-[0.2em] ${styles.eyebrow}`}>
                {milestone.stage.label}
              </span>
            </div>

            {/* Year */}
            <div className={`text-3xl lg:text-4xl font-black mb-3 ${styles.yearNumber}`}>
              {milestone.year}
            </div>

            {/* Role */}
            <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-1.5 leading-snug">
              {milestone.role}
            </h3>

            {/* Company */}
            <p className="text-sm font-medium text-text-secondary mb-1">
              {milestone.company}
              {milestone.tradeName && (
                <span className="text-text-muted ml-1.5">({milestone.tradeName})</span>
              )}
            </p>

            {/* Period */}
            <p className="text-xs text-text-muted mb-8">{milestone.period}</p>

            {/* Content sections */}
            <div className="mb-8">
              {milestone.sections.map((section, i) => (
                <div key={i}>
                  <p className={`text-[10px] font-bold tracking-[0.15em] uppercase mb-2 ${styles.eyebrow}`}>
                    {section.heading}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">{section.text}</p>
                  {i < milestone.sections.length - 1 && (
                    <div className="my-4 w-12 h-px bg-border-default" />
                  )}
                </div>
              ))}
            </div>

            {/* Focus Areas */}
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-text-muted mb-4">
                Areas of Engineering
              </p>
              <div>
                {milestone.focusAreas.map((area, i) => (
                  <div
                    key={area}
                    className={`flex items-center gap-3 py-2.5 ${
                      i < milestone.focusAreas.length - 1 ? 'border-b border-border-default' : ''
                    }`}
                  >
                    <div className={`w-1 h-1 rounded-full ${styles.dot}`} />
                    <span className="text-sm text-text-secondary">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 lg:py-32">
      <div className="container-grid">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary-500 text-sm font-medium tracking-widest uppercase mb-3">
            Journey
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Engineering Journey
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto leading-relaxed">
            From observing real operational problems to engineering systems that solve them.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {MILESTONES.map((milestone, index) => (
              <MilestoneCard key={milestone.year} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}