import { MoviesService } from "../services";
import { GetMovieDetailsArgs, GetUpcomingMoviesArgs } from "../typescript/getMoviesTypes"

const MoviesCtrl = () => {
    const getUpcomingMovies = async (args: GetUpcomingMoviesArgs) => {
        try {
            const upcomingMoviesResult = await MoviesService().getUpcomingMovies(args);
            return {
                success: true,
                movies: upcomingMoviesResult
            }
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    }

    const getMovieDetails = async (args: GetMovieDetailsArgs) => {
        try {
            const movieDetailsResult = await MoviesService().getMovieDetails(args);
            return {
                success: true,
                movieDetails: movieDetailsResult
            }
        } catch (error) {
            return {
                success: false,
                error
            }
        }
    }

    return {
        getUpcomingMovies,
        getMovieDetails
    }
}

export default MoviesCtrl;
