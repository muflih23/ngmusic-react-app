import { Typography } from 'antd'
import React from 'react'
import { FlexRow } from '../atom/divs';
import RegularText from '../atom/regular-text';

function SearchInfo({
    keyword
}) {

    const { Text } = Typography;

    return (
        <FlexRow
            className={`justify-center items-center gap-x-3`}
        >
            <RegularText 
                className={`text-textBlack text-[14px] lg:text-[18px] tracking-[.5px]`}
                text={`Search result for :`}
            />
            <RegularText 
                className={`text-primaryPurple text-[18px] lg:text-[22px] font-bold tracking-[.64px]`}
                text={keyword}
            />
        </FlexRow>
    )
}

export default SearchInfo