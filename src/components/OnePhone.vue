<template>
  <div class="one-phone">
    <h3>{{ fullName }}</h3>
    <div>機種名：{{ name }}</div>
    <div>メーカー：{{ vendor }}</div>
    <div>重量：{{ weight }}g</div>
  </div>
</template>
<script>
import { computed, onMounted } from 'vue'
export default {
  // プロパティの設定
  props: {
    name: String,
    vendor: String,
    weight: Number
  },
  // setupメソッドの引数propsにプロパティが含まれる
  setup(props) {
    // 算出プロパティ
    const fullName = computed(function() {
      // propsでプロパティを参照
      return props.vendor + '：' + props.name
    })
    // onMountedライフサイクルフック
    onMounted(function() {
      console.log('コンポーネントがマウントされました')
    })
    return {
      fullName
    }
  }
}
</script>
<style scoped>
.one-phone {
  background-color: #d5d5ff;
}
</style>