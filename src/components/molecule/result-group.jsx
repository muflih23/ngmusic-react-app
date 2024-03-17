import React from 'react'
import ResultCard from './result-card'
import ResultCardLoading from './result-card-loading'
import LoadMoreBtn from '../atom/load-more-btn'
import { shallowEqual, useSelector } from 'react-redux'
import RegularText from '../atom/regular-text'
import { fetchMoreData } from '../../functions/search-functions'

function ResultGroup({
    keyword,
}) {

    const {
        searchResults,
        oldResults,
        loading,
        maxReached,
    } = useSelector(
        ({ search }) => ({
            searchResults: search.searchResults,
            oldResults: search.oldResults,
            loading: search.loading,
            maxReached: search.maxReached,
        }),
        shallowEqual,
    )

    return (
        <div
            className={`flex flex-col w-full py-9 gap-y-4 justify-start items-center`}
        >
            { !loading ? searchResults?.results.map((data, index) => (
                    <ResultCard 
                        imageUrl={data?.artworkUrl100}
                        genre={data?.primaryGenreName}
                        artist={data?.artistName}
                        title={data?.trackName}
                        price={data?.trackPrice}
                        redirect={data?.trackViewUrl}
                    />
                )) : (
                    <>
                        <ResultCardLoading />
                        <ResultCardLoading />
                    </>
                )
            }
            {   searchResults.count > 0 ? (
                    <>
                        {
                            maxReached ? (
                                <RegularText 
                                    className={`text-center text-[14px] lg:text-[18px] text-textBlack font-medium`}
                                    text={`You've reached the bottom`}
                                />
                            ) : (
                                <LoadMoreBtn 
                                    action={() => fetchMoreData(keyword, searchResults.count+20)}
                                />
                            )
                        }
                    </>
                ) : searchResults.count < 1 && !loading ? (
                    <RegularText 
                        className={`text-center text-[14px] lg:text-[18px] text-textBlack font-medium`}
                        text={`No result found, please try another keyword`}
                    />
                ) : (
                    null
                )
            }
        </div>
    )
}

export default ResultGroup