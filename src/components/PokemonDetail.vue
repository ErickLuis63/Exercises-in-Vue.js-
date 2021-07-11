<template>
<div>
    <button @click="back" class="btn-voltar">Voltar à Pokedex</button>
    <loading v-if="loading"/>
    <div v-if="info">
        <div class="div-row">
        <img :src="img">
        <h1>{{info.name}}</h1>
        </div>
         <div class="div-row">
             <h4>Experiência: </h4> 
             {{info.base_experience}} 
         </div>
         <div class="div-row">
              <h4>Habilidades: </h4> {{info.abilities[0].ability.name}},  {{info.abilities[1].ability.name}}
         </div>
         <div class="div-row">
              <h4>Golpes:  </h4>{{info.moves[0].move.name}},  {{info.moves[1].move.name}},  {{info.moves[2].move.name}}
         </div>
         <div class="div-row">
              <h4>Peso: </h4> {{info.weight}}
         </div>
         <div class="div-row">
              <h4>Altura: </h4> {{info.height}}
         </div>
         <div class="div-row">
              <h4>Forma: </h4> {{info.forms[0].name}}
         </div>
         <div class="div-imgs">
         <div v-for="(value, key, index) in info.sprites" :key="index">
             <img v-if="value && typeof value === 'string'" :src="value"/>
         </div>
         </div>
    </div>
</div>
</template>

<script>
import { onMounted, ref, computed } from "vue"
import { useRouter,useRoute } from "vue-router"
import { getPokemon, getPokemonImageUrl } from "../service/pokemon-service.js"
import Loading from "./Loading.vue"
export default {
  components: { Loading },


    setup(){
        const router = useRouter()
        const route = useRoute()
        const info = ref(null)
        const loading = ref(false)

        onMounted(() =>{
            loading.value = true
            getPokemon(route.params.id).then(resp => {
                console.log(resp)
                info.value = resp
            }).finally (() => {
                loading.value = false
            })
        })


        const back = () => router.replace("/")
        
        const img = computed(() => getPokemonImageUrl(info.value.id))

        return{
            getPokemonImageUrl, router, loading, info, img, back
        }
    } 
}
</script>

<style scoped>
.div-row{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.btn-voltar{
  background-color:rgb(255, 14, 14) ; /* Green */
  border: none;
  border-radius: 20px;
  color: #ffec3d;
  padding: 10px 27px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
}

.div-imgs{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>