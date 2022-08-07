<template>
  <TopPresentation
    v-model:apiKey="data.apiKey"
    @submit="handleSubmitApiKey"
  ></TopPresentation>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import TopPresentation from '@/components/top/TopPresentation.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'TopContainer',
  components: {
    TopPresentation,
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const data = reactive({
      apiKey: '',
    })
    const handleSubmitApiKey = async () => {
      try {
        await store.dispatch('updateApiKey', data.apiKey)
        if (store.state.apiKey === '') {
          alert('REASA API KEYが正しくありません。')
        } else {
          router.push('/content')
        }
      } catch (e) {
        alert('Internal Server Error')
        console.log(e)
      }
    }
    return {
      data,
      handleSubmitApiKey,
    }
  },
})
</script>
