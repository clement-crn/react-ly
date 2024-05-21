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

export type Chest = {
  id: number
  name: string
  coordinates: {
    top: string
    left: string
    width: string
    height: string
  }
}
export type TaxZone = {
  id: number
  name: string
  coordinates: {
    top: string
    left: string
    width: string
    height: string
  }
}

export type CyberCafe = {
  id: number
  name: string
  coordinates: {
    top: string
    left: string
    width: string
    height: string
  }
}

export type LuckZone = {
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
  color:
    | "light_blue"
    | "dark_blue"
    | "green"
    | "yellow"
    | "red"
    | "purple"
    | "orange"
    | "pink"
    | "brown"
  coordinates: {
    top: string
    left: string
    width: string
    height: string
  }
  ownerName?: string
}
