import React from "react"
import style from "./PlayerInfo.module.css"

import { PlayerPicture } from "../types"

interface PlayerInfoProps {
  playerNameProp: string
  playerMoneyProp?: number
  playerPictureProp: PlayerPicture
}

const PlayerInfo = ({
  playerNameProp,
  playerMoneyProp,
  playerPictureProp,
}: PlayerInfoProps) => {
  return (
    <div className={style.playerinfo_container}>
      <div className={style.playerinfo_wrapper}>
        <img
          src={playerPictureProp}
          alt="Portrait du joueur."
          className={style.user_img}
        />
        <div className={style.playerinfo_name_and_money_wrapper}>
          <div className={style.playerinfo_name}>{playerNameProp}</div>
          <div
            className={style.playerinfo_bank_money}
          >{`${playerMoneyProp} $`}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo
