import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import UserContextProvider from "./components/contexts/UserContextProvider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<UserContextProvider>
			<App />
		</UserContextProvider>
	</React.StrictMode>
)
