<template>
  <div>
    <h1>REASA API</h1>
    <input type="text" :value="apiKey" @input="onInputText" />
    <button @click="emitSubmitAction">送信</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TopPresentation',
  props: {
    apiKey: {
      type: String,
      required: false,
    },
  },
  setup(props, context) {
    const onInputText = (e) => {
      const target = e.target
      context.emit('update:apiKey', target.value)
    }

    const emitSubmitAction = () => {
      context.emit('submit')
    }

    return {
      onInputText,
      emitSubmitAction,
    }
  },
})
</script>
