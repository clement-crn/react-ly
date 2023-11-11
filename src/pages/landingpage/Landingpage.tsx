import { useState } from "react"
import style from "./landingpage.module.css"
import { useMainContext } from "@/context/context"

function Landingpage() {
  const [inputValue, setInputValue] = useState("")
  const { setUsername, setIsGameStarted } = useMainContext()

  const handleValidation = () => {
    setUsername(inputValue)
    setIsGameStarted(true)
  }

  return (
    <div className={style.landingpage_container_container}>
      <h2>Veuillez entrer votre nom:</h2>
      <div className={style.landingpage_container_input_wrapper}>
        <input
          type="text"
          placeholder="Nom..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleValidation}>Valider</button>
      </div>
    </div>
  )
}

export default Landingpage
