
<template> 
<!-- first part of every vue component -->
<v-layout column>
  <v-flex xs6 offset xs3>
    <div class="white elevation-2">
      <v-toolbar class="cyan" flat dense dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" 
    placeholder="email" v-model="email"/>
    <input type="password" name="password"
     placeholder="password" v-model="password"/>
    <!-- V-model is a 2 way binding, 
    allowing me to read from and write to them-->
    <br>
    <div class="error" v-html="error"/>
    <button @click="register">
      Register</Button>
  </div>
    </div>
  </v-flex>
</v-layout>

</template>

<script>
// data in vue component
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        }) 
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* css here! */
.error{
  color:red;
}
</style>
