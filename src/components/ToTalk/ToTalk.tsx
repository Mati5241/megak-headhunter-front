import './ToTalk.css';
import React, {useState} from "react";
import {StudentInfo} from "../StudentInfo/StudentInfo";
import {ShowCV} from "../ShowCV/ShowCV";
import {AvailableStudentsPage} from "../StudentsList/AvailableStudentsPage";
import {Route, useNavigate} from "react-router-dom";


export const ToTalk = (props: any) => {

    const navigate = useNavigate()

    const [showStudentInfo, setShowStudentInfo] = useState('');
    const [arrow, setArrow] = useState('')
    const [cv, setCv] = useState('');
    const [studentInfo, setStudentInfo] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage, setStudentsPerPage] = useState(10);
    // const [startIndex, setStartIndex] = useState(0);
    // const [endIndex, setEndIndex] = useState(10);


    const changeQuantity = (e: any) => {
        setStudentsPerPage(e.target.value)
    }

    const studentsPreviousPage = (e: any) => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const studentsNextPage = (e: any) => {
        if (indexOfLastStudent < studentsAll.length) {
            setCurrentPage(currentPage + 1);
        }
    }


    const showMore = (id: string): any => {

        if (showStudentInfo === '') {
            setShowStudentInfo(showStudentInfo => id)
            setArrow(arrow => id)
        } else if (showStudentInfo === id) {
            setShowStudentInfo(showStudentInfo => '')
            setArrow(arrow => '')
        } else {
            setShowStudentInfo(showStudentInfo => id)
            setArrow(arrow => id)
        }
    }

    const showCv = (item: any): any => {

        setCv(cv => item.id)
        setStudentInfo(studentInfo => item)
        props.pullCvFunction(item)
        navigate('/cv');

    }


    const studentsAll: any[] = [
        {
            id: '123asd',
            name: 'Student',
            surname: 'Testowy',
            courseGrade: 3,
            activityGrade: 2,
            codeGrade: 3,
            workGrade: 4,
            workPlace: 'Biuro',
            workCity: 'Warszawa',
            contractType: 'Umowa o pracę',
            preferredSalary: '100zł',
            freeInternship: 'Tak',
            programmingExperience: '6 miesięcy'
        },
        {
            id: '1233asd',
            name: 'Studentka',
            surname: 'Testowa',
            courseGrade: 4,
            activityGrade: 5,
            codeGrade: 5,
            workGrade: 5,
            workPlace: 'Biuro',
            workCity: 'Warszawa',
            contractType: 'Umowa o pracę',
            preferredSalary: '100zł',
            freeInternship: 'Tak',
            programmingExperience: '3 miesiące'
        },        {
            id: '1233asd',
            name: 'Studentka',
            surname: 'Testowa',
            courseGrade: 4,
            activityGrade: 5,
            codeGrade: 5,
            workGrade: 5,
            workPlace: 'Biuro',
            workCity: 'Warszawa',
            contractType: 'Umowa o pracę',
            preferredSalary: '100zł',
            freeInternship: 'Tak',
            programmingExperience: '3 miesiące'
        },        {
            id: '1233asd',
            name: 'Studentka',
            surname: 'Testowa',
            courseGrade: 4,
            activityGrade: 5,
            codeGrade: 5,
            workGrade: 5,
            workPlace: 'Biuro',
            workCity: 'Warszawa',
            contractType: 'Umowa o pracę',
            preferredSalary: '100zł',
            freeInternship: 'Tak',
            programmingExperience: '3 miesiące'
        },        {
            id: '1233asd',
            name: 'Studentka',
            surname: 'Testowa',
            courseGrade: 4,
            activityGrade: 5,
            codeGrade: 5,
            workGrade: 5,
            workPlace: 'Biuro',
            workCity: 'Warszawa',
            contractType: 'Umowa o pracę',
            preferredSalary: '100zł',
            freeInternship: 'Tak',
            programmingExperience: '3 miesiące'
        },        {
            id: '1233asd',
            name: 'Studentka',
            surname: 'Testowa',
            courseGrade: 4,
            activityGrade: 5,
            codeGrade: 5,
            workGrade: 5,
            workPlace: 'Biuro',
            workCity: 'Warszawa',
            contractType: 'Umowa o pracę',
            preferredSalary: '100zł',
            freeInternship: 'Tak',
            programmingExperience: '3 miesiące'
        },
    ]

    const indexOfLastStudent = (currentPage * studentsPerPage);
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

    const students: {}[] = studentsAll.slice(indexOfFirstStudent, indexOfLastStudent);

    return <>

        <div className="page-div">
            <div id="to-talk-page">

                <ul>
                    {students.map((item: any) => (
                        <>
                            <li key={item.id}>

                <span className="reservation-span">
                    <span className="reservation-until">Rezerwacja do</span>
                <br/>
                    <span className="reservation-date">31.12.2023 r.</span>
                </span>

                                <img className="avatar" src="photo.jpg" alt="Avatar"/>

                                <span id="student-to-talk-page">{item.name} {item.surname}</span>
                                <span onClick={() => showMore(item.id)}
                                      className="show-more-button">{(arrow === item.id) ? '⮝' : '⮟'}</span>
                                <button id="hired-button-profile">Zatrudniony</button>
                                <button id="not-intrested-button">Brak zainteresowania</button>
                                <button onClick={() => showCv(item)} id="show-cv-button">Pokaż CV</button>
                                {/*<button onClick={navigateToCv} id="show-cv-button">Pokaż CV</button>*/}


                                {(showStudentInfo === item.id) ? <StudentInfo student={item}/> : false}


                            </li>

                            <hr/>

                        </>
                    ))}

                </ul>

            </div>
        </div>

        <div id="foot">

            <label>Ilość elementów</label>
            <select defaultValue="10" onChange={changeQuantity} id='select-quantity'>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>

            {(studentsAll.length > indexOfLastStudent) ? indexOfLastStudent : studentsAll.length} z {studentsAll.length}
            <button onClick={studentsPreviousPage}
                    className={(currentPage === 1) ? 'previous-next-button-disabled' : 'previous-next-button'}>⮜
            </button>
            <button onClick={studentsNextPage}
                    className={(studentsAll.length < indexOfLastStudent) ? 'previous-next-button-disabled' : 'previous-next-button'}>⮞
            </button>
        </div>

    </>
}
