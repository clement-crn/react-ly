// RightMenu.js

import { useMainContext } from "@/context/context"
import style from "./RightMenu.module.css"
import { PlayerInfo } from "./player_info"
import { user_img } from "@/assets"
import MainButtons from "./main_buttons/MainButtons"

function RightMenu() {
  const { humanPlayer, bot2, bot3, bot4, allPlayers } = useMainContext()

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
        <MainButtons />
      </div>
    </div>
  )
}

export default RightMenu
