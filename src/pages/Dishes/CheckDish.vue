<template>
  <el-checkbox :disabled="loading" v-model="checked" @change="change">{{name}}</el-checkbox>
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
        if(this.checked) {
            await this.$store.dispatch('dishes/addToFavourite', this.id)
        } else {
            await this.$store.dispatch('dishes/removeFromFavourite', this.id)
        }
        this.loading = false
      }
    },
    async created() {
        this.checked = await this.$store.dispatch('dishes/isFavourite', this.id)
    },
  }
</script>