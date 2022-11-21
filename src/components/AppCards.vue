<script>


export default {
    name:'AppCards',
    props:{
        objectsMovies: Object,
        objectTvs: Object,
        imdbUrl: String,
        imdbWidth: String,
    },
    data(){
        return{

        }
    },
    methods:{
        getFlag(string){
            if(string == 'en') return 'gb'
            else return string
        },
        getStar(number){
            const newNumber = Math.round(number)
            const stars = newNumber / 2;
            console.log(stars);
            
        }
    },
    mounted(){
        this. getStar(9)
    }
}
</script>

<template>
  <div class="rl-cards d-flex flex-wrap justify-content-center">

    <div class="box d-flex" v-for="object in objectsMovies" :key="object.id">
        
        <img :src="`${imdbUrl}${imdbWidth}${object.backdrop_path}`" :alt="object.name">
        <div class="back-cards" :class="{'active': object.backdrop_path == null}">
            <span>Titolo:{{object.title}}</span>
            <span>Titolo Originale:{{object.original_title}}</span>
            <span>Lingua:<span :class="`fi fi-${getFlag(object.original_language)}`"></span></span>
            <span>Voto:<i  class="fa-solid fa-star"></i></span>
        </div>

    </div>

    <div class="box d-flex" v-for="object in objectTvs" :key="object.id">
        
        <img :src="`${imdbUrl}${imdbWidth}${object.backdrop_path}`" :alt="object.name">
        <div class="back-cards">
            <span>Titolo:{{object.name}}</span>
            <span>Titolo Originale:{{object.original_name}}</span>
            <span>Lingua:<span :class="`fi fi-${getFlag(object.original_language)}`"></span></span>
            <span>Voto:{{object.vote_average}}</span>
        </div>

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
    position: relative;
    height: 450px;
    width: 320px;
    img{
        object-fit: cover;
        width: 320px;
        height: 450px;
    }
}
.back-cards{
    position: absolute;
    display: none;
    background-color: rgba(0, 0, 0, 0.632);
    width: 320px;
    height: 450px;
    left: 0;
    top:0;
    .box:hover &{
        display: block;
    }
    .active{
        display: block;
    }
    span{
        display: block;
    }
}
</style>