import './AvailableStudentsPage.css';
import {StudentInfo} from "../StudentInfo/StudentInfo";
import {useState} from "react";
import {Foot} from "../Foot/Foot";


export const AvailableStudentsPage = () => {


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

    // const refresh: any = async () => {
    //
    //     const res = await fetch(`https://megakhh.cfolks.pl/api/hh/student`)
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
                                <span className="student">{item.name} {item.surname}</span>
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
