import { Card, Image, Skeleton } from 'antd'
import React from 'react'
import { FlexCol, FlexRow } from '../atom/divs'
import RegularText from '../atom/regular-text'
import GenreTag from '../atom/genre-tag'
import PriceTag from '../atom/price-tag'

function ResultCardLoading() {
    return (
        <Card
            className={`resultCard flex border-0 min-h-[123px] w-[310px] lg:w-full`}
        >
            <FlexRow 
                className={`w-full gap-x-3 lg:gap-x-4 h-full`}
            >
                <FlexCol
                    className={`w-[100px] lg:w-[200px]`}
                >
                    <Skeleton.Image 
                        active
                        className={`w-[100px] h-[100px] rounded-lg lg:w-[200px] lg:h-[200px]`}
                    />
                </FlexCol>
                <FlexCol
                    className={`justify-between h-full grow`}
                >
                    <FlexCol
                        className={`gap-y-4 lg:gap-y-[16px]`}
                    >
                        <Skeleton 
                            active
                            paragraph={{
                                rows: 1,
                            }}
                            title={false}
                        />
                        <Skeleton 
                            active
                            paragraph={{
                                rows: 1,
                            }}
                            title={false}
                        />
                    </FlexCol>
                    <FlexRow
                        className={`w-full justify-between items-center`}
                    >
                        <Skeleton.Button 
                            active
                            shape='round'
                            size='small'
                        />
                        <Skeleton.Button 
                            active
                            shape='round'
                            size='small'
                        />
                    </FlexRow>
                </FlexCol>
            </FlexRow>
        </Card>
    )
}

export default ResultCardLoading