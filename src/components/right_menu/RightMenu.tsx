// RightMenu.js

import { useMainContext } from "@/context/context"
import style from "./RightMenu.module.css"

import {
  rollDiceForPlayer,
  simulateBotDiceRolling,
} from "../dice_controller/DiceController"
import { PlayerInfo } from "./player_info"
import { user_img } from "@/assets"

function RightMenu() {
  const {
    humanPlayer,
    bot2,
    bot3,
    bot4,
    allPlayers,
    setBot2,
    setBot3,
    setBot4,
    setHumanPlayer,
  } = useMainContext()

  const handleHumanPlayerDiceRoll = async () => {
    await rollDiceForPlayer(humanPlayer, setHumanPlayer)
  }

  const handleBotDiceRolls = () => {
    simulateBotDiceRolling(bot2, setBot2)
    simulateBotDiceRolling(bot3, setBot3)
    simulateBotDiceRolling(bot4, setBot4)
  }

  return (
    <div className={style.rightmenu_container}>
      <div className={style.rightmenu_wrapper}>
        <div className={style.playerInfos}>
          {allPlayers.map((player, index) => (
            <PlayerInfo
              key={index + 1}
              playerNameProp={
                [
                  humanPlayer.username,
                  bot2.username,
                  bot3.username,
                  bot4.username,
                ][index]
              }
              playerMoneyProp={
                [humanPlayer.money, bot2.money, bot3.money, bot4.money][index]
              }
              playerPictureProp={user_img}
            />
          ))}
        </div>
        <div className={style.buttons}>
          <button onClick={handleHumanPlayerDiceRoll}>Lancer le dé</button>
          <button onClick={handleBotDiceRolls}>
            Simuler les dés pour les bots
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightMenu
