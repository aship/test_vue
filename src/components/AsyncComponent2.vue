<template>
  <div id="async2">
    <h3>コンポーネント2</h3>
    <div>準備完了まで4秒かかります</div>
  </div>
</template>

<script>
export default {
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {resolve()}, 4000)
    })
    .then(() => {
      console.log('AsyncComponent2 loaded.');
      return {}
    })
  }
}
</script>
<style scoped>
#async2 {
  background-color: #ffd5d5;
}
</style>
