import './globals.css'

export const metadata = {
  title: 'BOOKVERSE',
  description: 'An Online Library',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
