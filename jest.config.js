export default {
    preset:"jest-expo",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native" +
      "|@react-native" +
      "|@react-navigation" +
      "|expo" +
      "|expo-modules-core" +
      ")/",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}