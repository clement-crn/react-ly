import { useMainContext } from "@/context/context"

//verifie s'il existe un proprietaire
export const usePropertyScan = () => {
  const { listOfOwnedProperties, allPlayers, setPlayer } = useMainContext()

  const isPropertyOwned = () => {
    //i want to know if a player username is is one or few properties in listOfOwnedProperties

    
  }

  return { isPropertyOwned }
}
