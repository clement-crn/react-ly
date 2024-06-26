import React, { useState } from "react"
import { registerUser } from "../../../api/api"
import style from "./Register.module.css"

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
    <div className={style.container}>
      <form className={style.form} onSubmit={handleRegister}>
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
          Register
        </button>
      </form>
      {error && (
        <div className={`${style.message} ${style.error}`}>{error}</div>
      )}
      {success && (
        <div className={`${style.message} ${style.success}`}>
          Registration successful!
        </div>
      )}
    </div>
  )
}

export default Register
