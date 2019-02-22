module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    
    // Prevent errors from v-for loops containing variables used in child iterables.
    // Only affects templates - does not affect unused variables within component code.
    "vue/no-unused-vars": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
