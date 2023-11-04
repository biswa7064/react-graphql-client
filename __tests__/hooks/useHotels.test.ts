import useHotels from "../../src/hooks/useHotels"

describe(useHotels, () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})
	afterEach(() => {})
	afterAll(() => {
		jest.restoreAllMocks()
	})
	it("should give truthy value", () => {
		expect(true).toBeTruthy()
	})
})
