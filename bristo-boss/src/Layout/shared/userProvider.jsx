import { useContext } from "react"
import { contextProvide } from "../../AuthContext/UserContext"


const Provideruser = () => {
  const {user} = useContext(contextProvide);
  console.log(user)
  return user;
}

export default Provideruser