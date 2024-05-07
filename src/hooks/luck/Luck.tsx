import React, { useState } from "react"
import { luckCards } from "@/assets/cards/luck/consts"
import { useJail } from "../jail/Jail"

export const useLuck = () => {
  const { sendPlayerToJail } = useJail()
  const [showModal, setShowModal] = useState(false)
  const [cardText, setCardText] = useState<string | undefined>("")

  const pickLuckCard = () => {
    console.log("Pick luck card")
    const randomIndex = Math.floor(Math.random() * luckCards.length)
    const action = luckCards[randomIndex]?.action
    const description = luckCards[randomIndex]?.description

    switch (action) {
      case "GOTOJAIL":
        return sendPlayerToJail()
      // case "ADVANCETOGO":
      //   return useAdvanceToGo();
      // case "ADVANCETOVILLETTE":
      //   return useAdvanceToIllinoisAvenue();
      default:
        setCardText(description)
        setShowModal(true)
    }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const Modal = ({ text, onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h3>Carte chance!</h3>
          <p>{text}</p>
        </div>
      </div>
    )
  }

  return { pickLuckCard, showModal, cardText, closeModal, Modal }
}
