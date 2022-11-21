<script>

import {store} from '../data/store.js'

export default {
    name:'AppHeader',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="container-fluid h-100">
            <div class="rl-container d-flex h-100">

                <div class="row d-flex justify-content-between w-100">
                    <div class="col d-flex">
                        <div class="logo d-flex align-item-center">
                            <img src="/logo.png" alt="logo">
                        </div>
                    </div>
                    <div class="col d-flex align-item-center rl-center">
                        <div class="input-group mb-3 d-flex align-content-center h-100">
                            <input @keyup.enter="$emit('search')" type="text" v-model="store.userQuery" class="form-control rl-btn" placeholder="Cerca">
                            <button @click="$emit('search')" class="btn btn-outline-secondary rl-btn">Cerca</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use './src/styles/general.scss';
@use './src/styles/partials/vars' as *;

header{
    height: 100px;
    background-color: $bg-primary-color;
}

img{
    width: 180px;
    object-fit: contain;
}
.btn.rl-btn,
.form-control.rl-btn{
    height: 35%;
    line-height: 35%;
}
</style>