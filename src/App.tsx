import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/home_page/HomePage';
import {ErrorPage} from "./pages/error_page/ErrorPage";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/error'} element={<ErrorPage/>}/>

                <Route path={'*'} element={<Navigate to={'error'}/>}/>
            </Routes>
        </div>
    );
}

export default App;
