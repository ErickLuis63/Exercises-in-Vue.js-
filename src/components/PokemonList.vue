<template>
<div>
    <h1>Pokemon APP</h1>
    <loading v-if="loading"/>
    <div class="div-pokemon" v-for="(pokemon, index) in list" :key="index" @click="selectPokemon(getPokemonId(pokemon.url))">
       <img :src="getPokemonImage(getPokemonId(pokemon.url))"/>
        {{pokemon.name}}
    </div>
</div>
</template>

<script>
import { getPokemonList, getPokemonImageUrl } from "../service/pokemon-service.js"
import Loading from "./Loading.vue"
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"

export default {
    components: {
        Loading
    },
    setup() {
        const list = ref([])
        const router = useRouter()
        const loading = ref(false)


        onMounted(() => {
            loading.value = true
            getPokemonList().then(resp => {
                list.value = resp.results
            }).finally (() => {
                loading.value = false
            })
        })
        
     const getPokemonId = (url) => 
        url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")

     const getPokemonImage = (id) => getPokemonImageUrl(id)

     const selectPokemon = (id) => router.push({name: "pokemon", params: {id: id}}) 

        return{ list, getPokemonImage, getPokemonId, selectPokemon, loading}
    }
}
</script>

<style scoped>
    .div-pokemon {
        display: flex;
        align-items: center;
        border: 1px solid lightgray;
        border-radius: 5px;
        margin: 0.5rem;
        cursor: pointer;

    }
</style>