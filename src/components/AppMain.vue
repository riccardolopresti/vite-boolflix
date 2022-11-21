<script>

import AppCards from './AppCards.vue';
import {store} from '../data/store.js'

export default {
    name:'AppMain',
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
        <div class="row p-5">
            <div class="col">

                <AppCards 
                :objectsMovies="store.querysMovie" 
                :objectTvs="store.querysTv"
                :imdbUrl="store.mdbUrl"
                :imdbWidth="store.imgWidth"/>

            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row{
    background-color: white ;
}
.col{
    background-color: rgb(82, 59, 59) ;
}
</style>