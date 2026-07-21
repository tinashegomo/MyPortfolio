import { motion } from 'framer-motion';
import { useProjects } from '../../hooks/useProjects';
import ProjectCard from './ProjectCard';
import { SkeletonCard } from '../ui/Skeleton';

export default function FeaturedProjects() {
  const { data: projects, loading } = useProjects();

  if (loading) {
    return (
      <section id="projects" className="py-20 lg:py-28 bg-bg-subtle">
        <div className="container-grid">
          <div className="text-center mb-12">
            <div className="skeleton h-8 w-64 mx-auto rounded-chip mb-3" />
            <div className="skeleton h-5 w-48 mx-auto rounded-chip" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projects" className="py-20 lg:py-28 bg-bg-subtle">
        <div className="container-grid">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
              Projects
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              No projects yet. Check back soon — I&apos;m always building something new.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 lg:py-28 bg-bg-subtle">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-3">
            Projects
          </h2>
          <p className="text-text-secondary max-w-md">
            Some of the projects I&apos;m most proud of.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
