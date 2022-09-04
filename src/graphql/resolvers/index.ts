import { GetMovieArgs } from "../../typescript/getMovieTypes";
import MoviesResolvers from "./moviesResolver";

const resolvers = {
    Query: {
        getUpcomingMovies: (args: GetMovieArgs) => MoviesResolvers().getUpcomingMovies(args)
    }
}

export default resolvers;