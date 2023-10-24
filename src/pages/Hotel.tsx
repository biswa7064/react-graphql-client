import useHotels from "../hooks/useHotels"

export default function Hotel() {
	const { hotelsData, getHotelsError, getHotelsLoading } = useHotels()
	console.log({ getHotelsError, getHotelsLoading })
	return <div>Hotels:{JSON.stringify(hotelsData)}</div>
}
