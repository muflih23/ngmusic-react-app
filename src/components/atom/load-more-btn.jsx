import React from 'react'
import RegularText from './regular-text'
import { shallowEqual, useSelector } from 'react-redux'
import { Spin } from 'antd'

function LoadMoreBtn({
    action,
}) {

    const {
        fetchingMore,
    } = useSelector(
        ({ search }) => ({
            fetchingMore: search.fetchingMore,
        }),
        shallowEqual,
    )

    return (
        <button
            onClick={action}
            className={`flex justify-center items-center px-7 py-[.6rem] rounded-[20px] bg-blueGrayLight`}
        >
            {
                fetchingMore ? (
                    <Spin 
                        size='regular'
                    />
                ) : (
                    <RegularText 
                        text={`Load More`}
                        className={`font-medium text-[12px] lg:text-[1rem] tracking-[.43px] text-blueGray`}
                    />
                )
            }
        </button>
    )
}

export default LoadMoreBtn