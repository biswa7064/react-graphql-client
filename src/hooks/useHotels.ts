import { useQuery } from "@apollo/client"
import { GET_HOTELS } from "../graphql/queries"

export default function useHotels() {
	const {
		data: hotelsData,
		error: getHotelsError,
		loading: getHotelsLoading,
	} = useQuery(GET_HOTELS)
	return {
		getHotelsLoading,
		getHotelsError,
		hotelsData,
	}
}
