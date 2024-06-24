import React, { useState } from "react"
import { loginUser } from "../../../api/api"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await loginUser({ username, password })
      console.log("Login successful:", response.data)
      localStorage.setItem("access_token", response.data.access)
      localStorage.setItem("refresh_token", response.data.refresh)
      setSuccess(true)
      setError(null)
    } catch (error) {
      console.error("Login failed:", error.response.data)
      setError(error.response.data)
      setSuccess(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>Login successful!</div>}
    </div>
  )
}

export default Login
