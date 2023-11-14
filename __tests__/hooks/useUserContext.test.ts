import useUserContext from "src/hooks/useUserContext"
import * as React from "react"
import { renderHook } from "@testing-library/react"

let contextSpy = jest.spyOn(React, "useContext")

describe(useUserContext, () => {
	beforeEach(() => {
		contextSpy.mockImplementation(() => {
			return {
				user: { uID: "" },
				setUser: jest.fn(),
			}
		})
	})

	afterEach(() => jest.clearAllMocks())
	it("should return initial value", () => {
		const expectedReturn = {
			uID: "",
		}
		const { result } = renderHook(useUserContext)
		expect(result.current.user).toMatchObject(expectedReturn)
	})

	it("should return proper user value", () => {
		const expectedReturn = {
			uID: "abc123",
		}
		contextSpy.mockImplementation(() => ({
			user: { uID: "abc123" },
		}))
		const { result } = renderHook(useUserContext)
		expect(result.current.user).toMatchObject(expectedReturn)
	})
})
