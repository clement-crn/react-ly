import React, { useState } from "react"
import style from "./App.module.css"
import { useMainContext } from "./context/context"

function App() {
  const [inputValue, setInputValue] = useState("")
  const { username, setUsername } = useMainContext()

  const handleValidation = () => {
    setUsername(inputValue)
  }

  return (
    <>
      <div className={style.app_container}>
        <h2>Veuillez entrer votre nom:</h2>
        <div className={style.app_input_wrapper}>
          <input
            type="text"
            placeholder="Nom..."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleValidation}>Valider</button>
        </div>
        <p>Le nouveau nom est : {username}</p>
      </div>
    </>
  )
}

export default App
