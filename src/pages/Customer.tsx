import useCustomer from "../hooks/useCustomer"
import useUserContext from "../hooks/useUserContext"

export default function Customer() {
	const { user } = useUserContext()
	const { customerByID, customerByIDLoading, customerByIDError } = useCustomer({
		uID: user?.uID,
	})
	if (customerByIDError)
		return (
			<div className="customer-error">
				Error:{JSON.stringify(customerByIDError)}
			</div>
		)
	return (
		<>
			{customerByIDLoading ? (
				<div className="customer-loading">Loading...</div>
			) : (
				<div className="customer-root" data-testid="customer-root">
					Customer:{JSON.stringify(customerByID)}
				</div>
			)}
		</>
	)
}
