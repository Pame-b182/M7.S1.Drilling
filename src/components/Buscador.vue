<template>
  <div class="container">
    <!-- Inicio container -->
    <div class="row mt-5">
      <!-- Inicio row -->
      <div class="col">
        <!-- Inicio big col -->
        <div class="col d-inline-block">
          <!-- Inicio col buscador -->
          <div class="card">
            <!-- Inicio card buscador -->
            <div class="card-header">Buscador</div>
            <div class="body m-3">
              <div class="input-group mb-3">
                <!-- Se utiliza la directiva "v-model" para capturar el pokemon ingresado por el usuario -->
                <input
                  v-model="search"
                  type="text"
                  class="form-control"
                  placeholder="Id o Nombre"
                  aria-describedby="button-addon2"
                />
                <button
                  @click="obtenerPokemon"
                  class="btn btn-success"
                  type="button"
                  id="btnEnviar"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
          <!-- Fin car buscador -->
        </div>
        <!-- Fin col buscador -->
        <div class="col d-inline-block w-50 m-2">
          <!-- Inicio col pokemon -->
          <!-- Directiva v-if para mostrar las caracteristicas del pokemon sólo si es distinto de null -->
          <div class="card" v-if="pokemon!==null">
            <!-- Inicio card pokemon -->
            <div class="card-header">Pokemón</div>
            <div class="row g-0">
              <div class="col-md-3">
                <img :src="img" class="img-fluid rounded-start" alt="" />
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <h5 class="card-title">Nombre: {{pokemon.name}}</h5>
                  <p class="card-text"><strong>Id:</strong> {{pokemon.id}}</p>
                  <p class="card-text"><strong>Movimientos:</strong> {{movimientos.join(', ')}}</p>
                  <p class="card-text"><strong>Habilidades:</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin card pokemon -->
      </div>
      <!-- Fin col pokemon-->
      <!-- Fin big col -->
    </div>
    <!-- Fin row -->
  </div>
  <!-- Fin container -->
</template>

<script>
export default {
  name: "buscador-component",
  // props: {},
  data: function () {
    return {
      //Se captura el input ingresado por el usuario y se guarda en la data "search"
      search: "pikachu",
      //Se define null inicialmente para que no se caiga la página mientras se espera la petición a la API
      pokemon: null,
    };
  },
  computed: {
    //Se realiza el método img en la propiedad coputada para renderizar en un sólo término el link de la imagen
    img(){
        if (this.pokemon!==null) {
            return this.pokemon.sprites.front_default;
        }
        //Se retorna vacío hasta que llega la respuesta de la API y entra al if para retornar el src de la imagen
        return '';
    },
    //propiedad computada que retorna los movimientos del pokemon. Se navega por el objeto u array.
    movimientos(){
        if (this.pokemon) {
            return this.pokemon.moves.map(move => move.move.name);
        }
        return[];
    }
  },
  methods: {
    obtenerPokemon() {
      //Guardian que muestra una alerta avisando al usuario que ingrese un id o nombre
      if (this.search == "") {
        alert("campo vacío. Ingrese el Id o Nombre del pokemón");
        return;
      }
      //fetch("https://pokeapi.co/api/v2/pokemon/`this.search`")
      fetch("https://pokeapi.co/api/v2/pokemon/" + this.search)
        .then((resp) => resp.json())
        .then((json) => {
          this.pokemon = json;
          console.log(this.pokemon);
        });
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  //Para  que la info de pikachu se muestre al momento de cargar la pag se utiliza el ciclo "created"
  created(){
    //Se ejecuta obtenerPokemon() con la variable de contexto "this"
    this.obtenerPokemon()
  }
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>