module.exports = {
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json",
        },
    },
    moduleFileExtensions: ["ts", "js"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    coveragePathIgnorePatterns: ["/node_modules/"],
    testMatch: ["**/__tests__/*.+(ts|tsx|js)"],
    testEnvironment: "node",
    verbose: true,
};
