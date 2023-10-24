import { useEffect, useMemo } from "react"
import "./App.css"
import useUserContext from "./hooks/useUserContext"
import Hotel from "./pages/Hotel"
import Customer from "./pages/Customer"

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
			<Customer />
			<Hotel />
			<h1>Vite + React</h1>
		</div>
	)
}

export default App
