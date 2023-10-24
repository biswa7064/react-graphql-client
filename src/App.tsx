import "./App.css"
import useUserContext from "./hooks/useUserContext"
import Hotel from "./pages/Hotel"

function App() {
	const { user } = useUserContext()
	console.log({ user })
	return (
		<div className="App">
			<Hotel />
			<h1>Vite + React</h1>
		</div>
	)
}

export default App
