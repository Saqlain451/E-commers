import React from 'react';
import Home from "./pages/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import ScrollToTop from "./components/ScrollRestore.jsx";

const App = () => {
    return (<>
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </BrowserRouter>

    </>)

}

export default App;