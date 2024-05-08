import style from "./PlayerInfo.module.css"

import { PlayerPicture } from "../types"
import { useMainContext } from "@/context/context"

interface PlayerInfoProps {
  player: Player
  playerPicture: PlayerPicture
}

const PlayerInfo = ({ player, playerPicture }: PlayerInfoProps) => {
  const { currentPlayerPlaying } = useMainContext()

  return (
    <div className={style.playerinfo_container}>
      <div
        style={{
          backgroundColor: "rgb(241, 241, 241)",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          height: "8vh",
          border:
            player.id === currentPlayerPlaying
              ? "3px black solid"
              : "0px black solid",
        }}
      >
        <img
          src={playerPicture}
          alt="Portrait du joueur."
          className={style.user_img}
        />
        <div className={style.playerinfo_name_and_money_wrapper}>
          <div className={style.playerinfo_name}>{player.username}</div>
          <div
            className={style.playerinfo_bank_money}
          >{`${player.money} $`}</div>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfo
