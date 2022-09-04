export const getRequestTmdb = (uri: string, page = '1') => {
    const { TMDB_BASE_URL, TMDB_API_KEY, LANGUAGE, REGION } = process.env;
    if(!TMDB_API_KEY || !TMDB_BASE_URL || !LANGUAGE || !REGION) throw new Error('Environments variables must be defined.')
    return {
        method: "GET",
        url: `${TMDB_BASE_URL}${uri}`,
        headers: { 'Authorization': `Bearer ${TMDB_API_KEY}` },
        params: new URLSearchParams([['language', LANGUAGE], ['region', REGION], ['page', page]])
    }
} 
