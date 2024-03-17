import Persisted from "./types";

export const setSearchKeyword = (payload) => ({
    type: Persisted.SEARCH_KEYWORD,
    payload,
});