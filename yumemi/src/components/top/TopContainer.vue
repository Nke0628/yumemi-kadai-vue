<script>
import { defineComponent, h, reactive } from 'vue'
import TopPresentation from '@/components/top/TopPresentation.vue'

export default defineComponent({
  name: 'TopContainer',
  setup() {},
  render() {
    return h(TopPresentation, {})
  },
})
</script>
