import { gql } from "@apollo/client"

export const GET_HOTELS = gql`
	query GetHotels {
		hotels {
			hotelID
			address
			ratings
		}
	}
`

export const ADD_HOTEL = gql`
	mutation AddHotel($req: CreateHotel) {
		addHotel(req: $req) {
			hotelID
			price
			ratings
			address
		}
	}
`
