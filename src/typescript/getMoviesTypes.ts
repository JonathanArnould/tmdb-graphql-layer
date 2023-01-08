export type GetUpcomingMoviesArgs = {
    page: string;
}

export type UpcomingMoviesDates = {
    minimum: string
    maximum: string
}

export type UpcomingMovie = {
    adult: boolean
    poster_path: string
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}



export type UpcomingMoviesPaginate = {
    page: number
    results: UpcomingMovie[]
    dates: UpcomingMoviesDates
    total_pages: number
    total_results: number
}

export type GetMovieDetailsArgs = {
    id: string;
}