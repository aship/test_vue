<template>
  <div>
    <h4>iOS: {{ countIOS }} 機種</h4>
    <ul>
      <li v-for="(elem, index) in state.iOS" v-bind:key="index">
        {{ elem }}
      </li>
    </ul>
    <h4>Android: {{ countAndroid }} 機種</h4>
    <ul>
      <li v-for="(elem, index) in state.android" v-bind:key="index">
        {{ elem }}
      </li>
    </ul>
    <h4>合計： {{ countTotal }} 機種</h4>
    <div>
      <input v-model="state.newIOS" placeholder="iOS端末">
      <button @click="addNewIOS">追加</button>
    </div>
    <div>
      <input v-model="state.newAndroid" placeholder="Android端末">
      <button @click="addNewAndroid">追加</button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
export default defineComponent({
  // コンポーネント設定処理
  setup() {
    // reactiveでデータを記述
    const state = reactive<{
      iOS: Array<string>;
      newIOS: string;
      android: Array<string>;
      newAndroid: string;
      }>({
      iOS: ['iPhone 11'],
      newIOS: '',
      android: ['Galaxy S20 5G'],
      newAndroid: ''
    })
    // メソッド
    function addNewIOS() {
      state.iOS.push(state.newIOS)
      state.newIOS = ''
    }
    function addNewAndroid() {
      state.android.push(state.newAndroid)
      state.newAndroid = ''
    }
    // 算出プロパティ
    const countIOS = computed(function() {
      return state.iOS.length
    })
    const countAndroid = computed(function() {
      return state.android.length
    })
    const countTotal = computed(function() {
      return state.iOS.length + state.android.length
    })
    // ここまで定義してきた内容を返却
    return {
      state, addNewIOS, addNewAndroid, countIOS, countAndroid, countTotal
    }
  }
})
</script>
