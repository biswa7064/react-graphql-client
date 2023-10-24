export interface GetResponseType<T> {
	status: number
	data?: T
	errMsg?: string
}
