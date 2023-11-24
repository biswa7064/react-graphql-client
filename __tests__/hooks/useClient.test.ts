import { HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "cross-fetch"
import { MockApolloClient } from "__data__/mockApolloclient"
import useClient from "src/hooks/useClient"
import { renderHook } from "@testing-library/react"

const mockUrl = "http://localhost:8080/graphql"

describe(useClient, () => {
	let mockClient: jest.SpyInstance
	let mockClientFn: jest.Mock
	beforeEach(() => {
		mockClientFn = jest.fn().mockReturnValue({
			link: new HttpLink({ uri: mockUrl, fetch }),
			cache: new InMemoryCache(),
		})
		mockClient = jest
			.spyOn(MockApolloClient, "ApolloClient")
			.mockImplementation(mockClientFn)
	})
	afterAll(() => {
		jest.resetAllMocks()
	})
	it("should return correct value", () => {
		const { result } = renderHook(useClient)
		expect(result.current.client).toBeDefined()
		expect(result.current.client.link).toBeInstanceOf(HttpLink)
		expect(result.current.client.cache).toBeInstanceOf(InMemoryCache)
		expect(mockClient).toHaveBeenCalled()
	})
})
