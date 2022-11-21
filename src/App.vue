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
      axios.get(store.apiUrl, {
        params:{
          query: 'matrix'
        }
      })
      .then(result => {
        store.querys = result.data.results
        console.log(store.query);
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

  <AppHeader/>
  <AppMain/>

</template>

<style lang="scss">
@use './src/styles/general'

</style>