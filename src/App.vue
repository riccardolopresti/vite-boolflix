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
    getApi(type){
      axios.get(store.url + type, {params: store.params})
      .then(result => {
        
        store[type] = result.data.results
        console.log('movie',store.movie);
        console.log('tv',store.tv);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
  mounted(){
    this.getApi('movie')
    this.getApi('tv')
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