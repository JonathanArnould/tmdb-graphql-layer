import { GetMovieArgs } from "../../typescript/getMovieTypes";
import MoviesResolvers from "./moviesResolver";

type Args = {
    args: GetMovieArgs
}

const resolvers = {
    Query: {
        getUpcomingMovies: (parent: any, { args }: Args) => MoviesResolvers().getUpcomingMovies(args)
    }
}

export default resolvers;