// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import KeycloakProvider from './KeycloakProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My App',
  description: 'A Next.js app with Keycloak',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className={inter.className}>
      {/* KeycloakProvider tüm uygulamayı sarmalar */}
      <KeycloakProvider>
        {children}
      </KeycloakProvider>
      </body>
      </html>
  )
}
