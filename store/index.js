/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter += 1
  }
}
