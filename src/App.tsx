import "./App.css"
import { useCallback, useEffect, useState } from "react"
import TodoService from "./services/todoService"

function App() {
	const [td, setTd] = useState<
		{ id: string | number; title: string; description: string }[] | undefined
	>([])

	const getTd = useCallback(async () => {
		const d = await TodoService.getTodo()
		setTd(d?.data?.data)
	}, [])

	useEffect(() => {
		let isMount = true
		isMount && getTd()
		return () => {
			isMount = false
		}
	}, [])
	console.log({ td })
	return (
		<div className="App">
			{td && td.map((item) => <p key={item?.id}>{item?.title}</p>)}
			<h1>Vite + React</h1>
		</div>
	)
}

export default App
