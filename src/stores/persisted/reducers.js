import Persisted from "./types";

const INITIAL_DATA = {
    searchKeyword: "",
}

const persistedReducers = (state = INITIAL_DATA, action) => {
    switch(action.type) {
        case Persisted.SEARCH_KEYWORD:
            return {
                ...state,
                searchKeyword: action.payload,
            }
        default:
            return state;
    }
}

export default persistedReducers;