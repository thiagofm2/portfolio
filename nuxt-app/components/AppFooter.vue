<script setup>
import {ref, reactive} from 'vue';
const botoesFooter = reactive ([
    {nome:'Sobre', rota:''},
    {nome:'Trabalhos', rota:''},
    {nome:'Contato', rota:''},
]) 
</script>

<template>
    <v-container fluid>
        <v-row class="footer">
            <v-col cols="12" md="6">

            </v-col>
            <v-col
            cols="12"
            md="3"
            class="justify-center flex-column d-flex">
                <h1 class="abaContato">
                    Sessões:
                </h1>
                <p
                class="botoesMenuStyle"
                v-for="(botoesFt, i) in botoesFooter"
                :key="i">
                    {{botoesFt.nome}}
                </p>
            </v-col>
            <v-col cols="12" md="3" class="justify-center flex-column d-flex">
                <h1 class="abaContato">
                    Entre em contato:
                </h1>
                <p class="botoesMenuStyle">thiago.fm012@gmail.com</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<style setup>
.footer{
    background-color: #0e0e0e;
    height: 30vh;
    margin: -20px
}
.botoesMenuStyle{
    text-transform: none;
    font-weight: 500;
    color:#f7f7f7;
    padding-left:0px;
    margin: 5px 0px;
    font-size:12px;
    cursor: pointer;
}
.alinhadoMeio{
    display: flex;
    align-items: center;
    justify-content: center;
}
.abaContato{
    color:#f7f7f7;
    font-weight:600;
    font-size:15px;
    margin-bottom:20px;
}
.textFooter{
    color:#f7f7f7;
    font-weight:400;
    font-size:12px;
}
</style>