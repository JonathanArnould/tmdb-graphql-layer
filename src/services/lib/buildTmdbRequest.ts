type RequestParams = { key: string, value: string }
const { TMDB_BASE_URL, TMDB_API_KEY, LANGUAGE, REGION } = process.env;
const language = LANGUAGE || 'fr-FR';
const region = REGION || 'FR';

const URLParams = new URLSearchParams([['language', language], ['region', region]]);

const setURLParams = (arrayParams: RequestParams[] | []) => {
  arrayParams.forEach((param: RequestParams) => URLParams.append(param.key, param.value))
  return URLParams;
}

export const getRequestTmdb = (uri: string, params: RequestParams[] = []) => {
    if(!TMDB_API_KEY || !TMDB_BASE_URL) throw new Error('Environments variables must be defined.')
    
    return {
        method: "GET",
        url: `${TMDB_BASE_URL}${uri}`,
        headers: { 'Authorization': `Bearer ${TMDB_API_KEY}` },
        params: setURLParams(params)
    }
} 
