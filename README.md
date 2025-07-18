# Akshit Jain's Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Dark Mode**: Toggle between light and dark themes
- **Interactive Sections**: Hero, About, Skills, Projects, Timeline, and Contact
- **Animation**: Smooth page transitions and scroll-based animations
- **Performance**: Optimized for speed and SEO
- **Accessibility**: Screen reader friendly and keyboard navigable

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/         # Reusable components
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   └── ThemeProvider.tsx
├── sections/           # Page sections
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Timeline.tsx
└── data/              # Static data
    └── portfolio.ts   # All portfolio data
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information
Edit `src/data/portfolio.ts` to update:
- Personal details and bio
- Skills and proficiency levels
- Projects and achievements
- Timeline and experience
- Contact information

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Animations**: Customize in `src/app/globals.css`

### Images
Add your images to the `public` folder:
- `profile.jpg` - Your profile picture
- `resume.pdf` - Your resume
- `projects/` - Project screenshots

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🌟 Features Breakdown

### Hero Section
- Animated introduction with typing effect
- Dynamic fun facts carousel
- Call-to-action buttons

### About Section
- Professional bio and stats
- Contact information
- Fun facts widget

### Skills Section
- Categorized skill display
- Animated progress bars
- Interactive skill cards

### Projects Section
- Filterable project grid
- Detailed project modals
- GitHub and demo links

### Timeline Section
- Interactive timeline with expandable items
- Education and experience history
- Achievement highlights

### Contact Section
- Contact form with validation
- Social media links
- GitHub statistics

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment
1. Export static files: `npm run build`
2. Upload the generated files to your hosting provider

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Akshit Jain**
