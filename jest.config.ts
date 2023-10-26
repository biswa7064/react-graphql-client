export default {
	preset: "ts-jest",
	testEnvironment: "node",
	modulePaths: ["./src"],
	roots: ["./__tests__"],
	testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
}
