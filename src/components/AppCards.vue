<script>


export default {
    name:'AppCards',
    props:{
        objects: Object
    },
    data(){
        return{
            
        }
    }
    
}
</script>

<template>
  <div class="rl-cards d-flex flex-wrap justify-content-center">

    <div class="box d-flex" v-for="object in objects" :key="object.id">
        
        <ul>
            <img src="" alt="">
            <li>Titolo:{{object.title}}{{object.name}}</li>
            <li>Titolo Originale:{{object.original_title}}{{object.original_name}}</li>
            <li>Lingua:<span :class="`fi fi-${object.original_language}`"></span></li>
            <li>Voto:{{object.vote_average}}</li>
        </ul>
    </div>
 
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general';
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