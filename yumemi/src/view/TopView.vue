<template>
  <TopContainer></TopContainer>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import TopContainer from '@/components/top/TopContainer.vue'
export default defineComponent({
  name: 'TopView',
  components: {
    TopContainer,
  },
})
</script>
