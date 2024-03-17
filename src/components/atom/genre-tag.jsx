import React from 'react'
import RegularText from './regular-text'

function GenreTag({
    genre
}) {
    return (
        <div
            className={`flex justify-center items-center px-3 py-1 bg-green rounded-[16px]`}        
        >
            <RegularText 
                text={genre}
                className={`text-[10px] lg:text-[1rem] font-medium tracking-[.36px] text-white`}
            />
        </div>
    )
}

export default GenreTag