import { useAuth } from "@clerk/clerk-react"
import { Outlet, useNavigate } from "react-router-dom"

export default function AuthLayout() {
  const { userId } = useAuth()
  const navigate = useNavigate()

  if (!userId) {
    navigate("/sign-in")
  }
  return (
    <Outlet />
  )
}
