<template>
  <header class="template_header-app">
    <nav class="template__navbar-app">
      <a class="template___ancor-app" href="#">Início</a>
      <a class="template___ancor-app" href="#">Sobre o grupo ConvertCoin</a>
      <a class="template___ancor-app" href="#">Contato</a>
      <a class="template___ancor-app" href="#">Trabalhe conosco</a>
    </nav>
    <h1>ConvertCoin</h1>
    <h2>Temos o melhor sistema cambial do Brasil! Converta conosco!</h2>  
  </header>
  <main class="template_main-app">
    <section class="template__section-app">
      <h3>Preencha os campos abaixo para conversão de real (R$) em dólar (US$)</h3>
      <div class="template___section-FirstDiv-app">
        <div class="p-field template____section-BRL">
            <label for="BRL-Coin">Valor em real (R$)   </label>
            <InputText id="BRL-Coin" type="text" aria-describedby="username1-help" placeholder="Valor em real" v-model="BRL" :disabled="CurrencyExchange"/>
            <br>
            <small id="username1-help">Por favor, informe uma quantia em real(R$).</small>
        </div>
        <div class="p-field template____section-US">
            <label for="US-Money">Cotação do dólar (R$)  </label>
            <InputText id="US-Money" type="text" aria-describedby="username1-help" v-model="USD" :disabled="CurrencyExchange" />
        </div>
      
      </div>
      <div class="template___section-SecondDiv-app" v-if="!CurrencyExchange">
          <div class="template____SecondDiv-Button-app">
          <Button @click="currency" label="Converter" class="p-button-rounded p-button-success" />
          </div>
          <Button @click="clear" label="Limpar" class="p-button-rounded p-button-warning template____SecondDiv-ClearButton-app" />
      </div>
        <div class="template___section-ThirdDiv-app" v-if="CurrencyExchange">
          <p> Para a cotação informada, o valor de {{BRL}} em dólar é: {{CurrencyExchange}}</p>
          <p>Obrigdo por utilizar nossos serviços!</p>
        
          <Button @click="clear" label="Calcular novamente" class="p-button-rounded template____SecondDiv-ClearButton-app" />
        </div>
    </section>
  </main>
  <footer class="template_footer-app">
    ConvertCoin &copy; Todos os direitos reservados.
  </footer>
</template>

<script>


export default {
  data(){
    return{
     BRL: null,
     USD: null,
     CurrencyExchange: null
    }
  }, methods: {
    currency(){
      this.CurrencyExchange = (this.BRL / this.USD).toFixed(2)
  }, clear(){
     this.BRL = null
     this.USD = null
     this.CurrencyExchange = null
  }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
body{
  background-color: black;
}
.template_header-app{
  background-color: rgb(2, 168, 2);
  border-radius: 15px;
  text-align: center;
  color: rgb(255, 255, 59);
  padding-bottom: 20px;

}

.template__navbar-app{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.template___ancor-app{
  text-decoration: none;
  color: black;
  margin-top: 20px
}

.template___ancor-app:hover{
  background-color: whitesmoke;
  border-radius: 20px;
}

.template__section-app{
  text-align: center;
}

.template____section-BRL{
  margin-bottom: 1.5em;
}

.template___section-SecondDiv-app{
  margin-top: 1em;
}

.template____SecondDiv-Button-app{
  display: inline;
  margin-right: 1em;
}

.template_footer-app{
  text-align: center;
  margin-top: 2.5em;
}
</style>
