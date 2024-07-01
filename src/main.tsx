import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

import MainProvider from "./context/provider.tsx"
import { AuthProvider } from "./context/auth/AuthProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MainProvider>
  </React.StrictMode>
)
