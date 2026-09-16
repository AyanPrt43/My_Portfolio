# Ayan Pratap Sonker — Developer Portfolio

<div align="center">

### Full Stack Developer • MERN • Next.js • TypeScript • AI

<a href="https://my-portfolio-ayan-298e.vercel.app/">
  <img src="https://img.shields.io/badge/🚀%20LIVE%20WEBSITE-Visit%20Portfolio-000000?style=for-the-badge" alt="Live Website" />
</a>

</div>

A modern, responsive developer portfolio built with **Next.js, React, TypeScript, and AI**. The site presents Ayan's background, technical skills, selected projects, notes, and an interactive AI assistant that can answer visitor questions about his work.

## ✨ Highlights

- **AI-powered portfolio assistant** — Ask questions about Ayan's skills, development process, projects, and experience.
- **Featured project gallery** — Showcases full-stack, frontend, fintech, and API-based projects with GitHub and live-demo links.
- **Responsive design** — Optimized for desktop and mobile layouts.
- **Modern Next.js architecture** — Built with the Next.js App Router and TypeScript.
- **Developer-focused presentation** — Includes hero, about, notes, contact, and selected-work sections.

## 🤖 AI Portfolio Assistant

The portfolio includes an `/api/chat` route powered by Google's GenAI SDK. The assistant receives portfolio-specific context and keeps responses focused on Ayan, web development, and software engineering.

The client sends visitor questions to the backend route, where the Gemini model generates a concise response. The UI includes loading states and API error handling.

### Environment variable

Create a `.env.local` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Keep API keys private and never commit `.env.local` to Git.

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- HTML5 / CSS3
- Responsive UI

### AI / Backend
- Next.js Route Handlers
- Google GenAI SDK (`@google/genai`)
- Gemini API

### Development
- Git
- GitHub
- ESLint
- Vercel-compatible deployment

## 📁 Project Structure

```text
My_Portfolio/
├── public/
│   └── images/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts
│   │   └── page.tsx
│   └── components/
│       ├── About.tsx
│       ├── AISection.tsx
│       ├── Contact.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Notes.tsx
│       ├── ProjectCard.tsx
│       └── ProjectGallery.tsx
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AyanPrt43/My_Portfolio.git
cd My_Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the AI assistant

Create `.env.local` and add your Gemini API key:

```env
GEMINI_API_KEY=your_gemini_api_key
```

### 4. Run the development server

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### 5. Create a production build

```bash
npm run build
npm start
```

## 💼 Featured Projects

### Task-Line
A full-stack task-management application for organizing work with clear workflows and date-based planning.

**Stack:** React.js, Node.js, Express.js, MongoDB, Firebase

### TaskFlow
A project-tracking application with nested subtasks, real-time status updates, role-based access control, and JWT authentication.

**Stack:** React.js, Node.js, Express.js, MongoDB, JWT

### E-Commerce Web Application
A Next.js and TypeScript storefront with multi-criteria filtering and a persistent shopping cart.

**Stack:** Next.js, TypeScript, Tailwind CSS, Node.js

### Real-Time Currency Converter
A React and Vite application supporting 150+ currencies through live exchange-rate data and a REST API.

**Stack:** React.js, Vite, Tailwind CSS, REST API

### Fintech Experience — Razorpay Clone
A responsive fintech-focused interface inspired by modern payment-product experiences, with interactive UI and responsive layouts.

**Stack:** React.js, Tailwind CSS, Responsive UI

## 🌐 Live Website

<div align="center">

<a href="https://my-portfolio-ayan-298e.vercel.app/">
  <img src="https://img.shields.io/badge/🚀%20Visit%20My%20Portfolio-My%20Portfolio-111827?style=for-the-badge" alt="Visit My Portfolio" />
</a>

<br />

**Live:** https://my-portfolio-ayan-298e.vercel.app/

</div>

## 📌 Current Focus

- Full-stack web development with the MERN stack
- Next.js and TypeScript
- Secure REST API development
- Authentication and authorization
- AI-assisted web applications
- Responsive, production-oriented frontend development

## 👨‍💻 About Ayan

**Ayan Pratap Sonker** is a Full Stack Developer focused on building responsive web applications, RESTful APIs, authentication flows, database-backed systems, and AI-enhanced user experiences.

He works across the modern JavaScript ecosystem and enjoys turning product ideas into clean, maintainable applications.

## 📫 Connect

- **GitHub:** https://github.com/AyanPrt43
- **Portfolio:** https://my-portfolio-ayan-298e.vercel.app/
- **LinkedIn:** Add your LinkedIn profile here

## 📄 License

This is a personal portfolio project. The source is available for learning and reference; please do not present the work or content as your own.

---

Built with **Next.js + TypeScript + React + AI** by **Ayan Pratap Sonker**.
