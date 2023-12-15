import './AvailableStudentsPage.css';
import {StudentInfo} from "../StudentInfo/StudentInfo";
import {useState} from "react";
import {Foot} from "../Foot/Foot";


export const AvailableStudentsPage = () => {


    const [showStudentInfo, setShowStudentInfo] = useState('');
    const [arrow, setArrow] = useState('')
    const [studentsAll, setStudentsAll] = useState([]);

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


    const indexOfLastStudent = (currentPage * studentsPerPage);
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;


    const refresh: any = async () => {
        const res = await fetch(`https://megakhh.cfolks.pl/api/hh/student`)
        const data = await res.json();
        setStudentsAll(data.studentsList)
    };

    refresh();

    const students: {}[] = studentsAll.slice(indexOfFirstStudent, indexOfLastStudent);


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
