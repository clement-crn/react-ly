import { createContext } from "react"

export type GameState = {
  context: GameContext
}

export interface GameContextInterface {
  gameState: GameState
}

export const GameContext = createContext<GameContextInterface | null>(null)

export const INITIAL_CONTEXT: GameContext = {
  username: "Joueur 1",
}

export const INITIAL__STATE: GameState = {
  context: INITIAL_CONTEXT,
}
