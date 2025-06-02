import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CliniOdonto',
  description: 'Created with Agência Belmond',
  generator: 'Camila',
  icons: {
    icon: "/cliniodonto-logo.png", // ou favicon.png se preferir
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


