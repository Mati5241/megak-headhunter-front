import {Header} from "../../components/Header/Header";
import {AvailableStudentsPage} from "../../components/AvailableStudentsPage/AvailableStudentsPage";
import {StudentsList} from "../../components/StudentsList/StudentsList";
import {Foot} from "../../components/Foot/Foot";


export const MainPage = () => {


    return <>

        <Header/>

    <div id="page">


        <AvailableStudentsPage/>

    </div>
        <Foot/>

    </>
}