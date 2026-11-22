# Gavin Sands | Software portfolio

I'm a computer science student at Iowa State University focused on building intelligent experiences at the intersection of AI, design, and human-centered technology.

**[Visit my portfolio on Vercel](https://gavin-sands.vercel.app/)**

## Explore my work

| What to explore | Live page |
| --- | --- |
| My software projects and their implementation details | [Project directory](https://gavin-sands.vercel.app/projects) |
| A Python debugging tool that explains errors with a local language model | [AI Code Debugger](https://gavin-sands.vercel.app/projects/ai-code-debugger) |
| An interactive example that walks through bubble sort one comparison at a time | [DSA Visualizer](https://gavin-sands.vercel.app/projects/dsa-visualizer) |
| How I apply my technical skills in projects, research, and IT | [Skills](https://gavin-sands.vercel.app/skills) |
| My education, experience, and résumé download | [Résumé](https://gavin-sands.vercel.app/resume) |
| Email and professional profiles | [Contact](https://gavin-sands.vercel.app/contact) |

## How the portfolio works

The site is a React and TypeScript single-page application. React Router maps each URL to a page inside a shared layout. Pages read their content from local TypeScript files. Node.js runs the development tools, and Vite builds the static files that Vercel serves.

| Location | Purpose |
| --- | --- |
| [src/main.tsx](src/main.tsx) and [src/routes.tsx](src/routes.tsx) | Start the app and map URLs to pages |
| [src/App.tsx](src/App.tsx) and [src/pages/](src/pages/) | Render the homepage, project directory, individual projects, skills, résumé, and contact pages |
| [src/components/](src/components/) | Share navigation, footer, project cards, and the interactive sorting example |
| [src/data/](src/data/) | Store project descriptions, résumé entries, skills, and contact links |
| [src/styles/global.css](src/styles/global.css) and [src/App.css](src/App.css) | Define typography, responsive layouts, transitions, and print styles |
| [src/assets/](src/assets/) and [public/](public/) | Store bundled images and directly served files such as fonts and the résumé PDF |

## Run locally

Use Node.js 24 and npm. Run these commands, then open the local address printed by Vite.

```sh
git clone https://github.com/gsandss/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

Before publishing, run `npm run lint` and `npm run build`. The build checks TypeScript and writes the production site to `dist/`. Use `npm run preview` to inspect that build locally.

## Update the content

- **Projects.** Edit [projects.ts](src/data/projects.ts). Each slug has a shareable URL at `/projects/:slug`. The first two entries also appear as selected work on the homepage.
- **Résumé and skills.** Edit [resume.ts](src/data/resume.ts) for roles and projects, [Resume.tsx](src/pages/Resume/Resume.tsx) for education, and [skills.ts](src/data/skills.ts) for the technical skills used on both pages. Replace [the downloadable PDF](public/Gavin-Sands-Resume.pdf) when the résumé changes.
- **Contact.** Edit [contact.ts](src/data/contact.ts) to update the email address and professional profiles.

## Deployment

Vercel builds production releases from the GitHub `main` branch. The [routing configuration](vercel.json) lets visitors open or refresh a project URL directly. After a release, use the same public address to check the result. [Open the production deployment](https://gavin-sands.vercel.app/)
