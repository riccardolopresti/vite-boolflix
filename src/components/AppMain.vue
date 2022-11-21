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
        <div class="row p-2">
            <div class="col">

                <AppCards 
                :objects="store.queryMovieTv"
                :imdbUrl="store.mdbUrl"
                :imdbWidth="store.imgWidth"/>

            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>