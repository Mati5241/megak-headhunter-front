import React from 'react';
import './App.css';
import {MainPage} from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import {Test} from "./components/test/Test";
import {ToTalk} from "./components/ToTalk/ToTalk";
import {ShowCV} from "./components/ShowCV/ShowCV";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppRouter} from "./components/Routers/Router";
import {AvailableStudentsPage} from "./components/AvailableStudentsPage/AvailableStudentsPage";

export function App() {
    return (
        <div className="App">
            {/*<MainPage/>*/}
            {/*<LoginPage/>*/}
            {/*<Test/>*/}
            {/*<ShowCV/>*/}
            {/*<ToTalk/>*/}
<AvailableStudentsPage/>


        </div>
    );
}



// export function App() {
//     return <>
//         <AppRouter/>
//     </>
// }

