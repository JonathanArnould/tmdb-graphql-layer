import { MoviesCtrl } from "../../controllers";
import { GetMovieArgs } from "../../typescript/getMovieTypes"

const MoviesResolvers = () => {
    const getUpcomingMovies = async (args?: GetMovieArgs) => {
        return await MoviesCtrl().getUpcomingMovies(args);
    };

    return { 
        getUpcomingMovies 
    }
}

export default MoviesResolvers;
