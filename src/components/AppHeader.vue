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

                <div class="row d-flex w-100">

                    <div class="col-1 d-flex">
                        <div class="logo d-flex align-item-center">
                            <img @click="$emit('home')" src="/logo.png" alt="logo">
                        </div>
                    </div>

                    <div class="col-6 d-flex flex-start">
                        <nav class="h-100 d-flex align-items-center">
                            <ul class="h-100 d-flex align-items-center">
                                <li><a @click="$emit('home')" href="#">Home</a></li>
                                <li><a @click="$emit('film')" href="#">FILM</a></li>
                                <li><a @click="$emit('tv')" href="#">Serie tv</a></li>
                                <li><a href="#">La mia lista</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div class="col-2 d-flex align-item-center rl-center">
                        <div class="input-group mb-3 d-flex align-content-center h-100">
                            <input @keyup.enter="$emit('search')" type="text" v-model="store.params.query" class="form-control rl-btn" placeholder="Cerca">
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
    min-width: 180px;
    object-fit: contain;
    cursor: pointer;
}
li{
    font-size: 1.2rem;
    padding: 0px 15px;
    a{
        &:hover{
            color: lighten($font-primary-color, 20%);
        }
    }
}
</style>