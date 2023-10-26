import { ChangeEvent } from "react"
interface HotelToAddType {
	address: string
	image: string
	price: string
	ratings: number
}
interface AddHotelFormPropsType {
	hotelToAdd: HotelToAddType
	handleChange: (ev: ChangeEvent<HTMLInputElement>) => void
	handleSubmit: () => void
	isAddHotelLoading: boolean
}
function AddHotelForm({
	hotelToAdd,
	handleChange,
	handleSubmit,
	isAddHotelLoading,
}: AddHotelFormPropsType) {
	return (
		<div className="hotel_form">
			<p className="text_left">Add Hotel Details:- </p>
			<div className="display_grid">
				{Object.keys(hotelToAdd).map((item) => (
					<input
						type="text"
						value={hotelToAdd[item as keyof typeof hotelToAdd]}
						onChange={handleChange}
						name={item}
						key={item}
						title={item?.toUpperCase()}
						placeholder={item?.toLocaleUpperCase()}
					/>
				))}
				<button
					type="button"
					onClick={() => handleSubmit()}
					disabled={isAddHotelLoading}
				>
					{isAddHotelLoading ? "Loading..." : "SUBMIT"}
				</button>
			</div>
		</div>
	)
}

export default AddHotelForm
