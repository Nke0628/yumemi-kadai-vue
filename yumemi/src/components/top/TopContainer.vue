<template>
  <TopPresentation
    v-model:apiKey="data.apiKey"
    @submit="handleSubmitApiKey"
  ></TopPresentation>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import TopPresentation from '@/components/top/TopPresentation.vue'

export default defineComponent({
  name: 'TopContainer',
  components: {
    TopPresentation,
  },
  setup() {
    const data = reactive({
      apiKey: '',
    })
    const handleSubmitApiKey = () => {
      console.log(data.apiKey)
    }
    return {
      data,
      handleSubmitApiKey,
    }
  },
})
</script>
