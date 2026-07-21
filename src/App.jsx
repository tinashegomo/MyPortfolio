import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PageWrapper from './components/layout/PageWrapper';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import NewProject from './pages/admin/NewProject';
import EditProject from './pages/admin/EditProject';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PageWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:slug" element={<ProjectDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin Login (no layout chrome) */}
          <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
          <Route path="/admin/login" element={<Login />} />

          {/* Admin Routes (protected) */}
          <Route
            element={
              <ProtectedRoute>
                <PageWrapper />
              </ProtectedRoute>
            }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/new-project" element={<NewProject />} />
            <Route path="/admin/edit/:id" element={<EditProject />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={
            <div className="flex flex-col items-center justify-center min-h-dvh text-center p-5">
              <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
              <p className="text-text-secondary mb-6">Page not found</p>
              <a
                href="/"
                className="inline-flex items-center justify-center h-13 px-6 bg-brand-primary text-white font-semibold text-sm rounded-xl hover:bg-brand-hover transition-colors"
              >
                Go Home
              </a>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
