import {
	ApolloClient,
	ApolloProvider,
	NormalizedCacheObject,
} from "@apollo/client"
import { FC, ReactNode } from "react"

interface GraphQlWrapperPropsType {
	children: ReactNode
	client: ApolloClient<NormalizedCacheObject>
}
const GraphqlWrapper: FC<GraphQlWrapperPropsType> = ({ children, client }) => {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default GraphqlWrapper
