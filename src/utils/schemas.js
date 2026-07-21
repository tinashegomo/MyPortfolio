import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z
    .string()
    .min(1, 'Slug is required')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase with hyphens only'),
  overview: z.string().min(10, 'Overview must be at least 10 characters'),
  problem: z.string().min(10, 'Problem must be at least 10 characters'),
  solution: z.string().min(10, 'Solution must be at least 10 characters'),
  engineeringDecisions: z.string().min(10, 'Must be at least 10 characters'),
  systemArchitecture: z.string().optional(),
  keyFeatures: z.string().min(10, 'Must be at least 10 characters'),
  engineeringChallenges: z.string().optional(),
  impact: z.string().optional(),
  engineeringStack: z.string().min(1, 'At least one technology is required'),
  gallery: z.string().optional(),
  projectUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  githubUrls: z.string().optional(),
  liveUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
});

export const projectDefaults = {
  title: '',
  slug: '',
  overview: '',
  problem: '',
  solution: '',
  engineeringDecisions: '',
  systemArchitecture: '',
  keyFeatures: '',
  engineeringChallenges: '',
  impact: '',
  engineeringStack: '',
  gallery: '',
  projectUrl: '',
  githubUrls: '',
  liveUrl: '',
};

export const loginSchema = z.object({
  email: z.string().email('Must be a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const loginDefaults = {
  email: '',
  password: '',
};
