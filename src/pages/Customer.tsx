import useCustomer from "../hooks/useCustomer"
import useUserContext from "../hooks/useUserContext"

export default function Customer() {
	const { user } = useUserContext()
	const { customerByID } = useCustomer({ uID: user?.uID })
	return <div>Customer:{JSON.stringify(customerByID)}</div>
}
