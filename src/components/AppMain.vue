<script>

import AppCards from './AppCards.vue';

export default {
    name:'AppMain',
    components:{
        AppCards
    }
}
</script>

<template>
  <div class="conteiner-fluid">
    <div class="rl-container">
        <div class="row p-5">
            <div class="col">
                <AppCards/>
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