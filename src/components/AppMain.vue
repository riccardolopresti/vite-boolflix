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

            <h1>{{title}}</h1>

            <div class="col">
                
                <AppCards type="movie"/>

                <AppCards type="tv"/>

            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>