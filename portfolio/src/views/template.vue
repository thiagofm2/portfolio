<script setup>
import video from '../assets/techVid.mp4';
import homeComponent from '../components/home.vue'
import {ref, reactive} from 'vue';
const botoesHeader = reactive([
    {nome:'Home', rota:'/', video:'', icone:'mdi-home-outline'},
    // {nome:'Sobre', rota:'/sobre', video:''},
    {nome:'Trabalhos', rota:'/trabalhos', video:'', icone:'mdi-briefcase-outline'},
    {nome:'Contato', rota:'/contato', video:'', icone:'mdi-message-outline'},
])

</script>

<template>
    <v-container fluid>
        <v-row style="margin: -16px;">
            <video-background
            class="alinhadoMeio" 
            :src="video"
            style="max-height: 100vh; height: 100vh;"
            overlay="linear-gradient(45deg, #374ff714, #0000006b)" 
            >

            <!-- <homeComponent v-if="$route.path == '/'"
            titulo="Olá, seja bem vindo ao meu Portfólio!"
            text="Conheça mais sobre mim e os meus trabalhos."
            /> -->

            <homeComponent v-if="$route.path == '/'"
            titulo="Olá, meu nome é Thiago Faria Moreira"
            text="Sou desenvolvedor Front-End, apaixonado pelos processos do desenvolvimento web unido com a liberdade do design,
            acredito que a união destes dois elementos é o que torna tudo tão belo no digital."
            />

            <homeComponent v-if="$route.path == '/trabalhos'"
            titulo="Confira alguns dos meus trabalhos"
            text="Foi separado alguns exemplos dos meus trabalhos, que podem ser acessados ao clicar nas categorias ao lado. Criados
            principalmente com o framework VueJs e seus componentes (Vuetify, Nuxt), para diversos fins."
            />

            <homeComponent v-if="$route.path == '/contato'"
            titulo="Entre em contato"
            text="Gostou do que viu? Entre em contato para fazer um orçamento."
            />
        
            <div class="positionDivTemplate">
            <router-link
                style="text-decoration: none;"
                v-for="(botoes, i) in botoesHeader"
                :key="i"
                :to="botoes.rota">
                <p
                variant="text"
                class="styleBotoes "
                >
                <v-icon>{{ botoes.icone }}</v-icon>
                {{ botoes.nome }}
                </p>
            </router-link>
        </div>
        </video-background>
        </v-row>
    </v-container>
</template>

<style scoped>
.styleBotoes{
    text-transform: none;
    color:#c7c7c7;
    font-weight:500;
    cursor: pointer;
    margin: 5px 0px;
    font-family: Oswald;
}
.positionDivTemplate{
    flex-direction: column;
    display: flex;
    position: absolute;
    right:50px;
    bottom:50px
}
.alinhadoMeio{
    align-items: center;
    justify-content: center;
    display: flex;
}
.styleBotaoRow{
    border-radius: 5px;
    border: 1px #f7f7f7 solid;
    text-transform: none;
    font-weight: 400;
    background-color: transparent;
    color: #f7f7f7;
}
.styleBotoes:hover{
    color:#e2ad00;
}
</style>