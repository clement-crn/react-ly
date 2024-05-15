import sounds from "@/assets/sounds"
import { districtZones } from "@/components/board/const"
import { DistrictZone } from "@/components/board/types"
import { useMainContext } from "@/context/context"

//verifie s'il existe un proprietaire
export const usePropertyManager = () => {
  const { setShowPropertyModal } = useMainContext()
  const { currentPlayerPlaying, allPlayers, setPlayer } = useMainContext()
  const player = allPlayers[currentPlayerPlaying]

  const handleProperty = () => {
    // check if player have the id of his boardPosition into the list of objects player.ownedProperties of type DistrictZone (so we can access the id of the property)
    setShowPropertyModal(true)
    console.log(">>>>>>show property modal")
    console.log(">>>>>>handle property called")
  }

  const buyProperty = () => {
    if (player) {
      sounds.money.play()
      const property = districtZones.find(
        (zone) => zone.id === player.boardPosition
      )
      setPlayer(currentPlayerPlaying, {
        propertiesOwned: [...player.propertiesOwned, property as DistrictZone],
      })
    }
  }

  return { handleProperty, buyProperty }
}
