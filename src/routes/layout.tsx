import { Outlet } from 'react-router-dom'
import '../App.css'
import { ClerkProvider, UserButton } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <header className="header">
        <div>
          Sample React App
        </div>
        <UserButton />
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  )
}

