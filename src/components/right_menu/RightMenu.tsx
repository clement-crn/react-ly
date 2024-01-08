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

  const updatePlayerPosition = async (player: Player) => {
    const randomNumber = Math.floor(Math.random() * 12) + 1
    const newPosition = (player.boardPosition + randomNumber) % 40 || 40

    const updateState = (prev: Player) => ({
      ...prev,
      boardPosition: newPosition,
    })

    if (player === humanPlayer) {
      setHumanPlayer(updateState)
    } else if (player === bot2) {
      setBot2(updateState)
    } else if (player === bot3) {
      setBot3(updateState)
    } else if (player === bot4) {
      setBot4(updateState)
    }

    console.log(player.boardPosition, "boardPosition")
    console.log(randomNumber, "randomNumber")
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
          <button onClick={() => updatePlayerPosition(humanPlayer)}>
            lancer le dice
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightMenu
