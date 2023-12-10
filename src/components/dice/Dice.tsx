const launchDice = async (player: Player) => {
  const randomNumber = Math.floor(Math.random() * 12) + 1

  for (let i = player.boardPosition + 1; i <= randomNumber; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(i)
  }
}

export default launchDice
