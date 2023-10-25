import { useQuery } from "@apollo/client"
import { GET_HOTELS } from "../graphql/queries"
import { HotelsType } from "../types/HotelTypes"

export default function useHotels() {
	const {
		data: hotelsData,
		error: getHotelsError,
		loading: getHotelsLoading,
	} = useQuery<HotelsType>(GET_HOTELS)
	return {
		getHotelsLoading,
		getHotelsError,
		hotelsData,
	}
}
