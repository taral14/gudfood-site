<template>
  <el-container id="app">
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: 'App',
  components: {AppHeader},
  created() {
    this.$store.dispatch('auth/tryToAutoSignIn')
  },
}
</script>

<style>
#app {
  width: 800px;
  margin: 0 auto;
}
</style>
