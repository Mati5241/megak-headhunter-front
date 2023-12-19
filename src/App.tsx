import React, {useState} from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage/LoginPage";
import {ShowCV} from "./components/ShowCV/ShowCV";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPageLayout} from "./components/AvailableStudentsPage/MainPageLayout";
import AdminPage from "./pages/AdminPage/Admin"

export function App() {

    const [cv, setCv] = useState(null);

    const pullCv = (data: any) => {
        setCv(cv => data)
    }

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/cv" element={<ShowCV studentInfo={cv}/>}/>
                    <Route path="/" element={<MainPageLayout pullCvFunction={pullCv}/>}>

                    </Route>
                </Routes>
            </BrowserRouter>


        </div>
    );
}
