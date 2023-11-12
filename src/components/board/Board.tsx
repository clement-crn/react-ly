import React from "react"
import Box from "../box/Box"
import style from "./Board.module.css"

function Board() {
  function getDefaultBoxProps(index) {
    return {
      name: `Box ${index + 1}`,
      colorFamily: "Default Color",
      price: 10,
    }
  }

  const boxesData = Array.from({ length: 10 * 10 }, (_, index) =>
    getDefaultBoxProps(index)
  )
  return (
    <div className={style.board_container}>
      {Array.from({ length: 10 }, (_, rowIndex) => (
        <div key={rowIndex} className={style.board_row}>
          {Array.from({ length: 10 }, (_, colIndex) => {
            const boxIndex = rowIndex * 10 + colIndex

            return (
              <div key={boxIndex} className={style.board_cell}>
                {boxIndex < boxesData.length ? (
                  <Box {...boxesData[boxIndex]} />
                ) : (
                  <div className={style.empty_space} />
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Board
