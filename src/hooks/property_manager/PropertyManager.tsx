import { useMainContext } from "@/context/context"

//verifie s'il existe un proprietaire
export const usePropertyManager = () => {
  const { allPlayers, currentPlayerPlaying, setPlayer } = useMainContext()
  const player = allPlayers[currentPlayerPlaying]

  const handleProperty = () => {
    //check if player have the id of his boardPosition into the list of objects player.ownedProperties of type DistrictZone (so we can access the id of the property)
    const isPropertyOwned = player?.propertiesOwned.some(
      (property) => property.id === player.boardPosition
    )
  }

  return { isPropertyOwned }
}
