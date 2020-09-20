<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import mainLayout from '@/layout/mainLayout'
import emptyLayout from '@/layout/emptyLayout'

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    mainLayout,
    emptyLayout
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
}

ul, li {
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: block;
}
</style>
