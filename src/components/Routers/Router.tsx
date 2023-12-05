import {FC} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {MainPage} from "../../pages/MainPage/MainPage";
import {ShowCV} from "../ShowCV/ShowCV";


export const AppRouter: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cv" element={<ShowCV/>}/>
            </Routes>
        </BrowserRouter>
    )
}
