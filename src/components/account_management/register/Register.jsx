import React, { useState } from "react"
import { registerUser } from "../../../api/api"
const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await registerUser({ username, password })
      console.log("Registration successful:", response.data)
      setSuccess(true)
      setError(null)
    } catch (error) {
      console.error("Registration failed:", error.response.data)
      setError(error.response.data)
      setSuccess(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && (
        <div style={{ color: "green" }}>Registration successful!</div>
      )}
    </div>
  )
}

export default Register
