import { ApolloProvider } from "@apollo/client"
import { FC, ReactNode } from "react"
import baseClient from "../../graphql/client"
import useUserContext from "../../hooks/useUserContext"

interface GraphQlWrapperPropsType {
	children: ReactNode
}
const GraphqlWrapper: FC<GraphQlWrapperPropsType> = ({ children }) => {
	const { user } = useUserContext()
	const client = baseClient(user?.uID)
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GraphqlWrapper
