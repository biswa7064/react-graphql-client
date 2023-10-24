import useHotels from "../hooks/useHotels"

export default function Hotel() {
	const { hotelsData } = useHotels()
	return <div>Hotels:{JSON.stringify(hotelsData)}</div>
}
