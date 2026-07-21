import { useState, useEffect } from 'react';
import {
  getProjects,
  getAllProjects,
  getProjectBySlug,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../services/projects';

export function useProjects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = () => {
    setLoading(true);
    getProjects()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let cancelled = false;
    getProjects()
      .then((projects) => {
        if (!cancelled) setData(projects);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error, refetch };
}

export function useAllProjects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refetch = () => {
    setLoading(true);
    getAllProjects()
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    let cancelled = false;
    getAllProjects()
      .then((projects) => {
        if (!cancelled) setData(projects);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return { data, loading, error, refetch };
}

export function useProjectBySlug(slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!slug);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    getProjectBySlug(slug)
      .then((project) => {
        if (!cancelled) setData(project);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [slug]);

  return { data, loading, error };
}

export function useProjectById(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    getProjectById(id)
      .then((project) => {
        if (!cancelled) setData(project);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [id]);

  return { data, loading, error };
}

export function useCreateProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const id = await createProject(data);
      setLoading(false);
      return id;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return { mutate, loading, error };
}

export function useUpdateProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      await updateProject(id, data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return { mutate, loading, error };
}

export function useDeleteProject() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteProject(id);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return { mutate, loading, error };
}
