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
            id: '1233asd',
            name: 'Studentka',
            surname: 'Testowa',
            courseCompletion: 4,
            courseEngagment: 5,
            projectDegree: 5,
            teamProjectDegree: 5,
            expectedTypeWork: 'Biuro',
            targetWorkCity: 'Warszawa',
            expectedContractType: 'Umowa o pracę',
            expectedSalary: '100zł',
            canTakeApprenticeship: 'Tak',
            monthsOfCommercialExp: '3 miesiące',
            education: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            workExperience: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            courses: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            portfolioUrls: "https://portfolio.com https://portfolio2.com",
            projectUrls: "https://portfolio.com https://portfolio2.com",
            bonusProjectUrls: "https://testowy.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam iste dicta. Quas optio doloribus accusamus fugit vero iusto quos ipsum odit nisi ratione! Quis ex sunt veritatis sed.",
        },
        {
            id: '12633asd',
            name: 'Student',
            surname: 'Testowy',
            courseCompletion: 2,
            courseEngagment: 2,
            projectDegree: 4,
            teamProjectDegree: 3,
            expectedTypeWork: 'Biuro',
            targetWorkCity: 'Kraków',
            expectedContractType: 'Umowa o pracę',
            expectedSalary: '1000zł',
            canTakeApprenticeship: 'Tak',
            monthsOfCommercialExp: '4 miesiące',
            education: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            workExperience: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            courses: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            portfolioUrls: "https://portfolio.com https://portfolio2.com",
            projectUrls: "https://portfolio.com https://portfolio2.com",
            bonusProjectUrls: "https://testowy.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam iste dicta. Quas optio doloribus accusamus fugit vero iusto quos ipsum odit nisi ratione! Quis ex sunt veritatis sed.",
        },
        {
            id: '12533asd',
            name: 'Testowy',
            surname: 'Uczeń',
            courseCompletion: 1,
            courseEngagment: 2,
            projectDegree: 4,
            teamProjectDegree: 5,
            expectedTypeWork: 'Biuro',
            targetWorkCity: 'Gdańsk',
            expectedContractType: 'Umowa o pracę',
            expectedSalary: '6000zł',
            canTakeApprenticeship: 'Nie',
            monthsOfCommercialExp: '0 miesięcy',
            education: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            workExperience: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            courses: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            portfolioUrls: "https://portfolio.com https://portfolio2.com",
            projectUrls: "https://portfolio.com https://portfolio2.com",
            bonusProjectUrls: "https://testowy.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam iste dicta. Quas optio doloribus accusamus fugit vero iusto quos ipsum odit nisi ratione! Quis ex sunt veritatis sed.",
        },
        {
            id: '12334asd',
            name: 'Uczeń',
            surname: 'Testowy',
            courseCompletion: 4,
            courseEngagment: 5,
            projectDegree: 5,
            teamProjectDegree: 5,
            expectedTypeWork: 'Biuro',
            targetWorkCity: 'Rzeszów',
            expectedContractType: 'Umowa o pracę',
            expectedSalary: '5000zł',
            canTakeApprenticeship: 'Tak',
            monthsOfCommercialExp: '3 miesiące',
            education: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            workExperience: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            courses: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eum.",
            portfolioUrls: "https://portfolio.com https://portfolio2.com",
            projectUrls: "https://portfolio.com https://portfolio2.com",
            bonusProjectUrls: "https://testowy.com",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam iste dicta. Quas optio doloribus accusamus fugit vero iusto quos ipsum odit nisi ratione! Quis ex sunt veritatis sed.",
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
