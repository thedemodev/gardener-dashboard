//
// SPDX-FileCopyrightText: 2020 SAP SE or an SAP affiliate company and Gardener contributors
//
// SPDX-License-Identifier: Apache-2.0
//

import { getSeeds } from '@/utils/api'
import find from 'lodash/find'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  items (state) {
    return state.all
  },
  seedByName (state) {
    return name => find(state.all, ['metadata.name', name])
  }
}

// actions
const actions = {
  async getAll ({ commit, state }) {
    const { data } = await getSeeds()
    commit('RECEIVE', data)
    return state.all
  }
}

// mutations
const mutations = {
  RECEIVE (state, items) {
    state.all = items
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
