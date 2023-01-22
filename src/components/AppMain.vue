<script>

import AppCards from './AppCards.vue';
import AppJumbo from './AppJumbo.vue'
import {store} from '../data/store.js'

export default {
    name:'AppMain',
    props:{
        title: String
    },
    components:{
        AppCards,
        AppJumbo
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>

<div v-if="store.isLoaded">
    <AppJumbo v-if="store.trend.length > 0" type="trend"/>

    <AppJumbo v-if="store.movie.length > 0" type="movie"/>

    <AppJumbo v-if="store.tv.length > 0" type="tv"/>

    <div class="conteiner-fluid">
        <div class="rl-container">
            <div class="row p-2">

            
                <div class="col">
                
                    <AppCards v-if="store.trend.length > 0" title="Popolari" type="trend"/>

                    <AppCards v-if="store.movie.length > 0" title="Film" type="movie"/>

                    <AppCards v-if="store.tv.length > 0" title="Serie Tv" type="tv"/>

                    <div class="no-results" v-if="(store.movie.length == 0) && (store.tv.length == 0) && (store.trend.length == 0)">
                        <p>nessun risultato</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div class="loader" v-else>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</div>

</template>

<style lang="scss" scoped>
.no-results{
    text-align: center;
    font-size: 2.5rem;
}
.loader{
    text-align: center;
    padding-top: 50px;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>