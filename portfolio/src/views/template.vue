<script setup>
import video from '../assets/techVid.mp4';
import homeComponent from '../components/home.vue'
import {ref, reactive} from 'vue';
const botoesHeader = reactive([
    {nome:'Home', rota:'/', video:''},
    {nome:'Sobre', rota:'/sobre', video:''},
    {nome:'Trabalhos', rota:'', video:''},
    {nome:'Contato', rota:'', video:''},
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

            <homeComponent v-if="$route.path == '/'"
            titulo="Olá, seja bem vindo ao meu Portfólio!"
            text="Conheça mais sobre mim e os meus trabalhos."
            />

            <homeComponent v-if="$route.path == '/sobre'"
            titulo="Meu nome é Thiago Faria Moreira"
            text="Sou desenvolvedor Front-End, apaixonado pelos processos do desenvolvimento web unido com a liberdade do design,
            acredito que a união destes dois elementos é o que torna tudo tão belo no digital."
            />
        
            <div class="positionDivTemplate">
            <router-link
                style="text-decoration: none;"
                v-for="(botoes, i) in botoesHeader"
                :key="i"
                :to="botoes.rota">
                <p
                variant="text"
                class="styleBotoes"
                >
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
    color:#f7f7f7;
    font-weight:400;
    cursor: pointer;
    margin: 5px 0px;
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