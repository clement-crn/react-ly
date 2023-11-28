import React from "react"
import style from "./PlayerInfo.module.css"
import { user_img } from "@/assets"

const PlayerInfo = () => {
  return (
    <>
      <div className={style.playerinfo_container}>
        <div className={style.playerinfo_wrapper}>
          <img
            src={user_img}
            alt="Portrait du joueur."
            className={style.user_img}
          />
          <div className={style.playerinfo_name_and_money_wrapper}>
            <div className={style.playerinfo_name}>playerinfo_name</div>
            <div className={style.playerinfo_bank_money}>
              playerinfo_bank_money
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerInfo
