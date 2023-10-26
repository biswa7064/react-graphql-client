import { useEffect, useMemo } from "react"
import "./App.css"
import useUserContext from "./hooks/useUserContext"
import Hotel from "./pages/Hotel"

function App() {
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
		<div className="App">
			<Hotel />
		</div>
	)
}

export default App
