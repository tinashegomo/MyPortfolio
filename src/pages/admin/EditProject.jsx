import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, FolderEdit } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectSchema } from '../../utils/schemas';
import { generateSlug } from '../../utils/helpers';
import { useProjectById, useUpdateProject } from '../../hooks/useProjects';
import { SkeletonText } from '../../components/ui/Skeleton';

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: project, loading: fetching } = useProjectById(id);
  const { mutate: updateProject, loading: updating } = useUpdateProject();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  useEffect(() => {
    if (project) {
      reset({
        title: project.title || '',
        slug: project.slug || '',
        overview: project.overview || '',
        problem: project.problem || '',
        solution: project.solution || '',
        engineeringDecisions: project.engineeringDecisions || '',
        systemArchitecture: project.systemArchitecture || '',
        keyFeatures: project.keyFeatures || '',
        engineeringChallenges: project.engineeringChallenges || '',
        impact: project.impact || '',
        engineeringStack: Array.isArray(project.engineeringStack) ? project.engineeringStack.join(', ') : '',
        gallery: Array.isArray(project.gallery) ? project.gallery.join(', ') : '',
        projectUrl: project.projectUrl || '',
        githubUrls: Array.isArray(project.githubUrls) ? project.githubUrls.join(', ') : (project.githubUrl || ''),
        liveUrl: project.liveUrl || '',
      });
    }
  }, [project, reset]);

  const titleValue = watch('title');

  function handleTitleChange(e) {
    const title = e.target.value;
    setValue('title', title);
    setValue('slug', generateSlug(title));
  }

  async function onSubmit(data) {
    setServerError('');
    try {
      const projectData = {
        ...data,
        engineeringStack: data.engineeringStack.split(',').map((t) => t.trim()).filter(Boolean),
        gallery: data.gallery ? data.gallery.split(',').map((u) => u.trim()).filter(Boolean) : [],
        githubUrls: data.githubUrls ? data.githubUrls.split(',').map((u) => u.trim()).filter(Boolean) : [],
      };
      await updateProject(id, projectData);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setServerError(err.message || 'Failed to update project');
    }
  }

  if (fetching) {
    return (
      <section className="py-8 lg:py-12">
        <div className="container-grid max-w-3xl">
          <div className="skeleton h-6 w-32 rounded-chip mb-6" />
          <div className="skeleton h-8 w-48 rounded-chip mb-6" />
          <div className="p-6 lg:p-8 bg-surface-default border border-border-default rounded-card space-y-4">
            <SkeletonText lines={8} />
          </div>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="py-8 lg:py-12">
        <div className="container-grid text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Project Not Found</h1>
          <Link to="/admin/dashboard" className="text-brand-primary hover:text-brand-hover text-sm font-medium">
            Back to Dashboard
          </Link>
        </div>
      </section>
    );
  }

  const inputClass = "w-full h-13 px-4 bg-surface-elevated border border-border-default rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200";
  const labelClass = "text-sm font-medium text-text-secondary";
  const errorClass = "text-xs text-danger-main mt-1.5";

  return (
    <section className="py-8 lg:py-12">
      <div className="container-grid max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-brand-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-brand-subtle rounded-xl">
              <FolderEdit className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Edit Project</h1>
              <p className="text-sm text-text-muted">Update your project details</p>
            </div>
          </div>

          <div className="p-6 lg:p-8 bg-surface-default border border-border-default rounded-card">
            {serverError && (
              <div className="p-3 mb-5 bg-danger-main/10 border border-danger-main/20 rounded-xl text-sm text-danger-main">
                {serverError}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Basic Info */}
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Basic Info</p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Title</label>
                    <input
                      value={titleValue}
                      onChange={handleTitleChange}
                      className={inputClass}
                    />
                    {errors.title && <p className={errorClass}>{errors.title.message}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Slug</label>
                    <input
                      {...register('slug')}
                      className={inputClass}
                    />
                    {errors.slug && <p className={errorClass}>{errors.slug.message}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Overview</label>
                    <textarea
                      {...register('overview')}
                      rows={3}
                      className={`${inputClass} py-3.5 resize-y min-h-[80px]`}
                    />
                    {errors.overview && <p className={errorClass}>{errors.overview.message}</p>}
                  </div>
                </div>
              </div>

              {/* Problem & Solution */}
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Problem & Solution</p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Problem</label>
                    <textarea
                      {...register('problem')}
                      rows={3}
                      className={`${inputClass} py-3.5 resize-y min-h-[80px]`}
                    />
                    {errors.problem && <p className={errorClass}>{errors.problem.message}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Solution</label>
                    <textarea
                      {...register('solution')}
                      rows={3}
                      className={`${inputClass} py-3.5 resize-y min-h-[80px]`}
                    />
                    {errors.solution && <p className={errorClass}>{errors.solution.message}</p>}
                  </div>
                </div>
              </div>

              {/* Engineering */}
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Engineering</p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Engineering Decisions</label>
                    <textarea
                      {...register('engineeringDecisions')}
                      rows={3}
                      className={`${inputClass} py-3.5 resize-y min-h-[80px]`}
                    />
                    {errors.engineeringDecisions && <p className={errorClass}>{errors.engineeringDecisions.message}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>System Architecture</label>
                    <textarea
                      {...register('systemArchitecture')}
                      rows={3}
                      className={`${inputClass} py-3.5 resize-y min-h-[80px]`}
                    />
                    {errors.systemArchitecture && <p className={errorClass}>{errors.systemArchitecture.message}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Key Features</label>
                    <textarea
                      {...register('keyFeatures')}
                      rows={3}
                      className={`${inputClass} py-3.5 resize-y min-h-[80px]`}
                    />
                    {errors.keyFeatures && <p className={errorClass}>{errors.keyFeatures.message}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Engineering Challenges</label>
                    <textarea
                      {...register('engineeringChallenges')}
                      rows={3}
                      className={`${inputClass} py-3.5 resize-y min-h-[80px]`}
                    />
                    {errors.engineeringChallenges && <p className={errorClass}>{errors.engineeringChallenges.message}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Impact</label>
                    <textarea
                      {...register('impact')}
                      rows={3}
                      className={`${inputClass} py-3.5 resize-y min-h-[80px]`}
                    />
                    {errors.impact && <p className={errorClass}>{errors.impact.message}</p>}
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Tech Stack</p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Engineering Stack (comma-separated)</label>
                    <input
                      {...register('engineeringStack')}
                      className={inputClass}
                    />
                    {errors.engineeringStack && <p className={errorClass}>{errors.engineeringStack.message}</p>}
                  </div>
                </div>
              </div>

              {/* Gallery & Links */}
              <div>
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">Gallery & Links</p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Gallery Image URLs (comma-separated)</label>
                    <input
                      {...register('gallery')}
                      className={inputClass}
                    />
                    {errors.gallery && <p className={errorClass}>{errors.gallery.message}</p>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className={labelClass}>Project URL</label>
                    <input
                      {...register('projectUrl')}
                      className={inputClass}
                    />
                    {errors.projectUrl && <p className={errorClass}>{errors.projectUrl.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>GitHub URLs</label>
                      <input
                        {...register('githubUrls')}
                        className={inputClass}
                      />
                      <p className="text-xs text-text-muted">Comma separated for multiple repos</p>
                      {errors.githubUrls && <p className={errorClass}>{errors.githubUrls.message}</p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className={labelClass}>Live Demo URL</label>
                      <input
                        {...register('liveUrl')}
                        className={inputClass}
                      />
                      {errors.liveUrl && <p className={errorClass}>{errors.liveUrl.message}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={updating}
                  className="group inline-flex items-center justify-center gap-2.5 h-13 px-8 bg-brand-primary text-white font-semibold text-sm rounded-xl hover:bg-brand-hover transition-all duration-300 shadow-lg shadow-brand-primary/20 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Save className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  {updating ? 'Updating...' : 'Update Project'}
                </button>
                <Link
                  to="/admin/dashboard"
                  className="inline-flex items-center justify-center h-13 px-8 bg-surface-default border border-border-default text-text-secondary font-medium text-sm rounded-xl hover:text-text-primary hover:border-border-strong transition-all duration-200"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
