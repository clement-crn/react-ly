import style from "./RightMenu.module.css"
import { PlayerInfo } from "./player_info"

function RightMenu() {
  return (
    <div className={style.rightmenu_container}>
      <div className={style.rightmenu_wrapper}>
        <div className={style.playerInfos}>
          <PlayerInfo />
        </div>
        <div className={style.empty}></div>
      </div>
    </div>
  )
}

export default RightMenu
