import {reactive} from 'vue';

export const store= reactive({
    url:'https://api.themoviedb.org/3/search/',
    //apiTrend:'trending/all/week?api_key=3de582aff9233c787f6aa552659674c1',
    params:{
        api_key:'3de582aff9233c787f6aa552659674c1',
        query: 'spiderman',
        language: 'it-IT',
    },
    mdbUrl:'https://image.tmdb.org/t/p/',
    imgWidth:'original/',
    //all:[],
    movie:[],
    tv:[],
    queryMovieTv:[]
})