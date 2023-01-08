import { gql } from "apollo-server";

const MoviesType = gql`
    type Genre {
        id: Int
        name: String
    }

    type ProductionCompany {
        id: Int
        logo_path: String
        name: String
        origin_country: String
    }

    type ProductionCountrie {
        iso_3166_1: String
        name: String
    }

    type SpokenLanguage {
        iso_639_1: String
        name: String
    }

    type MovieDetails {
        adult: Boolean
        backdrop_path: String
        budget: Int
        genres: [Genre]
        homepage: String
        id: Int
        imdb_id: String
        original_language: String
        original_title: String
        overview: String
        popularity: Float
        poster_path: String
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

    type UpcomingMovie {
        adult: Boolean
        poster_path: String
        overview: String
        release_date: String
        genre_ids: [Int]
        id: Int
        original_title: String
        original_language: String
        title: String
        backdrop_path: String
        popularity: Float
        vote_count: Int
        video: Boolean
        vote_average: Float
    }

    type UpcomingMoviesDates {
        minimum: String
        maximum: String
    }

    type UpcomingMoviesPaginate {
        page: Int
        results: [UpcomingMovie]
        dates: UpcomingMoviesDates
        total_pages: Int
        total_results: Int
    }

    type UpcomingMovies {
        success: Boolean
        error: String
        movies: UpcomingMoviesPaginate
    }

    type MovieDetailsResult {
        succes: Boolean
        error: String
        movieDetails: MovieDetails
    }

    input ArgsUpcomingMovies { page: String }
    input ArgsMovieDetails { id: String }

    type Query {
        getUpcomingMovies(args: ArgsUpcomingMovies): UpcomingMovies!
        getMovieDetails(args: ArgsMovieDetails): MovieDetailsResult!
    }`

export default MoviesType;