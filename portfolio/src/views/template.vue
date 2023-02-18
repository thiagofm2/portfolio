<script setup>
import video2 from '../assets/video2.mp4';
import homeComponent from '../components/home.vue'
import {ref, reactive} from 'vue';
const botoesHeader = reactive([
    {nome:'Início', rota:'/', video:'', icone:'mdi-home-outline'},
    {nome:'Trabalhos', rota:'/trabalhos', video:'', icone:'mdi-briefcase-outline'},
    {nome:'Contato', rota:'/contato', video:'', icone:'mdi-message-outline'},
]);
const botoesIngles = reactive([
    {nome:'Home', rota:'/', video:'', icone:'mdi-home-outline'},
    {nome:'Jobs', rota:'/trabalhos', video:'', icone:'mdi-briefcase-outline'},
    {nome:'Contact', rota:'/contato', video:'', icone:'mdi-message-outline'},
]);
let ingles = ref(false);
let portugues = ref(true);
</script>

<template>
    <v-container fluid>
        <v-row style="margin: -16px;">
            <!-- -->
        <video-background
            :class="[$route.path == '/'? 'focado' : 'desfocado']"
            class="alinhadoMeio" 
            :src="video2" 
            style="max-height: 100vh; height: 100vh; background-color: #000000;"
            overlay="linear-gradient(45deg, #374ff714, #0000006b)" 
            >
        </video-background>
        <div class="d-flex align-center botoesIdioma">
                <p
                @click="ingles = true; portugues = false"
                class="styleBotoes"
                style="margin-right:10px">
                    EN
                </p>
                <v-divider vertical color="#f7f7f7"></v-divider>
                <p
                @click="ingles = false; portugues = true"
                class="styleBotoes"
                style="margin-left:10px">
                    PT-BR
                </p>
            </div>
<!-- HOME -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <homeComponent
            v-if="$route.path == '/' && portugues == true"
            titulo="Olá, meu nome é Thiago Faria Moreira"
            text="Sou desenvolvedor Front-End, apaixonado pelo processo do desenvolvimento web unido com a liberdade do design,
            acredito que a união destes dois elementos é o que torna tudo tão belo no digital."
            />

            <homeComponent
            v-if="$route.path == '/' && portugues == false"
            titulo="Hello, my name is Thiago Faria Moreira"
            text="I am a Front-End developer, passionate about the process of web development united with the freedom of design,
            I believe that the union of these two elements is what makes everything so beautiful in digital."
            />
<!-- TRABALHOS --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <homeComponent
            v-if="$route.path == '/trabalhos' && portugues == true"
            titulo="Confira alguns dos meus trabalhos"
            text="Foi separado alguns exemplos dos meus trabalhos, que podem ser acessados ao clicar nas categorias ao lado. Criados
            principalmente com o framework VueJs e seus componentes (Vuetify, Nuxt), para diversos fins."
            />

            <homeComponent
            v-if="$route.path == '/trabalhos' && portugues == false"
            titulo="Check out some of my work"
            text="I have separated some examples of my work, which can be accessed by clicking on the categories at the side. Created
            mainly with the VueJs framework and its components (Vuetify, Nuxt), for various purposes."
            />
<!-- CONTATOS ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <homeComponent
            v-if="$route.path == '/contato' && portugues == true"
            titulo="Entre em contato"
            text="Ficou interessado? Entre em contato para fazer um orçamento."
            />

            <homeComponent
            v-if="$route.path == '/contato' && portugues == false"
            titulo="Contact us"
            text="Are you interested? Contact us for a quote."
            />
<!-- MENU -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->   
            <div
            data-aos="fade-in"
            data-aos-duration="2500"
            v-if="portugues == true"
            class="positionDivTemplate">
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

            <div
            data-aos="fade-in"
            data-aos-duration="2500"
            v-if="portugues == false"
            class="positionDivTemplate">
                <router-link
                    style="text-decoration: none;"
                    v-for="(botoes, i) in botoesIngles"
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
        </v-row>
    </v-container>
</template>

<style scoped>
@media (min-device-width: 320px) and (max-device-width: 640px) {
    .positionDivTemplate{
        left:20px !important;
    }
    .botoesIdioma{
        right:0px;
        left:20px !important;
        padding:10px 0px !important;

    }
}
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
    left:50px;
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
    transition: 0.8s ease;
}
.botoesIdioma{
    padding:10px 40px;
    position:absolute;
    right:20px
}
.desfocado{
    transform: scale(1.1);
    filter: blur(6px);
    transition: 2s ease;
}
.focado{
    filter: blur(0);
    transition: 2s ease;
}
</style>