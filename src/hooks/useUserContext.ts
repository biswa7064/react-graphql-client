import { useContext } from "react"
import {
	UserContext,
	UserContextType,
} from "../components/contexts/UserContextProvider"

const useUserContext = () => {
	const { user, setUser } = <UserContextType>useContext(UserContext)
	return {
		user,
		setUser,
	}
}

export default useUserContext
