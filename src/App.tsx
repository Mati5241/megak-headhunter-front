import React from 'react';
import './App.css';
import {MainPage} from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AdminPage from "./pages/AdminPage/Admin"

export function App() {
    return (
        <div className="App">
            <AdminPage/>
            {/*<LoginPage/>*/}
        </div>
    );
}


