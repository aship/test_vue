<template>
  <div>
    <h3>配列</h3>
    <ul>
      <li v-for="(elem, index) in dataArray" v-bind:key="index">
        {{ index }} : {{ elem }}
      </li>
    </ul>
    <h3>オブジェクト</h3>
    <div>nameプロパティ：{{ dataObj.name }}</div>

    <h3>配列、オブジェクトの更新</h3>
    <div>
      入力値：<input v-model="inputValue">
    </div>
    <div>
      <button @click="updateArrayElem">配列の0番目を更新</button>
    </div>
    <div>
      <button @click="addObjProp">オブジェクトのnameプロパティを追加</button>
    </div>
    <div>
      <button @click="deleteObjProp">オブジェクトのnameプロパティを削除</button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      inputValue : '',
      dataArray: ['iPhone 11', 'Galaxy S20 5G'],
      dataObj: {'name': 'AQUOS R5G'}
    });
    // 配列要素を更新
    function updateArrayElem() {
      state.dataArray[0] = state.inputValue;
    }
    // オブジェクトのプロパティを追加
    function addObjProp() {
      state.dataObj.name = state.inputValue
    }
    // オブジェクトのプロパティを削除
    function deleteObjProp() {
      delete state.dataObj.name
    }
    return {
      ...toRefs(state),
      updateArrayElem, addObjProp, deleteObjProp
    }
  }
}
</script>
<style scoped>
button {
  margin-top: 5px;
}
</style>
