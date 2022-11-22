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
    /*getApiUrl(urlSuffix){
      return store.url + urlSuffix
    },*/
    getApi(type){
      //const urlQuery= this.getApiUrl(urlSuffix);
      //console.log(urlQuery);
      axios.get(store.url + type, {params: store.params})
      .then(result => {
        store[type] = result.data.results
        console.log('movie',store.movie);
        console.log('tv',store.tv);
        /*//console.log('dop',urlQuery);
        if(urlSuffix == store.apiMovieUrl){
          store.querysMovies = result.data.results
          //console.log('MOVIE',store.querysMovies);
        }
        if(urlSuffix == store.apiTvUrl){
          store.querysTv = result.data.results
          //console.log('TV',store.querysTv);
        }
        if(urlSuffix == store.apiTrend){
          //store.onLoad == result.data
          //console.log(store.onLoad);
        }*/

        //store.queryMovieTv = store.querysMovies.concat(store.querysTv)
        //console.log('array concatenato',store.queryMovieTv);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
  mounted(){
    this.getApi(store.apiMovie)
    this.getApi(store.apiTv)
  }
}

</script>

<template>

  <AppHeader @search="this.getApi(store.apiMovieUrl),this.getApi(store.apiTvUrl)"/>
  <AppMain title="Film"/>
  <AppMain title="Serie Tv"/>

</template>

<style lang="scss">
@use './src/styles/general'

</style>