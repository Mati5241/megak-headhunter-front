import './ShowCV.css'
import {Header} from "../Header/Header";
import {useNavigate} from "react-router-dom";


export const ShowCV = (props: any) => {

    const navigate = useNavigate()

    return <>
        <Header/>


        <div onClick={() => navigate(-1)} id="go-back"><span id="arrow-left-span">⮜</span> <span id="go-back-span">Wróć</span></div>
        <div id="show-cv-div">

            <div id="profile-div">
                <img id="avatar" src={props.studentInfo.avatarUrl} alt="Avatar"/>
                <br/>
                <span id="student-name-span">{props.studentInfo.firstName} {props.studentInfo.lastName}</span>
                <br/><br/>

                <div id="contact-div">
                    <span className="grey-emojis">☎</span> {props.studentInfo.tel}
                    <br/>
                    <span className="grey-emojis">✉</span> {props.studentInfo.email}
                </div>
                <br/>
                <div className="grey-text-div">O mnie</div>
                <div id="profile-info-text-div">{props.studentInfo.bio}</div>

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
                            <td><span className='grade-span'>{props.studentInfo.courseCompletion}</span><span
                                className='max-grade-span'>/5</span><span
                                className="red-stars">{'🟊'.repeat(props.studentInfo.courseCompletion)}</span><span
                                className="grey-stars">{'🟊'.repeat(5 - (props.studentInfo.courseCompletion))}</span></td>
                            <td><span className='grade-span'>{props.studentInfo.courseEngagment}</span><span
                                className='max-grade-span'>/5</span><span
                                className="red-stars">{'🟊'.repeat(props.studentInfo.courseEngagment)}</span><span
                                className="grey-stars">{'🟊'.repeat(5 - (props.studentInfo.courseEngagment))}</span></td>
                            <td><span className='grade-span'>{props.studentInfo.projectDegree}</span><span
                                className='max-grade-span'>/5</span><span
                                className="red-stars">{'🟊'.repeat(props.studentInfo.projectDegree)}</span><span
                                className="grey-stars">{'🟊'.repeat(5 - (props.studentInfo.projectDegree))}</span></td>
                            <td><span className='grade-span'>{props.studentInfo.teamProjectDegree}</span><span
                                className='max-grade-span'>/5</span><span
                                className="red-stars">{'🟊'.repeat(props.studentInfo.teamProjectDegree)}</span><span
                                className="grey-stars">{'🟊'.repeat(5 - (props.studentInfo.teamProjectDegree))}</span></td>
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
                            <td>{props.studentInfo.expectedTypeWork}</td>
                            <td>{props.studentInfo.targetWorkCity}</td>
                            <td>{props.studentInfo.expectedContractType}</td>
                            <td>{props.studentInfo.expectedSalary}</td>
                            <td>{props.studentInfo.canTakeApprenticeship}</td>
                            <td>{props.studentInfo.monthsOfCommercialExp} {props.studentInfo.monthsOfCommercialExp === 0 ? "miesięcy" :(props.studentInfo.monthsOfCommercialExp > 4 ? "miesięcy" : "miesiące")}</td>
                        </tr>
                    </table>
                </div>
                <div className="header">Edukacja</div>
                <div className="info-div">{props.studentInfo.education}</div>
                <div className="header">Kursy</div>
                <div className="info-div">{props.studentInfo.courses}</div>
                <div className="header">Doświadczenie zawodowe</div>
                <div className="info-div">{props.studentInfo.workExperience}</div>
                <div className="header">Portfolio</div>
                <div className="info-div"><span className="link">🔗 {props.studentInfo.portfolioUrls}</span></div>
                <div className="header">Projekt w zespole scrumowym</div>
                <div className="info-div"><span className="link">🔗 {props.studentInfo.bonusProjectUrls}</span></div>
                <div className="header">Projekt na zaliczenie</div>
                <div className="info-div"><span className="link">🔗 {props.studentInfo.projectUrls}</span></div>


            </div>

        </div>
    </>
}
