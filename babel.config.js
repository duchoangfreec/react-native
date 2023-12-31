module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          allowUndefined: true,
        },
      ],
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.ts",
            ".ios.tsx",
            ".android.ts",
            ".android.tsx",
            ".ts",
            ".tsx",
            ".js",
            ".jsx",
            ".json",
          ],
        },
      ],
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
