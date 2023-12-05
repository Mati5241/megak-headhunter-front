import {useState} from "react";

export const ChoosePage = (props: any) => {

    const [selectedPage, setSelectedPage] = useState('availableStudents');
    const [classButton, setClassButton] = useState('hr-red-left')
    const [classTextMenuFirst, setClassTextMenuFirst] = useState('choose-page-button-selected')
    const [classTextMenuSecond, setClassTextMenuSecond] = useState('choose-page-button')

    const selectMenuFirst = () => {
        setClassButton(classButton => 'hr-red-left')
        setSelectedPage(selectedPage => 'availableStudents')
        setClassTextMenuFirst(classTextMenuFirst => 'choose-page-button-selected')
        setClassTextMenuSecond(classTextMenuSecond => 'choose-page-button')
    }

    const selectMenuSecond = () => {
        setClassButton(classButton => 'hr-red-right')
        setSelectedPage(selectedPage => 'toTalk')
        setClassTextMenuFirst(classTextMenuFirst => 'choose-page-button')
        setClassTextMenuSecond(classTextMenuSecond => 'choose-page-button-selected')
    }

    props.selectedPageFunction(selectedPage);

    return <>

        <div id="page">

            <div className="menu-div">
                <span onClick={selectMenuFirst} className={classTextMenuFirst}>Dostępni kursanci</span>
                <span onClick={selectMenuSecond} className={classTextMenuSecond}>Do rozmowy</span>

                <br/>
            </div>
            <hr className={classButton}/>
            <hr className="hr-long"/>

            <div className="menu-div">
                <input type="search" id="input-search" disabled value="🔎 Szukaj..."/>
                <input type="button" id="filter-button" value="Filtrowanie"/>
                <br/>

            </div>
            <hr className="hr-short"/>

        </div>

    </>

}
