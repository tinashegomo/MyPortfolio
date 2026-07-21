import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border-default bg-bg-subtle">
      <div className="container-grid py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-lg font-bold text-text-primary tracking-tight">
              Tinashe<span className="text-brand-primary">.</span>
            </Link>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
              Software engineer building modern web applications with React, Spring Boot, and Firebase.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-text-secondary hover:text-brand-primary transition-colors">Home</Link>
              <Link to="/projects" className="text-sm text-text-secondary hover:text-brand-primary transition-colors">Projects</Link>
              <Link to="/about" className="text-sm text-text-secondary hover:text-brand-primary transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-text-secondary hover:text-brand-primary transition-colors">Contact</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/tinashegomo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-elevated text-text-muted hover:text-brand-primary hover:bg-brand-subtle transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tinashe-gomo-15a899258"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-elevated text-text-muted hover:text-brand-primary hover:bg-brand-subtle transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:tinashegomo00@outlook.com"
                className="p-2.5 rounded-lg bg-surface-elevated text-text-muted hover:text-brand-primary hover:bg-brand-subtle transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Tinashe Gomo. All rights reserved.
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-brand-primary fill-brand-primary" /> using React & Firebase
          </p>
        </div>
      </div>
    </footer>
  );
}
