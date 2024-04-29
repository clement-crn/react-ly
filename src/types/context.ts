declare global {
  type Player = {
    id: number
    username: string
    isPlaying: boolean
    money: number
    isPrisoner: boolean
    startingPosition: number | undefined
    boardPosition: number
  }
}
export type module = unknown
