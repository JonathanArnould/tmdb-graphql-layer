import { ObjectType } from "type-graphql";
import { ArgsType, Field } from "type-graphql/dist/decorators";
import { Float, ID, Int } from "type-graphql/dist/scalars";

@ArgsType()
export class GetMovieDetailsArgs {
    @Field(type => String)
    id!: string;
}

@ObjectType()
export class Genre {
    @Field(type => ID)
    id!: number
    
    @Field(type => String)
    name!: string
}

@ObjectType()
export class ProductionCompany {
    @Field(type => ID)
    id!: number
    
    @Field(type => String)
    logo_path?: string
    
    @Field(type => String)
    name!: string
    
    @Field(type => String)
    origin_country!: string
}

@ObjectType()
export class ProductionCountry {
    @Field(type => String)
    iso_3166_1!: string
    
    @Field(type => String)
    name!: string
}

@ObjectType()
export class SpokenLanguage {
    @Field(type => String)
    iso_639_1!: string
    
    @Field(type => String)
    name!: string
}

@ObjectType()
class BelongsToCollection {
    @Field(type => ID)
    id!: number

    @Field(type => String)
    name!: string

    @Field(type => String)
    overview!: string

    @Field(type => String)
    poster_path?: string

    @Field(type => String)
    backdrop_path!: string
}

@ObjectType()
export class MovieDetails {
    @Field(type => Boolean, { description: "Is an adult movie" })
    adult!: boolean
    
    @Field(type => String)
    backdrop_path?: string

    @Field(type => BelongsToCollection)
    belongs_to_collection?: BelongsToCollection
    
    @Field(type => String)
    budget!: number
    
    @Field(type => [Genre])
    genres!: Genre[]
    
    @Field(type => String)
    homepage?: string
    
    @Field(type => ID)
    id!: number
    
    @Field(type => String)
    imdb_id?: string
    
    @Field(type => String)
    original_language!: string
    
    @Field(type => String)
    original_title!: string
    
    @Field(type => String)
    overview?: string
    
    @Field(type => Float)
    popularity!: number
    
    @Field(type => String)
    poster_path?: string
    
    @Field(type => [ProductionCompany])
    production_companies!: ProductionCompany[]
    
    @Field(type => [ProductionCountry])
    production_countries!: ProductionCountry[]
    
    @Field(type => String)
    release_date!: string
    
    @Field(type => Int)
    revenue!: number
    
    @Field(type => Int)
    runtime?: number
    
    @Field(type => [SpokenLanguage])
    spoken_languages!: SpokenLanguage[]
    
    @Field(type => String)
    status!: string
    
    @Field(type => String)
    tagline?: string
    
    @Field(type => String)
    title!: string
    
    @Field(type => Boolean)
    video!: boolean
    
    @Field(type => Float)
    vote_average!: number
    
    @Field(type => Int)
    vote_count!: number
}

@ObjectType()
export class MovieDetailsResult {
    @Field(type => String)
    succes!: Boolean
    
    @Field(type => String)
    error!: String
    
    @Field(type => MovieDetails)
    movieDetails!: MovieDetails
}
