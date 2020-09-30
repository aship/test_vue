<template>
  <div id="async1">
    <h3>コンポーネント1</h3>
    <div>準備完了まで3秒かかります。</div>
  </div>
</template>

<script>
export default {
  setup() {
    return new Promise((resolve) => {
      setTimeout(() => {resolve()}, 3000)
    })
    .then(() => {
      console.log('AsyncComponent1 loaded.');
      return {}
    })
  }
}
</script>
<style scoped>
#async1 {
  background-color: #d5d5ff;
}
</style>
