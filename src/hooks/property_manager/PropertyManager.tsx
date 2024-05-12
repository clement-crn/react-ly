import { useMainContext } from "@/context/context"

//verifie s'il existe un proprietaire
export const usePropertyManager = () => {
  const { allPlayers, currentPlayerPlaying, setShowPropertyModal } =
    useMainContext()
  const player = allPlayers[currentPlayerPlaying]

  const handleProperty = () => {
    // check if player have the id of his boardPosition into the list of objects player.ownedProperties of type DistrictZone (so we can access the id of the property)
    const isPropertyOwned = player?.propertiesOwned.some(
      (property) => property.id === player.boardPosition
    )
    if (!isPropertyOwned) {
      setShowPropertyModal(true)
      console.log(">>>>>>show property modal")
    } else {
      alert("Ce bien est deja possede par un autre joueur")
    }

    console.log(">>>>>>handle property called")
    console.log(">>>>>>isPropertyOwned", isPropertyOwned)
  }

  return { handleProperty }
}
