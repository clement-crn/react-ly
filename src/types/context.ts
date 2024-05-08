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
  }
}
export type module = unknown
