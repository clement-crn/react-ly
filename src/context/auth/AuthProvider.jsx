import { createContext, useState, useEffect } from "react"
import axios from "axios"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => {
    try {
      const storedTokens = localStorage.getItem("authTokens")
      return storedTokens ? JSON.parse(storedTokens) : null
    } catch (error) {
      console.error("Error parsing authTokens from localStorage:", error)
      return null // or handle gracefully as per your application's logic
    }
  })

  const loginUser = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:8000/api/token/", {
        username,
        password,
      })
      setAuthTokens(response.data)
      localStorage.setItem("authTokens", JSON.stringify(response.data))
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access}`
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    }
  }

  const logoutUser = () => {
    setAuthTokens(null)
    localStorage.removeItem("authTokens")
    delete axios.defaults.headers.common["Authorization"]
  }

  useEffect(() => {
    if (authTokens) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${authTokens.access}`
    }
  }, [authTokens])

  const isAuthenticated = () => {
    return authTokens !== null
  }

  const contextData = {
    authTokens,
    loginUser,
    logoutUser,
    isAuthenticated,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
