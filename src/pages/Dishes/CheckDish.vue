<template>
  <el-checkbox :class="{loading: loading}" :disabled="loading" v-model="checked" @change="change">{{name}}</el-checkbox>
</template>

<script>
  export default {
    name: "CheckDish",
    props: {
      name: {
        type: String
      },
      id: {
        type: String
      }
    },
    data() {
      return {
        checked: false,
        loading: false
      }
    },
    methods: {
      async change() {
        this.loading = true
        await this.$store.dispatch('dishes/addToFavourite', this.id)
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading {
    cursor: wait !important;
  }
</style>
