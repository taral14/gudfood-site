<template>
  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
    <el-menu-item :disabled="!isAuthenticated" index="Dishes">Блюда</el-menu-item>
    <el-menu-item :disabled="!isAuthenticated" index="Orders">Заказы</el-menu-item>

    <el-submenu index="2" v-if="isAuthenticated" class="right-menu">
      <template slot="title">{{user.username}}</template>
      <el-menu-item index="SignIn" @click="signout">Logout</el-menu-item>
      <el-menu-item :index="false" @click="scrapping">Спарсить</el-menu-item>
    </el-submenu>
    <el-menu-item v-else index="SignIn" class="right-menu">Sign in</el-menu-item>
  </el-menu>
</template>

<script>
  import http from '../http/common'

  export default {
    name: "AppHeader",
    data() {
      return {
        activeIndex: null
      }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters['auth/isAuthenticated']
      },
      user() {
        return this.$store.getters['auth/user']
      },
    },
    methods: {
      signout() {
        this.$store.dispatch('auth/signOut')
      },
      scrapping() {
        http.get('/dishes/scrapping')
      },
      handleSelect(name) {
        if(name) {
            this.$router.push({name})
        }
      }
    }
  }
</script>

<style scoped>
.right-menu {
  float: right;
}
</style>
