<!--text content (Story)--> 
<template>
  <v-card flat class="py-5" color="grey lighten-3">
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
      <h3>Your Unique Game Code:</h3>
      <h6 id="code">hi</h6>
    <v-card-text>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <p>Text Size</p>
            <v-select v-bind:items="textSize" overflow label="Select"></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <p>Move Type</p>
            <v-select v-bind:items="movetype" label="Select" segmented></v-select>
          </v-flex>
          <v-flex xs12 sm4>
            <p>Pre-game Text Duration (seconds)</p>
            <v-select v-bind:items="duration1" label="Select" editable item-value="text"></v-select>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <p>Background Colour</p>
            <v-select v-bind:items="colour" overflow label="Select"></v-select>
          </v-flex>
          <v-flex xs12 sm4>
                    <v-text-field
                      label="Title of Scene"
                      :rules="[(v) => v.length <= 25 || 'Max 25 characters']"
                      :counter="25"
                      v-model="title"
                    ></v-text-field>
          </v-flex>
            <v-flex xs12 sm4>
              <v-text-field
                name="input-1"
                label="Story Text"
                textarea
              ></v-text-field>
            </v-flex>
 <v-btn v-on:click="ButtonClick()" block color="secondary" dark >Add Scene</v-btn>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>

  export default {
      methods:{
          
    ButtonClick: function()
    {
        console.log('here')
        document.getElementById("code").appendChild('hi');
    }
  },
    data () {
      return {
        title: 'Name Here',
        textSize:['10pt', '20pt', '30pt', '40pt'],
        movetype: ['Fist', 'Double Tap', 'Swipe Left', 'Swipe Right'],
        duration1:['5s','10s','15s'],
        colour:['Blue', 'Red', 'Yellow','Green', 'Purple'],
        dropdown_icon: [
          { text: 'list', callback: () => console.log('list')},
          { text: 'favorite', callback: () => console.log('favorite')},
          { text: 'delete', callback: () => console.log('delete')}
        ],
        dropdown_edit: [
          { text: '100%' },
          { text: '75%' },
          { text: '50%' },
          { text: '25%' },
          { text: '0%' }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
