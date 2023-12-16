import './ToTalk.css';
import React, {useState} from "react";
import {StudentInfo} from "../StudentInfo/StudentInfo";
import {useNavigate} from "react-router-dom";


export const ToTalk = (props: any) => {

    const navigate = useNavigate()

    const [showStudentInfo, setShowStudentInfo] = useState('');
    const [arrow, setArrow] = useState('')
    const [cv, setCv] = useState('');
    const [studentInfo, setStudentInfo] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage, setStudentsPerPage] = useState(10);
    const [studentsAll, setStudentsAll] = useState([]);



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


    const indexOfLastStudent = (currentPage * studentsPerPage);
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;


    const refresh: any = async () => {
        const res = await fetch(`https://megakhh.cfolks.pl/api/hh/student`)
        const data = await res.json();
        setStudentsAll(data.studentsList)
    };

    refresh();


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

                                <img className="avatar" src={item.avatarUrl} alt="Avatar"/>

                                <span id="student-to-talk-page">{item.firstName} {item.lastName}</span>
                                <span onClick={() => showMore(item.id)}
                                      className="show-more-button">{(arrow === item.id) ? '⮝' : '⮟'}</span>
                                <button id="hired-button-profile">Zatrudniony</button>
                                <button id="not-intrested-button">Brak zainteresowania</button>
                                <button onClick={() => showCv(item)} id="show-cv-button">Pokaż CV</button>

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
