import { luckCards } from "@/assets/cards/luck/consts"
import { useJail } from "../jail/Jail"

export const useLuck = () => {
  const { sendPlayerToJail } = useJail()

  const pickLuckCard = () => {
    console.log("Pick luck card")
    const randomIndex = Math.floor(Math.random() * luckCards.length)
    const action = luckCards[randomIndex]?.action

    switch (action) {
      case "GOTOJAIL":
        return sendPlayerToJail()
      // case "ADVANCETOGO":
      //   return useAdvanceToGo();
      // case "ADVANCETOVILLETTE":
      //   return useAdvanceToIllinoisAvenue();
      default:
        return null
    }
  }

  return { pickLuckCard }
}
