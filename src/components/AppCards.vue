<script>

import {store} from '../data/store.js'


export default {
    name:'AppCards',
    props:{
        type: String,
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

<div class="rl-container">
    <h1>{{title}}</h1>
</div>

<div class="rl-cards-container d-flex flex-wrap justify-content-center">

    
    <div class="box d-flex" v-for="object in store[type]" :key="object.id">

        <img
        :src="`${store.mdbUrl}${store.imgWidth}${object.backdrop_path}`" 
        alt=""
        >
        <img class="placeholder-img" v-if="object.backdrop_path === null"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg" 
        alt=""
        >

        <div class="back-cards p-3" >
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

</div>
 
</template>

<style lang="scss" scoped>
@use '../styles/general';
@use '../styles/partials/vars' as *;

.rl-container{
    max-width: 1683px;
}
.active{
        background-color: black;
        width: 320px;
        height: 450px;
    }
.rl-cards-container{
    padding-bottom: 50px;
    gap: 20px;
    color: lighten($font-primary-color, 10%);
}
.box{
    position: relative;
    height: 450px;
    width: 320px;
    overflow: hidden;
    }
    img{
        object-fit: cover;
        width: 320px;
        height: 450px;
    }
    .placeholder-img{
        height: 500px;
        width: 400px;
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
        to {bottom:0px,}
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
    .overview{
        font-family: $font-family-secondary;
        height: 200px;
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: rgb(196, 196, 196) rgb(53, 53, 53);
    }
}
</style>