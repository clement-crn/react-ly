import { LuckCard } from "./type"

export const luckCards: LuckCard[] = [
  {
    id: 0,
    title: "Allez en prison!",
    description:
      "Allez en prison. Ne passez pas par la case départ. Vous n'aurez pas les 200$.",
    action: "GOTOJAIL",
  },
  {
    id: 1,
    title: "Avancez jusqu'à la case départ",
    description: "Avancez jusqu'à la case départ. Vous recevez 200$.",
    action: "ADVANCETOGO",
  },
  {
    id: 2,
    title: "Impôt sur le revenu",
    description: "Vous devez payer 10% de votre capital total.",
    action: "PAYTAX",
  },
]
