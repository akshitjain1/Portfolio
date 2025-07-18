import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akshit Jain | Aspiring Machine Learning Engineer Portfolio',
  description: 'Explore the portfolio of Akshit Jain — a passionate Machine Learning enthusiast and BTech CSE student at LPU. Skilled in Python, C, C++, Java, and web technologies. Specializing in AI/ML with a hunger for perfection.',
  keywords: [
    'Akshit Jain', 
    'Machine Learning', 
    'AI Engineer', 
    'Python Developer', 
    'BTech Student', 
    'LPU', 
    'Portfolio', 
    'Artificial Intelligence', 
    'Python', 
    'C++', 
    'Java', 
    'Web Development',
    'Data Science',
    'ML Engineer',
    'Computer Science',
    'Phagwara',
    'Punjab'
  ],
  authors: [{ name: 'Akshit Jain', url: 'https://akshitjain.dev' }],
  creator: 'Akshit Jain',
  publisher: 'Akshit Jain',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akshitjain.dev',
    title: 'Akshit Jain | Aspiring Machine Learning Engineer Portfolio',
    description: 'Explore the portfolio of Akshit Jain — a passionate Machine Learning enthusiast and BTech CSE student at LPU. Skilled in Python, C, C++, Java, and web technologies. Specializing in AI/ML with a hunger for perfection.',
    siteName: 'Akshit Jain Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Akshit Jain - Machine Learning Engineer & Python Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshit Jain | Aspiring Machine Learning Engineer Portfolio',
    description: 'Explore the portfolio of Akshit Jain — a passionate Machine Learning enthusiast and BTech CSE student at LPU. Specializing in AI/ML with Python, C, C++, and Java.',
    images: ['/og-image.png'],
    creator: '@akshitjain',
  },
  metadataBase: new URL('https://akshitjain.dev'),
  alternates: {
    canonical: 'https://akshitjain.dev',
  },
  category: 'technology',
  classification: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'rgb(var(--toast-bg) / 0.95)',
                color: 'rgb(var(--toast-color))',
                border: '1px solid rgb(var(--toast-border) / 0.2)',
                borderRadius: '12px',
                backdropFilter: 'blur(12px)',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#ffffff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#ffffff',
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
