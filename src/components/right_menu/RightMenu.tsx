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
  const {
    humanPlayer,
    bot2,
    bot3,
    bot4,

    setBot2,
    setBot3,
    setBot4,
    setHumanPlayer,
  } = useMainContext()

  const launchDice = async (player: Player) => {
    const randomNumber = Math.floor(Math.random() * 12) + 1
    console.log(randomNumber, "randomNumber")
    const current = player.boardPosition
    if (player === humanPlayer) {
      setHumanPlayer((prev) => ({
        ...prev,
        boardPosition: randomNumber + current,
      }))
    } else if (player === bot2) {
      setBot2((prev) => ({
        ...prev,
        boardPosition: randomNumber + current,
      }))
    } else if (player === bot3) {
      setBot3((prev) => ({
        ...prev,
        boardPosition: randomNumber + current,
      }))
    } else if (player === bot4) {
      setBot4((prev) => ({
        ...prev,
        boardPosition: randomNumber + current,
      }))
    }
    console.log(player.boardPosition)

    //TODO: prendre en compte au dessus 40 -> repartir 0
    //puis passer au joueur suivant
  }

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
          {/*  currentlyPlaying is the equivalent of for example humanPlayer or bot2*/}
          <button onClick={() => launchDice(humanPlayer)}>
            lancer le dice
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightMenu
