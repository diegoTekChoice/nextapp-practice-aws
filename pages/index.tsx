import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <h2>host:{window.location.host}</h2>
        <h2>hostname:{window.location.hostname}</h2>
        <h6>second version - ECS</h6>
    </>
  )
}
