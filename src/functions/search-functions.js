import { compareResultCount, getSearchResult, setFetchingMore, setLoading, setMaxReached, setOldResults } from "../stores/search/actions"
import { store } from "../stores/store"

export const initialFetch = async(keyword) => {
    store.dispatch(setLoading(true));
    await store.dispatch(getSearchResult(keyword, 20)).then(() => {
        store.dispatch(setLoading(false));
    })
}

export const fetchMoreData = async(keyword, limitIncrement) => {
    store.dispatch(setFetchingMore(true))
    
    await store.dispatch(getSearchResult(keyword, limitIncrement))
    .then(() => store.dispatch(compareResultCount())).then(() => store.dispatch(setFetchingMore(false)))
}