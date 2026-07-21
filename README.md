# My Portfolio

A modern developer portfolio built with React 19, Vite, Tailwind CSS v4, and Firebase. Features a dark UI with red/white/black branding, animated sections, and an admin dashboard for project management.

## Tech Stack

- **React 19** with Vite 8
- **Tailwind CSS v4** with custom design tokens
- **Firebase** (Auth + Firestore)
- **Framer Motion** for animations
- **React Hook Form** + **Zod** for form validation
- **Lucide React** for icons
- **React Router** for routing

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Add your Firebase config to .env

# Start dev server
npm run dev
```

## Environment Variables

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_ADMIN_EMAIL=your@email.com
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, PageWrapper
│   ├── projects/      # ProjectCard, TechBadge, FeaturedProjects
│   ├── sections/      # HeroSection, SkillsSection, ExperienceSection, etc.
│   └── ui/            # Button, Card, Badge, Input, Skeleton, SocialIcons
├── contexts/          # AuthContext
├── hooks/             # useProjects
├── pages/             # Home, About, Contact, ProjectDetails
│   └── admin/         # Login, Dashboard, NewProject, EditProject
├── services/          # Firebase config, Firestore CRUD
└── utils/             # Schemas, helpers
```

## Features

- Responsive dark UI with animated sections
- Smooth scroll navigation between sections
- Admin dashboard for CRUD project management
- Image gallery with error fallback
- Multiple GitHub links per project
- Form validation with Zod schemas

## Firestore Rules

Copy the contents of `firestore.rules` to your Firebase console under Firestore > Rules.
