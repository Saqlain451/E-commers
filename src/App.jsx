import React from 'react';
import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    </>)

}

export default App;