import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login, user, isAdmin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (user && isAdmin) {
    navigate('/admin/dashboard', { replace: true });
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-dvh flex items-center justify-center px-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-text-primary mb-2">Admin Login</h1>
          <p className="text-sm text-text-secondary">Sign in to manage your portfolio</p>
        </div>

        <div className="p-8 bg-surface-default border border-border-default rounded-card">
          {error && (
            <div className="flex items-center gap-2 p-3 mb-5 bg-danger-main/10 border border-danger-main/20 rounded-input text-sm text-danger-main">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-text-secondary">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@email.com"
                required
                className="w-full h-13 px-4 bg-surface-elevated border border-border-default rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-text-secondary">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-13 px-4 pr-12 bg-surface-elevated border border-border-default rounded-xl text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-text-muted hover:text-text-primary transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group inline-flex items-center justify-center gap-2.5 w-full h-13 px-6 bg-brand-primary text-white font-semibold text-sm rounded-xl hover:bg-brand-hover transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              <LogIn className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
