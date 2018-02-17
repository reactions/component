module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "ReactComponentComponent",
      externals: {
        react: "React"
      }
    }
  }
};
