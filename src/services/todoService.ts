import { default as RootService } from "./index"

interface TodoType {
	id: string | number
	title: string
	description: string
}
export default class TodoService {
	static getTodo = async () => {
		return await RootService.getData<{ data: TodoType[] }>(
			"http://localhost:9000/todos/get-todos"
		)
	}
}
