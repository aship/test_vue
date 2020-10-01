<template>
  <div>
    <one-phone name="Galaxy S20 5G" vendor="Samsung" v-bind:weight="163"/>
  </div>
</template>
<script>
import OnePhone from './components/OnePhone.vue'
export default {
  name: 'App',
  components: {
    OnePhone
  }
}
</script>
