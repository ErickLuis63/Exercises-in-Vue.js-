import { createApp } from 'vue'
import App from './App.vue'

import  PrimeVue  from "primevue/config" 
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'

const money = createApp(App)
 
money.use(PrimeVue)
money.component("InputText", InputText)
money.component("Button", Button)

money.mount('#app')
