<template>
  <div>
    <h3>複数v-modelを利用したフォーム</h3>
    <!-- 複数v-model設定 -->
    <multi-v-model v-model:name="name" v-model:vendor="vendor"/>
    <h3>フォーム入力内容</h3>
    <div>機種名：{{ name }}</div>
    <div>メーカー：{{ vendor }}</div>
  </div>
</template>
<script>
import { ref } from 'vue'
import MultiVModel from './components/MultiVModel.vue'
export default {
  components: {
    MultiVModel
  },
  setup() {
    const name = ref('Galaxy S20 5G')
    const vendor = ref('Samsung')
    return {
      name, vendor
    }
  }
}
</script>
