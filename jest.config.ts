export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	modulePaths: ["./src"],
	roots: ["./__tests__"],
	testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	verbose: true,
	moduleNameMapper: {
		".(css|less)$": "<rootDir>/__data__/emptyModule.ts",
		// ".(css|less)$": "<rootDir>/__data__/identity-obj-proxy", this one using the third party package to ignore css files
	},
}
