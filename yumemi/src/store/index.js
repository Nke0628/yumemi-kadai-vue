import { createStore } from 'vuex'
import { AjaxRequest } from '../module/AjaxRequest'

const store = createStore({
  state() {
    return {
      apiKey: '',
    }
  },
  mutations: {
    updateApiKey(state, apiKey) {
      state.apiKey = apiKey
    },
  },
  actions: {
    async updateApiKey(conetext, apiKey) {
      const axios = new AjaxRequest(apiKey)
      const res = await axios.get('api/v1/prefectures')
      //結果データが正しく取得できた場合のみAPIKEYを更新する
      if (res.data.message === null) {
        conetext.commit('updateApiKey', apiKey)
      }
    },
  },
})

export default store
