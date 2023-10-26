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
	type CreateHotel {
		address: String
		price: String
		ratings: Float
		image: String
	}
	mutation AddHotel($req: CreateHotel) {
		addHotel(req: $req) {
			hotelID
			address
			ratings
		}
	}
`
