import { GetMovieDetailsArgs, GetUpcomingMoviesArgs } from "../../typescript/getMoviesTypes";
import MoviesResolvers from "./moviesResolver";

type ArgsGetMovies = { args: GetUpcomingMoviesArgs }
type ArgsGetMovieDetails = { args: GetMovieDetailsArgs}

const resolvers = {
    Query: {
        getUpcomingMovies: (parent: any, { args }: ArgsGetMovies) => MoviesResolvers().getUpcomingMovies(args),
        getMovieDetails: (parent: any, { args }: ArgsGetMovieDetails) => MoviesResolvers().getMovieDetails(args)
    }
}

export default resolvers;