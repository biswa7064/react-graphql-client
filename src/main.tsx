import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import GraphqlWrapper from "./components/core/GraphqlWrapper"
import UserContextProvider from "./components/contexts/UserContextProvider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<UserContextProvider>
			<GraphqlWrapper>
				<App />
			</GraphqlWrapper>
		</UserContextProvider>
	</React.StrictMode>
)
