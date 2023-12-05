
import './StudentInfo.css'

export const StudentInfo = (props: any) => {


    return <div id="student-info">

        <table>
            <tr>
                <td className="td-info">Ocena przejścia kursu</td>
                <td className="td-info">Ocena aktywności i zaangażowania na kursie</td>
                <td className="td-info">Ocena kodu w projekcie własnym</td>
                <td className="td-info">Ocena pracy w zespole w Scrum</td>
                <td className="td-info">Preferowane miejsce pracy</td>
                <td className="td-info">Docelowe miasto, gdzie chce pracować kandydat</td>
                <td className="td-info">Oczekiwany typ kontraktu</td>
                <td className="td-info">Oczekiwane miesięczne wynagrodzenie netto</td>
                <td className="td-info">Zgoda na odbycie bezpłatnych praktyk/stażu na początek</td>
                <td className="td-info">Komercyjne doświadczenie w programowaniu</td>
            </tr>


            <tr>
                <td className="td-grade">{props.student.courseGrade}/5</td>
                <td className="td-grade">{props.student.activityGrade}/5</td>
                <td className="td-grade">{props.student.codeGrade}/5</td>
                <td className="td-grade">{props.student.workGrade}/5</td>
                <td className="td-grade">{props.student.workPlace}</td>
                <td className="td-grade">{props.student.workCity}</td>
                <td className="td-grade">{props.student.contractType}</td>
                <td className="td-grade">{props.student.prefferedSalary}</td>
                <td className="td-grade">{props.student.freeInternship}</td>
                <td className="td-grade">{props.student.programmingExperience}</td>
            </tr>
        </table>

    </div>
}