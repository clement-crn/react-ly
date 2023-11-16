export type CornerZone = {
  id: number
  name: "Départ" | "Prison" | "Parking" | "Allez en prison!"
  coordinates: {
    top: string
    left: string
    width: string
    height: string
  }
}

export type MainZone = {
  id: number

  coordinates: {
    top: string
    left: string
    width: string
    height: string
  }
}
