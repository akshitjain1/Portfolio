<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Akshit Jain's Portfolio Website

This is a modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. The project showcases Akshit Jain's skills, projects, and experience as a BTech student interested in machine learning.

## Project Structure

- `src/app/` - Next.js App Router files
- `src/components/` - Reusable UI components
- `src/sections/` - Page sections (Hero, About, Skills, Projects, Timeline, Contact)
- `src/data/` - Static data and content
- `public/` - Static assets

## Key Technologies

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for icons
- **React Hot Toast** for notifications

## Development Guidelines

- Use TypeScript for all components
- Follow Tailwind CSS utility-first approach
- Implement responsive design (mobile-first)
- Use Framer Motion for smooth animations
- Keep components modular and reusable
- Maintain dark mode compatibility
- Ensure accessibility (ARIA labels, keyboard navigation)

## Data Management

All portfolio data is centralized in `src/data/portfolio.ts` including:
- Personal information
- Skills and proficiency levels
- Projects and achievements
- Timeline and experience
- Contact information

## Styling Conventions

- Use Tailwind CSS classes
- Follow the established color scheme (primary, secondary, accent)
- Implement dark mode with `dark:` prefix
- Use gradient text with `gradient-text` class
- Apply glass effects with `glass` class
- Use hover effects with `hover-glow` class

## Component Patterns

- Use `'use client'` directive for client-side components
- Implement proper TypeScript interfaces
- Use Framer Motion for animations
- Follow React best practices (hooks, props, state)
- Ensure proper accessibility attributes
