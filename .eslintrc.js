module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  "overrides": [
    {
      "files": ["nuxt.config.js", "store/*.js"],
      "rules": {
        "no-param-reassign": [
          "error",
          {
            "props": true,
            "ignorePropertyModificationsFor": ["config", "state"]
          }
        ],
        "no-shadow": [
          "error",
          {
            "allow": ["state"]
          }
        ]
      }
    }
  ]
}
