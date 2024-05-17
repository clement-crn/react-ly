import { SetStateAction, startTransition, useState } from "react"
import style from "./landingpage.module.css"
import { useMainContext } from "../../context/context"
import sounds from "@/assets/sounds"

function Landingpage() {
  const [inputValue, setInputValue] = useState("")
  const { humanPlayer, setPlayer, setIsGameStarted } = useMainContext()

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setInputValue(e.target.value)
  }

  const handleValidation = () => {
    sounds.start.play()
    startTransition(() => {
      setPlayer(0, {
        ...humanPlayer,
        username: inputValue,
      })
      setIsGameStarted(true)
    })
  }

  return (
    <>
      <div className={style.landingpage_container}>
        <h2>Veuillez entrer votre nom:</h2>
        <div className={style.landingpage_container_input_wrapper}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleValidation}>Valider</button>
        </div>
      </div>
    </>
  )
}

export default Landingpage
