import axios from 'axios';
import { getRequestTmdb } from './lib/buildTmdbRequest';
import { MovieDetails } from '../types/movieDetailsType';
import { GetUpcomingMoviesArgs, UpcomingMoviesPaginate } from '../types/getMoviesTypes';

const MoviesService = () => {
    const getUpcomingMovies = async (args: GetUpcomingMoviesArgs): Promise<UpcomingMoviesPaginate> => {
        const { page } = args;
        
        const REQUEST = getRequestTmdb('/movie/upcoming', [{ key: 'page', value: page}]);
        const movies = await axios(REQUEST);
        return movies.data;
    }

    const getMovieDetails = async (id: string ): Promise<MovieDetails> => {
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
