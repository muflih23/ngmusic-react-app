import SearchTypes from "./types";

const INITIAL_STATE = {
    searchResults: {
        count: 0,
        results: [],
    },
    oldResults: {
        count: 0,
        results: [],
    },
    loading: false,
    fetchingMore: false,
    maxReached: false,
    openSearchPrompt: false,
}

const searchResultReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SearchTypes.SEARCH_RESULT:
            return {
                ...state,
                searchResults: action.payload,
            };
        case SearchTypes.OLD_RESULT:
            return {
                ...state,
                oldResults: action.payload,
            }
        case SearchTypes.LOADING:
            return {
                ...state,
                loading: action.payload,
            }
        case SearchTypes.FETCHING_MORE:
            return {
                ...state,
                fetchingMore: action.payload,
            }
        case SearchTypes.MAX_REACHED:
            return {
                ...state,
                maxReached: action.payload,
            }
        case SearchTypes.RESET_SEARCH_STATE:
            return INITIAL_STATE;
        case SearchTypes.OPEN_SEARCH_PROMPT:
            return {
                ...state,
                openSearchPrompt: action.payload,
            }
        default:
            return state;
    }
}

export default searchResultReducer;