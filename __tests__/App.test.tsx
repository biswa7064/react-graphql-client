import * as React from "react"
import App from "src/App"
import {
	render,
	renderHook,
	waitFor,
	screen,
	act,
} from "@testing-library/react"
import { MockedProvider, MockedResponse } from "@apollo/client/testing"
import useHotels from "src/hooks/useHotels"
import useUserContext from "src/hooks/useUserContext"
import Hotel from "src/pages/Hotel"
import { GET_HOTELS } from "src/graphql/queries"

jest.mock("src/hooks/useHotels.ts")
jest.mock("src/hooks/useUserContext.ts")
const mockUseHotels = useHotels as jest.MockedFunction<typeof useHotels>
const mockUseUserContext = useUserContext as jest.MockedFunction<
	typeof useUserContext
>

const mockUser = {
	uID: "abc-1234",
}

const mockHotelsData = {
	hotels: [
		{ hotelID: "1", address: "Hotel 1", ratings: 4, image: "" },
		{ hotelID: "2", address: "Hotel 2", ratings: 5, image: "" },
	],
}

const providerMocks: MockedResponse[] = [
	{
		request: {
			query: GET_HOTELS,
		},
		result: { data: mockHotelsData },
		delay: 500,
	},
]

describe(App, () => {
	let effectSpy: jest.SpyInstance
	let localStorageSpy: jest.SpyInstance
	beforeEach(() => {
		jest.clearAllMocks()
		effectSpy = jest.spyOn(React, "useEffect")
		mockUseHotels.mockImplementation(
			() =>
				({
					hotelsData: mockHotelsData,
				} as any)
		)
		mockUseUserContext.mockImplementation(() => ({
			user: mockUser,
			setUser: jest.fn(),
		}))
		localStorageSpy = jest.spyOn(Object.getPrototypeOf(localStorage), "getItem")
	})

	afterAll(() => {
		jest.restoreAllMocks()
		jest.resetAllMocks()
	})
	it("should correctly render App", () => {
		const { container } = render(<App />)
		const AppElement = container.getElementsByClassName("App")
		expect(container).toBeInTheDocument()
		expect(AppElement.length).toBe(1)
	})

	it("should call both context hand hotels hooks", async () => {
		const { result, unmount } = renderHook(mockUseUserContext)
		await waitFor(() =>
			result.current.setUser((pre) => ({ ...pre, uID: mockUser.uID }))
		)
		render(<App />)
		expect(mockUseHotels).toHaveBeenCalled()
		expect(mockUseUserContext).toHaveBeenCalled()
		expect(result.current.user).toMatchObject(mockUser)
		expect(effectSpy).toHaveBeenCalled()
		unmount()
	})

	it("should cover useEffect hook", () => {
		expect(localStorage.getItem("currentUserUID")).toBe(null)
		localStorageSpy.mockReturnValue("demo-id")
		render(<App />)
		expect(localStorageSpy).toHaveBeenCalled()
		expect(localStorage.getItem("currentUserUID")).toBe("demo-id")
		expect(localStorage.getItem("currentUserUID")).not.toBe(null)
	})

	it("should wrap with apollo provider and give data", async () => {
		// render with MockedProvider from @apollo/client
		// addTypename = false to prevent @apollo/client from automatically adding special type field to every object
		render(
			<MockedProvider addTypename={false} mocks={providerMocks}>
				<Hotel />
			</MockedProvider>
		)
		expect(await screen.findByText(`Ratings: ${5}`)).toBeInTheDocument()
	})
	it("should wrap with apollo provider and give loading elements in the document", async () => {
		mockUseHotels.mockReturnValue({
			getHotelsLoading: true,
		} as any)
		// render with MockedProvider from @apollo/client
		// addTypename = false to prevent @apollo/client from automatically adding special type field to every object
		render(
			<MockedProvider addTypename={false} mocks={providerMocks}>
				<Hotel />
			</MockedProvider>
		)
		expect(screen.getByTestId("loading-hotels").textContent).toBe("Loading....")
		mockUseHotels.mockReset()
	})
})
