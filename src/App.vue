<template>
  <div>
    <phones/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Phones from './components/Phones.vue'
export default defineComponent({
  name: 'App',
  components: {
    Phones
  }
})
</script>
