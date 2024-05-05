import style from "./Pawn.module.css"

type PawnProps = {
  playerId: number
  text?: string
}

const Pawn = ({ playerId, text }: PawnProps) => {
  let shape, color
  switch (playerId) {
    case 1:
      shape = "square"
      color = "blue"
      break
    case 2:
      shape = "triangle"
      color = "green"
      break
    case 3:
      shape = "square"
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
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
        fontWeight: "bold",
      }}
    >
      {text}
    </div>
  )
}

export default Pawn
