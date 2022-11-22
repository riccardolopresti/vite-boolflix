<script>

import AppCards from './AppCards.vue';
import {store} from '../data/store.js'

export default {
    name:'AppMain',
    props:{
        title: String
    },
    components:{
        AppCards
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
  <div class="conteiner-fluid">
    <div class="rl-container">
        <div class="row p-2">

            
            <div class="col">
                
                <AppCards v-if="store.trend.length > 0" title="Popolari" type="trend"/>

                <AppCards v-if="store.movie.length > 0" title="Film" type="movie"/>

                <AppCards v-if="store.tv.length > 0" title="Serie Tv" type="tv"/>


            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    
</style>