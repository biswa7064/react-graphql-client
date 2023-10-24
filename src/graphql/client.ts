import { ApolloClient, InMemoryCache } from "@apollo/client"

const baseUrl = `http://localhost:8080/graphql`
// configure using url & cache
const baseClient = (userID: string) => {
	return new ApolloClient({
		uri: `${baseUrl}/${userID}`,
		cache: new InMemoryCache(),
	})
}

export default baseClient
