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

<AppJumbo v-if="store.trend.length > 0" type="trend"/>

<AppJumbo v-if="store.movie.length > 0" type="movie"/>

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
</template>

<style lang="scss" scoped>
.no-results{
    text-align: center;
    font-size: 2.5rem;
}
</style>