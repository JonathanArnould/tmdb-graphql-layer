import { ObjectType } from "type-graphql";
import { Field, InputType } from "type-graphql/dist/decorators";
import { Float, ID, Int } from "type-graphql/dist/scalars";

@InputType({ description: 'Arguments to get a specific page in movies pagination'})
export class GetUpcomingMoviesArgs {
    @Field(type => String)
    page?: string;
}

@ObjectType({ description: "Model for request criteria by minimum/maximum dates" })
export class UpcomingMoviesDates {
    @Field(type => String, { description: "Minimum date" })
    minimum!: string
    
    @Field(type => String, { description: "Maximum date" })
    maximum!: string
}

@ObjectType({ description: "Model for an Upcoming Movie" })
export class UpcomingMovie {
    @Field(type => Boolean, { description: "Adult only" })
    adult!: boolean

    @Field(type => String, { description: "Film poster url" })
    poster_path?: string

    @Field(type => String, { description: "Synopsis" })
    overview!: string

    @Field(type => String, { description: "Release date" })
    release_date!: string

    @Field(type => [ID], { description: "Genre list ids" })
    genre_ids!: number[]

    @Field(type => ID, { description: "Movie id" })
    id!: number

    @Field(type => String, { description: "Original title" })
    original_title!: string

    @Field(type => String, { description: "Original language" })
    original_language!: string

    @Field(type => String, { description: "Title" })
    title!: string

    @Field(type => String, { description: "Large banner or backdrop image url" })
    backdrop_path?: string
    
    @Field(type => Float, { description: "Popularity note in floating point number" })
    popularity!: number

    @Field(type => Int, { description: "Vote count" })
    vote_count!: number
    
    @Field(type => Int, { description: "Videos available" })
    video!: boolean

    @Field(type => Float, { description: "Vote average in floating point number" })
    vote_average!: number
}

@ObjectType({ description: "Model for upcoming movies request with pagination" })
export class UpcomingMoviesPaginate {
    @Field(type => Int)
    page!: number

    @Field(type => [UpcomingMovie], { description: "List of upcoming movies"})
    results!: UpcomingMovie[]

    @Field(type => UpcomingMoviesDates)
    dates!: UpcomingMoviesDates

    @Field(type => Int)
    total_pages!: number

    @Field(type => Int)
    total_results!: number
}

@ObjectType({ description: "Model for upcoming movies request"})
export class UpcomingMovies {
    @Field(type => Boolean, { description: "Request success indicator" })
    success!: boolean

    @Field(type => String, { description: 'Get error if something is wrong in the request'})
    error!: string;

    @Field(type => UpcomingMoviesPaginate, { description: 'Upcoming movies with pagination' })
    movies!: UpcomingMoviesPaginate
}
