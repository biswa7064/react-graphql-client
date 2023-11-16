import { ApolloError } from "@apollo/client"
import { renderHook } from "@testing-library/react"
import { MockApolloClient } from "__data__/mockApolloclient"
import useCustomer from "src/hooks/useCustomer"

const querySpy = jest.spyOn(MockApolloClient, "useQuery")
const mockUID = "abc123"
const mockHookResponse = {
	customerByID: {},
	customerByIDLoading: false,
	customerByIDError: undefined,
}
describe(useCustomer, () => {
	beforeEach(() => {
		querySpy.mockImplementation(
			jest.fn().mockReturnValue({ data: {}, loading: false, error: undefined })
		)
	})
	afterEach(() => jest.resetAllMocks())
	it("should call query and return value", () => {
		const { result } = renderHook(() => useCustomer({ uID: mockUID }))
		expect(result.current).toBeDefined()
		expect(result.current).toMatchObject(mockHookResponse)
	})

	it("should call query and return value for loading", () => {
		querySpy.mockImplementation(
			jest.fn().mockReturnValue({ data: {}, loading: true, error: undefined })
		)
		const { result, rerender } = renderHook(() => useCustomer({ uID: mockUID }))
		expect(result.current).toBeDefined()
		expect(result.current.customerByIDLoading).toStrictEqual(true)
		querySpy.mockImplementation(
			jest.fn().mockReturnValue({ data: {}, loading: false, error: undefined })
		)
		rerender()
		expect(result.current).toBeDefined()
		expect(result.current.customerByIDLoading).toStrictEqual(false)
	})

	it("should call query and return value for error", () => {
		querySpy.mockImplementation(
			jest.fn().mockReturnValue({
				data: {},
				loading: false,
				error: new ApolloError({ errorMessage: "apollo error" }),
			})
		)
		const { result, rerender } = renderHook(() => useCustomer({ uID: mockUID }))
		expect(result.current).toBeDefined()
		expect(result.current.customerByIDError?.message).toBeDefined()
		expect(result.current.customerByIDError?.message).toBe("apollo error")
		querySpy.mockImplementation(
			jest.fn().mockReturnValue({ data: {}, loading: false, error: undefined })
		)
		rerender()
		expect(result.current).toBeDefined()
		expect(result.current.customerByIDError).not.toBeDefined()
	})
})
