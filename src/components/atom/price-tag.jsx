import React from 'react'
import { FlexRow } from './divs'
import { Image } from 'antd'
import RegularText from './regular-text'

function PriceTag({
    price
}) {
    return (
        <FlexRow
            className={`gap-x-1 items-center`}
        >
            <Image 
                src='/price-logo.svg'
                className='w-[18px] lg:w-[24px]'
                preview={false}
            />
            <RegularText 
                className={`font-bold text-yellow text-[12px] lg:text-[1rem] tracking-[.43px]`}
                text={price}
            />
        </FlexRow>
    )
}

export default PriceTag