export type CornerZone = {
  id: number
  name: string
  coordinates: {
    top: string
    left: string
    width: string
    height: string
  }
}

export type DistrictZone = {
  id: number
  name: string
  price: number
  coordinates: {
    top: string
    left: string
    width: string
    height: string
  }
  ownerName?: string
}
