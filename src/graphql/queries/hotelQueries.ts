import { gql } from "@apollo/client"

export const GET_HOTELS = gql`
	query GetHotels {
		hotels {
			hotelID
			address
		}
	}
`
