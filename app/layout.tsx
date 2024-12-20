import Provider from '@/app/provider'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import AuthWrapper from '@/components/wrapper/auth-wrapper'
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://peek.vercel.app/"),
  title: {
    default: 'PEEK',
    template: `%s | PEEK`
  },
  description: 'Review of third-party or custom components before they are integrated into your project',
  openGraph: {
    description: 'Review of third-party or custom components before they are integrated into your project',
    images: ['https://res.cloudinary.com/diekemzs9/image/upload/v1732352734/Screenshot_2024-11-23_120307_p1qog7.png'],
    url: 'https://peek.vercel.app/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEEK',
    description: 'Review of third-party or custom components before they are integrated into your project',
    siteId: "",
    creator: "@iBz-04",
    creatorId: "",
    images: ['https://res.cloudinary.com/diekemzs9/image/upload/v1732352734/Screenshot_2024-11-23_120307_p1qog7.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthWrapper>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="preload"
            href="https://utfs.io/f/31dba2ff-6c3b-4927-99cd-b928eaa54d5f-5w20ij.png"
            as="image"
          />
          <link
            rel="preload"
            href="https://utfs.io/f/69a12ab1-4d57-4913-90f9-38c6aca6c373-1txg2.png"
            as="image"
          />
        </head>
        <body className={GeistSans.className}>
          <Provider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </Provider>
          <Analytics />
        </body>
      </html>
    </AuthWrapper>
  )
}