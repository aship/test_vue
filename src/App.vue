<template>
  <div>
    <input v-model="inputValue">
    <div>大文字：{{ uppercase(inputValue) }}</div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const inputValue = ref('')
    // 大文字に変換するメソッド
    function uppercase(value) {
      if (!value) return ''
      return value.toString().toUpperCase()
    }
    return {
      inputValue, uppercase
    }
  }
}
</script>
