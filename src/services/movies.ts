import axios from 'axios';
import { getRequestTmdb } from './helpers';
import { GetUpcomingMoviesArgs, UpcomingMoviesPaginate, GetMovieDetailsArgs } from '../typescript/getMoviesTypes';

const MoviesService = () => {
    const getUpcomingMovies = async (args: GetUpcomingMoviesArgs): Promise<UpcomingMoviesPaginate> => {
        const { page } = args;
        
        const REQUEST = getRequestTmdb('/movie/upcoming', [{ key: 'page', value: page}]);
        const movies = await axios(REQUEST);
        return movies.data;
    }

    const getMovieDetails = async (args: GetMovieDetailsArgs ) => {
        const { id } = args;
        
        const REQUEST = getRequestTmdb(`/movie/${id}`);
        const movie = await axios(REQUEST);
        return movie.data;
    }

    return {
        getUpcomingMovies,
        getMovieDetails
    }
}

export default MoviesService;
