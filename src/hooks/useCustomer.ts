import { useQuery } from "@apollo/client"
import { GET_CUSTOMER_BY_ID } from "../graphql/queries/customerQueries"

interface UseCustomerPropType {
	uID: string
}
function useCustomer({ uID }: UseCustomerPropType) {
	const {
		data: customerByID,
		loading: customerByIDLoading,
		error: customerByIDError,
	} = useQuery(GET_CUSTOMER_BY_ID, { variables: { cId: uID } })
	return {
		customerByID,
		customerByIDLoading,
		customerByIDError,
	}
}

export default useCustomer
