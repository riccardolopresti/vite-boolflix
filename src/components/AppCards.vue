<script>

import {store} from '../data/store.js'

export default {
    name:'AppCards',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  <div class="rl-cards d-flex flex-wrap justify-content-center">

    <div class="box d-flex" v-for="query in store.querys" :key="query.id">
        
        <ul>
            <li>Titolo:{{query.title}}</li>
            <li>Titolo Originale:{{query.original_title}}</li>
            <li>Lingua:{{query.original_language}}</li>
            <li>Voto:{{query.vote_average}}</li>
        </ul>
    </div>
 
  </div>
</template>

<style lang="scss" scoped>
.rl-cards{
    gap: 20px;
    padding-top: 20px;
}
.box{
    height: 450px;
    background-color: bisque;
    border: 1px solid black;
    width: 320px;

    img{
        object-fit: cover;
        width: 320px;
    }
}
li{
    color: black;

}
</style>