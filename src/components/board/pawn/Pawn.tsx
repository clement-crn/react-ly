import style from "./Pawn.module.css"

type PawnProps = {
  playerId: number
}

const Pawn = ({ playerId }: PawnProps) => {
  let shape, color
  switch (playerId) {
    case 2:
      shape = "square"
      color = "blue"
      break
    case 3:
      shape = "triangle"
      color = "green"
      break
    case 4:
      shape = "star"
      color = "yellow"
      break
    default:
      shape = "circle"
      color = "red"
      break
  }

  return (
    <div
      className={`${style.pawn} ${style[shape]}`}
      style={{ backgroundColor: color }}
    >
      {color}
    </div>
  )
}

export default Pawn
