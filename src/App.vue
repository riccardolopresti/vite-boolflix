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
    getApi(type, trend = false){
      store.isLoaded = false;
      console.log('tipo',type);
      store.trend = [];
      store.movie = [];
      store.tv = [];
      if(trend){
        store.url = 'https://api.themoviedb.org/3/trending/all/week?api_key=3de582aff9233c787f6aa552659674c1'
        store.params.query='';
      }else{
        if(type==='movie' && store.params.query==''){
          store.url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=3de582aff9233c787f6aa552659674c1'
          store.params.query='';
        }else if(type==='tv' && store.params.query==''){
          store.url = 'https://api.themoviedb.org/3/trending/tv/week?api_key=3de582aff9233c787f6aa552659674c1'
          store.params.query='';
        }else if(type==='favourite' && store.params.query==''){
          store.url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=3de582aff9233c787f6aa552659674c1';
          store.params.query='';
        }else{
          store.url = 'https://api.themoviedb.org/3/search/' + [type];
        }
      }
      axios.get(store.url, {params: store.params})
      .then(result => {
        console.log(store.url);
        if(type == 'favourite'){
          store[type] = store.favourite;
        }else{
          store[type] = result.data.results
        }

        store.isLoaded = true;
      })
      .catch(error => {
        console.log(error);
      })
    },
    getSearch(string){
      console.log('Search type', string)
      if(string === 'trend') this.getApi('trend',true)
      if(string == 'all'){
        this.getApi('movie')
        this.getApi('tv')
      }else{
        this.getApi(string)
        if(store[string].length == 0){
          return 'Nessun Risultato'
        }
      }
    }
  },
  mounted(){
    this.getApi('trend', true)
  }
}

</script>

<template>

  <AppHeader 
  @changeResultsType="(typeSeach) => getSearch(typeSeach)"
  @search="getSearch('all')"
  />

  <AppMain/>

</template>

<style lang="scss">
@use './src/styles/general'

</style>