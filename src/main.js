import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router"
import App from './App.vue'
import PokemonList from "./components/PokemonList"
import PokemonDetail from "./components/PokemonDetail"

const pokeRouter = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: PokemonList },
        { path: "/pokemon/:id", name: "pokemon", component: PokemonDetail }
    ]
})

const pokeApp = createApp(App)

pokeApp.use(pokeRouter)
pokeApp.mount('#app')
