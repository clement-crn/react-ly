import { SetStateAction, startTransition, useState } from "react"
import style from "./landingpage.module.css"
import { useMainContext } from "../../context/context"
import { Dices } from "../dices"

function Landingpage() {
  const [inputValue, setInputValue] = useState("")
  const { setUsername, setIsGameStarted } = useMainContext()
  const [isOpen, setIsOpen] = useState(false)
  const handleInputChange = (e: {
    target: { value: SetStateAction<string> }
  }) => {
    setInputValue(e.target.value)
  }

  const handleValidation = () => {
    startTransition(() => {
      setUsername(inputValue)
      setIsGameStarted(true)
    })
  }

  const openModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen ? (
        <Dices />
      ) : (
        <div className={style.landingpage_container}>
          <h2>Veuillez entrer votre nom:</h2>
          <div className={style.landingpage_container_input_wrapper}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={handleValidation}>Valider</button>
            <button onClick={openModal}>dices</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Landingpage
