<script>


export default {
    name:'AppCards',
    props:{
        objectsMovies: Object,
        objectTvs: Object
    },
    data(){
        return{
            
        }
    },
    methods:{
        getFlag(string){
            if(string == 'en') return 'gb'
            else return string
        }
    }
    
}
</script>

<template>
  <div class="rl-cards d-flex flex-wrap justify-content-center">

    <div class="box d-flex" v-for="object in objectsMovies" :key="object.id">
        
        <ul>
            <img src="" alt="">
            <li>Titolo:{{object.title}}</li>
            <li>Titolo Originale:{{object.original_title}}</li>
            <li>Lingua:<span :class="`fi fi-${getFlag(object.original_language)}`"></span></li>
            <li>Voto:{{object.vote_average}}</li>
        </ul>
    </div>

    <div class="box d-flex" v-for="object in objectTvs" :key="object.id">
        
        <ul>
            <img src="" alt="">
            <li>Titolo:{{object.name}}</li>
            <li>Titolo Originale:{{object.original_name}}</li>
            <li>Lingua:<span :class="`fi fi-${getFlag(object.original_language)}`"></span></li>
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