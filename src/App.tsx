import React, {useState} from 'react';
import './App.css';
import {MainPage} from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import {Test} from "./components/test/Test";
import {ToTalk} from "./components/ToTalk/ToTalk";
import {ShowCV} from "./components/ShowCV/ShowCV";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRouter} from "./components/Routers/Router";
import {AvailableStudentsPage} from "./components/AvailableStudentsPage/AvailableStudentsPage";
import {Header} from "./components/Header/Header";
import {Foot} from "./components/Foot/Foot";

export function App() {

    const [cv, setCv] = useState(null);

    const pullCv = (data: any) => {
        setCv(cv => data)
    }

    return (
        <div className="App">
            {/*<MainPage/>*/}
            {/*<LoginPage/>*/}
            {/*<Test/>*/}
            {/*<ShowCV/>*/}
            {/*<ToTalk/>*/}
            {/*<Header/>*/}
            {/*<AvailableStudentsPage/>*/}
            {/*<Foot/>*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/cv" element={<ShowCV studentInfo={cv}/>}/>
                    <Route path="/" element={<AvailableStudentsPage pullCvFunction={pullCv}/>}>

                    </Route>
                </Routes>
            </BrowserRouter>


        </div>
    );
}


// export function App() {
//     return <>
//         <AppRouter/>
//     </>
// }

