<script setup>
</script>

<template>
<v-container fluid>
    <div class="positionDiv">
        <h1 class="tituloHome">
            Olá, sejam bem vindos!
        </h1>
        <p class="subtituloHome">
            Eu me chamo Thiago, e neste site você <br>
            verá alguns dos meus trabalhos
        </p>
    </div>
</v-container>
</template>

<style setup>
.tituloHome{
    color: #f7f7f7;
    font-weight:400;
    font-size:35px;
    text-align: right;
}
.subtituloHome{
    color:#f7f7f7;
    font-weight:300;
    font-size:18px;
    text-align: right;

}
.positionDiv{
    flex-direction: column;
    display: flex;
    position: absolute;
    right:50px;
    top:50px
}
</style>