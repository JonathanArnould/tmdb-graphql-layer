import { Args, Query, Resolver } from "type-graphql";
import { MoviesCtrl } from "../../controllers";
import { GetUpcomingMoviesArgsObj, UpcomingMovies } from "../../types/getMoviesTypes";
import { GetMovieDetailsArgs, MovieDetailsResult } from "../../types/movieDetailsType";

@Resolver()
export default class MoviesResolvers {
    @Query(() => UpcomingMovies)
    async getUpcomingMovies (@Args(type => GetUpcomingMoviesArgsObj) { args }: GetUpcomingMoviesArgsObj ) {
        return await MoviesCtrl().getUpcomingMovies(args);
    };

    
    @Query(() => MovieDetailsResult)
    async getMovieDetails (@Args() { id }: GetMovieDetailsArgs) {
        return await MoviesCtrl().getMovieDetails(id);
    }
};
