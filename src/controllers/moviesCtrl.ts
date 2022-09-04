import { MoviesService } from "../services";
import { GetMovieArgs } from "../typescript/getMovieTypes"

const MoviesCtrl = () => {
    const getUpcomingMovies = async (args?: GetMovieArgs) => {
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

    return {
        getUpcomingMovies
    }
}

export default MoviesCtrl;
