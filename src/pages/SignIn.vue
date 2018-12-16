<template>
  <div>
    <h2>Sign in</h2>

    <el-form :model="form">
      <el-form-item label="Username" :label-width="formLabelWidth">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="Password" :label-width="formLabelWidth">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
    </el-form>

    <el-button type="primary" style="float: right" @click="auth" :loading="loading">Sign in</el-button>
  </div>
</template>

<script>
  export default {
    name: "SignIn",
    data() {
      return {
        formLabelWidth: '80px',
        loading: false,
        form: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
      async auth() {
        this.loading = true
        await this.$store.dispatch('auth/signIn', {
          username: this.form.username,
          password: this.form.password,
        })
          .then(r => {
            this.$router.push({name: 'Dishes'})
          })
          .catch(r => {
            this.$message({type: 'error', message: 'Login or password incorrect'})
          })
        this.loading = false
      }
    },
    created() {
      if (this.$store.getters['auth/isAuthenticated']) {
        this.$router.push({name: 'Dishes'})
      }
    }
  }
</script>

<style scoped>

</style>
