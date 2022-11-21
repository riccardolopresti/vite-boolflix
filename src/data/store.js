import {reactive} from 'vue';

export const store= reactive({
    apiMovieUrl:'https://api.themoviedb.org/3/search/movie?api_key=3de582aff9233c787f6aa552659674c1',
    apiTvUrl:'https://api.themoviedb.org/3/search/tv?api_key=3de582aff9233c787f6aa552659674c1',
    userQuery:'rambo',
    querys:[],
})