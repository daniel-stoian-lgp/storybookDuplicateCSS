module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true
  },
  features: {
    postcss: false,
    storyStoreV7: true
  },
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls"
  ],
  framework: "@storybook/react",
  typescript: {
    reactDocgen: false
  }
}
