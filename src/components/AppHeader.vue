<script>

import {store} from '../data/store.js'

export default {
    name:'AppHeader',
    data(){
        return{
            store,
            isShow: false,
            menu:[
                {
                    text: 'Home',
                    emit: 'trend',
                    href: '#',
                    current: true
                },
                {
                    text: 'Film',
                    emit: 'movie',
                    href: '#',
                    current: false
                },
                {
                    text: 'Serie tv',
                    emit: 'tv',
                    href: '#',
                    current: false
                },
                {
                    text: 'La mia lista',
                    href: '#',
                    current: false
                },
                
            ]
        }
    },
    methods:{
            getActive(index){
                this.menu.forEach(element => element.current = false)
                this.menu[index].current = true
            },
            getEmit(string){
                console.log(string);
                let emitOutput = this.$emit('changeResultsType',string)
            },
            toggle(){
                this.isShow = !this.isShow
                console.log(this.isShow);
            }
        },
}
</script>

<template>
    <header>
        <div class="container-fluid h-100">
            <div class="rl-container d-flex h-100">

                <div class="row d-flex w-100 ">

                    <div class="col-auto d-flex h-100 ">
                        <div class="logo d-flex align-item-center">
                            <img @click="getActive(0),getEmit('trend')" src="/logo.png" alt="logo">
                        </div>
                    </div>
                    
                    <div class="rl-nav col d-flex justify-content-between">

                        <div class="col-auto">
                            <nav class="h-100 ">
                                <ul class="d-flex h-100 align-items-center ">
                                    <li v-for="item, index in menu" :key="index">
                                        <a 
                                            :class="{'active': item.current}" 
                                            @click="getActive(index),getEmit(item.emit)" href="#">{{item.text}}
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div class="col-auto d-flex align-item-center rl-center">

                            <div class="input-group mb-3 d-flex align-content-center h-100 px-3">

                                <div class="search-bar d-flex">

                                    <i @click="toggle()" class="fa-solid fa-magnifying-glass"></i>

                                    <div v-if="isShow === true" class="search-wrapper d-flex">
                                        <input  @keyup.enter="$emit('search')" type="text" v-model="store.params.query" class="form-control rl-btn" placeholder="Cerca">

                                        <button @click="$emit('search')" class="btn btn-outline-secondary rl-btn">
                                            Cerca
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>

                            <div class="log d-flex align-items-center justify-content-end h-100 w-25">
                                <img src="/avatar.jpg" alt="avatar.jpg">
                            </div>

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

.debug{
    background-color: rgba(127, 255, 212, 0.624);
    border: 1px solid black;
}

header{
    height: 100px;
    background-color: $bg-primary-color;
}
.logo img{
    min-width: 80px;
    width: 180px;
    object-fit: contain;
    cursor: pointer;
}
nav{
    min-width: 200px;
}
li{
    font-size: 1.2rem;
    padding: 0px 15px;
    a{
        &:hover{
            color: lighten($font-primary-color, 100%);
            border-bottom: 5px solid #dc1a28;
            padding-bottom: 5px;
        }
        &.active{
            color: lighten($font-primary-color, 100%);
            border-bottom: 5px solid #dc1a28;
            padding-bottom: 5px;
        }
    }
}
.row{
    flex-wrap: nowrap;
}
i{
    cursor: pointer;
    line-height: 34px;
    font-size: 1.8rem;
}
.log {
    min-width: 80px;
    img{
        width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
    }
}

</style>