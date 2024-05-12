import { useMainContext } from "@/context/context"
import { districtZones } from "@/components/board/const"

const PropertyModal = () => {
  const {
    allPlayers,
    currentPlayerPlaying,
    showPropertyModal,
    setShowPropertyModal,
  } = useMainContext()

  const player = allPlayers[currentPlayerPlaying]
  const currentZone = districtZones.find(
    (zone) => zone.id === player?.boardPosition
  )

  return (
    showPropertyModal && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          {" "}
          <button onClick={() => setShowPropertyModal(false)}>X</button>
          <h3>Ce bien n'a pas de proprietaire</h3>
          {currentZone && (
            <>
              <p>{currentZone.name}</p>
              <p>{currentZone.price}</p>
            </>
          )}
        </div>
      </div>
    )
  )
}

export default PropertyModal
