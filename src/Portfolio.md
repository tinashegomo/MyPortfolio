# Modern Developer Portfolio (CMS Powered)

# Tech Stack

Frontend
- React 19
- Vite
- Tailwind CSS v4
- React Router
- Framer Motion
- React Hook Form
- Zod
- Axios
- Firebase SDK

Backend
- Firebase Authentication
- Cloud Firestore

Optional
- Firebase Storage
- Cloudinary (images)
- YouTube (unlisted videos)
- Vimeo
- Bunny Stream

---

# Goal

Build a modern portfolio website that allows visitors to

- View projects
- Read detailed descriptions
- Visit live demos
- Visit GitHub repositories
- Watch short project videos
- Contact you

Only YOU can

- Login
- Add projects
- Edit projects
- Delete projects

No backend server required.

Everything is powered by Firebase.

---

# Pages

/
Landing Page

/projects
All Projects

/project/:slug
Project Details

/about
About Me

/contact
Contact Page

/admin/login
Authentication Page

/admin/dashboard
Project Management

---

# Visitor Experience

Visitors can

Browse portfolio

View animations

Open project details

Watch hosted videos

Click GitHub

Click Live Demo

Download Resume

Contact you

They cannot

Create projects

Delete projects

Edit projects

Login

---

# Admin Experience

Login

↓

Firebase Authentication

↓

Checks email

↓

If email matches

↓

Dashboard opens

↓

Add/Edit/Delete projects

---

# Firestore Structure

projects

Document ID

Auto generated

Fields

title

string

description

string

goal

string

technologies

array

images

array

videoUrl

string

githubUrl

string

liveUrl

string

status

Published | Draft

featured

boolean

createdAt

timestamp

updatedAt

timestamp

slug

string

Example

projects

{

title

"Monisha Inventory System"

description

"A warehouse and inventory management platform..."

goal

"Help schools manage uniforms"

technologies

[
"React",
"Spring Boot",
"MySQL",
"Firebase"
]

videoUrl

"https://youtube.com/..."

githubUrl

"https://github.com/..."

liveUrl

"https://..."

featured

true

}

---

# Authentication

Firebase Authentication

Email/Password

Only ONE account exists.

Example

your@email.com

Password

********

When user logs in

Check

auth.currentUser.email

If

email != your email

Immediately logout.

Redirect home.

---

# Firestore Rules

match /projects/{project}

allow read: if true;

allow write: if request.auth != null
&& request.auth.token.email == "your@email.com";

This is the important part.

Even if someone creates a Firebase account

They STILL cannot write.

---

# Routes

Public

/

About

Projects

Project Details

Contact

Private

/admin/login

/admin/dashboard

/admin/new-project

/admin/edit/:id

---

# Dashboard Layout

Sidebar

Dashboard

Projects

Add Project

Logout

Main Area

Project Table

Title

Featured

Status

Created

Edit

Delete

Floating Add Button

---

# Add Project Form

Project Title

Slug

Description

Goal

Technologies

Image URL

Video URL

GitHub URL

Live URL

Featured

Publish

Save

Validation

React Hook Form

+

Zod

---

# Video Hosting

Recommended

YouTube

Upload

Unlisted

Copy Embed URL

Store URL in Firestore

Display using

ReactPlayer

or iframe

Alternative

Cloudinary

Vimeo

Bunny

---

# Project Card

Image

Title

Short Description

Tech Stack

Buttons

GitHub

Live Demo

Read More

Hover animation

Glass effect

Rounded corners

Shadow

Gradient border

---

# Project Details Page

Hero Image

Title

Description

Goal

Challenges

Architecture

Tech Stack

Project Video

GitHub Button

Live Demo Button

Image Gallery

---

# UI Style

Dark Mode

Primary

Red

Accent

White

Background

Near Black

Cards

Glassmorphism

Animations

Framer Motion

Smooth Scroll

Modern Typography

Responsive

---

# Folder Structure

src

components

Navbar

Footer

ProjectCard

ProjectVideo

TechBadge

AnimatedButton

ProjectForm

ProjectTable

ProtectedRoute

pages

Home

Projects

ProjectDetails

About

Contact

Login

Dashboard

hooks

firebase

services

contexts

utils

types

assets

---

# Firebase Collections

projects

No other collections required initially.

---

# Security

Authentication Required

↓

Firestore Rules

↓

Protected Routes

↓

Admin Dashboard

↓

CRUD

---

# Deployment

Frontend

Vercel

or

Netlify

Firebase

Firestore

Authentication

Storage

---

# Future Improvements

Markdown descriptions

Categories

Search

Filtering

Tags

Dark/Light mode

Analytics

Visitor counter

Blog

Resume download

Testimonials

Project likes

GitHub API integration

Automatic GitHub statistics

Automatic deployment status

Project screenshots carousel

Image lazy loading

SEO optimization

Sitemap

Open Graph metadata

Email notifications

Admin analytics

Project drafts

Pinned projects

Featured project carousel

Project sorting

Timeline page

Experience page

Skills visualization

Certificates

Achievements

Download CV

Blog CMS
