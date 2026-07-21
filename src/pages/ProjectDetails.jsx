import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Target, Cpu, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { GithubIcon } from '../components/ui/SocialIcons';
import { useProjectBySlug } from '../hooks/useProjects';
import TechBadge from '../components/projects/TechBadge';
import { SkeletonText } from '../components/ui/Skeleton';
import { formatDate } from '../utils/helpers';

export default function ProjectDetails() {
  const { slug } = useParams();
  const { data: project, loading, error } = useProjectBySlug(slug);

  if (loading) {
    return (
      <section className="py-16 lg:py-24">
        <div className="container-grid max-w-4xl">
          <div className="skeleton h-8 w-32 rounded-chip mb-8" />
          <div className="skeleton h-10 w-3/4 rounded-chip mb-4" />
          <div className="skeleton h-64 w-full rounded-card mb-8" />
          <SkeletonText lines={5} />
        </div>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="py-16 lg:py-24">
        <div className="container-grid text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-4">Project Not Found</h1>
          <p className="text-text-secondary mb-6">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-hover font-medium text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const {
    title,
    overview,
    problem,
    solution,
    engineeringDecisions,
    systemArchitecture,
    keyFeatures,
    engineeringChallenges,
    impact,
    engineeringStack,
    gallery,
    projectUrl,
    githubUrls,
    githubUrl,
    liveUrl,
    createdAt,
  } = project;

  return (
    <section className="py-16 lg:py-24">
      <div className="container-grid max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">{title}</h1>
          <p className="text-sm text-text-muted mb-8">{formatDate(createdAt)}</p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mb-10">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 bg-brand-primary text-white font-semibold text-sm rounded-xl hover:bg-brand-hover transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 bg-surface-elevated text-text-primary font-semibold text-sm rounded-xl border border-border-default hover:border-border-strong transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            )}
            {(Array.isArray(githubUrls) ? githubUrls : (githubUrl ? [githubUrl] : [])).map((url, i) => {
              const total = Array.isArray(githubUrls) ? githubUrls.length : (githubUrl ? 1 : 0);
              return (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-11 px-6 bg-surface-elevated text-text-primary font-semibold text-sm rounded-xl border border-border-default hover:border-border-strong transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
                {total > 1 ? `Code ${i + 1}` : 'View Code'}
              </a>
              );
            })}
          </div>

          {/* Overview */}
          {overview && (
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-text-primary mb-3">Overview</h2>
              <p className="text-text-secondary leading-relaxed whitespace-pre-line">{overview}</p>
            </div>
          )}

          {/* Problem */}
          {problem && (
            <div className="mb-10 p-6 bg-surface-default border border-border-default rounded-card">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-brand-primary" />
                <h2 className="text-lg font-semibold text-text-primary">Problem</h2>
              </div>
              <p className="text-text-secondary leading-relaxed">{problem}</p>
            </div>
          )}

          {/* Solution */}
          {solution && (
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-success-main" />
                <h2 className="text-lg font-semibold text-text-primary">Solution</h2>
              </div>
              <p className="text-text-secondary leading-relaxed whitespace-pre-line">{solution}</p>
            </div>
          )}

          {/* Engineering Decisions */}
          {engineeringDecisions && (
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-info-main" />
                <h2 className="text-lg font-semibold text-text-primary">Engineering Decisions</h2>
              </div>
              <p className="text-text-secondary leading-relaxed whitespace-pre-line">{engineeringDecisions}</p>
            </div>
          )}

          {/* System Architecture */}
          {systemArchitecture && (
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-info-main" />
                <h2 className="text-lg font-semibold text-text-primary">System Architecture</h2>
              </div>
              <p className="text-text-secondary leading-relaxed whitespace-pre-line">{systemArchitecture}</p>
            </div>
          )}

          {/* Key Features */}
          {keyFeatures && (
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-success-main" />
                <h2 className="text-lg font-semibold text-text-primary">Key Features</h2>
              </div>
              <p className="text-text-secondary leading-relaxed whitespace-pre-line">{keyFeatures}</p>
            </div>
          )}

          {/* Engineering Challenges */}
          {engineeringChallenges && (
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-warning-main" />
                <h2 className="text-lg font-semibold text-text-primary">Engineering Challenges</h2>
              </div>
              <p className="text-text-secondary leading-relaxed whitespace-pre-line">{engineeringChallenges}</p>
            </div>
          )}

          {/* Impact */}
          {impact && (
            <div className="mb-10 p-6 bg-brand-tint border border-brand-subtle rounded-card">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-brand-primary" />
                <h2 className="text-lg font-semibold text-brand-primary">Impact</h2>
              </div>
              <p className="text-text-secondary leading-relaxed">{impact}</p>
            </div>
          )}

          {/* Engineering Stack */}
          {engineeringStack?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-text-primary mb-3">Engineering Stack</h2>
              <TechBadge technologies={engineeringStack} />
            </div>
          )}

          {/* Gallery */}
          {gallery?.length > 0 && (
            <div className="mb-10">
              <h2 className="text-lg font-semibold text-text-primary mb-4">Gallery</h2>
              <div className="flex flex-col gap-4">
                {gallery.map((img, i) => (
                  <GalleryImage key={i} src={img} alt={`${title} screenshot ${i + 1}`} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function GalleryImage({ src, alt }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) return null;

  return (
    <div className="rounded-card overflow-hidden border border-border-default bg-surface-elevated">
      <img
        src={src}
        alt={alt}
        onError={() => setImgError(true)}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
