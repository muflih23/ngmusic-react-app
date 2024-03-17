import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Flex, FlexRow } from '../../components/atom/divs';
import SearchInfo from '../../components/molecule/search-info';
import ResultGroup from '../../components/molecule/result-group';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSearchResult } from '../../stores/search/actions';
import { initialFetch } from '../../functions/search-functions';
import SearchPrompt from '../../components/molecule/search-prompt';

function SearchResult() {

    const useQuery = () => {
        const {search} = useLocation();
        return React.useMemo(() => new URLSearchParams(search), [search])
    }

    const dispatch = useDispatch();

    const {
        openSearchPrompt,
    } = useSelector(
        ({ search }) => ({
            openSearchPrompt: search.openSearchPrompt,
        }),
        shallowEqual,
    )

    const keyword = useQuery().get("keyword");

    useEffect(() => {
        if(typeof keyword === 'string' && keyword.length > 0) {
            initialFetch(keyword);
        }
    }, [keyword])

    return (
        <div
            className={`flex w-full py-10 px-4 flex-col justify-start items-center lg:block xl:w-[960px] lg:w-[700px] lg:px-0 lg:mx-auto`}
        >
            <SearchInfo 
                keyword={keyword}
            />
            <ResultGroup 
                keyword={keyword}
            />
            <SearchPrompt 
                open={openSearchPrompt}
            />
        </div>
    )
}

export default SearchResult