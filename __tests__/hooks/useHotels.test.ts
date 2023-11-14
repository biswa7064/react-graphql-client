import * as ApolloClient from "@apollo/client"
import useHotels from "../../src/hooks/useHotels"
import { ADD_HOTEL, GET_HOTELS } from "src/graphql/queries/hotelQueries"
import { renderHook } from "@testing-library/react"

jest.mock("@apollo/client")
let spyMutation = jest.spyOn(ApolloClient, "useMutation")
let spyQuery = jest.spyOn(ApolloClient, "useQuery")
const mockAddHotel = jest.fn()

const mockReturnedValue: ReturnType<typeof useHotels> = {
	getHotelsLoading: false,
	getHotelsError: undefined,
	hotelsData: [] as any,
	addedHotel: {},
	addHotel: mockAddHotel,
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
		const { result } = renderHook(useHotels)
		expect(spyMutation).toHaveBeenCalled()
		expect(spyMutation).toHaveBeenCalledWith(ADD_HOTEL)
		expect(spyQuery).toHaveBeenCalled()
		expect(spyQuery).toHaveBeenCalledWith(GET_HOTELS)
		expect(JSON.stringify(result.current)).toStrictEqual(
			JSON.stringify(mockReturnedValue)
		)
	})

	it("should return correct response based on query call", () => {
		const expectedHookResponse = {
			...mockReturnedValue,
			getHotelsLoading: true,
			addHotelLoading: true,
		}
		spyMutation.mockImplementation(
			() => [mockAddHotel, { loading: true, data: {}, error: undefined }] as any
		)
		spyQuery.mockImplementation(
			jest.fn().mockReturnValue({
				loading: true,
				data: [],
				error: undefined,
			})
		)
		const { result } = renderHook(useHotels)
		expect(JSON.stringify(result.current)).toStrictEqual(
			JSON.stringify(expectedHookResponse)
		)
		expect(result.current.addHotelLoading).toEqual(true)
		expect(result.current.getHotelsLoading).toEqual(true)
		expect(spyMutation).toHaveBeenCalled()
		expect(spyQuery).toHaveBeenCalled()
	})
})
