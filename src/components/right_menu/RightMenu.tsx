import style from "./RightMenu.module.css"
import { PlayerInfo } from "./player_info"
import { PlayerPicture } from "./types"
import { user_img } from "@/assets"
function RightMenu() {
  const players: {
    playerName: string
    bankMoney: number
    playerPicture: PlayerPicture
  }[] = [
    { playerName: "Player 2", bankMoney: 10000, playerPicture: "car" },
    { playerName: "Player 3", bankMoney: 10000, playerPicture: "dog" },
    { playerName: "Player 4", bankMoney: 10000, playerPicture: "dog" },
  ]

  return (
    <div className={style.rightmenu_container}>
      <div className={style.rightmenu_wrapper}>
        <div className={style.playerInfos}>
          <PlayerInfo
            playerName={"temporary hardcoded"}
            bankMoney={1000}
            playerPicture={user_img}
          />
          {players.map((player, index) => (
            <PlayerInfo
              key={index}
              playerName={player.playerName}
              bankMoney={player.bankMoney}
              playerPicture={user_img}
            />
          ))}
        </div>
        <div className={style.empty}></div>
      </div>
    </div>
  )
}

export default RightMenu
