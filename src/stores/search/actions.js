import axios from "axios";
import SearchTypes from "./types";

export const setSearchResults = (payload) => ({
    type: SearchTypes.SEARCH_RESULT,
    payload,
});

export const setOldResults = (payload) => ({
    type: SearchTypes.OLD_RESULT,
    payload,
});

export const setLoading = (payload) => ({
    type: SearchTypes.LOADING,
    payload,
});

export const setFetchingMore = (payload) => ({
    type: SearchTypes.FETCHING_MORE,
    payload,
});

export const setMaxReached = (payload) => ({
    type: SearchTypes.MAX_REACHED,
    payload,
});

export const resetSearchState = () => ({
    type: SearchTypes.RESET_SEARCH_STATE,
});

export const setOpenSearchPrompt = (payload) => ({
    type: SearchTypes.OPEN_SEARCH_PROMPT,
    payload,
});

export const getSearchResult = (keyword, limit) => {
    return async function(dispatch, getState) {
        const { oldResults } = getState().search;
        const fixedKeyword = keyword.replace(/\s+/g, "+");
        try {
            const {data} = await axios.get(
                `https://itunes.apple.com/search?term=${fixedKeyword}&entity=song&attribute=allArtistTerm${limit !== undefined ? `&limit=${limit}` : ``}`,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    }
                }
            )
            dispatch(setSearchResults({
                count: data?.resultCount,
                results: data?.results,
            }))
            if ( oldResults.count === 0 ) {
                dispatch(setOldResults({
                    count: data?.resultCount,
                    results: data?.results,
                }))
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const compareResultCount = () => {
    return async function (dispatch, getState) {
        const { oldResults } = getState().search;
        const { searchResults } = getState().search;

        if ( searchResults.count > oldResults.count ) {
            dispatch(setOldResults(searchResults))
        } else {
            dispatch(setMaxReached(true))
        }
    }
}