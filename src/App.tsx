import { useEffect, useMemo } from "react"
import "./App.css"
import useUserContext from "./hooks/useUserContext"
import Hotel from "./pages/Hotel"
import { ApolloProvider } from "@apollo/client"
import useClient from "./hooks/useClient"

function App() {
	const { client } = useClient()
	const { setUser } = useUserContext()
	const userIDFromLocalStorage = useMemo(
		() => localStorage.getItem("currentUserUID"),
		[]
	)
	useEffect(() => {
		if (userIDFromLocalStorage) {
			setUser((pre) => ({
				...pre,
				uID: userIDFromLocalStorage,
			}))
		}
	}, [userIDFromLocalStorage])
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<Hotel />
			</div>
		</ApolloProvider>
	)
}

export default App
