import { ChangeEvent, ComponentProps, useState } from "react"
import AddHotelForm from "../components/AddHotelForm"
import useHotels from "../hooks/useHotels"

type HotelToAddType = ComponentProps<typeof AddHotelForm>["hotelToAdd"]

export default function Hotel() {
	const { hotelsData, getHotelsLoading, addHotel, addHotelLoading } =
		useHotels()
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

	return (
		<div>
			<AddHotelForm
				hotelToAdd={hotelToAdd}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				isAddHotelLoading={addHotelLoading}
			/>

			{getHotelsLoading ? (
				<div data-testid="loading-hotels">
					<p>Loading....</p>
				</div>
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
