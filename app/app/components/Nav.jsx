import Link from 'next/link'

export default function Nav() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
      <div style={{ fontWeight: 'bold' }}>Tamara Katthain</div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
