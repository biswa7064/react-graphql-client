import { useMutation, useQuery } from "@apollo/client"
import { GET_HOTELS } from "../graphql/queries"
import { HotelsType } from "../types/HotelTypes"
import { ADD_HOTEL } from "../graphql/queries/hotelQueries"

export default function useHotels() {
	const [
		addHotel,
		{ data: addedHotel, loading: addHotelLoading, error: addHotelError },
	] = useMutation(ADD_HOTEL)

	const {
		data: hotelsData,
		error: getHotelsError,
		loading: getHotelsLoading,
	} = useQuery<HotelsType>(GET_HOTELS)

	return {
		getHotelsLoading,
		getHotelsError,
		hotelsData,
		addHotel,
		addedHotel,
		addHotelLoading,
		addHotelError,
	}
}
