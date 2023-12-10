import { useMainContext } from "@/context/context"
import style from "./RightMenu.module.css"
import { PlayerInfo } from "./player_info"
import { PlayerPicture } from "./types"
import { user_img } from "@/assets"
function RightMenu() {
  const players: {
    playerName: string
    playerPicture: PlayerPicture
  }[] = [
    { playerName: "Player 2", playerPicture: "car" },
    { playerName: "Player 3", playerPicture: "dog" },
    { playerName: "Player 4", playerPicture: "dog" },
  ]
  const { playerMoney, bot2Money, bot3Money, bot4Money, humanPlayer } =
    useMainContext()
  return (
    <div className={style.rightmenu_container}>
      <div className={style.rightmenu_wrapper}>
        <div className={style.playerInfos}>
          <PlayerInfo
            playerNameProp={humanPlayer.username}
            playerMoneyProp={playerMoney}
            playerPictureProp={user_img}
          />
          {players.map((player, index) => (
            <PlayerInfo
              key={index + 1}
              playerNameProp={player.playerName}
              playerMoneyProp={[bot2Money, bot3Money, bot4Money][index]}
              playerPictureProp={user_img}
            />
          ))}
        </div>
        <div className={style.empty}></div>
      </div>
    </div>
  )
}

export default RightMenu
