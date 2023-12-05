import './ShowCV.css'
import {Header} from "../Header/Header";


export const ShowCV = (props: any) => {


    return <>
        <Header/>
    <div id="show-cv-div">

        <div id="profile-div">
            <img id="avatar" src="photo.jpg" alt="Avatar"/>
            <br/>
            <span id="student-name-span">{props.studentInfo.name} {props.studentInfo.surname}</span>
            <br/><br/>

            <div id="contact-div">
            <span className="grey-emojis">☎</span> +48 215 125 252
            <br/>
            <span className="grey-emojis">✉</span> mateuszb430@ssmegak.pl
            </div>
            <br/>
            <div className="grey-text-div">O mnie</div>
            <div id="profile-info-text-div">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

            <button id="no-interested-button">Brak zainteresowania</button>
            <button id="hired-button">Zatrudniony</button>

        </div>

        <div id="about-student-div">
            <div className="header">Oceny</div>
            <div className="info-table-div">
                <table id="grades-table">
                    <tr>
                        <td>Ocena przejścia kursu</td>
                        <td>Ocena aktywności i zaangażowania na kursie</td>
                        <td>Ocena kodu w projekcie własnym</td>
                        <td>Ocena pracy w zespole w Scrum</td>
                    </tr>
                    <tr id="grades-tr">
                        <td><span className='grade-span'>{props.studentInfo.courseGrade}</span><span className='max-grade-span'>/5</span><span className="red-stars">{'🟊'.repeat(props.studentInfo.courseGrade)}</span><span className="grey-stars">{'🟊'.repeat(5 - (props.studentInfo.courseGrade))}</span></td>
                        <td><span className='grade-span'>{props.studentInfo.activityGrade}</span><span className='max-grade-span'>/5</span><span className="red-stars">{'🟊'.repeat(props.studentInfo.activityGrade)}</span><span className="grey-stars">{'🟊'.repeat(5 - (props.studentInfo.activityGrade))}</span></td>
                        <td><span className='grade-span'>{props.studentInfo.codeGrade}</span><span className='max-grade-span'>/5</span><span className="red-stars">{'🟊'.repeat(props.studentInfo.codeGrade)}</span><span className="grey-stars">{'🟊'.repeat(5 - (props.studentInfo.codeGrade))}</span></td>
                        <td><span className='grade-span'>{props.studentInfo.workGrade}</span><span className='max-grade-span'>/5</span><span className="red-stars">{'🟊'.repeat(props.studentInfo.workGrade)}</span><span className="grey-stars">{'🟊'.repeat(5 - (props.studentInfo.workGrade))}</span></td>
                </tr>
                </table>
            </div>
            <div className="header">Oczekiwania w stosunku do zatrudnienia</div>
            <div className="info-table-div">
                <table id="expectations-table">
                    <tr id="questions-tr">
                        <td>Preferowane miejsce pracy</td>
                        <td>Docelowe miasto, gdzie chce pracować kandydat</td>
                        <td>Oczekiwany typ kontraktu</td>
                        <td>Oczekiwane wynagrodzenie miesięczne netto</td>
                        <td>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</td>
                        <td>Komercyjne doświadczenie w programowaniu</td>

                    </tr>
                    <tr id="answers-tr">
                        <td>{props.studentInfo.workPlace}</td>
                        <td>{props.studentInfo.workCity}</td>
                        <td>{props.studentInfo.contractType}</td>
                        <td>{props.studentInfo.preferredSalary}</td>
                        <td>{props.studentInfo.freeInternship}</td>
                        <td>{props.studentInfo.programmingExperience}</td>
                    </tr>
                </table>
            </div>
            <div className="header">Edukacja</div>
            <div className="info-div">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="header">Kursy</div>
            <div className="info-div">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="header">Doświadczenie zawodowe</div>
            <div className="info-div">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="header">Portfolio</div>
            <div className="info-div"><span className="link">🔗 ️www.github.com</span></div>
            <div className="header">Projekt w zespole scrumowym</div>
            <div className="info-div"><span className="link">🔗 ️www.github.com</span></div>
            <div className="header">Projekt na zaliczenie</div>
            <div className="info-div"><span className="link">🔗 ️www.github.com</span></div>


        </div>

    </div>
    </>
}
