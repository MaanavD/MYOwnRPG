<template>
  <v-toolbar fixed class="indigo darken-3">
    <v-toolbar-title class="mr-4">
      <span class="home" flat dark @click="navigateTo({name: 'root'})">
        MYOwnRPG
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn class="home" v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'Login'})">
         Login &nbsp; <v-icon>fa fa-lock</v-icon>
      </v-btn>
      <v-btn  class="home" v-if="!$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'Register'})">
         Sign Up &nbsp;<v-icon>fa fa-sign-in</v-icon>
      </v-btn>
      <v-btn  class="home" v-if="$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'gamechoose'})">
         Set up the Game! &nbsp;<v-icon>fa fa-play</v-icon>
      </v-btn>
      <v-btn  class="home" v-if="$store.state.isUserLoggedIn" flat dark @click="navigateTo({name: 'root'})">
         Sign Out &nbsp;<v-icon>fa fa-sign-out</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods:{
    navigateTo (route){
      this.$router.push(route)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home{
  color: #FFF;
  cursor:pointer;
}
.home:hover{
  color: #FFE082; /*Amber Lighten 3*/
}
.indigo{
  color: #283593;
}
</style>
<style>

</style>


