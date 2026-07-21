import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import Badge from '../ui/Badge';

export default function ProjectCard({ project }) {
  const { title, slug, overview, engineeringStack = [], gallery = [], liveUrl, githubUrls, githubUrl, projectUrl } = project;
  const [imgError, setImgError] = useState(false);

  const repos = Array.isArray(githubUrls) ? githubUrls : (githubUrl ? [githubUrl] : []);
  const hasImage = gallery[0] && !imgError;

  return (
    <Link to={`/project/${slug}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="group relative bg-surface-default border border-border-default rounded-card overflow-hidden hover-lift"
      >
        {/* Image */}
        <div className="relative h-56 bg-surface-elevated overflow-hidden">
          {hasImage ? (
            <img
              src={gallery[0]}
              alt={title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-subtle/30 to-surface-elevated">
              <span className="text-5xl font-bold text-border-strong/20">{title?.[0]}</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3">
          <h3 className="text-base font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
            {title}
          </h3>

          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
            {overview}
          </p>

          {/* Tech badges */}
          {engineeringStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {engineeringStack.slice(0, 4).map((tech) => (
                <Badge key={tech} color="primary">{tech}</Badge>
              ))}
              {engineeringStack.length > 4 && (
                <Badge color="default">+{engineeringStack.length - 4}</Badge>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-1 pt-3 border-t border-border-default">
            {liveUrl && (
              <span
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(liveUrl, '_blank'); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-brand-primary text-white hover:bg-brand-hover transition-colors cursor-pointer"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </span>
            )}
            {repos.map((url, i) => (
              <span
                key={i}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(url, '_blank'); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-surface-elevated border border-border-default text-text-primary hover:border-brand-primary hover:text-brand-primary transition-colors cursor-pointer"
              >
                <GithubIcon className="w-5 h-5" />
                {repos.length > 1 ? `Code ${i + 1}` : 'Code'}
              </span>
            ))}
            {projectUrl && !liveUrl && (
              <span
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(projectUrl, '_blank'); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-surface-elevated border border-border-default text-text-primary hover:border-brand-primary hover:text-brand-primary transition-colors cursor-pointer"
              >
                <Eye className="w-5 h-5" />
                View Project
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
