import './StudentsList.css';
import {StudentInfo} from "../StudentInfo/StudentInfo";
import {useState} from "react";


export const StudentsList = () => {


    const [showStudentInfo, setShowStudentInfo] = useState('');
    const [arrow, setArrow] = useState('')


    const students: any[] = [
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
            prefferedSalary: '100zł',
            freeInternship: 'Tak',
            programmingExperience: '6 miesięcy'
        },
        {
            id: '123as7d',
            name: 'Uczeń',
            surname: 'Testowy',
            courseGrade: 2,
            activityGrade: 2,
            codeGrade: 2,
            workGrade: 4,
            workPlace: 'Biuro',
            workCity: 'Gdańsk',
            contractType: 'Umowa o pracę',
            prefferedSalary: '7 000zł',
            freeInternship: 'Tak',
            programmingExperience: 'Brak'
        },
        {
            id: '1243asd',
            name: 'Studentka',
            surname: 'Testowa',
            courseGrade: 5,
            activityGrade: 5,
            codeGrade: 4,
            workGrade: 5,
            workPlace: 'Biuro',
            workCity: 'Kraków',
            contractType: 'Umowa o pracę',
            prefferedSalary: '100 000zł',
            freeInternship: 'Nie',
            programmingExperience: '9 miesięcy'
        },
    ]



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


    return <div id="students-list">


        <ul>
            {students.map((item: any) => (
                <>
                    <li key={item.id}>
                        <span className="student">{item.name} {item.surname}</span>
                        <span onClick={() => showMore(item.id)} className="show-more-button">{(arrow === item.id) ? '⮝' : '⮟'}</span>

                        <button className="reservation-button">Zarezerwuj rozmowę</button>

                        {(showStudentInfo === item.id) ? <StudentInfo student={item}/> : false}

                    </li>
                    <hr/>
                </>
            ))}

        </ul>


    </div>
}
