<template>
  <div class="wrapper">
    <Header />
    <Sidebar @click="isOpen = !isOpen" v-model="isOpen" />
    <div class="app-content" :class="{full: isOpen}">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/app/Header'
import Sidebar from '@/components/app/Sidebar'
export default {
  data: () => ({
    isOpen: false
  }),
  components: {
    Header, 
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  //background-color: #212429;
  width: 100%;
  min-height: 100vh;

  .app-content {
    padding: 60px 0 0 60px;
    transition: padding .2s ease
  }

  .full {
    padding-left: 240px;
  }
}
</style>