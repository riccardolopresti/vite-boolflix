import {reactive} from 'vue';

export const store= reactive({
    url:'https://api.themoviedb.org/3/',
    apiTrend:'trending/all/week?api_key=3de582aff9233c787f6aa552659674c1',
    apiMovieUrl:'search/movie?api_key=3de582aff9233c787f6aa552659674c1',
    apiTvUrl:'search/tv?api_key=3de582aff9233c787f6aa552659674c1',
    mdbUrl:'https://image.tmdb.org/t/p/',
    imgWidth:'original/',
    userQuery:'bad',
    all:[],
    querysMovies:[],
    querysTv:[],
    queryMovieTv:[]
})