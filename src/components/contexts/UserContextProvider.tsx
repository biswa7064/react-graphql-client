import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from "react"

interface UserType {
	uID: string
}
export interface UserContextType {
	user: UserType
	setUser: Dispatch<SetStateAction<UserType>>
}
export const UserContext = createContext<UserContextType>({} as UserContextType)
const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [user, setUser] = useState({ uID: "" })
	const value = { user, setUser }
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContextProvider
