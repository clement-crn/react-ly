// index.tsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import MainProvider from "./context/provider.tsx" // Assuming MainProvider is your provider
import { AuthProvider } from "./context/auth/AuthContext.jsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MainProvider>
  </React.StrictMode>
)
