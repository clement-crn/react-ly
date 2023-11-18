import React from "react"

import style from "./Board.module.css"
import gameboard from "@/assets"
import { cornerZone, districtZone } from "./const"

function Board() {
  const zoneManager = (id: number) => {
    console.log(id, name)
  }

  return (
    <div className={style.board_container}>
      <div className={style.imageWrapper}>
        <img src={gameboard} alt="Livingroom" className={style.board_image} />
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
          ></div>
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
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Board
