import { MoviesService } from "../services";
import { GetUpcomingMoviesArgs } from "../types/getMoviesTypes"
import { GetMovieDetailsArgs } from "../types/movieDetailsType";

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

    const getMovieDetails = async (id: string) => {
        try {
            const movieDetailsResult = await MoviesService().getMovieDetails(id);
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
