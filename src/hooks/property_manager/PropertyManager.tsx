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
    if (
      player?.boardPosition === 10 ||
      player?.boardPosition === 20 ||
      player?.boardPosition === 30
    )
      return
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
