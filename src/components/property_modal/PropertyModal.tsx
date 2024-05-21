import { useMainContext } from "@/context/context"
import { districtZones } from "@/components/board/const"
import { usePropertyManager } from "@/hooks/property_manager/PropertyManager"
import { useEffect } from "react"

const PropertyModal = () => {
  const {
    allPlayers,
    currentPlayerPlaying,
    showPropertyModal,
    zoneClickedFromBoard,
    setShowPropertyModal,
    setZoneClickedFromBoard,
  } = useMainContext()
  const { buyProperty } = usePropertyManager()

  const player = allPlayers[currentPlayerPlaying]

  const currentPlayerZone = districtZones.find(
    (zone) => zone.id === player?.boardPosition
  )
  const zonePickedFromBoardToShow = districtZones.find(
    (zone) => zone.id === zoneClickedFromBoard
  )
  console.log("zonePickedFromBoard", zonePickedFromBoardToShow)

  useEffect(() => {
    console.log("zonePickedFromBoardToShow", zonePickedFromBoardToShow)
  }, [zonePickedFromBoardToShow])

  useEffect(() => {
    console.log(
      "zonePickedFromBoardToShow.name",
      zonePickedFromBoardToShow?.name
    )
  }, [])

  if (
    player?.boardPosition === 10 ||
    player?.boardPosition === 20 ||
    player?.boardPosition === 30
  ) {
    return null
  }
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
              onClick={() => {
                setShowPropertyModal(false)
                setZoneClickedFromBoard(-1)
              }}
            >
              X
            </button>
          </div>
          <div style={{ textAlign: "center" }}>
            {isPropertyOwned ? (
              zonePickedFromBoardToShow?.id === undefined ? (
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Vous possédez cette propriété
                </p>
              ) : null
            ) : null}

            {zonePickedFromBoardToShow?.id === undefined ? (
              <>
                <div
                  style={{
                    width: "100%",
                    backgroundColor: currentPlayerZone?.color,
                    height: "50px",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginTop: "20px",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  {currentPlayerZone?.name}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#666",
                    marginBottom: "20px",
                  }}
                >
                  Prix : {currentPlayerZone?.price}
                </p>
              </>
            ) : (
              zonePickedFromBoardToShow && (
                <>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: zonePickedFromBoardToShow?.color,
                      height: "50px",
                    }}
                  ></div>
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginTop: "20px",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                    }}
                  >
                    {zonePickedFromBoardToShow.name}
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "#666",
                      marginBottom: "20px",
                    }}
                  >
                    Prix : {zonePickedFromBoardToShow.price}
                  </p>
                </>
              )
            )}
          </div>
          {!isPropertyOwned && zonePickedFromBoardToShow?.id === undefined && (
            <div style={{ textAlign: "center", marginTop: "auto" }}>
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
                onClick={() => {
                  buyProperty()
                }}
              >
                Acheter
              </button>
            </div>
          )}
          <div
            style={{
              borderTop: "2px solid #000",
              textAlign: "center",
              marginTop: "20px",
            }}
          ></div>
        </div>
      </div>
    )
  )
}

export default PropertyModal
