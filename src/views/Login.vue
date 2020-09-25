<template>
  <div class="log">
    Login
  </div>
</template>

<script>
import messages from '@/utils/messages'
export default {
  name: 'login',
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~materialize-css/dist/css/materialize.min.css';

.log {
  height: 100vh;
  width: 100%;
}
</style>