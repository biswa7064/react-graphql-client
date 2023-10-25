export interface HotelType {
	hotelID: string
	address: string
	image: string
	ratings: number
}

export interface HotelsType {
	hotels: HotelType[]
}
