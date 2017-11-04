<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" 
    placeholder="email" v-model="email"/>
    <input type="password" name="password"
     placeholder="password" v-model="password"/>
    <!-- V-model is a 2 way binding, 
    allowing me to read from and write to them-->
    <br>
    <button @click="register">
      Register</Button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
//   watch: {
//     email(value){
// console.log('email has changed', value)
//     }
//   },
//   mounted() {
//     setTimeout(() => {
//       this.email = 'hello world'
//     }, 2000)
//   },
methods:{
async register(){
    const response = await AuthenticationService.register({
      email: this.email,
      password: this.password
    })
    console.log(response.data)
  }
}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
