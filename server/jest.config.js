module.exports = {
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testTimeout: 10000, // Aumenta o tempo limite dos testes para evitar falhas por demora
};
