import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary-500 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
        >
          {/* Left: Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <motion.div variants={item}>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                Let&apos;s work together
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
              <a
                href="mailto:tinashegomo00@outlook.com"
                className="group inline-flex items-center gap-2.5 h-13 px-6 bg-brand-primary text-white text-sm font-semibold rounded-xl hover:bg-brand-hover transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30"
              >
                <Mail className="w-5 h-5" />
                tinashegomo00@outlook.com
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 p-5 bg-surface-default border border-border-default rounded-card">
              <div className="p-3 bg-surface-elevated rounded-xl">
                <MapPin className="w-5 h-5 text-text-muted" />
              </div>
              <div>
                <p className="text-xs text-text-muted mb-0.5">Based in</p>
                <p className="text-sm font-semibold text-text-primary">Zimbabwe</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex gap-3">
              <a
                href="https://github.com/tinashegomo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2.5 h-13 bg-surface-default border border-border-default rounded-card text-text-muted hover:text-text-primary hover:border-border-strong transition-all duration-200"
              >
                <GithubIcon className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tinashe-gomo-15a899258"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2.5 h-13 bg-surface-default border border-border-default rounded-card text-text-muted hover:text-info-main hover:border-info-main/30 transition-all duration-200"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div variants={item} className="lg:col-span-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                window.open(
                  `mailto:tinashegomo00@outlook.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name} (${email})`,
                  '_blank'
                );
              }}
              className="p-6 lg:p-8 bg-surface-default border border-border-default rounded-card"
            >
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-secondary">Name</label>
                    <input
                      name="name"
                      required
                      className="w-full h-13 px-4 bg-surface-elevated border border-border-default rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-text-secondary">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full h-13 px-4 bg-surface-elevated border border-border-default rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-text-secondary">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 bg-surface-elevated border border-border-default rounded-xl text-sm text-text-primary placeholder:text-text-muted resize-y min-h-[130px] focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2.5 w-full h-13 px-6 bg-brand-primary text-white font-semibold text-sm rounded-xl hover:bg-brand-primary transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
