
import './StudentInfo.css'

export const StudentInfo = () => {




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
                <td className="td-grade">5/5</td>
                <td className="td-grade">5/5</td>
                <td className="td-grade">5/5</td>
                <td className="td-grade">5/5</td>
                <td className="td-grade">Biuro</td>
                <td className="td-grade">Warszawa</td>
                <td className="td-grade">Umowa o pracę</td>
                <td className="td-grade">100 000zł</td>
                <td className="td-grade">Tak</td>
                <td className="td-grade">6 miesięcy</td>
            </tr>
        </table>

    </div>
}
