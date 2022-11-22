<script>

import {store} from '../data/store.js'


export default {
    name:'AppCards',
    props:{
        type: String,
        imdbUrl: String,
        imdbWidth: String,
        title: String
    },
    data(){
        return{
            store
        }
    },
    methods:{
        getFlag(string){
            if(string == 'en') return 'gb'
            if(string == 'ja') return 'jp'
            else return string
        },
        getStar(number){
            return Math.round(number / 2);
        }
    },
    mounted(){

    }
}
</script>

<template>

<h1>{{title}}</h1>

<div class="rl-cards-container d-flex flex-wrap justify-content-center">

    
    <div class="box d-flex" v-for="object in store[type]" :key="object.id">

        <img :src="`${store.mdbUrl}${store.imgWidth}${object.backdrop_path}`" :alt="object.name">

        <div class="back-cards p-3" :class="{'active': object.backdrop_path == null}">
            <p>{{object.original_title || object.original_name}}</p>
            <p><span :class="`fi fi-${getFlag(object.original_language)}`"></span></p>
            <p v-if="getStar(object.vote_average) > 0">Valutazione: <i v-for="item in getStar(object.vote_average)" :key="item" class="fa-solid fa-star"></i>
            </p>
            <p v-else>
                Valutazione: <i class="fa-regular fa-star"></i>
            </p>
            <p class="overview">{{object.overview}}</p>
        </div>

    </div>

    <!--<div class="no-results" v-if="objects.length == 0">
        <p>nessun risultato</p>
    </div>-->

</div>
 
</template>

<style lang="scss" scoped>
@use '../styles/general';
@use '../styles/partials/vars' as *;

h1{
    margin-left: 112px;
}
.rl-cards-container{
    gap: 20px;
    color: lighten($font-primary-color, 10%);
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
    overflow: hidden;
    display: none;
    background-color: rgba(0, 0, 0, 0.632);
    width: 320px;
    height: 450px;
    left: 0;
    top:0px;
    animation-name: example;
    animation-duration: 0.6s;  
    .box:hover &{
        display: block;
        @keyframes example {
        from {top: 450px}
        to {bottom:0px}
        }
    }
    p:first-child{
        max-height: 120px;
        overflow: auto;
        font-size: 2.3rem;
        text-transform: uppercase;
        font-weight: bolder;
        &:last-child{
            font-size: 1rem;
            text-transform:none;
            font-weight: 400;
        }
    }
    .active{
        display: block;
    }
    .overview{
        font-family: $font-family-secondary;
        height: 200px;
        overflow: auto;
    }
}
.no-results{
    font-size: 2.5rem;
}

</style>