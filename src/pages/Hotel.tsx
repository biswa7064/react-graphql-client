import { ChangeEvent, ComponentProps, useState } from "react"
import AddHotelForm from "../components/AddHotelForm"
import useHotels from "../hooks/useHotels"

type HotelToAddType = ComponentProps<typeof AddHotelForm>["hotelToAdd"]

export default function Hotel() {
	const {
		hotelsData,
		getHotelsLoading,
		addHotel,
		addedHotel,
		addHotelLoading,
		addHotelError,
	} = useHotels()
	const [hotelToAdd, setHotelToAdd] = useState<HotelToAddType>({
		address: "",
		image: "",
		price: "",
		ratings: 1,
	})

	const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
		setHotelToAdd((pre) => ({
			...pre,
			[ev.target.name]:
				ev.target.name === "ratings" ? +ev.target.value : ev.target.value,
		}))
	}
	const handleSubmit = () => {
		const variables = {
			req: { ...hotelToAdd },
		}
		addHotel({ variables })
	}
	console.log({ addedHotel, addHotelLoading, addHotelError })
	return (
		<div>
			<AddHotelForm
				hotelToAdd={hotelToAdd}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				isAddHotelLoading={addHotelLoading}
			/>
			{getHotelsLoading ? (
				<div>Loading....</div>
			) : (
				<div className="hotel hotel_container display_grid">
					{hotelsData?.hotels?.map((hotelData) => (
						<div key={hotelData?.hotelID} className="hotel_card">
							<p>{hotelData?.address}</p>
							<p>{"Ratings: " + hotelData?.ratings}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
