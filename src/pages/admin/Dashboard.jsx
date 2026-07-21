import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Pencil, Trash2, LogOut, ExternalLink, FolderOpen } from 'lucide-react';
import { useAllProjects, useDeleteProject } from '../../hooks/useProjects';
import { useAuth } from '../../contexts/AuthContext';
import { SkeletonCard } from '../../components/ui/Skeleton';
import { formatDate } from '../../utils/helpers';

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { data: projects, loading, refetch } = useAllProjects();
  const { mutate: deleteProject } = useDeleteProject();
  const [deletingId, setDeletingId] = useState(null);

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this project?')) return;
    setDeletingId(id);
    try {
      await deleteProject(id);
      refetch();
    } catch {
      alert('Failed to delete project');
    } finally {
      setDeletingId(null);
    }
  }

  async function handleLogout() {
    await logout();
    navigate('/admin/login', { replace: true });
  }

  return (
    <section className="py-8 lg:py-12">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Dashboard</h1>
              <p className="text-sm text-text-muted mt-1">{projects.length} projects total</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/"
                className="group inline-flex items-center justify-center gap-2 h-11 px-5 bg-surface-default border border-border-default rounded-xl text-sm font-medium text-text-secondary hover:text-text-primary hover:border-border-strong transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                View Site
              </a>
              <button
                type="button"
                onClick={handleLogout}
                className="group inline-flex items-center justify-center gap-2 h-11 px-5 bg-surface-default border border-border-default rounded-xl text-sm font-medium text-text-secondary hover:text-danger-main hover:border-danger-main/30 transition-all duration-200"
              >
                <LogOut className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                Logout
              </button>
              <Link
                to="/admin/new-project"
                className="group inline-flex items-center justify-center gap-2 h-11 px-5 bg-brand-primary text-white rounded-xl text-sm font-semibold hover:bg-brand-hover transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30"
              >
                <Plus className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                New Project
              </Link>
            </div>
          </div>

          {/* Projects */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 bg-surface-default border border-border-default rounded-card">
              <div className="p-4 bg-surface-elevated rounded-2xl mb-5">
                <FolderOpen className="w-8 h-8 text-text-muted" />
              </div>
              <p className="text-text-primary font-semibold text-lg mb-2">No projects yet</p>
              <p className="text-text-muted text-sm mb-6">Create your first project to get started</p>
              <Link
                to="/admin/new-project"
                className="group inline-flex items-center justify-center gap-2.5 h-13 px-10 bg-brand-primary text-white rounded-xl text-sm font-semibold hover:bg-brand-hover transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-xl"
              >
                <Plus className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                Create Your First Project
              </Link>
            </div>
          ) : (
            <div className="bg-surface-default border border-border-default rounded-card overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border-default">
                      <th className="text-left px-5 py-3.5 text-xs font-semibold text-text-muted uppercase tracking-wider">Title</th>
                      <th className="text-left px-5 py-3.5 text-xs font-semibold text-text-muted uppercase tracking-wider">Created</th>
                      <th className="text-right px-5 py-3.5 text-xs font-semibold text-text-muted uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-default">
                    {projects.map((project) => (
                      <tr key={project.id} className="hover:bg-surface-elevated/50 transition-colors">
                        <td className="px-5 py-4">
                          <Link to={`/project/${project.slug}`} className="text-sm font-medium text-text-primary hover:text-brand-primary transition-colors">
                            {project.title}
                          </Link>
                        </td>
                        <td className="px-5 py-4 text-sm text-text-muted">{formatDate(project.createdAt)}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/admin/edit/${project.id}`}
                              className="p-3 rounded-lg text-text-muted hover:text-brand-primary hover:bg-brand-subtle transition-colors"
                            >
                              <Pencil className="w-5 h-5" />
                            </Link>
                            <button
                              type="button"
                              onClick={() => handleDelete(project.id)}
                              disabled={deletingId === project.id}
                              className="p-3 rounded-lg text-text-muted hover:text-danger-main hover:bg-danger-main/10 transition-colors disabled:opacity-50"
                            >
                              {deletingId === project.id ? (
                                <div className="w-5 h-5 border-2 border-danger-main border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <Trash2 className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-border-default">
                {projects.map((project) => (
                  <div key={project.id} className="p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <Link to={`/project/${project.slug}`} className="text-sm font-medium text-text-primary hover:text-brand-primary transition-colors">
                        {project.title}
                      </Link>
                      <div className="flex items-center gap-1 shrink-0">
                        <Link
                          to={`/admin/edit/${project.id}`}
                          className="p-3 rounded-lg text-text-muted hover:text-brand-primary hover:bg-brand-subtle transition-colors"
                        >
                          <Pencil className="w-5 h-5" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDelete(project.id)}
                          disabled={deletingId === project.id}
                          className="p-3 rounded-lg text-text-muted hover:text-danger-main hover:bg-danger-main/10 transition-colors disabled:opacity-50"
                        >
                          {deletingId === project.id ? (
                            <div className="w-5 h-5 border-2 border-danger-main border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Trash2 className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <span className="text-xs text-text-muted">{formatDate(project.createdAt)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
