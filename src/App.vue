<template>
  <Suspense>
    <template #default>
      <async-component1/>
      <async-component2/>
    </template>
    <template #fallback>
      全コンポーネントの準備完了を待っています...
    </template>
  </Suspense>
</template>
<script>
import AsyncComponent1 from './components/AsyncComponent1.vue'
import AsyncComponent2 from './components/AsyncComponent2.vue'
export default {
  name: 'App',
  components: {
    AsyncComponent1,
    AsyncComponent2
  }
}
</script>
