import { Card, Image } from 'antd'
import React from 'react'
import { FlexCol, FlexRow } from '../atom/divs'
import RegularText from '../atom/regular-text'
import GenreTag from '../atom/genre-tag'
import PriceTag from '../atom/price-tag'

function ResultCard({
    imageUrl,
    genre,
    artist,
    title,
    price,
    redirect,
}) {
    return (
        <Card
            className={`resultCard flex border-0 min-h-[123px] w-[310px] lg:w-full cursorPointer clickable`}
            onClick={() => window.open(redirect, `blank`)}
        >
            <FlexRow 
                className={`w-full gap-x-3 lg:gap-x-4 h-full`}
            >
                <FlexCol
                    className={`w-[100px] lg:w-[200px] relative`}
                >
                    <Image 
                        src={imageUrl}
                        preview={false}
                        className='w-[100px] h-[100px] rounded-lg lg:w-[200px] lg:h-[200px]'
                        fallback='/placeholder-image.png'
                    />
                    <Image 
                        src='/play-circle.png'
                        preview={false}
                        width={36}
                        rootClassName='centered-axis-xy'
                    />
                </FlexCol>
                <FlexCol
                    className={`justify-between h-full grow`}
                >
                    <FlexCol
                        className={`gap-y-[5px] lg:gap-y-[16px]`}
                    >
                        <RegularText 
                            className={`font-medium text-[10px] lg:text-[1rem] tracking-[.36px] text-textBlack max-w-[125px] lg:max-w-[450px] truncatedText`}
                            text={artist}
                        />
                        <RegularText 
                            className={`font-bold text-[14px] lg:text-[1.4rem] tracking-[.5px] text-textBlack max-w-[125px] lg:max-w-[450px] truncatedText`}
                            text={title}
                        />
                    </FlexCol>
                    <FlexRow
                        className={`w-full justify-between items-center`}
                    >
                        <GenreTag 
                            genre={genre}
                        />
                        <PriceTag 
                            price={price}
                        />
                    </FlexRow>
                </FlexCol>
            </FlexRow>
        </Card>
    )
}

export default ResultCard