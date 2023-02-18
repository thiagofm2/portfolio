<script>
export default {
    data: () => ({
        jobs: [
            {nome:'Marketplace', subtitulo:'Marketplace feito', rota:'https://houseus.com.br/', numero:'1', numero:'1'},
            {nome:'Landing Page', subtitulo:'', rota:'https://tonellipneus.com.br/unidades/bauru/', numero:'2'},
            {nome:'Site Institucional', subtitulo:'', rota:'https://proclinicasjc.com.br/exame', numero:'3'},
        ],
        contato:[
            {meioContato:'E-mail: thiago.fm012@gmail.com', icone:'mdi-email-outline', rota:''},
            {meioContato:'Whatsapp: (12) 99229 1008', icone:'mdi-whatsapp', rota:'https://api.whatsapp.com/send?phone=5512992291008'},
            {meioContato:'Linkedin', icone:'mdi-linkedin', rota:'https://www.linkedin.com/in/thiago-faria-801923220/'},
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
    <div
    class="positionTextos" 
    data-aos="fade-in"
    data-aos-duration="2500"
    data-aos-delay="500"
    >
        <h1 class="tituloHome">
            {{titulo}}
        </h1>
        <p class="subtituloHome" style="">
            {{ text }}
        </p>
    </div>

    <!-- <div
    data-aos="fade-in"
    data-aos-duration="2500"
    class=" alinhadoMeio positionConteudos"
    v-if="$route.path == '/'">
        <img
        contain
        style="max-width:350px"
        src="../assets/foto.webp"/> 
    </div> -->

<!-- TRABALHOS --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <div
    data-aos="fade-in"
    data-aos-duration="2500"
    data-aos-delay="500"
    class=" alinhadoMeio positionConteudos trabalhosMobile flex-column"
    v-if="$route.path == '/trabalhos'">
        <v-list style="background-color: transparent; margin:0px">
            <a style="text-decoration: none;"
            v-for="(trabalhos, index) in jobs"
            :key="index"
            :href="trabalhos.rota">
                <v-list-item class="mgListMobile"
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

<!-- CONTATOS ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <div
    data-aos="fade-in"
    data-aos-duration="2500"
    data-aos-delay="500"
    style="margin-top:56px"
    class=" alinhadoMeio positionConteudos flex-column"
    v-if="$route.path == '/contato'">
        <div
        v-for="(redes, i) in contato"
        :key="i"
        class="d-flex align-self-start">
            <a :href="redes.rota" style="text-decoration: none">
                <p class="listaContatos alinhadoMeio">
                    <v-icon style="margin-right:10px">
                        {{redes.icone }}
                    </v-icon>
                    {{ redes.meioContato }}
                </p>
            </a>
        </div>   
    </div>
</v-container>
</template>

<style setup>
@media (min-device-width: 320px) and (max-device-width: 640px) {
    .positionTextos{
        left:20px !important;      
    }
    .subtituloHome{
        max-width:315px !important;
    }
    .tituloExemplo{
        font-size:15px !important;
        line-height:1.1 !important
    }
    .tituloTrampos{
        font-size:20px !important;
        line-height:1.16 !important;
    }
    .mgListMobile{
        margin: 5px 0px !important
    }
    .trabalhosMobile{
        right: 0px;
        left: 20px !important;
        bottom: 85px !important;
        align-items: start !important;
    }
}
.positionConteudos{
    position: absolute;
    right: 20%;
    top: 25%
}
.tituloHome{
    color: #f7f7f7;
    font-weight:500;
    font-size:25px;
    text-align: left;
    font-family: Oswald;
}
.subtituloHome{
    color:#f7f7f7;
    font-weight:400;
    font-size:18px;
    text-align: left;
    max-width:490px;
    margin-top:20px;
    font-family: Oswald;
}
.positionTextos{
    flex-direction: column;
    display: flex;
    position: absolute;
    left:50px;
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
    font-family: Oswald;
    line-height:1.2
}
.tituloTrampos{
    color:#ffffff;
    font-size:35px;
    line-height:1.25;
    font-family: Oswald;
}
.tituloExemplo:hover{
    color:#e2ad00;
}
.tituloTrampos:hover{
    color:#e2ad00;
}
.listaContatos{
    color:#d1d1d1;
    font-weight:300;
    font-size:20px;
    text-align: left;
    max-width:490px;
    margin-top:20px;
    cursor: pointer;
    font-family: Oswald;
}
.listaContatos:hover{
    color:#e2ad00;
}
</style>