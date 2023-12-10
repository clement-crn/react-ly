import { useMainContext } from "@/context/context"
import style from "./RightMenu.module.css"
import { PlayerInfo } from "./player_info"
import { PlayerPicture } from "./types"
import { user_img } from "@/assets"
import launchDice from "../dice/Dice"

function RightMenu() {
  const players: {
    playerName: string
    playerPicture: PlayerPicture
  }[] = [
    { playerName: "Player 2", playerPicture: "car" },
    { playerName: "Player 3", playerPicture: "dog" },
    { playerName: "Player 4", playerPicture: "dog" },
  ]
  const { humanPlayer, bot2, bot3, bot4 } = useMainContext()
  return (
    <div className={style.rightmenu_container}>
      <div className={style.rightmenu_wrapper}>
        <div className={style.playerInfos}>
          <PlayerInfo
            playerNameProp={humanPlayer.username}
            playerMoneyProp={humanPlayer.money}
            playerPictureProp={user_img}
          />
          {players.map((player, index) => (
            <PlayerInfo
              key={index + 1}
              playerNameProp={
                [bot2.username, bot3.username, bot3.username, bot4.username][
                  index
                ]
              }
              playerMoneyProp={
                [bot2.money, bot3.money, bot3.money, bot4.money][index]
              }
              playerPictureProp={user_img}
            />
          ))}
        </div>
        <div className={style.buttons}>
          <button onClick={() => launchDice(humanPlayer)}>
            lancer le dice
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightMenu
