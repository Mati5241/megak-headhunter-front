import './StudentsList.css';
import {StudentInfo} from "../StudentInfo/StudentInfo";
import {useState} from "react";


export const StudentsList = () => {


    const [showStudentInfo, setShowStudentInfo] = useState(false);
    const [arrow, setArrow] = useState('⮟')


    const showMore = () => {
        // if (showStudentInfo === false) {
        //     setShowStudentInfo(showStudentInfo => true)
        //     setArrow(arrow => '⮝')
        // } else {
        //     setShowStudentInfo(showStudentInfo => false)
        //     setArrow(arrow => '⮟')
        // }
    }


    return <div id="students-list">

        <ul>
            <li>
                <span className="student">Student 1</span>
                <span onClick={showMore} className="show-more-button">{arrow}</span>
                <button className="reservation-button">Zarezerwuj rozmowę</button>


            </li>
            <hr/>

            <li>
                <span className="student">Student 2</span>
                <span onClick={showMore} className="show-more-button">{arrow}</span>
                <button className="reservation-button">Zarezerwuj rozmowę</button>


            </li>
            <hr/>

            <li>
                <span className="student">Student 3</span>
                <span onClick={showMore} className="show-more-button">{arrow}</span>
                <button className="reservation-button">Zarezerwuj rozmowę</button>
            </li>
            <hr/>

            <li>
                <span className="student">Student 4</span>
                <span onClick={showMore} className="show-more-button">{arrow}</span>
                <button className="reservation-button">Zarezerwuj rozmowę</button>
            </li>
            <hr/>
        </ul>

    </div>
}
