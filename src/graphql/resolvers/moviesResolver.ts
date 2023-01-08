import { MoviesCtrl } from "../../controllers";
import { GetMovieDetailsArgs, GetUpcomingMoviesArgs } from "../../typescript/getMoviesTypes"

const MoviesResolvers = () => {
    const getUpcomingMovies = async (args: GetUpcomingMoviesArgs) => {
        return await MoviesCtrl().getUpcomingMovies(args);
    };

    const getMovieDetails = async (args: GetMovieDetailsArgs) => {
        return await MoviesCtrl().getMovieDetails(args);
    }

    return { 
        getUpcomingMovies,
        getMovieDetails
    }
};

export default MoviesResolvers;
