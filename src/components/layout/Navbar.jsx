import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { useAuth } from '../../contexts/AuthContext';

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  function handleNavClick(e, href) {
    if (isHome) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      navigate('/' + href);
    }
    setMobileOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-bg-default/80 backdrop-blur-xl border-b border-border-default/50">
      <nav className="container-grid flex items-center h-16 lg:h-18">
        <Link to="/" className="flex items-center gap-2 mr-auto">
          <span className="text-lg font-bold text-text-primary tracking-tight">
            Tinashe<span className="text-brand-primary">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : '/' + link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-5 py-2.5 rounded-full text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          {isAdmin && (
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `px-5 py-2.5 rounded-full text-base font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-subtle text-brand-primary'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
                }`
              }
            >
              Dashboard
            </NavLink>
          )}
        </div>

        <div className="flex items-center gap-3 ml-auto md:ml-4">
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/tinashegomo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tinashe-gomo-15a899258"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:tinashegomo00@outlook.com"
              className="p-2.5 rounded-full text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2.5 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border-default bg-bg-default overflow-hidden"
          >
            <div className="container-grid py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : '/' + link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-lg text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-elevated transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {isAdmin && (
                <NavLink
                  to="/admin/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-subtle text-brand-primary'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              )}
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border-default">
                <a href="https://github.com/tinashegomo" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/tinashe-gomo-15a899258" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="mailto:hello@example.com" className="p-2.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-elevated transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
