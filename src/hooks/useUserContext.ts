import { useContext } from "react"
import {
	UserContext,
	UserContextType,
} from "../components/contexts/UserContextProvider"

const useUserContext = () => {
	const { user, setUser } = useContext<UserContextType>(UserContext)
	return {
		user,
		setUser,
	}
}

export default useUserContext
