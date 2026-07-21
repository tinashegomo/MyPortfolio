import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/SocialIcons';

export default function Contact() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-grid max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">Contact</h1>
          <p className="text-text-secondary max-w-lg mb-12">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="p-5 bg-surface-default border border-border-default rounded-card">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-subtle rounded-lg">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Email</p>
                    <p className="text-sm font-medium text-text-primary">tinashegomo00@outlook.com</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-surface-default border border-border-default rounded-card">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-brand-subtle rounded-lg">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Location</p>
                    <p className="text-sm font-medium text-text-primary">Zimbabwe</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/tinashegomo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-surface-default border border-border-default rounded-card text-text-muted hover:text-brand-primary hover:border-brand-primary transition-colors"
                >
                  <GithubIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tinashe-gomo-15a899258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 bg-surface-default border border-border-default rounded-card text-text-muted hover:text-brand-primary hover:border-brand-primary transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  window.open(
                    `mailto:tinashegomo00@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${name} (${email})`,
                    '_blank'
                  );
                }}
                className="p-6 bg-surface-default border border-border-default rounded-card space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-text-secondary">Name</label>
                    <input
                      name="name"
                      required
                      className="w-full h-11 px-4 bg-surface-elevated border border-border-default rounded-input text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-text-secondary">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full h-11 px-4 bg-surface-elevated border border-border-default rounded-input text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">Subject</label>
                  <input
                    name="subject"
                    required
                    className="w-full h-11 px-4 bg-surface-elevated border border-border-default rounded-input text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-text-secondary">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface-elevated border border-border-default rounded-input text-sm text-text-primary placeholder:text-text-muted resize-y min-h-[120px] focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full h-13 px-6 bg-brand-primary text-white font-semibold text-sm rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
