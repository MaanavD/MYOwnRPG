
<template> 
<!-- first part of every vue component -->
<v-layout column>
  <v-flex xs6 offset xs3>
    <div class="white elevation-2">
      <v-toolbar class="cyan" flat dense dark>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
  <div>
    <h1>Login</h1>

    <input type="email" name="email" 
    placeholder="email" v-model="email"/>
    <input type="password" name="password"
     placeholder="password" v-model="password"/>
    <!-- V-model is a 2 way binding, 
    allowing me to read from and write to them-->
    <br>
    <div class="error" v-html="error"/>
    <button @click="login">
      Login</Button>
  </div>
    </div>
  </v-flex>
</v-layout>

</template>

<script>
// data in vue component
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
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
