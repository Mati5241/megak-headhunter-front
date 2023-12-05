// import {Header} from "../../components/Header/Header";
// import {AvailableStudentsPage} from "../../components/AvailableStudentsPage/AvailableStudentsPage";
// import {StudentsList} from "../../components/StudentsList/StudentsList";
// import {Foot} from "../../components/Foot/Foot";
// import {ShowCV} from "../../components/ShowCV/ShowCV";
// import {Test} from "../../components/test/Test";
// import {useState} from "react";
//
//
// export const MainPage = () => {
//
//
//
//
//     return <>
//
//         <Header/>
//         {/*<ShowCV/>*/}
//         <AvailableStudentsPage/>
//
//
//
//     </>
// }



import {useEffect, useState} from "react";
import {ChoosePage} from "../../components/ChoosePage/ChoosePage";
import {StudentsList} from "../../components/StudentsList/StudentsList";
import {ToTalk} from "../../components/ToTalk/ToTalk";
import {Foot} from "../../components/Foot/Foot";
import {Header} from "../../components/Header/Header";




export const MainPage = (props: any) => {

    const [selectedPage, setSelectedPage] = useState('availableStudents');


    const pullSelectedPage = (data: string) => {
        setSelectedPage(selectedPage => data)
    }



    return <>
        <Header/>
        {(selectedPage === 'availableStudents') ? <StudentsList/> : <ToTalk/>}
        {/*<ChoosePage selectedPageFunction={pullSelectedPage}/>*/}
        {/*{(selectedPage === 'availableStudents') ? <StudentsList/> : <ToTalk pullCvFunction={props.pullCvFunction}/>}*/}
        <Foot/>


    </>

}
