<template>
  <div class="home">
    <div v-for="(pokemon, i) in pokemons" :key="i">
      <h2>{pokemon.name}</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      pokemons: [],
    };
  },

  mounted() {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((data) => {
      let pokemons = data.data.results;
      console.log(pokemons);
    });
  },
};
</script>
