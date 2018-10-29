/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */

import client from '../plugins/contentful'

export const state = () => ({
  currentPage: {},
  isLoading: true
})

export const mutations = {
  setCurrentPage(state, payload) {
    state.currentPage = payload
  },
  setLoading(state, payload) {
    state.isLoading = payload
  }
}

export const actions = {
  async getPageBySlug({ commit }, slug) {
    commit('setLoading', true)
    const response = await client().getEntries({
      content_type: 'page',
      'fields.slug': slug
    })
    commit('setCurrentPage', response.items[0])
    commit('setLoading', false)
  }
}
