import { render, screen, fireEvent } from "@testing-library/react"
import UserContextProvider, {
	UserContext,
	UserType,
} from "src/components/contexts/UserContextProvider"
import * as MockReact from "react"
const mockUser = { uID: "" }
const TestComponent = () => {
	const { user, setUser } = MockReact.useContext(UserContext)
	return (
		<div>
			<p>UserUID: {user.uID ? user.uID : "default123"}</p>
			<button
				type="button"
				role="button"
				onClick={() =>
					setUser((pre) => ({
						...pre,
						uID: "update123",
					}))
				}
			>
				Update User
			</button>
		</div>
	)
}
describe(UserContextProvider, () => {
	beforeEach(() => {
		jest.clearAllMocks()
	})

	afterEach(() => jest.restoreAllMocks())
	it("should properly render the context provider with initially value", () => {
		render(<UserContextProvider children={<TestComponent />} />)
		expect(screen.getByText(`UserUID: ${"default123"}`)).toBeInTheDocument()
	})
	it("should properly render the context provider after update", () => {
		render(<UserContextProvider children={<TestComponent />} />)
		expect(screen.getByText(`UserUID: ${"default123"}`)).toBeInTheDocument()
		fireEvent.click(screen.getByText("Update User"))
		expect(screen.getByText(`UserUID: ${"update123"}`)).toBeInTheDocument()
	})
})
