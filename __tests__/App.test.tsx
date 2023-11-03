import App from "../src/App"
import { render } from "@testing-library/react"
import useHotels from "../src/hooks/useHotels"

jest.mock("../src/hooks/useHotels.ts")
const mockUseHotels = useHotels as jest.MockedFunction<typeof useHotels>

const mockHotelsData = {
	hotels: [
		{ hotelID: "1", address: "Hotel 1", ratings: 4, image: "" },
		{ hotelID: "2", address: "Hotel 2", ratings: 5, image: "" },
	],
}

describe(App, () => {
	beforeEach(() => {
		jest.clearAllMocks()
		mockUseHotels.mockReturnValue({
			hotelsData: mockHotelsData,
		} as any)
	})
	afterAll(() => {
		jest.resetAllMocks()
	})
	it("should correctly render App", () => {
		const { container } = render(<App />)
		const AppElement = container.getElementsByClassName("App")
		expect(AppElement.length).toBe(1)
		expect(container).toBeInTheDocument()
	})
})
