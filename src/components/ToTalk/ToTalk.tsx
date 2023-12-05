import './ToTalk.css';
import {useState} from "react";
import {StudentInfo} from "../StudentInfo/StudentInfo";
import {ShowCV} from "../ShowCV/ShowCV";
import {StudentsList} from "../StudentsList/StudentsList";


export const ToTalk = (props: any) => {


    const [showStudentInfo, setShowStudentInfo] = useState('');
    const [arrow, setArrow] = useState('')
    const [cv, setCv] = useState('');


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
        console.log(cv)
    }

    props.pullCvFunction(cv);


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
            programmingExperience: '6 miesięcy'
        },
    ]


    return <>

        {(cv === '') ?

            <div id="students-list-page">
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
                                    <span onClick={() => showMore(item.id)} className="show-more-button">{(arrow === item.id) ? '⮝' : '⮟'}</span>
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

            : <ShowCV student={students} studentId={cv}/>}

    </>
}
