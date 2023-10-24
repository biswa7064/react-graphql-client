import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { ApolloClient, InMemoryCache } from "@apollo/client/core"
import { ApolloProvider } from "@apollo/client/react"

const client = new ApolloClient({
	uri: "http://localhost:9000/todos/get-todos",
	cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
)
