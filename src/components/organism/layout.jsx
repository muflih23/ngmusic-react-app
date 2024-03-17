import { Button, Image, Layout } from 'antd'
import React from 'react'
import { Flex, FlexRow } from '../atom/divs';
import { useDispatch } from 'react-redux';
import { setOpenSearchPrompt } from '../../stores/search/actions';
import { useNavigate } from 'react-router-dom';

function PageLayout({
    children
}) {

    const { Header, Content } = Layout;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    return (
        <Layout
            className={`w-screen min-h-screen box-border bg-paleGray`}
        >
            <Header
                className={`rounded-b-[100%] lg:h-[80px] w-full px-4 h-[60px] gradientHeader shadowedHeader`}
            >
                <FlexRow
                    className={`w-full justify-between items-start pt-4`}
                >
                    <Button
                        className='flex justify-center items-center border-0 p-0 h-fit'
                        onClick={(e) => dispatch(setOpenSearchPrompt(true))}
                    > 
                        <Image 
                            src='/menu-btn.svg'
                            className='w-[16px] lg:w-[20px] ml-4'
                            preview={false}
                        />
                    </Button>
                    <Flex
                        className={`grow justify-center items-center`}
                    >
                        <Image 
                            src='/text-logo.svg'
                            className='w-[72.2px] lg:w-[100px] cursorPointer'
                            preview={false}
                            onClick={() => navigate('/')}
                        />
                    </Flex>
                    <Button
                        className='flex justify-center items-center border-0 p-0 h-fit'
                        onClick={(e) => dispatch(setOpenSearchPrompt(true))}
                    > 
                        <Image 
                            src='/search-icon.svg'
                            className='w-[16px] lg:w-[20px] mr-4'
                            preview={false}
                        />
                    </Button>
                </FlexRow>
            </Header>
            <Content>
                {children}
            </Content>
        </Layout>
    )
}

export default PageLayout