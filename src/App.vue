<script>

import AppHeader from '../src/components/AppHeader.vue'
import AppMain from '../src/components/AppMain.vue'
import axios from 'axios'

import {store} from '../src/data/store.js'

export default {
  name:'App',
  components:{
    AppHeader,
    AppMain,
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getMoviesApi(){
      axios.get(store.apiMovieUrl, {
        params:{
          query: store.userQuery
        }
      })
      .then(result => {
        store.querysMovie = result.data.results
        console.log(store.querysMovie);
      })
      .catch(error => {
        console.log(error);
      })
    },
    getTvApi(){
      axios.get(store.apiTvUrl, {
        params:{
          query: store.userQuery
        }
      })
      .then(result => {
        store.querysTv = result.data.results
        console.log(result.data.results);
        console.log(store.querysTv);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  mounted(){
    this.getMoviesApi()
    this.getTvApi()
  }
}

</script>

<template>

  <AppHeader @search="this.getMoviesApi(), this.getTvApi()"/>
  <AppMain/>

</template>

<style lang="scss">
@use './src/styles/general'

</style>