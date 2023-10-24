import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import client from "./graphql/client"
import GraphqlWrapper from "./components/core/GraphqlWrapper"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GraphqlWrapper client={client}>
			<App />
		</GraphqlWrapper>
	</React.StrictMode>
)
