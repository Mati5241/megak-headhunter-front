import {useEffect, useState} from "react";
import "./MainPageLayout.css"
import {AvailableStudentsPage} from "../StudentsList/AvailableStudentsPage";
import {ToTalk} from "../ToTalk/ToTalk";
import {Foot} from "../Foot/Foot";
import {Header} from "../Header/Header";


export const MainPageLayout = (props: any) => {


    const [selectedPage, setSelectedPage] = useState('availableStudents');
    const [classButton, setClassButton] = useState('hr-red-left')
    const [classTextMenuFirst, setClassTextMenuFirst] = useState('choose-page-button-selected')
    const [classTextMenuSecond, setClassTextMenuSecond] = useState('choose-page-button')
    const [showFilter, setShowFilter] = useState(false);
    const [filter, setFilter] = useState({
        courseGrade: '',
        activityGrade: '',
        codeGrade: '',
        workGrade: '',
    });
    console.log(filter.courseGrade)

    const submitFormFilter = (e: any) => {
        e.preventDefault();
        setShowFilter(!showFilter);
        setFilter(filter => ({
            ...filter,
            courseGrade: e.target.grade.value,
        }))

    };


    const filterButton = () => {
        setShowFilter(!showFilter);
    };


    const selectMenuFirst = () => {
        setClassButton(classButton => 'hr-red-left')
        setSelectedPage(selectedPage => 'availableStudents')
        setClassTextMenuFirst(classTextMenuFirst => 'choose-page-button-selected')
        setClassTextMenuSecond(classTextMenuSecond => 'choose-page-button')
    };

    const selectMenuSecond = () => {
        setClassButton(classButton => 'hr-red-right')
        setSelectedPage(selectedPage => 'toTalk')
        setClassTextMenuFirst(classTextMenuFirst => 'choose-page-button')
        setClassTextMenuSecond(classTextMenuSecond => 'choose-page-button-selected')
    };


    return <>
        <Header/>
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
                <input onClick={filterButton} type="button" id="filter-button" value="Filtrowanie"/>
                <br/>

            </div>
            <hr className="hr-short"/>

        </div>
        {(selectedPage === 'availableStudents') ? <AvailableStudentsPage/> :
            <ToTalk pullCvFunction={props.pullCvFunction}/>}

        {showFilter &&
            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">

                    <form onSubmit={submitFormFilter}>

                        <div id="header-filter">Filtrowanie</div>
                        <button
                            id="clean-button">Wyczyść wszystkie
                        </button>
                        <br/><br/><br/><br/>

                        <div className="one-line-filter">
                            Ocena przejścia kursu<br/>
                            <input type="text" name="grade" inputMode="numeric" placeholder="Wpisz minimalną ocenę w zakresie 1-5" className="grade-input"/>
                            {/*<input value={filter.courseGrade} onChange={(e: any) => setFilter(filter => ({...filter, courseGrade: e.target.value}))} inputMode="numeric" placeholder="Wpisz minimalną ocenę w zakresie 1-5" className="grade-input" type="text"/>*/}
                        </div>
                        <div className="one-line-filter">
                            Ocena aktywności i zaangażowania na kursie<br/>
                            <input type="text" name="grade" inputMode="numeric" placeholder="Wpisz minimalną ocenę w zakresie 1-5" className="grade-input"/>
                        </div>
                        <div className="one-line-filter">
                            Ocena kodu w projekcie własnym<br/>
                            <input type="text" name="grade" inputMode="numeric" placeholder="Wpisz minimalną ocenę w zakresie 1-5" className="grade-input"/>
                        </div>
                        <div className="one-line-filter">
                            Ocena pracy w zespole w Scrum<br/>
                            <input type="text" name="grade" inputMode="numeric" placeholder="Wpisz minimalną ocenę w zakresie 1-5" className="grade-input"/>
                        </div>
                        <div className="one-line-filter">
                            Preferowane Miejsce pracy<br/>
                            <button className="choose-filter-button">Praca zdalna</button>
                            <button className="choose-filter-button">Praca w biurze</button>
                        </div>
                        <div className="one-line-filter">
                            Oczekiwany typ kontraktu <br/>
                            <button className="choose-filter-button">Umowa o pracę</button>
                            <button className="choose-filter-button">B2B</button>
                            <button className="choose-filter-button">Umowa zlecenie</button>
                            <button className="choose-filter-button">Umowa o dzieło</button>
                        </div>
                        <div className="one-line-filter">
                            Oczekiwane wynagrodzenie miesięczne netto (zł)<br/>
                            Od <input placeholder="np. 1000" className="input-salary" type="text"/>
                            do <input placeholder="np. 10000" className="input-salary" type="text"/>
                        </div>
                        <div className="one-line-filter">
                            Zgoda na odbycie bezpłatnych praktyk/stażu na początek<br/>
                            <form>
                                <label>Tak</label>
                                <input name="free-intership" type="radio" value="Tak"/>
                                <br/>
                                <label>Nie</label>
                                <input name="free-intership" type="radio" value="Tak"/>
                            </form>
                        </div>
                        <div className="one-line-filter">
                            Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu<br/>
                            <select id="input-select-experience">
                                <option>0 miesięcy</option>
                            </select>
                        </div>

                        <div className="buttons-filter">
                            <button
                                onClick={filterButton}
                                id="close-filter-button">Anuluj
                            </button>
                            <input id="show-results-button" type="submit" value="Pokaż wyniki"/>
                            {/*<button id="show-results-button">Pokaż wyniki</button>*/}


                        </div>
                    </form>
                </div>
            </div>
        }


    </>
}
