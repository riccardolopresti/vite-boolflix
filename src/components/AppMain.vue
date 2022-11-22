<script>

import AppCards from './AppCards.vue';


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
        
        }
    }
}
</script>

<template>
  <div class="conteiner-fluid">
    <div class="rl-container">
        <div class="row p-2">

            
            <div class="col">
                
                <AppCards title="Film" type="movie"/>

                <AppCards title="Serie Tv" type="tv"/>

            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    
</style>