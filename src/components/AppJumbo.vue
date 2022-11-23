<script>

import {Swiper, SwiperSlide } from "swiper/vue";
import {store} from '../data/store.js'
import StarRating from 'vue-star-rating'


import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


import {Autoplay, Pagination, Navigation } from "swiper";


export default {
    name:'AppJumbo',
    props:{
        type: String
    },
    components: {
    Swiper,
    SwiperSlide,
    StarRating
  },
  data(){
    return{
        store
    }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  methods:{
    getStar(number){
            return (number / 2);
        }
  }
};
</script>

<template>

 <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }"
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
            <p>Valutazione: <star-rating :read-only=true :rating= getStar(item.vote_average) :increment= 0.01 :show-rating= false star-size="30" active-color="#f7f7f7" /></p>
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