import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Tamara Katthain — Insights Strategist',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
