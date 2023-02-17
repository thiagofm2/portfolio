<script>
export default {
    data: () => ({

    }),
    props:{
        titulo: String,
        text: String,
    }
}
</script>

<template>
<v-container fluid>
    <div class="positionDiv">
        <h1 class="tituloHome">
            {{titulo}}
        </h1>
        <p class="subtituloHome" style="">
            {{ text }}
        </p>
    </div>

    <div
    class=" alinhadoMeio positionSobre"
    v-if="$route.path == '/sobre'">
        <img
        contain
        style="max-width:350px"
        src="../assets/foto.jpg"/> 
    </div>


</v-container>
</template>

<style setup>
.positionSobre{
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
.positionDiv{
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
</style>