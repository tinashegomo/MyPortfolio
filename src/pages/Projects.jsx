import { motion } from 'framer-motion';
import { useProjects } from '../hooks/useProjects';
import ProjectCard from '../components/projects/ProjectCard';
import { SkeletonCard } from '../components/ui/Skeleton';

export default function Projects() {
  const { data: projects, loading, error } = useProjects('Published');

  return (
    <section className="py-16 lg:py-24">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
            Projects
          </h1>
          <p className="text-text-secondary max-w-lg">
            A collection of projects I&apos;ve built. Each one taught me something new about development and design.
          </p>
        </motion.div>

        {error && (
          <div className="p-4 bg-danger-main/10 border border-danger-main/20 rounded-card text-sm text-danger-main">
            Failed to load projects: {error}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {!loading && projects.length === 0 && !error && (
          <div className="text-center py-20">
            <p className="text-text-muted text-lg">No projects yet. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
