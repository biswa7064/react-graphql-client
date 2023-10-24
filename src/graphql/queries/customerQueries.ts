import { gql } from "@apollo/client"

export const GET_CUSTOMER_BY_ID = gql`
	query GetCustomerByID($cId: String!) {
		customerByID(cID: $cId) {
			customerID
			name
			role
		}
	}
`
