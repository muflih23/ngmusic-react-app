import { Modal } from 'antd'
import React, { useState } from 'react'
import { FlexCol } from '../atom/divs'
import RegularText from '../atom/regular-text'
import RoundedInput from '../atom/rounded-input'
import PrimaryButton from '../atom/search-button'
import { useDispatch } from 'react-redux'
import { resetSearchState, setOpenSearchPrompt } from '../../stores/search/actions'
import { useNavigate } from 'react-router-dom'

function SearchPrompt({
    open,
}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [keywords, setKeywords] = useState("");

    return (
        <Modal
            open={open}
            footer={false}
            closeIcon={false}
            className="w-fit transparentModal"
            onCancel={() => dispatch(setOpenSearchPrompt(false))}
            centered
        >
            <FlexCol
                className={`justify-center items-center gap-y-8`}
            >
                <RegularText 
                    text={'Search'}
                    className={`text-[20px] text-white font-bold tracking-[.71px]`}
                />
                <FlexCol
                    className={`gap-y-4 justify-center items-center`}
                >
                    <RoundedInput 
                        placeholder={`Artist / Album / Title`}
                        className={`w-[280px]`}
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                    <PrimaryButton 
                        disabled={keywords.length < 1}
                        className={`gradientHeader`}
                        text={`Search`}
                        action={() => {
                            try {
                                dispatch(resetSearchState());
                                dispatch(setOpenSearchPrompt(false));
                            } finally {
                                navigate(`/search?keyword=${keywords}`)
                            }
                        }}
                    />
                </FlexCol>
            </FlexCol>
        </Modal>
    )
}

export default SearchPrompt