import React from "react"
import style from "./PlayerInfo.module.css"

import { PlayerPicture } from "../types"

interface PlayerInfoProps {
  playerName: string
  bankMoney: number
  playerPicture: PlayerPicture
}

const PlayerInfo = ({
  playerName,
  bankMoney,
  playerPicture,
}: PlayerInfoProps) => {
  return (
    <div className={style.playerinfo_container}>
      <div className={style.playerinfo_wrapper}>
        <img
          src={playerPicture}
          alt="Portrait du joueur."
          className={style.user_img}
        />
        <div className={style.playerinfo_name_and_money_wrapper}>
          <div className={style.playerinfo_name}>{playerName}</div>
          <div className={style.playerinfo_bank_money}>{`${bankMoney} $`}</div>
          {playerPicture}
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo
