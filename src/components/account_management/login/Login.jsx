import React, { useState } from "react"
import { loginUser } from "../../../api/api"
import style from "./Login.module.css"

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
    <div className={style.container}>
      <form className={style.form} onSubmit={handleLogin}>
        <input
          type="text"
          className={style.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          className={style.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className={style.button}>
          Login
        </button>
      </form>
      {error && (
        <div className={`${style.message} ${style.error}`}>{error}</div>
      )}
      {success && (
        <div className={`${style.message} ${style.success}`}>
          Login successful!
        </div>
      )}
    </div>
  )
}

export default Login
