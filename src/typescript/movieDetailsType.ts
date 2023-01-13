import { ObjectType } from "type-graphql";
import { Field, InputType } from "type-graphql/dist/decorators";
import { Float, ID, Int } from "type-graphql/dist/scalars";

@InputType({ description: 'Arguments to get a specific page in movies pagination'})
export class GetMovieDetailsArgs {
    @Field(type => ID)
    id!: string;
}

@ObjectType()
export class Genre {
    id!: number
    name!: string
}

@ObjectType()
export class MovieDetails {
    adult!: Boolean
    backdrop_path?: String
    budget!: number
    genres!: [Genre]
    homepage?: String
    id!: number
    imdb_id?: String
    original_language!: String
    original_title!: String
    overview?: String
    popularity!: number
    poster_path?: String
    production_companies: [ProductionCompany]
    production_countries: [ProductionCountrie]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [SpokenLanguage]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Float
    vote_count: Int
}

@ObjectType()
export class MovieDetailsResult {
    succes!: Boolean
    error!: String
    movieDetails!: MovieDetails
}
