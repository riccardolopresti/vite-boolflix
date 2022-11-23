<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import {store} from '../data/store.js'

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";


export default {
    name:'AppJumbo',
    props:{
        type: String
    },
    components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
        store
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  methods:{
    getStar(number){
            return Math.round(number / 2);
        }
  }
};



</script>

<template>
 <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="item in store[type]" :key="item">
        <img
        :src="`${store.mdbUrl}${store.imgWidth}${item.backdrop_path}`" 
        alt=""
        >
        
        <div class="info-box">
            <h1>{{item.original_title || item.original_name}}</h1>
            <p v-if="getStar(item.vote_average) > 0">Valutazione: <i v-for="item in getStar(item.vote_average)" :key="item" class="fa-solid fa-star"></i></p>
            <p class="overview">{{item.overview}}</p>
        </div>

    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

.swiper {
  width: 100%;
  height: 850px;
}

.swiper-slide{
    position: relative;
    .info-box{
        background-color: rgba(0, 0, 0, 0.348);
        padding: 20px;
        width: 800px;
        height: 500px;
        position: absolute;
        border-radius: 5px;
        top: 50px;
        left: 200px;
        h1{
            font-size: 6.5rem;
        }
        p{
            font-size: 1.5rem;

        }
        .overview {
        font-family: $font-family-secondary;
        font-size: 1.2rem;
        text-align: justify;
        height: 250px;
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: rgb(196, 196, 196) rgb(53, 53, 53);
    }
    }

}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}



</style>