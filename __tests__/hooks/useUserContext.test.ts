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
		const { result } = renderHook(() => useUserContext())
		result.current.setUser({ uID: "abc123" })
		expect(result.current.user).toMatchObject(expectedReturn)
	})

	it("should return proper user value", () => {
		const expectedReturn = {
			user: { uID: "abc123" },
			setUser: jest.fn(),
		}
		contextSpy.mockImplementation(() => expectedReturn)
		const { result } = renderHook(() => useUserContext())
		expect(result.current.user).toMatchObject({ uID: "abc123" })
		result.current.setUser({ uID: "newABC123" })
		expect(expectedReturn.setUser).toHaveBeenCalledWith({ uID: "newABC123" })
	})
})
