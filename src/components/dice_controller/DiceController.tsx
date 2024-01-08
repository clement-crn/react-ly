const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const rollDiceForPlayer = async (player, setPlayer) => {
  const randomNumber = Math.floor(Math.random() * 12) + 1
  const newPosition = (player.boardPosition + randomNumber) % 40 || 40

  const updateState = (prev) => ({
    ...prev,
    boardPosition: newPosition,
  })

  setPlayer(updateState)

  console.log(player.boardPosition, "boardPosition")
  console.log(randomNumber, "randomNumber")

  return newPosition
}

export const simulateBotDiceRolling = async (bot, setBot) => {
  await delay(2000)

  const newPosition = await rollDiceForPlayer(bot, setBot)

  alert(`${bot.username} rolled dice. New position: ${newPosition}`)
}
