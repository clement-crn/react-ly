import React from "react"
import style from "./Board.module.css"
import { gameboard } from "@/assets"
import { cornerZone, districtZone } from "./const"
import { useMainContext } from "@/context/context"
import Pawn from "./pawn/pawn"

function Board() {
  const { allPlayers } = useMainContext()

  const zoneManager = (id: number) => {
    console.log(id, name)
  }

  return (
    <div className={style.board_container}>
      <div className={style.imageWrapper}>
        <img src={gameboard} alt="plateau" className={style.board_image} />
        {cornerZone.map((zone) => (
          <div
            key={zone.id}
            className={style.clickableZone}
            style={{
              top: zone.coordinates.top,
              left: zone.coordinates.left,
              width: zone.coordinates.width,
              height: zone.coordinates.height,
            }}
            onClick={() => {
              zoneManager(zone.id)
            }}
          >
            {allPlayers &&
              Object.values(allPlayers).map(
                (player) =>
                  player.boardPosition === zone.id && (
                    <Pawn key={player.id} playerId={player.id} />
                  )
              )}
          </div>
        ))}
        {districtZone.map((zone, index) => (
          <div
            key={zone.id}
            className={style.clickableZone}
            style={{
              top: zone.coordinates.top,
              left: zone.coordinates.left,
              width: zone.coordinates.width,
              height: zone.coordinates.height,
              backgroundColor: `hsla(${
                index * (360 / districtZone.length)
              }, 100%, 50%, 0.2)`,
            }}
            onClick={() => {
              zoneManager(zone.id)
            }}
          >
            {/* Render pawns for all players in the current zone */}
            {allPlayers &&
              Object.values(allPlayers).map(
                (player) =>
                  player.boardPosition === zone.id && (
                    <div
                      key={player.id}
                      className={style.pawnContainer}
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <Pawn playerId={player.id} />
                    </div>
                  )
              )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Board
