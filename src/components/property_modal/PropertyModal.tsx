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

  const isPropertyOwned = player?.propertiesOwned?.some(
    (property) => property.id === player.boardPosition
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
            border: "2px solid #000",
            borderRadius: "8px",
            padding: "20px",
            width: "250px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", top: "5px", right: "5px" }}>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                fontSize: "20px",
              }}
              onClick={() => setShowPropertyModal(false)}
            >
              X
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            {isPropertyOwned ? (
              <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                Vous possédez cette propriété
              </p>
            ) : (
              <button
                style={{
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Acheter
              </button>
            )}
            {currentZone && (
              <>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  {currentZone.name}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#666",
                    marginBottom: "20px",
                  }}
                >
                  Prix : {currentZone.price}
                </p>
              </>
            )}
          </div>
          <div
            style={{
              borderTop: "2px solid #000",
              textAlign: "center",
              paddingTop: "10px",
            }}
          ></div>
        </div>
      </div>
    )
  )
}

export default PropertyModal