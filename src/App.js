import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { Spin } from 'antd';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import PageLayout from './components/organism/layout';

function App() {
    return (
        <Suspense
            fallback={
                <div
                    className='w-screen h-screen flex justify-center items-center'
                >
                    <Spin 
                        size='default'
                    />
                </div>
            }
        >
            <Routes>
                {routes.map((el, idx) => (
                    el?.useLayout === true ? (
                        <Route 
                            key={idx}
                            path={el?.path}
                            element={
                                <PageLayout>
                                    <el.element />
                                </PageLayout>
                            }
                        />
                    ) : (
                        <Route 
                            key={idx}
                            path={el?.path}
                            element={
                                <el.element />
                            }
                        />
                    )
                ))}
            </Routes>
        </Suspense>
    );
}

export default App;
