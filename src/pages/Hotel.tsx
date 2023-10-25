import useHotels from "../hooks/useHotels"

export default function Hotel() {
	const { hotelsData, getHotelsLoading } = useHotels()
	console.log({ hotelsData })
	return (
		<div>
			{getHotelsLoading ? (
				<div>Loading....</div>
			) : (
				<div className="hotelRoot">
					{hotelsData?.hotels?.map((hotelData) => (
						<ul key={hotelData?.hotelID}>
							<li>{hotelData?.address}</li>
						</ul>
					))}
				</div>
			)}
		</div>
	)
}
