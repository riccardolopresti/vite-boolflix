<script>


export default {
    name:'AppCards',
    props:{
        objects: Object,
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

    <div class="box d-flex" v-for="object in objects" :key="object.id">
        
        <img :src="`${imdbUrl}${imdbWidth}${object.backdrop_path}`" :alt="object.name">
        <div class="back-cards" :class="{'active': object.backdrop_path == null}">
            <p>Titolo:{{object.title}}{{object.name}}</p>
            <p>Titolo Originale:{{object.original_title}}{{object.original_name}}</p>
            <p>Lingua:<span :class="`fi fi-${getFlag(object.original_language)}`"></span></p>
            <p>Voto:<i  class="fa-solid fa-star"></i></p>
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
}
</style>