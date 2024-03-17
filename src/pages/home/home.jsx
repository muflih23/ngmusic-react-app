import React, { useState } from 'react'
import { FlexCol } from '../../components/atom/divs'
import { Image } from 'antd'
import RoundedInput from '../../components/atom/rounded-input'
import PrimaryButton from '../../components/atom/search-button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetSearchState } from '../../stores/search/actions';

function Home() {

    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <div
            className={`box-border min-h-screen w-screen overflow-x-hidden bgGradient`}
        >
            <FlexCol
                className={`w-full h-screen justify-center items-center relative`}
            >
                <Image 
                    src={'/main-logo.svg'}
                    width={'72.2px'}
                />
                <FlexCol
                    className={`w-full absolute justify-end items-center gap-y-[15px] left-0 bottom-0 bg-red pb-[26px] lg:pb-[60px]`}
                >
                    <RoundedInput 
                        placeholder={`Artist / Album / Title`}
                        className={`w-[280px]`}
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <PrimaryButton 
                        disabled={keyword.length < 1}
                        transparent
                        text={`Search`}
                        action={() => {
                            try {
                                dispatch(resetSearchState())
                            } finally {
                                navigate(`/search?keyword=${keyword}`)
                            }
                        }}
                    />
                </FlexCol>
            </FlexCol>
        </div>
    )
}

export default Home