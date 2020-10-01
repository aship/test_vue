<template>
  <div class="multi-v-model">
    <div>
      <div>機種名：</div>
      <input v-bind:value="name" v-on:input="updateName($event.target.value)">
    </div>
    <div>
      <div>メーカー：</div>
      <input v-bind:value="vendor" v-on:input="updateVendor($event.target.value)">
    </div>
  </div>
</template>
<script>
export default {
  // v-modelディレクティブで指定されるプロパティ
  props: {
    name: String,
    vendor: String
  },
  // コンポーネント設定処理
  setup(props, context) {
    // name変更時の処理
    function updateName(value) {
      context.emit('update:name', value) // 変更イベントを発生
    }
    // vendor変更時の処理
    function updateVendor(value) {
      context.emit('update:vendor', value) // 変更イベントを発生
    }
    return {
      updateName, updateVendor
    }
  }
}
</script>
<style scoped>
.multi-v-model {
  background-color: #d5d5ff;
}
</style>