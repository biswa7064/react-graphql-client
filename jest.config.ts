export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	rootDir: ".",
	roots: ["<rootDir>/__tests__/"],
	modulePaths: ["<rootDir>", "<rootDir>/src"],
	testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
	setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
	verbose: true,
	moduleNameMapper: {
		"^src/(.*)$": "<rootDir>/src/$1",
		".(css|less)$": "<rootDir>/__data__/emptyModule.ts",
		// ".(css|less)$": "<rootDir>/__data__/identity-obj-proxy", this one using the third party package to ignore css files
	},
	moduleDirectories: ["node_modules", "src"],
}
