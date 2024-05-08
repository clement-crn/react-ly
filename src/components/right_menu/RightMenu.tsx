// RightMenu.js

import { useMainContext } from "@/context/context"
import style from "./RightMenu.module.css"
import { PlayerInfo } from "./player_info"
import { user_img } from "@/assets"
import MainButtons from "./main_buttons/MainButtons"

function RightMenu() {
  const { allPlayers } = useMainContext()

  return (
    <div className={style.rightmenu_container}>
      <div className={style.rightmenu_wrapper}>
        <div className={style.playerInfos}>
          {allPlayers.map((player, index) => (
            <PlayerInfo
              key={index + 1}
              player={player}
              playerPicture={user_img}
            />
          ))}
        </div>
        <MainButtons />
      </div>
    </div>
  )
}

export default RightMenu
