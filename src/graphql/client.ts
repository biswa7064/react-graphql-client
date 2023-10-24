import { ApolloClient, InMemoryCache } from "@apollo/client"

const baseUrl = `http://localhost:8080/graphql`
// configure using url & cache
const client = new ApolloClient({
	uri: baseUrl,
	cache: new InMemoryCache(),
})

export default client
