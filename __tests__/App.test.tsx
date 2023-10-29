import App from "../src/App"
import { render } from "@testing-library/react"

jest.mock("../src/hooks/useHotels")

describe(App, () => {
	it("should correctly render App", () => {
		const { container } = render(<App />)
		const AppElement = container.getElementsByClassName("App")
		expect(AppElement.length).toBe(1)
		expect(container).toBeInTheDocument()
	})
})
