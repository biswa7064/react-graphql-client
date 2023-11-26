import { render, renderHook, screen } from "@testing-library/react"
import { MockApolloClient } from "__data__/mockApolloclient"
import useCustomer from "src/hooks/useCustomer"
import Customer from "src/pages/Customer"
import * as MockReact from "react"
import useUserContext from "src/hooks/useUserContext"

describe(Customer, () => {
	let querySpy: jest.SpyInstance
	let contextSpy: jest.SpyInstance
	beforeEach(() => {
		querySpy = jest.spyOn(MockApolloClient, "useQuery")
		contextSpy = jest.spyOn(MockReact, "useContext")
		contextSpy.mockImplementation(
			jest.fn().mockReturnValue({ user: { uID: "mock123" } })
		)
	})

	afterEach(() => {
		jest.restoreAllMocks()
	})
	it("should render properly", () => {
		querySpy.mockImplementation(
			jest.fn().mockReturnValue({ data: {}, loading: false, error: undefined })
		)
		const { result: contextResult } = renderHook(useUserContext)
		const { result } = renderHook(() =>
			useCustomer({ uID: contextResult.current.user.uID })
		)
		const { container } = render(<Customer />)
		const CustomerRoot = container.getElementsByClassName("customer-root")
		expect(container).toBeDefined()
		expect(CustomerRoot.length).toBe(1)
		expect(
			screen.getByText(
				`Customer:${JSON.stringify(result.current.customerByID)}`
			)
		).toBeInTheDocument()
		expect(result.current.customerByIDLoading).toBeFalsy()
		expect(contextResult.current.user.uID).toStrictEqual("mock123")
	})

	// loading state
	it("should render properly with loading state", () => {
		querySpy.mockImplementation(
			jest.fn().mockReturnValue({ data: {}, loading: true, error: undefined })
		)
		const { result } = renderHook(() => useCustomer({ uID: "abc123" }))
		const { container } = render(<Customer />)
		expect(container).toBeDefined()
		const CustomerLoadingEl =
			container.getElementsByClassName("customer-loading")
		expect(CustomerLoadingEl.length).toBe(1)
		expect(screen.getByText(`Loading...`)).toBeInTheDocument()
		expect(result.current.customerByIDLoading).toBeTruthy()
	})

	// error
	it("should render properly with loading state", () => {
		querySpy.mockImplementation(
			jest.fn().mockReturnValue({
				data: {},
				loading: false,
				error: new Error("Something went wrong!!"),
			})
		)
		const { result } = renderHook(() => useCustomer({ uID: "abc123" }))
		const { container } = render(<Customer />)
		expect(container).toBeDefined()
		const CustomerErrorEl = container.getElementsByClassName("customer-error")
		expect(CustomerErrorEl.length).toBe(1)

		expect(
			screen.getByText(
				`Error:${JSON.stringify(result.current.customerByIDError)}`
			)
		).toBeInTheDocument()
		const CustomerLoadingEl =
			container.getElementsByClassName("customer-loading")
		expect(CustomerLoadingEl.length).toBe(0)
		expect(result.current.customerByIDError).toBeDefined()
	})
})
