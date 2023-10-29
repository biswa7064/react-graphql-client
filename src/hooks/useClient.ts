import fetch from "cross-fetch"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import useUserContext from "./useUserContext"

const useClient = () => {
	const baseUrl = `http://localhost:8080/graphql`
	const { user } = useUserContext()
	const client = new ApolloClient({
		link: new HttpLink({ uri: `${baseUrl}/${user?.uID}`, fetch }),
		cache: new InMemoryCache(),
	})
	return { client }
}

export default useClient
