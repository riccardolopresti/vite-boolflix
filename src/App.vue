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
    getApiUrl(urlSuffix){
      return store.url + urlSuffix
    },
    getApi(urlSuffix){
      const urlQuery= this.getApiUrl(urlSuffix);
      console.log(urlQuery);
      axios.get(urlQuery, {
        params:{
          query: store.userQuery
        }
      })
      .then(result => {
        console.log('dop',urlQuery);
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
        }

        store.queryMovieTv = store.querysMovies.concat(store.querysTv)
        //console.log('array concatenato',store.queryMovieTv);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
  mounted(){
    this.getApi(store.apiMovieUrl)
    this.getApi(store.apiTvUrl)
  }
}

</script>

<template>

  <AppHeader @search="this.getApi(store.apiMovieUrl),this.getApi(store.apiTvUrl)"/>
  <AppMain/>

</template>

<style lang="scss">
@use './src/styles/general'

</style>