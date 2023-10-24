import { GetResponseType } from "./types"

class RootService {
	getData = async <T>(url: string): Promise<GetResponseType<T>> => {
		try {
			const resp = await fetch(url)
			const json = await resp?.json()
			return { status: json?.status || 200, data: json }
		} catch (error) {
			const err = error as Error
			return {
				status: 500,
				errMsg: err?.message,
			}
		}
	}
}

export default new RootService()
