import { CyberCafe, DistrictZone } from "@/components/board/types"

declare global {
  type Player = {
    id: number
    username: string
    money: number
    isPrisoner: boolean
    startingPosition: number | undefined
    boardPosition: number
    consecutiveJailRolls: number
    isBankrupt: boolean
    propertiesOwned: DistrictZone[] | CyberCafe[]
  }
}
export type module = unknown
