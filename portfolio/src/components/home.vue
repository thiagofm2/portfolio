<script>
export default {
    data: () => ({
        jobs: [
            {nome:'Marketplace', subtitulo:'Marketplace feito', rota:'https://houseus.com.br/', numero:'1', numero:'Exemplo 1'},
            {nome:'Landing Page', subtitulo:'', rota:'https://tonellipneus.com.br/unidades/bauru/', numero:'Exemplo 2'},
            {nome:'Site Institucional', subtitulo:'', rota:'https://proclinicasjc.com.br/exame', numero:'Exemplo 3'},
        ],

        contato:[
            {meioContato:'E-mail', icone:'mdi-email-outline'},
            {meioContato:'Telefone', icone:'mdi-phone-outline'},
            {meioContato:'Linkedin', icone:'mdi-linkedin'},
        ]
    }),
    props:{
        titulo: String,
        text: String,
    }
}
</script>

<template>
<v-container fluid>
    <div class="positionTextos">
        <h1 class="tituloHome">
            {{titulo}}
        </h1>
        <p class="subtituloHome" style="">
            {{ text }}
        </p>
    </div>

    <div
    class=" alinhadoMeio positionConteudos"
    v-if="$route.path == '/sobre'">
        <img
        contain
        style="max-width:350px"
        src="../assets/foto.jpg"/> 
    </div>
    
    <div
    class=" alinhadoMeio positionConteudos flex-column"
    v-if="$route.path == '/trabalhos'">
    
        <!-- <div class="flex-column alinhadoMeio">
            <h1>{{ trabalhos.titulo }}</h1>
            <p>{{ trabalhos.text }}</p>
        </div> -->
        <v-list style="background-color: transparent; margin:0px">
            <a style="text-decoration: none;"
            v-for="(trabalhos, index) in jobs"
            :key="index"
            :href="trabalhos.rota">
                <v-list-item
                style="margin:20px 0px; padding:0px;">
                    <v-list-item-subtitle class="tituloExemplo">
                       {{trabalhos.numero}} 
                    </v-list-item-subtitle>
                    <v-list-item-title class="tituloTrampos">
                        {{ trabalhos.nome }}
                    </v-list-item-title>
                </v-list-item>
            </a>
        </v-list>
    </div>

    <div
    class=" alinhadoMeio positionConteudos flex-column"
    v-if="$route.path == '/contato'">
        <div
        v-for="(redes, i) in contato"
        :key="i"
        class="d-flex align-self-start">
            <p class="listaContatos alinhadoMeio">
                <v-icon style="margin-right:10px">
                    {{redes.icone }}
                </v-icon>
                {{ redes.meioContato }}
            </p>
        </div>   
    </div>
</v-container>
</template>

<style setup>
.positionConteudos{
    position: absolute;
    left: 20%;
    top: 25%
}
.tituloHome{
    color: #f7f7f7;
    font-weight:400;
    font-size:25px;
    text-align: right;
}
.subtituloHome{
    color:#f7f7f7;
    font-weight:300;
    font-size:18px;
    text-align: right;
    max-width:490px;
    margin-top:20px;
}
.positionTextos{
    flex-direction: column;
    display: flex;
    position: absolute;
    right:50px;
    top:50px
}
.alinhadoMeio{
    align-items: center;
    justify-content: center;
    display: flex;
}
.tituloExemplo{
    color:#afafaf;
    font-size:20px;
    margin:10px 0px;
    line-height:0.8
}
.tituloTrampos{
    color:#ffffff !important;
    font-size:35px;
    line-height:1.05
}
.listaContatos{
    color:#d1d1d1 !important;
    font-weight:300;
    font-size:20px;
    text-align: left;
    max-width:490px;
    margin-top:20px;
    cursor: pointer
}
</style>