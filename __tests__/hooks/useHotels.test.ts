import * as ApolloClient from "@apollo/client"
import useHotels from "../../src/hooks/useHotels"
import { ADD_HOTEL, GET_HOTELS } from "src/graphql/queries/hotelQueries"

jest.mock("@apollo/client")
let spyMutation = jest.spyOn(ApolloClient, "useMutation")
let spyQuery = jest.spyOn(ApolloClient, "useQuery")
const mockAddHotel = jest.fn()

const mockReturnedValue: ReturnType<typeof useHotels> = {
	getHotelsLoading: false,
	getHotelsError: undefined,
	hotelsData: [] as any,
	addedHotel: {},
	addHotel: jest.fn(),
	addHotelError: undefined,
	addHotelLoading: false,
}

describe(useHotels, () => {
	beforeEach(() => {
		jest.clearAllMocks()
		spyMutation.mockImplementation(
			jest
				.fn()
				.mockReturnValue([
					mockAddHotel,
					{ loading: false, data: {}, error: undefined },
				])
		)
		spyQuery.mockImplementation(
			jest.fn().mockReturnValue({ loading: false, data: [], error: undefined })
		)
	})
	afterEach(() => {})
	afterAll(() => {
		jest.resetAllMocks()
	})
	it("should successfully return from hook", () => {
		const data = useHotels()
		expect(spyMutation).toHaveBeenCalled()
		expect(spyMutation).toHaveBeenCalledWith(ADD_HOTEL)
		expect(spyQuery).toHaveBeenCalled()
		expect(spyQuery).toHaveBeenCalledWith(GET_HOTELS)
		expect(JSON.stringify(data)).toStrictEqual(
			JSON.stringify(mockReturnedValue)
		)
	})
})
