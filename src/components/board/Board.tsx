import React from "react"
import style from "./Board.module.css"
import { gameboard } from "@/assets"
import { chests, cornerZone, cyberCafes, districtZones } from "./const"
import { useMainContext } from "@/context/context"
import Pawn from "./pawn/Pawn"

function Board() {
  const {
    allPlayers,

    setZoneClickedFromBoard,
    setShowPropertyModal,
  } = useMainContext()

  const zoneManager = (id: number) => {
    console.log(id)
    setZoneClickedFromBoard(id)
    if (id === 10 || id === 20 || id === 30) return
    setShowPropertyModal(true)
    console.log("zoneClickedFromBoard", id)
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
        {districtZones.map((zone, index) => (
          <div
            key={zone.id}
            className={style.clickableZone}
            style={{
              top: zone.coordinates.top,
              left: zone.coordinates.left,
              width: zone.coordinates.width,
              height: zone.coordinates.height,
              backgroundColor: `hsla(${
                index * (360 / districtZones.length)
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
                      <Pawn playerId={player.id} text={player.username} />
                    </div>
                  )
              )}
          </div>
        ))}
        {chests.map((zone, index) => (
          <div
            key={zone.id}
            className={style.clickableZone}
            style={{
              top: zone.coordinates.top,
              left: zone.coordinates.left,
              width: zone.coordinates.width,
              height: zone.coordinates.height,
              backgroundColor: `hsla(${
                index * (360 / districtZones.length)
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
                      <Pawn playerId={player.id} text={player.username} />
                    </div>
                  )
              )}
          </div>
        ))}

        {cyberCafes.map((zone, index) => (
          <div
            key={zone.id}
            className={style.clickableZone}
            style={{
              top: zone.coordinates.top,
              left: zone.coordinates.left,
              width: zone.coordinates.width,
              height: zone.coordinates.height,
              backgroundColor: `hsla(${
                index * (360 / districtZones.length)
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
                      <Pawn playerId={player.id} text={player.username} />
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
