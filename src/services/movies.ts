import axios from 'axios';
import { getRequestTmdb } from './helpers';
import { GetMovieArgs, UpcomingMoviesPaginate } from '../typescript/getMovieTypes';

const MoviesService = () => {
    const getUpcomingMovies = async (args?: GetMovieArgs): Promise<UpcomingMoviesPaginate> => {
        let page;
        if(args) page = args.page;
    
        const REQUEST = getRequestTmdb('/movie/upcoming', page);
        const movies = await axios(REQUEST);
        return movies.data;
    }

    return {
        getUpcomingMovies
    }
}

export default MoviesService;
