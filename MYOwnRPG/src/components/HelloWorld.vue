<template>
<v-parallax class="fixheight" src="https://archive-media-1.nyafuu.org/wg/image/1386/86/1386865278889.jpg">
    <v-layout column align-center justify-center>
      <h1 class="amber--text">MYOwnRPG</h1>
      <h4 class="amber--text">Our RPG. Your way.</h4>
      <p class="amber--text">*With Optional MYO Armband integration</p>
    </v-layout>

</v-parallax>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amber{
  color: #FFE082; /*Amber Lighten 3*/
}
.indigo{
  color: #283593;
}
.fixheight:img{
  zoom: 1.0;
  filter: grayscale(75%);

}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
