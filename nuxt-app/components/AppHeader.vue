<script setup>
import {ref, reactive} from 'vue';
const botoesHeader = reactive ([
    {nome:'Sobre', rota:''},
    {nome:'Trabalhos', rota:''},
    {nome:'Contato', rota:''},
]) 
</script>

<template>
    <v-container fluid>
        <v-row class="header">
            <v-col
            cols="12"
            md="6">
            </v-col>
            <v-col
            cols="12"
            md="2"
            style="padding: 0px"
            class="alinhadoMeio"
            v-for="(botoes, i) in botoesHeader"
            :key="i">
                <v-btn variant="text" class="botoesMenuStyle">
                    {{ botoes.nome }}
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.header{
    background-color: #0e0e0e;
    height: 15vh;
    margin: -20px
}
.botoesMenuStyle{
    text-transform: none;
    font-weight: 500;
    color:#f7f7f7
}
.alinhadoMeio{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>