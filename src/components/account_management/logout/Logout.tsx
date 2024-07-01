import { useAuth } from "@/context/auth/useAuth"

const LogoutButton = () => {
  const { logoutUser } = useAuth()

  return <button onClick={() => logoutUser()}>Logout</button>
}

export default LogoutButton
