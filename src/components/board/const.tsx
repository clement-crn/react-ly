import {
  Chest,
  CornerZone,
  CyberCafe,
  DistrictZone,
  LuckZone,
  TaxZone,
} from "./types"

export const cornerZone: CornerZone[] = [
  {
    id: 0,
    name: "Départ",
    coordinates: {
      top: "86.5%",
      left: "121.5%",
      width: "18.5%",
      height: "13%",
    },
  },
  {
    id: 10,
    name: "Prison",
    coordinates: {
      top: "86.5%",
      left: "0%",
      width: "18.5%",
      height: "13%",
    },
  },
  {
    id: 20,
    name: "Parking",
    coordinates: {
      top: "0%",
      left: "0%",
      width: "18.5%",
      height: "13%",
    },
  },
  {
    id: 30,
    name: "Allez en prison!",
    coordinates: {
      top: "0%",
      left: "122%",
      width: "18.5%",
      height: "13%",
    },
  },
]

export const chests: Chest[] = [
  {
    id: 2,
    name: "Coffre-fort",
    coordinates: {
      top: "86.5%",
      left: "98%",
      width: "2%",
      height: "13%",
    },
  },
  {
    id: 17,
    name: "Coffre-fort",
    coordinates: {
      top: "29.4%",
      left: "0%",
      width: "18.1%",
      height: "8%",
    },
  },
  {
    id: 33,
    name: "Coffre-fort",
    coordinates: {
      top: "29.3%",
      left: "122%",
      width: "18.1%",
      height: "8%",
    },
  },
]

export const taxZones: TaxZone[] = [
  {
    id: 4,
    name: "LE FISC",
    coordinates: {
      top: "86.5%",
      left: "75.5%",
      width: "11.5%",
      height: "13%",
    },
  },
  {
    id: 38,
    name: "Le fisc :|",
    coordinates: {
      top: "70%",
      left: "122%",
      width: "18%",
      height: "8%",
    },
  },
]
export const cyberCafes: CyberCafe[] = [
  {
    id: 5,
    name: "Cyber Café",
    coordinates: {
      top: "86.5%",
      left: "64.5%",
      width: "11.5%",
      height: "13%",
    },
  },
  {
    id: 15,
    name: "Cyber Café",
    coordinates: {
      top: "45.5%",
      left: "0%",
      width: "18.1%",
      height: "8%",
    },
  },
  {
    id: 25,
    name: "Cyber Café",
    coordinates: {
      top: "0%",
      left: "64.5%",
      width: "11%",
      height: "13%",
    },
  },
  {
    id: 28,
    name: "Escape Game - Cyber Café",
    coordinates: {
      top: "0%",
      left: "99%",
      width: "11%",
      height: "13%",
    },
  },
  {
    id: 35,
    name: "Cyber Café",
    coordinates: {
      top: "45.7%",
      left: "122%",
      width: "18.1%",
      height: "8%",
    },
  },
]

export const luckZones: LuckZone[] = [
  {
    id: 7,
    name: "CHANCE",
    coordinates: {
      top: "86.5%",
      left: "41.5%",
      width: "11.5%",
      height: "13%",
    },
  },
  {
    id: 12,
    name: "CHANCE",
    coordinates: {
      top: "70%",
      left: "0%",
      width: "18%",
      height: "8%",
    },
  },
  {
    id: 22,
    name: "CHANCE",
    coordinates: {
      top: "0%",
      left: "30%",
      width: "11%",
      height: "13%",
    },
  },
  {
    id: 36,
    name: "Chance",
    coordinates: {
      top: "54%",
      left: "122%",
      width: "18%",
      height: "8%",
    },
  },
]

export const districtZones: DistrictZone[] = [
  {
    id: 1,
    name: "Boulevard Haussmann",
    price: 100,
    color: "brown",
    coordinates: {
      top: "86.5%",
      left: "110%",
      width: "12%",
      height: "13%",
    },
  },

  {
    id: 3,
    name: "Impasse Fleurie",
    price: 100,
    color: "brown",
    coordinates: {
      top: "86.5%",
      left: "87%",
      width: "12%",
      height: "13%",
    },
  },
  {
    id: 6,
    name: "Cours Mirabeau",
    price: 100,
    color: "light_blue",
    coordinates: {
      top: "86.5%",
      left: "52.5%",
      width: "11.5%",
      height: "13%",
    },
  },
  {
    id: 8,
    name: "Voie Lactée",
    price: 100,
    color: "light_blue",
    coordinates: {
      top: "86.5%",
      left: "30%",
      width: "11.5%",
      height: "13%",
    },
  },
  {
    id: 9,
    name: "Pont Neuf",
    price: 100,
    color: "light_blue",
    coordinates: {
      top: "86.5%",
      left: "18.5%",
      width: "11.5%",
      height: "13%",
    },
  },

  {
    id: 11,
    name: "Rue Notre-Dame",
    price: 100,
    color: "pink",
    coordinates: {
      top: "78%",
      left: "0%",
      width: "18%",
      height: "8%",
    },
  },

  {
    id: 13,
    name: "Boulevard de Clichy",
    price: 100,
    color: "pink",
    coordinates: {
      top: "62%",
      left: "0%",
      width: "18%",
      height: "8%",
    },
  },
  {
    id: 14,
    name: "Allée des Roses",
    price: 100,
    color: "pink",
    coordinates: {
      top: "54%",
      left: "0%",
      width: "18.1%",
      height: "8%",
    },
  },

  {
    id: 16,
    name: "Route de Grenoble",
    price: 100,
    color: "orange",
    coordinates: {
      top: "37.5%",
      left: "0%",
      width: "18.1%",
      height: "8%",
    },
  },

  {
    id: 18,
    name: "Rue de la Rivière",
    price: 100,
    color: "orange",
    coordinates: {
      top: "21%",
      left: "0%",
      width: "18.1%",
      height: "8%",
    },
  },
  {
    id: 19,
    name: "Rue Trucmuche",
    price: 100,
    color: "orange",
    coordinates: {
      top: "13%",
      left: "0%",
      width: "18.1%",
      height: "8%",
    },
  },
  {
    id: 21,
    name: "Rue de la Vallée",
    price: 100,
    color: "red",
    coordinates: {
      top: "0%",
      left: "18.5%",
      width: "11%",
      height: "13%",
    },
  },

  {
    id: 23,
    name: "Rue de la Chapelle",
    price: 100,
    color: "red",
    coordinates: {
      top: "0%",
      left: "41.5%",
      width: "11%",
      height: "13%",
    },
  },
  {
    id: 24,
    name: "Rue de la Pépinière",
    price: 100,
    color: "red",
    coordinates: {
      top: "0%",
      left: "53%",
      width: "11%",
      height: "13%",
    },
  },

  {
    id: 26,
    name: "Rue de la Cavalerie",
    price: 100,
    color: "yellow",
    coordinates: {
      top: "0%",
      left: "76%",
      width: "11%",
      height: "13%",
    },
  },
  {
    id: 27,
    name: "Rue Wevan Consulting",
    price: 100,
    color: "yellow",
    coordinates: {
      top: "0%",
      left: "87.5%",
      width: "11%",
      height: "13%",
    },
  },

  {
    id: 29,
    name: "MontQuest Games",
    price: 100,
    color: "yellow",
    coordinates: {
      top: "0%",
      left: "110%",
      width: "11.5%",
      height: "13%",
    },
  },
  {
    id: 31,
    name: "Rue Jean Jaurès",
    price: 100,
    color: "green",
    coordinates: {
      top: "13%",
      left: "122%",
      width: "18.1%",
      height: "8%",
    },
  },
  {
    id: 32,
    name: "Rue Gustave Eiffel",
    price: 100,
    color: "green",
    coordinates: {
      top: "21.3%",
      left: "122%",
      width: "18.1%",
      height: "8%",
    },
  },

  {
    id: 34,
    name: "Rue Anatole France",
    price: 100,
    color: "green",
    coordinates: {
      top: "37.5%",
      left: "122%",
      width: "18.1%",
      height: "8%",
    },
  },

  {
    id: 37,
    name: "Rue Antoine de Saint-Exupéry",
    price: 100,
    color: "dark_blue",
    coordinates: {
      top: "62%",
      left: "122%",
      width: "18%",
      height: "8%",
    },
  },

  {
    id: 39,
    name: "Rue Andy Sensei",
    price: 100,
    color: "dark_blue",
    coordinates: {
      top: "78%",
      left: "122%",
      width: "18%",
      height: "8%",
    },
  },
]
