import './AvailableStudentsPage.css';
import {StudentInfo} from "../StudentInfo/StudentInfo";
import {useState} from "react";
import {Foot} from "../Foot/Foot";


export const AvailableStudentsPage = (props: any) => {


    const [showStudentInfo, setShowStudentInfo] = useState('');
    const [arrow, setArrow] = useState('')
    // const [students, setStudents] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage, setStudentsPerPage] = useState(10);


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


    const studentsAll: {}[] = [
        {
            id: 1,
            firstName: 'Mateusz',
            lastName: 'Byba'
        }, {
            id: 2,
            firstName: 'Tester',
            lastName: 'Testowy'
        }, {
            id: 3,
            firstName: 'Testerka',
            lastName: 'Testowa'
        }, {
            id: 30,
            firstName: 'Testerka',
            lastName: 'Testowa'
        }, {
            id: 40,
            firstName: 'Testerka5',
            lastName: 'Testowa'
        }, {
            id: 50,
            firstName: 'Testerka6',
            lastName: 'Testowa'
        }, {
            id: 60,
            firstName: 'Testerka7',
            lastName: 'Testowa'
        }, {
            id: 4,
            firstName: 'Testerka8',
            lastName: 'Testowa'
        }, {
            id: 5,
            firstName: 'Testerka9',
            lastName: 'Testowa'
        }, {
            id: 6,
            firstName: 'Testerka10',
            lastName: 'Testowa'
        }, {
            id: 7,
            firstName: 'Testerka',
            lastName: '11'
        }, {
            id: 8,
            firstName: 'Testerka',
            lastName: '12'
        }, {
            id: 9,
            firstName: 'Testerka',
            lastName: '13'
        }, {
            id: 10,
            firstName: 'Testerka10',
            lastName: '14'
        }, {
            id: 11,
            firstName: 'Testerka11',
            lastName: '15'
        }, {
            id: 12,
            firstName: 'Testerka12',
            lastName: '16'
        }, {
            id: 13,
            firstName: 'Testerka13',
            lastName: '17'
        },
    ]

    const indexOfLastStudent = (currentPage * studentsPerPage);
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

    const students: {}[] = studentsAll.slice(indexOfFirstStudent, indexOfLastStudent);

    // const refresh: any = async () => {
    //
    //     const res = await fetch(`https://nuidzruvvg.cfolks.pl/hh/student/`)
    //     const data = await res.json();
    //     setStudents(data.studentsList);
    // };

    // refresh();

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

    return <>
        <div className="page-div">
            <div id="students-list">

                <ul>
                    {students.map((item: any) => (
                        <>
                            <li key={item.id}>
                                <span className="student">{item.firstName} {item.lastName}</span>
                                <span onClick={() => showMore(item.id)}
                                      className="show-more-button">{(arrow === item.id) ? '⮝' : '⮟'}</span>
                                <button className="reservation-button">Zarezerwuj rozmowę</button>
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
