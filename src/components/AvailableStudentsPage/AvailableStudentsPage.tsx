import {useEffect, useState} from "react";

import "./AvailableStudentsPage.css"
import {StudentsList} from "../StudentsList/StudentsList";
import {StudentInfo} from "../StudentInfo/StudentInfo";
import {ToTalk} from "../ToTalk/ToTalk";
import {Foot} from "../Foot/Foot";
import {ChoosePage} from "../ChoosePage/ChoosePage";
import {ShowCV} from "../ShowCV/ShowCV";
import {MainPage} from "../../pages/MainPage/MainPage";
import {Header} from "../Header/Header";


export const AvailableStudentsPage = () => {

    // const [selectedPage, setSelectedPage] = useState('availableStudents');
    const [cv, setCv] = useState('');



    // const pullSelectedPage = (data: string) => {
    //     setSelectedPage(selectedPage => data)
    // }

    const pullCv = (data: string) => {
        setCv(cv => data)
    }


    return <>
<Header/>
        {(cv ==='') ? <MainPage pullCvFunction={pullCv}/> : <ShowCV/>}
{/*<MainPage/>*/}
{/*<ShowCV/>*/}



        {/*<ChoosePage selectedPageFunction={pullSelectedPage} selectedPageParent={selectedPage}/>*/}
        {/*{(selectedPage === 'availableStudents') ? <StudentsList/> : <ToTalk/>}*/}
        {/*<Foot/>*/}

    </>

}
