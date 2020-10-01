<template>
  <div>
    <h4>iOS: {{ countIOS }} 機種</h4>
    <ul>
      <li v-for="(elem, index) in iOS" v-bind:key="index">
        {{ elem }}
      </li>
    </ul>
    <h4>Android: {{ countAndroid }} 機種</h4>
    <ul>
      <li v-for="(elem, index) in android" v-bind:key="index">
        {{ elem }}
      </li>
    </ul>
    <h4>合計： {{ countTotal }} 機種</h4>
    <div>
      <input v-model="newIOS" placeholder="iOS端末">
      <button @click="addNewIOS">追加</button>
    </div>
    <div>
      <input v-model="newAndroid" placeholder="Android端末">
      <button @click="addNewAndroid">追加</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
  // コンポーネント設定処理
  setup() {
    // refでデータを記述
    const iOS = ref<Array<string>>(['iPhone 11'])
    const newIOS = ref<string>('')
    const android = ref<Array<string>>(['Galaxy S20 5G'])
    const newAndroid = ref<string>('')
    // メソッド
    function addNewIOS() {
      iOS.value.push(newIOS.value)
      newIOS.value = ''
    }
    function addNewAndroid() {
      android.value.push(newAndroid.value)
      newAndroid.value = ''
    }
    // 算出プロパティ
    const countIOS = computed(function() {
      return iOS.value.length
    })
    const countAndroid = computed(function() {
      return android.value.length
    })
    const countTotal = computed(function() {
      return iOS.value.length + android.value.length
    })
    // ここまで定義してきた内容を返却
    return {
      iOS, newIOS, android, newAndroid,
      addNewIOS, addNewAndroid, countIOS, countAndroid, countTotal
    }
  }
})
</script>
