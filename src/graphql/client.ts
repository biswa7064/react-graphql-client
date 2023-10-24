import { ApolloClient, InMemoryCache } from "@apollo/client"

const baseUrl = `http://localhost:8080/graphql`
// configure using url & cache
const client = new ApolloClient({
	uri: `${baseUrl}/abc123`,
	cache: new InMemoryCache(),
})

export default client
