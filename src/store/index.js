import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //Se crea el estado pokemon como nulo para recibir el pokemon de la API
    pokemon: null,
  },
  getters: {
  },
  mutations: {
    //Mutación que iguala el objeto vacio "pokemon" con el pokemon que viene entrando como parámentro
    //y que corresponde al de la API
    colocarNombre: (state, pokemon)=>{
      state.pokemon = pokemon
    }
  },
  actions: {
    //Acción que realiza la petición a la API y ejecuta la mutación
    obtenerPokemon({commit}, name){
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response=>{
        //Se iguala la variable pokemon con el objeto que viene de la API
        let pokemon = response.data
        //Se llama a la mutación y al parametro que necesita
        commit('colocarNombre', pokemon)
        console.log(pokemon)
      })
      .catch(error=>{
        console.error(error)
      });
    }
  },
  modules: {
  }
})
