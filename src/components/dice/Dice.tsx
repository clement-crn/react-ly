import React, { useState } from "react"

const Dice = () => {
  const [throwResult, setThrowResult] = useState<number>()

  /** fonction throwdices
   *
   * -trouver 2 entiers aleatoires entre 1 et 6
   * -on veut les additionner
   * -mettre a jour l'index du joueur => (qui est le joueur ? argument)
   *
   *
   * -position du joueur (context)
   * -resultat du jet des des (local)
   * -
   */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const throwDices = () => {
    const test = Math.random()
    setThrowResult(test)
    console.log(throwResult)
  }

  /**fonction indentifyType
   * -doit distinguer case Corner OU case District
   *
   */

  return <div></div>
}

export default Dice
