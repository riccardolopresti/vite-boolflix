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
    getApi(){
      axios.get(store.apiMovieUrl, {
        params:{
          query: store.userQuery,
        }
      })
      .then(result => {
        store.querys = result.data.results
        console.log(store.querys);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  mounted(){
    this.getApi()
  }
}

</script>

<template>

  <AppHeader @search="this.getApi()"/>
  <AppMain/>

</template>

<style lang="scss">
@use './src/styles/general'

</style>