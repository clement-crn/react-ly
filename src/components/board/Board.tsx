import React from "react"

import style from "./Board.module.css"
import gameboard from "@/assets"
import { cornerZone } from "./const"

function Board() {
  const zoneManager = (id) => {
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
      </div>
    </div>
  )
}

export default Board
